/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    // var arr = [-1,...preferences];
    // var count = 0;
    // for(let i = 1;i<arr.length;) {
    //     if (arr[arr[arr[i]]] === i){// && (arr[arr[i]]!=i || arr[i]!=i)
    //         ++count;
    //     }
    //     i +=3;
    // }
    // return count;
    function equals(a,b) {
        for(let i = 0;i<a.length;++i){
            if(a[i]!==b[i])return false;
        }
        return true;
    }
    function contains(arr,elem){
        for(var a of arr){
            if(equals(elem,a))return true;
        }
        return false;
    }
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }
    var res = [];
    var arr = [-1,...preferences];
    var count = 0;
    for(let i = 1;i<arr.length;++i) {
        if (arr[arr[arr[i]]] === i && (arr[arr[i]]!=i || arr[i]!=i)) {
            let elem = [arr[i],arr[arr[i]],arr[arr[arr[i]]]].sort(compareNumeric);
            if(!contains(res,elem)){
                ++count;
                res.push(elem);
            }

            // console.log('i = ' + i);
        }
    }
    return count;
};
