function startTime(){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
   var next="AM";
   if (h==0) {
     h=12;
   }
   if (h>12) {
     h=h-12;
     next="PM";
   }
   h=(h<10)?"0"+h:h;
   m=(m<10)?"0"+m:m;
   s=(s<10)?"0"+s:s;
   var time=h+":"+m+":"+s+" "+next;
   document.getElementById("clock").innerText=time;
   document.getElementById("clock").textContent=time;
   setTimeout(startTime,1000);
   }
  startTime();

  