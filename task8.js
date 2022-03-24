let a1=['hello','world','what','why']
let b='w'
let c=[]
function method(a1,b) {
    for (let i=0;i<a1.length;i++){
        if(a1[i].charAt(0)==b) {
            c.push(a1[i])
        }
    }
    console.log(c)
}
method(a1,b)
