const endDate="16th January 2025 4:59 PM"
document.getElementById('end-date').innerText=endDate;
const inputs=document.querySelectorAll('input')
 
function clock(){
    const end=new Date(endDate)
    const now=new Date()
        console.log(end);
        console.log(now);
        if(diff<0)return;
        inputs[0].value=Math.floor(diff/3600/24);
        inputs[1].value=Math.floor(diff/60)%24;
        inputs[2].value=Math.floor(diff/60)%60;
        inputs[3].value=Math.floor(diff%60);
      
}
clock()
 
