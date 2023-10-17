

window.onload = () =>{
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener('change', calculateLoan)
    })
}

function calculateLoan () {
    const principle = document.querySelector('#amount').value;
    const intrest = document.querySelector('#intrest').value;
    const tenure = document.querySelector('#tenure').value;

    if(!principle || !intrest || !tenure)  return;

    const monthlyIntrest = intrest/100/12;
    const emi = principle * monthlyIntrest * Math.pow(1+monthlyIntrest ,tenure) / (Math.pow (1+monthlyIntrest,tenure)-1) ;
    const totalAmount= emi*tenure;
    const totalIntrest = totalAmount-principle;
    console.log(emi);
    document.querySelector('#emi').innerText = 'EMI: ₹ '+ emi.toFixed(2);
    document.querySelector('#totalAmount').innerText = 'Total Amount:₹ '+ totalAmount.toFixed(2);
    document.querySelector('#totalIntrest').innerText = 'total Intrest:₹ ' + totalIntrest.toFixed(2);

}