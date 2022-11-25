//Asal Sayı Bire ve kendisinden başka böleni olmayan sayıya denir
/** Bir sayının asal olup olmadığını nasıl anlarım?
 * Bire ve kendisinden başka kimseye bölünmezse.
 * Bir sayının asal olup olmadığını 2 den başlayıp kendisinin yarısına kadar bölerek buluruz
 * Bölünmüyorsa asaldır
 * tek sayıda yarım kalan olduğunda onun buçuksuz tarafına kadar böl 
floor kullanarak en yakın int değere yuvarlar.
*/
//**********Girilen Sayının Asal Olup Olmadığını Bulma**************************
/** 
let sayi = Number(prompt("Lütfen Bir sayı Giriniz : "));
let sonuc=true;
for(let i=2 ; i<Math.floor(sayi/2) ; i++){
    if(sayi%i==0){
//asal değildir
sonuc= false;
break;
    }
}
if (sonuc) {
    alert(sayi +" Asaldır.")
    
}else{
    alert(sayi + " Asal değildir")
}
*/

//*** Arkadaş Sayılar */
/**
let sayi1 = Number(prompt("Lütfen Birinci Sayıyı Giriniz :"));
let sayi2 =Number(prompt("Lütfen ikinci sayiyi giriniz : "));

let total1 = 0
let total2 = 0

const isFriend = (s1,s2) => {
for (let index = 0; index < s1 ; index++) {
    if(sayi1 % index == 0){
        total1 += index
    }
    
}
for (let index = 0; index < s2 ; index++) {
    if(sayi2 % index == 0){
        total2 += index
    }
    
    
}
return(total1== s2 && total2 == s1 )? "Arkadaş Sayılar":"Arkadaş Sayı Değil" 
console.log(total1)
console.log(total2)
}
console.log(isFriend(sayi1,sayi2))
 */
function perfectNumber() {
    console.log("---Perfect Number ---")
    let perfectNumber = []
    for (let i = 0; i <= 1000; i++) {
        let toplam = 0;
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                toplam += j
            }
        }
        if (toplam == i) {
            perfectNumber.push(i)
        }
    }
    console.log(perfectNumber)
}

perfectNumber()
