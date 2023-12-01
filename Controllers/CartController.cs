using Backend.Data;
using Microsoft.AspNetCore.Mvc;
using Backend.Models;
using Stripe;
using System;
using System.Text;
using System.Text.Json;

namespace Backend.Controllers
{
    public class CartController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;

        public CartController(ApplicationDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public IActionResult Checkout()
        {
            var cart = GetCart();
            return View(cart);
        }

        [HttpPost]
        public IActionResult Checkout(string stripeToken)
        {
            var cart = GetCart();

            // Utilisez la bibliothèque Stripe pour effectuer le paiement.
            var stripeSecretKey = _configuration["Stripe:SecretKey"];
            var stripe = new Stripe.StripeClient(stripeSecretKey);

            // Créez une charge avec Stripe
            var options = new ChargeCreateOptions
            {
                Amount = (int)(cart.Sum(item => item.Price * item.Quantity) * 100), // Convertir en centimes
                Currency = "usd",
                Source = stripeToken,
                Description = "Achat sur votre site de commerce électronique"
            };

            var service = new ChargeService(stripe);
            var charge = service.Create(options);

            // Le paiement a réussi, vous pouvez mettre à jour la base de données ou effectuer d'autres actions nécessaires.

            // Effacez le panier après le paiement
            SaveCart(new List<CartItem>());

            return RedirectToAction("Index", "Home");
        }

        private List<CartItem> GetCart()
        {
            // Utiliser la session pour stocker le panier (vous pouvez également utiliser une base de données).
            if (HttpContext.Session.TryGetValue("Cart", out var cartData))
            {
                var cartJson = Encoding.UTF8.GetString(cartData);
                return JsonSerializer.Deserialize<List<CartItem>>(cartJson);
            }

            return new List<CartItem>();
        }

        private void SaveCart(List<CartItem> cart)
        {
            var cartJson = JsonSerializer.Serialize(cart);
            HttpContext.Session.Set("Cart", Encoding.UTF8.GetBytes(cartJson));
        }
    }
}
