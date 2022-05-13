export class Series {
  // books
  // amount of first to fifth book
  private books: number[] = [0,0,0,0,0];
  // sets
  // amount of 1 set, 2 set ... to 5 set (different books)
  private sets: number[] = [0,0,0,0,0];
  private sets_prices: number[] = [
    8*1*1,
    8*2*0.95,
    8*3*0.9,
    8*4*0.8,
    8*5*0.75
  ];

  sum(arr: number[]) {
    let total = 0;
    for (let i=0; i<arr.length; i++)
      total += arr[i];

    return total;
  }

  set_sets(sets: number[]) {
    this.sets = sets;
  }

  buy(books: number[]) {
    this.books = books;
    this.package();
  }

  package() {
    this.sets = [0,0,0,0,0];
    while (this.sum(this.books) != 0) {
      let _set = 0;
      for (let i=0; i<this.books.length; i++) {
        if (this.books[i] != 0) {
          _set += 1;
          this.books[i] -= 1;
        }
      }
      if (_set == 0)
        continue;
      else
        this.sets[_set-1] += 1;
    }
  }


  get price() {
    let price = 0;

    for (let i = 0; i < this.sets.length; i++) {
      price += this.sets[i]*this.sets_prices[i];
    }

    return price;
  }
}
