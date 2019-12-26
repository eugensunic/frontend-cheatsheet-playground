Array.prototype.customMap = function(callback) {
  if (!this.length) return [];
  for (let i = 0; i < this.length; i++) {
    this[i] = callback(this[i]);
  }
  return this;
};

Array.prototype.customFilter = function(callback) {
  let array = [];
  if (!this.length) return [];
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i])) {
      continue;
    }
    array = [...array, this[i]];
  }
  return array;
};

Array.prototype.customReduce = function(callback, initValue) {
  const reduce = null;
  for (let i = 0; i < this.length; i++) {
    reduce = callback(initValue, this[i]);
  }
  return reduce;
};
