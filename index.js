
function myEach(collection, callback){
    let array;
    if(collection.isArray !== true){
        array = Object.values(collection)
     } else {array = collection}
    array.map(callback);
    return collection;
}
function myMap(collection, callback) {
    let array;
    if(collection.isArray !== true){
        array = Object.values(collection)
    } else {array = [...collection]};
   return array.map(callback);
}
function myReduce(collection, callback, acc){
    let array;
    if(collection.isArray !== true){
        array = Object.values(collection)
    } else {array = [...collection]};
    if(acc){
        return array.reduce(callback, acc)
    } else { return array.reduce(callback)}
}
function myFind(collection, predicate) {
    return collection.find(predicate);
}
function myFilter(collection, predicate) {
    let array;
    if(collection.isArray !== true){
        array = Object.values(collection)
    } else {array = collection}
    return array.filter(predicate);
}
function mySize(collection){
    if(collection.isArray !== true) {
        return Object.keys(collection).length;
    }
    return collection.length;
}
function myFirst(array, n) {
    if (!n) {
        return parseInt(array.slice(0, 1))
    }
    return array.slice(0, n);
}
function myLast(array, n) {
    if (!n) {
        return parseInt(array.slice(-1));
    }
    return array.slice(-n);
}
function myKeys(obj){
    return Object.keys(obj)
}
function myValues(obj) {
    return Object.values(obj)
}