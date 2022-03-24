let arr1=[67,78,98]
let sum =0;
function mArr(a) {
    for (let i = 0; i<a.length; i++){
        sum = sum + a[i]
    }
    console.log (sum/3);
}
mArr(arr1)