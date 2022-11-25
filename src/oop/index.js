/*

//10. hafta java react kamp ödev yapımım
//Değişken Tanımlayacağımız key world ler var (eski), let(bunu kullan),const(sbt)
//var kor js var etmascript ile const ve let geldi 
let  sayi1= 10;
  sayi1="Kübra Özdemir";
 let student = {id:1, name:"Kübra",puan:100}
//console.log(student);
//üst alt student kapsam olarak aynı değil o nedenle ogrenci denir
function save(ogrenci) {
  //console.log(ogrenci.name + " : "+ogrenci.puan) 
  //defauld bir parametreyi en sona yazmamız gerekir
}
//undefined da gönderebilridik , o sırada puan = 10 olan kısmı alırdık

//save(student);

let students = ["Fatih Ahmet Tuğtag","Kübra Özdemir","Buse Dereli","Pınar Kaşikci"]
// console.log(students)

let students2 = [student,{id:2,name:"Deniz",puan:10},
"Ankara",{city:"Iğdır"}]
//console.log(students2)

//rest: geriye kalan parametreler
let showProducts = function (id,...products) {
  console.log(id)
  console.log(products[0]) 
}
//console.log(typeof showProducts)
//  showProducts(10,["Elma","Armut","Karpuz"])
//console.log(Math.max(1,2,3,4,50,60,14),Math.min(1,2,3,43,5321))

//spread : ayrıştırmak 
let points = [1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")
//A B C D E F G H

//ÖNEMLİ KONU ***
 //Destructuring: Elimizdeki arraylerin
 //değişkenlerini değişkenlere atama yöntemidir.
//Destruct parçalamak
 let populations = [10000,20000,30000,[40000,10000]]
 let [small,medium,higt,[veryHigtg,maximum]] = populations
 console.log(small)
 console.log(medium)
 console.log(higt)
 console.log(veryHigtg)
 console.log(maximum)

 function someFunction([small1],number){
  console.log(small1)
 }
 someFunction(populations)

 let category = {id:1,name:"içeçek"}
 console.log(category.id)
 console.log(category["name"])
 //objenin istediğim elemeanlarını değişkenlere atama yöntemi

 let {id,name} = category
 console.log(id)
 console.log(name)

 //Redux
 






class Customer{
//değerler atamak için prototip dediğimiz bir yapıdan yararlanıyor
//Public = Export
constructor(id,customerNumber){
this.id = id;
this.customerNumber = customerNumber;
      }
}
let customer = new Customer(1,"12345");
//prototyping
customer.name = "Kübra Özdemir"
console.log(customer.name)

Customer.bisey = "Bişey"
console.log(Customer.bisey)

console.log(customer.customerNumber)

class IndividualCustomer extends Customer{
constructor(firstName,id,customerNumber){
    super(id,customerNumber)
    this.firstName = firstName
}
}

class CorporateCustomer extends Customer{
constructor(companyName,id,customerNumber){
    super(id,customerNumber)
this.companyName=companyName
}
}
//filter yeni bir array oluşturuyor
*/


























