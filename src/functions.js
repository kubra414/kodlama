//Fonksiyonlar: sepete ekleme 4 farklı sayfada : müdür geldi 
//dedi ki sepete eklenin sonunda ünlem olsun.
//şimdi 4 farklı sayfada tek tek ünlem eklemek çok zor diyemezsin 
//doğrusu nedir?
//DO NOT REPEAT YOUR SELF(KENDİNİ TEKRAR ETME)
//ürün detayı sepete ekleme 
// console.log("Sepete Eklendi ")
// //mail ile sepete ekleme 
// console.log("Sepete Eklendi ")
// //anasayfada kampanya
// console.log("Sepete Eklendi ")
// //başka bir sepete ekleme
// console.log("Sepete Eklendi ")

/** 
//fonksiyonları ürünlerin içerisinde tekrar tekrar kullanmak için yazıyoruz
function addToCart(quantity,productName="Elma"){
    //quantity:Adet
    console.log("Sepete Eklendi : ürün :"+ productName , 
    "adet :" +quantity)
}

// addToCart()
addToCart(10)

*/
// addToCart("Karpuz")
//Elma defauld tanımladım 

//undefined:Tanımlanmamış null ile karıştırma,undefined bellekte bu yok

/** 
let sayHello = ()=>{
    console.log("Hello Everyone")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello Everyone2")
}
sayHello2();
*/
/** 
function addToCart2(productName, quantity, unitPrice) {
    
}
addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)
let product1 = {productName:"Elma",unitPrice:10,quantity:5}
function addToCard3(product) {
    console.log("Ürün : "+product.productName )
    console.log("Adet : "+product.quantity )
    console.log("Fiyat:"+product.unitPrice )
}

addToCard3(product1)

let product2 = {productName:"Elma",unitPrice:10,quantity:5}
let product3 = {productName:"Elma",unitPrice:10,quantity:5}
product2=product3
product2.productName = "KARPUZ"
console.log(product3.productName)
*/

//Ekran Neden KARPUZ Yazdırdı??
/** Değer ve Referans Tip
 * Sayısal veriler Değer tiptir
 * Obje ise Referans tiptir array
 * Değer Tip : Bellekte iki alan vardır Steak ve Heap
 * Steak: Sayısal veriler (sayı1=10,sayı2=20,değer tiplerde sen atama yapınca değeri atıyorsun
 * sayı1 in değeri = sayı2 nın değeri ve sayı2 olan bütün bağ koparılıyor
 * sayı2=100 oluca da console.log(sayı1)= 10 sonucunu verir. çünkü steak tiptir bağlantıyı koparır.)
 *  Heap: Objeler , 54. satır : product2 obje açtık içinde
 * PN:ELMA ,UP:10,QA:5
 * product3
 * PN:ELMA ,UP:10,QA:5
 * 56. SATIR ÇOK ÖNEMLİ MEALİ
 * Product2 Nin Refarans Numarası = Product3 ün Referans Numarasıdır
 *   Referans tiplerde atalamalarda veriyi değil adresi atıyorsun
 * 
 * Değişkenleri ikiye ayırıyoruz **/

/** 
let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)
*/

//addToCart=Sepete ekle
//YENİ KONU******************************************************
//Ürünü Alarlar bunları da aldı diyor hepsini sepete eklemek için 
/**
 * function addToCart4(products) {
    console.log(products)
} */
//gelen ürünlerin hepsi obje hepsiburada da bilgisayar aramasında

/**
let products = [
//Arrayin içinde obje tuttum
    {productName:"Elma",unitPrice:3,quantity:3},
    {productName:"Şeker",unitPrice:30,quantity:5},
    {productName:"Kavanoz",unitPrice:40,quantity:10}

]
addToCart4(products)
 */
//...Dediğin zaman gönderilen parametreleri bir arrayin içerisine koy
//Rest operatörü
function add(...numbers) {
    let total = 0;
   for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    

   }
   console.log(total) 
   
}


//20 30... u array yapıp numbers isminde göndermiş oluyor.
add(20,30)
add(20,30,40,393939,338838,2)


let numbers = [30,10,500,600,120]
//... ayır demek 
//console.log(...numbers)
//spread ayrıştırır rest toparlar
console.log(Math.max(...numbers))

//Yeni Konu : React: Frontend in ekran olayına odaklanan bir kütüphanedir ve companendlerden oluşur
//single page dir tek sayfadır ve o sayfanın içinde farklı farklı alanlar vardır.
//React ta Hayat Kurtaran Bilgiler
let [icAnadolu,marmara,doguAnadolu,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"50M"},
    {name:"Doğu Anadolu",population:"20M"},
    
    [
        ["Ankara","Konya"],
        ["Ankara","İstanbul"],
        ["Iğdır","Ardahan"]
    ]
]
// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)
//Yapmak İstediğim Objenin de elemanlarını değişkenlere atamak istiyorum
let newProductName,newUnitPrice, newQuantity
({productName:newProductName ,unitPrice:newUnitPrice, quantity:newQuantity}
= {productName:"Elma",unitPrice:10,quantity:5})
console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
