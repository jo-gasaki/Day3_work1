setInterval(function(){
    const date1 = document.querySelector("#date");
    const time = document.querySelector("#time");
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDate();
    const days = ["日","月","火","水","木","金","土",];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";
 
    if(hours > 12){
        day_night = "PM"
        hours = hours - 12;
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    date1.textContent = month+"/"+ day +"("+days[date.getDay()]+")";
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
    });
