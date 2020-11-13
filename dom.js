function getPilihanCom (){
    const comp = Math.random();
    if (comp < 0.34) return 'kertas';
    else if (comp >= 0.34 && comp < 0.67) 
        return 'batu';
    else{
        return 'gunting';
    }
}

function getHasil (comp, player){
    if (player == comp) return 'SERI!';    
    else if (player == 'kertas') return (comp =='gunting') ? 'KALAH!' : 'MENANG';
    else if (player == 'gunting') return (comp =='batu') ? 'KALAH!' : 'MENANG!';
    else if (player == 'batu') return (comp == 'kertas') ? 'KALAH!' : 'MENANG!';
}

const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click', function(){
    const pilihanCom = getPilihanCom();
    const pilihanPlayer = pGajah.className;
    const hasil = getHasil(pilihanCom, pilihanPlayer);
});