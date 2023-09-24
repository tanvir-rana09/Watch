const watch = ()=>{
  let a = new Date();
  let hr = a.getHours();
  let mn = a.getMinutes();
  let sc = a.getSeconds();
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
  let days = ["Sun", "Mon", "Tue", "Wed","Thur", "Fri","Sat"];
  let month = months[a.getMonth()];
  let day = days[a.getDay()];
  let year = a.getFullYear();
  let date = a.getDate();

  document.getElementById("hr").innerHTML=hr
  document.getElementById("mn").innerHTML=mn
  document.getElementById("sc").innerHTML=sc
  document.getElementById("month").innerHTML=month
  document.getElementById("day").innerHTML=day
  document.getElementById("year").innerHTML=year
  document.getElementById("date").innerHTML=date

  if(hr=>12){
    document.getElementById("seasion").innerHTML="PM"
  }
  else{
    document.getElementById("seasion").innerHTML="AM"
  }

  if(hr>12){
    document.getElementById("hr").innerHTML=hr-12;
  
}
}
setInterval(watch,1000)