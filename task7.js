let a=[12,13,15,16,17]
let b=[10,11,12,13,14]
let d=[]
function nArr(a,b) {
    for (let i=0; i<a.length; i++){
        for (let x=0; x<b.length; x++) {
            if (a[i]===b[x]) {
                d.push(a[i])

            }
        }
    }
    console.log(d)
}
nArr(a,b)
