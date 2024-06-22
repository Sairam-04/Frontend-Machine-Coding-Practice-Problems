(function (){
    var hour = document.getElementById("hour");
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");

    var startbtn = document.querySelector(".start"); 
    var stopbtn = document.querySelector(".stop");
    var resetbtn = document.querySelector(".reset");
    let timeInterval= null;

    startbtn.addEventListener("click", function(){
     if(hour.value == 0 && min.value == 0 && sec.value == 0) return;
     const startTimer = () =>{
        timeInterval = setInterval(function(){
            timer();
        }, 1000);
     }
     startbtn.style.display = "none"
     stopbtn.style.display = "flex"
     startTimer();
    })

    function stopInterval(state){
        console.log(state)
        startbtn.innerHTML = state === "pause" ? "Continue" : "Start";
        stopbtn.style.display = "none";
        startbtn.style.display = "flex";        
        clearInterval(timeInterval)
    }
    function timer(){
        if(sec.value > 60){
            min.value++;
            sec.value = sec.value-59;
        }
        if(min.value > 60){
            min.value = min.value - 60;
            hour.value++;
        }

        if(hour.value == 0 && min.value == 0 && sec.value==0){
            hour.value="";
            min.value="";
            sec.value=""
            stopInterval();
        }
        else if(sec.value!=0){
            sec.value = `${sec.value<=10? "0" :""}${sec.value-1}`
        }else if(min.value !=0 && sec.value == 0 ){
            sec.value = 59
            min.value = `${min.value<=10?"0":""}${min.value-1}`
        }else if(hour.value != 0 && min.value==0){
            min.value=60;
            hour.value = `${hour.value<=10?"0":""}${hour.value-1}`
        }
    }
    stopbtn.addEventListener("click", function(){
        stopInterval("pause");
    })

    resetbtn.addEventListener("click", function(){
        hour.value = ""
        min.value=""
        sec.value=""
        stopInterval()
    })
})()