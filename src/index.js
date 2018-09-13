/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    var res = [];
    var arr = [0,...preferences];
    var count = 0;
    for(let i = 1;i<arr.length;++i) {
        if( arr[i]!==0 && arr[arr[i]]!==0 && (arr[arr[arr[i]]] === i && (arr[arr[i]]!=i || arr[i]!=i))){
            count++;
            arr[i]=0;
        }
    }
    return count;
};
