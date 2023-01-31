using Microsoft.EntityFrameworkCore;
using PracticeCSharp.Models;
using PracticeCSharp.Models.Menu;
using PracticeCSharp.Models.Shop;

namespace PracticeCSharp.Data
{
    public class ShopDbContext : DbContext
    {
        public DbSet<Item> Menu { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users { get; set; }
        public ShopDbContext(DbContextOptions options) : base(options)
        {
        }
    }
}
