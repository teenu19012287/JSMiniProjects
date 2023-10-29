

window.onload = () => {
    document.querySelector('#calculate').onclick = calculateTip;
    const tips = document.querySelectorAll('.tip');
    tips.forEach(tip => {
        tip.addEventListener('click',handleTipClick);
    })
}

function handleTipClick(e){
    e.target.textContent.split('%')[0];
}

function calculateTip(){
    const amount = document.querySelector('#amount').value;
    const people = document.querySelector('#people').value;
    
}
