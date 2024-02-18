var name1 = prompt("What his name?:")
var name2 = prompt("What her name?:")

lovePercent = Math.floor(Math.random() * 101 )

if (lovePercent > 30 && lovePercent <= 70){
    alert(`${name1} and ${name2} love percent is ${lovePercent}%. Your love is partial`)
}
else if (lovePercent > 70){
    alert(`${name1} and ${name2} love percent is ${lovePercent}%. Your love is unbreakable`)
}
else if (lovePercent <= 30){
    alert(`${name1} and ${name2} love percent is ${lovePercent}%. Your love is just for fun, for the main time.`)
}
else{
    alert(`${name1} and ${name2} love percent is ${lovePercent}%`)
}
// alert(`${name1} and ${name2} love percent is ${lovePercent}%`)
console.log(lovePercent)