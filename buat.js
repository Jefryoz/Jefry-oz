const ubahWarna = document.getElementById('btn');

const tAcakWarna = document.createElement('button');
const teksAcak = document.createTextNode('Alert !');
tAcakWarna.appendChild(teksAcak);
tAcakWarna.setAttribute('type', 'button');
ubahWarna.after (tAcakWarna);

tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random()* 255 + 1);
    const g = Math.round(Math.random()* 255 + 1);
    const b = Math.round(Math.random()* 255 + 1);
    
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+b+')';
});


const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');



sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    
})

sHijau.addEventListener('input', function (){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sBiru.addEventListener('input', function (){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

document.body.addEventListener('mousemove', function(){
    const x = Math.round(event.clientX / window.innerWidth * 255);
    const y = Math.round(event.clientY / window.innerHeight * 255);
    document.body.style.backgroundColor = 'rgb('+x+','+y+',100)';
});
