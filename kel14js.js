// TUGAS KELOMPOK DPL
// MEMBUAT KALKULATOR
// Raissa Fadhillah X PPLG 2
// Nazwa Putri Tania X PPLG 2

const readline = require('readline-sync')
console.log('SELAMAT DATANG DI KALKULATOR');
var nilai1 = readline.questionInt('pilih fungsi: 1.Tambah, 2.kali 3.kurang 4.bagi = ')
if(nilai1 == 1){
    var masukanNilai1 = readline.questionInt('masukan nilai 1= ')
    var masukanNilai2 = readline.questionInt('masukan nilai 2= ')
    console.log(Number(masukanNilai1)+(Number(masukanNilai2)))
}else if(nilai1 == 2){
    var masukanNilai1 = readline.questionInt('masukan nilai 1= ')
    var masukanNilai2 = readline.questionInt('masukan nilai 2= ')
    console.log(Number(masukanNilai1)*(Number(masukanNilai2)))
 }else if(nilai1 == 3){
    var masukanNilai1 = readline.questionInt('masukan nilai 1= ')
    var masukanNilai2 = readline.questionInt('masukan nilai 2= ')
    console.log(Number(masukanNilai1)-(Number(masukanNilai2)))
