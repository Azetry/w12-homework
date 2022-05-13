import { BuiltinType } from '@angular/compiler';
import { Series } from './series';

describe('Series', () => {
  let series: Series;

  beforeEach(()=>{
    series = new Series();
  });

  it('should create an instance', () => {
    expect(series).toBeTruthy();
  });

  test('one book', () =>{
    checkout([1,0,0,0,0]);
    expect(series.price).toBe(8);
  })

  // Functions
  function checkout(books: number[]) {
    for (let i = 0; i < books.length; i++) {
      series.buy(i, books[i]);
    }
  }
});
