let even=[]
let arr2=[2,3,4,5,6]
function nArr(a) {
    for (let i =0; i<a.length; i++){
        if (a[i]%2==0){
            even.push(a[i])
        }
    }
    console.log(even)
}
nArr(arr2)