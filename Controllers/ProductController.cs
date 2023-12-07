using Backend.Data;
using Microsoft.AspNetCore.Mvc;
using Backend.Models;
using System.Text;
using System.Text.Json;

namespace Backend.Controllers
{
    public class ProductController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ProductController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var products = _context.Product.ToList();
            return View(products);
        }

        public IActionResult AddToCart(int id)
        {
            var product = _context.Product.Find(id);

            if (product == null || product.StockQuantity == 0)
            {
                // Gérer le cas où le produit n'est pas trouvé ou est en rupture de stock.
                return RedirectToAction("Index");
            }

            var cart = GetCart();
            var cartItem = cart.FirstOrDefault(item => item.ProductId == id);

            if (cartItem != null)
            {
                cartItem.Quantity++;
            }
            else
            {
                cart.Add(new CartItem
                {
                    ProductId = id,
                    ProductName = product.Name,
                    Price = product.Price,
                    Quantity = 1
                });
            }

            SaveCart(cart);

            return RedirectToAction("Index");
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
