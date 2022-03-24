let a=String(prompt('enter word'))
let r = a.split('')
function method2() {
           for (let i=0; i<r.length;i++){
               let c=0;
               for (let x=0;x<r.length;x++){
                   if (r[i]==r[x]) {
                       c=c+1;
                   }
               }
            if(c>0) {
                console.log(r[i]+'-' + c +'eded')

            }
           }

        }
method2()