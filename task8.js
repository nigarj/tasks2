let a=['hello','world','what','why']
let b='w'
let c=[]
function method(a,b) {
    for (let i=0;i<a.length;i++){
        if(a[i].charAt(0)==b) {
            c.push(a[i])
        }
    }
    console.log(c)
}
method(a,b)