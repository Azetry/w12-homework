export class Series {
  private books: number[] = [0,0,0,0,0];

  clear() {
    this.books = [0,0,0,0,0];
  }

  buy(book: number, amount:number) {
    this.books[book] += amount;
  }

  get price() {
    let price = 0;

    for (let i = 0; i < this.books.length; i++) {
      price += this.books[i]*8
    }

    return price;
  }
}
