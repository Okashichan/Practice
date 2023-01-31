using Microsoft.AspNetCore.Mvc;
using PracticeCSharp.Data;
using PracticeCSharp.Models.Menu;

namespace PracticeCSharp.Controllers
{
    public class MenuController : Controller
    {
        protected ShopDbContext ShopDbContext;
        public MenuController(ShopDbContext shopDbContext)
        {
            this.ShopDbContext = shopDbContext;
        }

        public IActionResult Index()
        {
            var items = ShopDbContext.Menu.ToList();
            return View(items);
        }
        [HttpGet]
        public IActionResult Add()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Add(Item item)
        {
            if (item != null)
            {
                ShopDbContext.Menu.Add(item);
                ShopDbContext.SaveChanges();
            }
            return RedirectToAction("Index");
        }
    }
}
