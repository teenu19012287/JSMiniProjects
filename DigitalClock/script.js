window.onload = () =>{
    function buildclock() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

     hours = hours < 10 ? "0"+hours:hours;
     minutes = minutes < 10 ? "0"+minutes :minutes;
     seconds = seconds < 10 ? "0"+seconds:seconds;


    document.querySelector('.hrs').innerText = hours;
    document.querySelector('.min').innerText = minutes;
    document.querySelector('.sec').innerText = seconds;
    setTimeout(buildclock , 1000);
    }
    buildclock();
}