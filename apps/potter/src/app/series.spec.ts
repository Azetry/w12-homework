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

  test('zero book', () =>{
    checkout([0,0,0,0,0]);
    expect(series.price).toBe(0);
  })

  test('one book', () =>{
    for (let i = 0; i < num_books; i++) {
      let cart = [0,0,0,0,0];
      cart[i] = 1;
      checkout(cart);
      expect(series.price).toBe(8);
    }
  })

  test('calculate price by sets', () =>{
    series.setSets([3,0,0,0,0]);
    expect(series.price).toBe(24);

    series.setSets([0,2,0,0,0]);
    expect(series.price).toBe(2*8*2*0.95);
  })

  test('different books', () =>{
    checkout([1,1,0,0,0]);
    expect(series.price).toBe(8 * 2 * 0.95);

    checkout([1,0,1,1,0]);
    expect(series.price).toBe(8 * 3 * 0.9);

    checkout([1,0,1,1,1]);
    expect(series.price).toBe(8 * 4 * 0.8);

    checkout([1,1,1,1,1]);
    expect(series.price).toBe(8 * 5 * 0.75);

  })

  test('several books', () =>{
    checkout([2,1,0,0,0]);
    expect(series.price).toBe(8 + (8 * 2 * 0.95));

    checkout([2,2,0,0,0]);
    expect(series.price).toBe(2 * (8 * 2 * 0.95));

    checkout([2,1,2,1,0]);
    expect(series.price).toBe((8 * 4 * 0.8) + (8 * 2 * 0.95));

    checkout([1,2,1,1,1]);
    expect(series.price).toBe(8 + (8 * 5 * 0.75));

  })


  // Functions
  function checkout(books: number[]) {
    series.buy(books);
  }
});
