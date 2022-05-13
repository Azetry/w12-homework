import { BuiltinType } from '@angular/compiler';
import { Series } from './series';

describe('Series', () => {
  let series: Series;
  let num_books = 5;

  beforeEach(()=>{
    series = new Series();
  });

  it('should create an instance', () => {
    expect(series).toBeTruthy();
  });

  // test('zero book', () =>{
  //   checkout([0,0,0,0,0]);
  //   expect(series.price).toBe(0);
  // })

  // test('one book', () =>{
  //   for (let i = 0; i < num_books; i++) {
  //     let cart = [0,0,0,0,0];
  //     cart[i] = 1;
  //     checkout(cart);
  //     expect(series.price).toBe(8);
  //   }
  // })

  test('calculate price by sets', () =>{
    series.set_sets([3,0,0,0,0]);
    expect(series.price).toBe(24);

    series.set_sets([0,2,0,0,0]);
    expect(series.price).toBe(2*8*2*0.95);
  })

  // Functions
  function checkout(books: number[]) {
    series.clear();
    for (let i = 0; i < num_books; i++) {
      series.buy(i, books[i]);
    }
  }
});
