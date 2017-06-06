function map(collection, callback) {
  result = []
  for (let i = 0; i < collection.length; i++) {
    var element = collection[i];
    result.push(callback(element, i, collection));
  }
  return result
}
