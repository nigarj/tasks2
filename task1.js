let text = prompt("enter text");
let c = 0;
for(let i = 0 ; i < text.length ; i++) {
if(text[i] == " ") {
    c += 1;
}
}
console.log("Boshluqlarin sayi: "+c);