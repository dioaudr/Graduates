/**
 Diberikan 3 variable yang me-representasikan seorang murid:
    nama
    nilai
    absen
Buatlah algoritma/pseudocode dan implementasi sebuah kondisional yang menentukan apakah murid tersebut lulus atau tidak.
Murid dinyatakan lulus jika:
    nilainya 70 keatas
    absennya dibawah 5 kali
Tampilkan nama murid dan keterangan apakah murid tersebut 'lulus' atau 'tidak lulus'
 */

/** PSUDOCODE
STORE nama WITH string
STORE nilai WITH number
STORE absen WITH number

IF nilai MORE THAN EQUAL TO 70 AND absen LESS THAN TO 5
SET WITH nama Lulus 
ELSE  SET WITH nama TIdak Lulus

END IF */

var nama = "agus";
var nilai = 79;
var absen = 3;

if(nilai >= 70 && absen < 5){
    console.log("nama: " + nama +" Lulus");
} else { console.log("nama: " + nama +" Tidak Lulus ");
}
