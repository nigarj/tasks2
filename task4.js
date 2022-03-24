let arr3=[100,205,300];
let major=[];
let sum=0;
function mArr(a) {
    for (let i=0; i<a.length; i++) {
        sum=sum+a[i];
    }
    for (let x=0; x<a.length; x++ ){
        if (a[x]>sum/3){
            major.push(a[x])
        }
    }
}
  console.log(major)