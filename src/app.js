console.log("Merhaba Js")

let dolarDun = 9.20
let dolarBugün = 11.20
//js type safe değildir 
//let kullanımı daha iyi var eski kod 
{
    let dolarDun=9.11
    console.log(dolarDun)
}
console.log(dolarDun)
//const sabit demek, başka bir şey atayamazsın, değeri değiştirince problem olan var,
//değiştirmeyeince de problem olan veriler vardır.
const euroDun = 11.2
console.log(euroDun)
//birden fazla veriyi aynı değişkende kullanmak için array kullanılır
//array-çoğul isimlendirme
//camelCasing-name convertion
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu KOnut Kredisi","Özel Konut Kredisi"]

console.log(konutKredileri)

// ctrl ö 
console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++)
{
  console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

