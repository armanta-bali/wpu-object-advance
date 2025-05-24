//Cara untuk membuat Object pada javascript
//1. Object Literal
// let mahasiswa = {
//     nama: "Sandika",
//     energy: 10,
//     makan: function(porsi) {
//         this.energy += porsi;
//         console.log(`Hallo  ${this.nama} selamat makan`);
//     }
// }

// let mahasiswa2 = {
//     nama: "Yuliantari",
//     energy: 20,
//     makan: function(porsi) {
//         this.energy += porsi;
//         console.log(`Hallo  ${this.nama} selamat makan`);
//     }
// }

//2. Function Declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama} selamat makan ya!`);
//     }

//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama} Selamat Bermain`);d
//     }
//     return mahasiswa;
// }

// let sandika = Mahasiswa("Yuliono", 10);

// let armanto = Mahasiswa("Doody", 30);

// Constructor Function
// Keyword new
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama} selamat makan ya!`);
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama} Selamat Bermain`);
//     }
// }

// let sandika = new Mahasiswa('Sandika', 10);

//4. Object.create()
let methodMahasiswa = {
    makan: function(porsi) {
        this.energi += porsi;
        console.log(`Hallo ${this.nama} selamat makan ya!`);
    },
    main: function(jam) {
        this.energi -= jam;
        console.log(`Hallo ${this.nama} Selamat Bermain`);
    },
    tidur: function(jam) {
        this.energi += jam * 2;
        console.log(`Hallo ${this.nama} selamat malam`);
    }
}
function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
    }

let sandika = Mahasiswa('Sandika', 10);