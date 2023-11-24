describe ('test to filterOutOdds', function() {
  it ('should take any number(s) and return an array of numbers with all odd numbers removed', function() {
    expect(filterOutOdds(1,2,3,4,5,6,7)).toEqual([2,4,6]);
  });

  it ('check the length of the resultant array', function() {
    expect(filterOutOdds(2,4,5,6).length).toEqual(3);
  });
});

describe('test to findMin', function () {
  it('should take any number(s) and return the smallest number from arguments', function () {
    expect(findMin(1, 2, -3, 0, 5, -2, 7)).toEqual(-3);
  });

  it('handle empty and return null', function () {
    expect(findMin('')).toEqual('');
  });
});

describe('test mergeObjects', function () {
  it('should take two objects and merge them into one', function () {
    expect(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });
});

describe('test doubleAndReturnArgs', function () {
  it('check output for case 1', function () {
    expect(doubleAndReturnArgs([1, 2, 3], 4, 4)).toEqual([1, 2, 3, 8, 8]);
  });

  it('check output for case 2', function () {
    expect(doubleAndReturnArgs([2], 10, 4)).toEqual([2, 20, 8]);
  });
});

describe('addKeyVal and remove key functions', function() {
  let car;

  beforeEach(function () {
    car = {
      wheels: 4,
      color: 'white',
      model: 'sedan',
    }
  });

  it('should return a new object with an additional property of arguments key and value', function() {
    const updatedCar = {
      wheels: 4,
      color: 'white',
      model: 'sedan',
      country: 'japan',
    }
    const carV2 = {
      wheels: 4,
      model: 'sedan',
    }

    expect(addKeyVal(car, 'country', 'japan')).toEqual(updatedCar);

    expect(removeKey(car, 'color')).toEqual(carV2)
  });
});

describe('update object function', function() {
  let house;

  beforeEach(function () {
    house = {
      windows: 6,
      bedrooms: 7,
      color: 'white',
      floors: 2,
    }
  });

  it('updates a key with a new key and value', function() {
    const updatedHouse = {
      windows: 6,
      bedrooms: 3,
      color: 'white',
      floors: 2,
    }

    expect(update(house, 'bedrooms', 3)).toEqual(updatedHouse);
  });

  it('should return the same object if a key that doesnt exist is entered', function() {

    expect(update(house, 'washrooms', 2)).toEqual(house);
  });

  afterEach(function() {
    house = {
      windows: 6,
      bedrooms: 7,
      color: 'white',
      floors: 2,
    }
  });
});