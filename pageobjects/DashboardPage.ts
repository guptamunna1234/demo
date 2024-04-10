import { Page } from "playwright";

export class DashboardPage
{

    private page:Page;
    private products;
    private productsText;
    private cart
    private orders

constructor(page)
{
    this.page = page;
    this.products = page.locator(".card-body");
    this.productsText = page.locator(".card-body b");
    this.cart =  page.locator("[routerlink*='cart']");
    this.orders = page.locator("button[routerlink*='myorders']");
    console.log("test");

}

async searchProductAddCart(productName)
{
   
    const titles= await this.productsText.allTextContents();
    console.log(titles);
    const count = await this.products.count();
    for(let i =0; i < count; ++i)
    {
    if(await this.products.nth(i).locator("b").textContent() === productName)
    {
        //add to cart
        await this.products.nth(i).locator("text= Add To Cart").click();
        break;
     }
    }
}

async navigateToOrders()
{
    await this.orders.click();
}


async navigateToCart()
{
    await this.cart.click();
}

}
module.exports = {DashboardPage};