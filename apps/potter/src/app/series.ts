export class Series {
  private books: number[] = [0,0,0,0,0];

  buy(book: number, amount:number) {
    this.books[book] += amount;
  }

  get price() {
    let price = 0;

    return price;
  }
}
