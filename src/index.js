class Sorter {
  constructor(data, sortMethod) {
    // your implementation
    this.data = data || [];
    this.sortMethod = sortMethod || ((a,b) => (a - b));
  }

  add(element) {
    // your implementation
    this.data.push(element);
  }

  at(index) {
    // your implementation
    return this.data[index];
  }

  get length() {
    // your implementation
    return this.data.length;
  }

  toArray() {
    // your implementation
    return this.data;
  }

  sort(indices) {
    // your implementation
    indices.sort((a,b) => (a - b));
    let sortedElems = [];
    indices.forEach(item => sortedElems.push(this.at(item)));
    sortedElems.sort(this.sortMethod);
    indices.forEach((item, i) => this.data[item] = sortedElems[i]);
  }

  setComparator(compareFunction) {
    // your implementation
    this.sortMethod = compareFunction;
  }
}

module.exports = Sorter;