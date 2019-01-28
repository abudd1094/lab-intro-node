class SortedList {
  constructor(arr) {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) { return a - b })
    this.length++;
    }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    var max = 0
    for (var i = 0; i < this.length; i++) {
      if (this.items[i] > max) {
        max = this.items[i];
      }   
    }
    return max;
  }
  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    var min = this.max();
    for (var i = 0; i < this.length; i++) {
      if (this.items[i] < min) {
        min = this.items[i];
      }   
    }
    return min;
  }
  sum() {
    if (this.length == 0) {
      return 0;
    }
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum += this.items[i];
      }  
      return sum;  
  }
  average() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
    
  }
};

module.exports = SortedList;

