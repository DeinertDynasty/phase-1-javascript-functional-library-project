function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        callback(collection[key], key, collection);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    let newCollection = [];
    myEach(collection, (item, index, collection) => {
      newCollection.push(callback(item, index, collection));
    });
    return newCollection;
  }
  
  function myReduce(collection, callback, acc) {
    let newCollection = collection;
    if (acc === undefined) {
      acc = collection[0];
      newCollection = collection.slice(1);
    }
    myEach(newCollection, (item, index, collection) => {
      acc = callback(acc, item, index, collection);
    });
    return acc;
  }
  
  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) return collection[i];
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    let newCollection = [];
    myEach(collection, item => {
      if (predicate(item)) newCollection.push(item);
    });
    return newCollection;
  }
  
  function mySize(collection) {
    let size = 0;
    myEach(collection, () => size++);
    return size;
  }
  
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }
  
  function myKeys(object) {
    let keys = [];
    myEach(object, (value, key) => keys.push(key));
    return keys;
  }
  
  function myValues(object) {
    let values = [];
    myEach(object, value => values.push(value));
    return values;
  }
  