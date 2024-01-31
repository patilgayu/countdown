let endDate= "16-01-2025 04:59:00"//"16th January 2025 4:59 PM"
document.getElementById('end-date').innerText=endDate;
let inputs=document.querySelectorAll('input')
 
function clock(){
    let end=new Date(2025,0,31);
    let now=new Date();
    let diff= (end-now)/1000;
        console.log(end);
        console.log(now);
        if(diff<0)return;
        inputs[0].value=Math.floor(diff/3600/24);
        inputs[1].value=Math.floor(diff/60)%24;
        inputs[2].value=Math.floor(diff/60)%60;
        inputs[3].value=Math.floor(diff%60);
      
}
setInterval(clock,1000)
 
