export class Series {
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

  isEmpty(num: number) {
    return num == 0;
  }

  setSets(sets: number[]) {
    this.sets = sets;
  }

  buy(books: number[]) {
    this.package([...books]);
    this.optimize();
  }

  package(books: number[]) {
    this.sets = [0,0,0,0,0];
    while (!this.isEmpty( this.sum(books) )) {
      let _set = 0;
      for (let i=0; i<books.length; i++) {
        if (!this.isEmpty( books[i] )) {
          _set += 1;
          books[i] -= 1;
        }
      }
      if (this.isEmpty( _set ))
        continue;
      else
        this.sets[_set-1] += 1;
    }
  }

  optimize() {
    // if 5+3 -> 4+4
    // find the maximum amount of combination 5+3 (find minimum)
    const combinations = this.sets[4]>this.sets[2] ? this.sets[2] : this.sets[4];

    // change
    this.sets[2] -= combinations;
    this.sets[4] -= combinations;
    this.sets[3] += 2*combinations;
  }


  get price() {
    let price = 0;

    for (let i = 0; i < this.sets.length; i++) {
      price += this.sets[i]*this.sets_prices[i];
    }

    return price;
  }
}
