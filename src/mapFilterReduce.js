let cart = [
    {id:1,productName:"Telefon",quantity:3,unitPrice:4000},
    {id:2,productName:"Şarj Cihazı",quantity:2,unitPrice:100},
    {id:3,productName:"Telefon Kılıfı",quantity:4,unitPrice:40},
    {id:4,productName:"Bluetooh Kulaklık",quantity:1,unitPrice:900},
    {id:5,productName:"Akıllı Saat",quantity:6,unitPrice:400},
    {id:6,productName:"Robot Süpürge",quantity:3,unitPrice:2300},
    {id:7,productName:"Mont",quantity:2,unitPrice:1000},
    {id:8,productName:"Bot",quantity:1,unitPrice:1000},
]
//state managment durum yönetimi


function addToCart(sepet) {
    sepet.push({id:9,productName:"Masa Lambası",quantity:3,unitPrice:80})
}
addToCart(cart)
console.log(cart)
let sayi = 10
function sayiTopla(number) {
    number += 1
}

console.log(sayi)