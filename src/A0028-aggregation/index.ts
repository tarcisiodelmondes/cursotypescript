export class CartOfBuy {
  private readonly product: Product[] = [];

  insertProduct(...products: Product[]): void {
    products.forEach((product) => this.product.push(product));
  }

  quantifyProduct(): string {
    return `have ${this.product.length} products in your cart`;
  }

  totalValue(): string {
    const total = this.product.reduce((sum, product) => sum + product.price, 0);

    return `The total value is ${total.toFixed(2)}`;
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const product1 = new Product('Mug', 55.99);
const product2 = new Product('Pan', 75.99);
const product3 = new Product('TV', 105.99);

const cartOfBuy = new CartOfBuy();

cartOfBuy.insertProduct(product1, product2, product3);
console.log(cartOfBuy.totalValue());
console.log(cartOfBuy.quantifyProduct());
