using Backend.Data;
using Microsoft.AspNetCore.Mvc;
using Backend.Models;
using System.Text;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetAllProducts()
        {
            var products = await _context.Product.ToListAsync();

            if (products == null || products.Count == 0)
            {
                return NotFound();
            }

            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProduct(Guid id)
        {
            if (id == Guid.Empty)
            {
                return BadRequest("Invalid ID");
            }

            var product = await _context.Product.FirstOrDefaultAsync(p => p.Id == id);

            if (product == null)
            {
                return NotFound("Product not found");
            }

            return Ok(product);
        }

        public IActionResult AddToCart(Guid id)
        {
            var product = _context.Product.Find(id);

            if (product == null || product.StockQuantity == 0)
            {
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
                    Id = Guid.NewGuid(),
                    ProductId = Guid.NewGuid(),
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
