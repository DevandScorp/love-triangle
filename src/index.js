/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    // your implementation
    // var arr = [-1,...preferences];
    // var count = 0;
    // for(let i = 1;i<arr.length;++i) {
    //     if (arr[arr[arr[i]]] === i) {
    //         ++count;
    //         i += 3;
    //     }
    // }
    // return count;
    // var arr = [-1,...preferences];
    // var count = 0;
    // for(let i = 1;i<arr.length;++i) {
    //     if (arr[arr[arr[i]]] === i && arr[i]!==i) {
    //         ++count;
    //         i += 3;
    //     }
    // }
    // var arr = [-1,...preferences];
    // var count = 0;
    // for(let i = 1;i<arr.length;) {
    //     if (arr[arr[arr[i]]] === i && arr[i]!==i) {
    //         ++count;
    //
    //         // console.log('i = ' + i);
    //     }
    //     i += 3;
    // }
    // return count;
    var arr = [-1,...preferences];
    var count = 0;
    for(let i = 1;i<arr.length;) {
        if (arr[arr[arr[i]]] === i){// && (arr[arr[i]]!=i || arr[i]!=i)
            ++count;
        }
        i += 3;
    }
    return count;
};
