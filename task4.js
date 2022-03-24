let arr3=[100,205,300];
let major=[];
let sum1=0;
function mArr(a) {
    for (let i=0; i<a.length; i++) {
        sum1=sum1+a[i];
    }
    for (let x=0; x<a.length; x++ ){
        if (a[x]>sum1/3){
            major.push(a[x])
        }
    }
}
  console.log(major)
