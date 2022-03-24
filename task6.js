let b=[]
let arr5=['hello','world','javascript']
function mArr(a) {
    for (let i=a.length-1; i>=0;i--) {
        b.push(a[i])
    }
    console.log(b)
}
mArr(arr5)