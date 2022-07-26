// for clock
let hr = document.getElementById('hr')
let mn = document.getElementById('mn')
let sc = document.getElementById('sc')
setInterval(() => {
    let time = new Date()
    let hour = time.getHours();
    let minute = time.getMinutes()
    let second = time.getSeconds();
    let hrDeg = 30*hour+minute/2+second/120;
    let minDeg = 6*minute+second/10;
    let secDeg = 6*second;
    hr.style.transform = `rotate(${hrDeg}deg)`
    mn.style.transform = `rotate(${minDeg}deg)`
    sc.style.transform = `rotate(${secDeg}deg)`
    
}, 1000);
// for toggling between modes
function toggleClass(){
    let body = document.querySelector('body')
    body.classList.toggle('light')

}