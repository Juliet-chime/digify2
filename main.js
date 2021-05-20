let topBars = document.getElementById('lines');
let cover = document.querySelector('.cover');
let close = document.getElementById('close')

topBars.addEventListener('click', showOver);
function showOver(){
    cover.style.display = 'block'    
}

close.addEventListener('click',closeUp)
function closeUp(){
    cover.style.display = 'none'
}