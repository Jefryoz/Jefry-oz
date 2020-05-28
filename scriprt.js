var tanya = true;

while ( tanya) {

// menangkap player
var player = prompt('Pilih : kertas, batu, gunting');

// menangkap pilihan

var comp = Math.random();

if (comp < 0.34) {
  comp = 'kertas';
} else if (comp >= 0.34 && comp < 0.67){
  comp = 'batu';
} else{
  comp = 'gunting';
}

var hasil = '';
var hasil1 = '';
  
if (player == comp){
    hasil = 'SERI!';
  } else if (player == 'kertas'){
    hasil = (comp == 'gunting') ? 'KALAH!' : 'MENANG!';
  } else if (player == 'batu'){
    hasil = (comp == 'kertas') ? 'KALAH!' : 'MENANG!';
  } else if (player == 'gunting'){
    hasil = (comp == 'kertas') ? 'MENANG!' : 'KALAH!';
  } else {
    hasil = alert ('kamu memilih yang salah!');
    break;
  } alert('Kamu memilih : ' + player + ' , Komputer memilih : ' + comp + ' \nHasilnya: ' + hasil + hasil1);
   
} tanya = confirm('ulangi lagi ?'); 

