var myTest = require('../library.js');

describe('Binary Search to traverse an ordered list, effectively', function() {
  describe('Populate the arrays with valid content', function() {
    
    it('should create an array from 1 to 20, with intervals of 1', function() {
      expect(function(){ oneToTwenty[0].toBe(1)});
      expect(function(){ oneToTwenty[19].toBe(20)});
      expect(function(){ oneToTwenty.length.toBe(20)});
      for(var i = 0; i < function(){ oneToTwenty.length} - 1;i++) {
        expect(function(){ oneToTwenty[i + 1] - oneToTwenty[i].toBe(1)});
      }
    });

    it('should create an array from 2 to 40, with intervals of 2', function() {
      expect(function(){ twoToForty[0].toBe(2)});
      expect(function(){ twoToForty[19].toBe(40)});
      expect(function(){ twoToForty.length.toBe(20)});
      for(var i = 0; i < function(){ twoToForty.length} - 1;i++) {
        expect(function(){ twoToForty[i + 1] - twoToForty[i].toBe(2)});
      }
    });

    it('should create an array from 10 to 10000, with intervals of 10', function() {
      expect(function(){ tenToOneThousand[0].toBe(10)});
      expect(function(){ tenToOneThousand[99].toBe(1000)});
      expect(function(){ tenToOneThousand.length.toBe(100)});
      for(var i = 0; i < function(){ tenToOneThousand.length} - 1;i++) {
        expect(function(){ tenToOneThousand[i + 1] - tenToOneThousand[i].toBe(10)});
      }
    });
  });

  describe('Get the index of the item with an expected number of loops in array [1, 2 . . . 20]', function() {

    it('should return {count: /* <= 4 */, index: 15} for 16', function() {
      var search  = function(){ oneToTwenty.search(16)};
      expect(function(){ search.count.toBeLessThan(5)});
      expect(function(){ search.index.toBe(15)});
    });

    it('should return {count: < /* array length */, index: -1} for 33 ', function () {
      var search = function(){ oneToTwenty.search(33)};
      expect(function(){ search.count.toBeLessThan(search.length)});
      expect(function(){ search.index.toBe(-1)});
    });
  });
  
  it('should not contain any form of `indexOf` in the search function', function() {
    expect(function(){ Array.prototype.search.toString().indexOf('indexOf').toBe(-1)});      
  });
  
  describe('Get the index of the item with an expected number of loops in array [2, 4 . . . 40]', function() {

    it('should return {count: /* <= 4 */, index: 15} for 16', function() {
      var search  = function(){ twoToForty.search(16)};
      expect(function(){ search.count.toBeLessThan(5)});
      expect(function(){ search.index.toBe(7)});
    });

    it('should return {count: 0, index: 9} for 20', function() {
      var search  = function(){ twoToForty.search(20)};
      expect(function(){ search.count.toBe(0)});
      expect(function(){ search.index.toBe(9)});
    });


    it('should return {count: 0, index: 19} for 40', function() {
      var search  = function(){ twoToForty.search(40)};
      expect(function(){ search.count.toBe(0)});
      expect(function(){ search.index.toBe(19)});
    });

    it('should return {count: < /* array length */, index: -1} for 33 ', function () {
      var search = function(){ twoToForty.search(33)};
      expect(function(){ search.count.toBeLessThan(search.length)});
      expect(function(){ search.index.toBe(-1)});
    });
  });
  });
describe('Get the index of the item with an expected number of loops in array [10, 20 . . . 1000]', function() {

    it('should return {count: /* <= 3 */, index: 3} for 40', function() {
      var search  = function(){ tenToOneThousand.search(40)};
      expect(function(){ search.count.toBeLessThan(4)});
      expect(function(){ search.index.toBe(3)});
    });

    it('should return {count: /* <= 5*/, index: 87} for 800', function() {
      var search  = function(){ tenToOneThousand.search(880)};
      expect(function(){ search.count.toBeLessThan(6)});
      expect(function(){ search.index.toBe(87)});
    });

    it('should return {count: < /* array length */, index: -1} for 10000 ', function () {
      var search = function(){ tenToOneThousand.search(10000)};
      expect(function(){ search.count.toBeLessThan(search.length)});
      expect(function(){ search.index.toBe(-1)});
    });

});

