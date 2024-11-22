function rotate(arr, k){
    let x
    if(k > arr.length){
        x = k - (arr.length % k) * arr.length
    }
    return x
}