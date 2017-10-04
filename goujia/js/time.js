var timer;
function playMusic(){
	var player=document.getElementById("video");
	var bgimg=document.getElementById("playBtn");
	var pro=document.getElementById("progress");
	if(player.paused|| player.ended){
		 if (player.ended ){ 
            player.currentTime = 0;
        } 
		player.play();
		bgimg.style.backgroundPositionY="-184px";
		bgimg.style.backgroundPositionX="-310px";
		 //开启定时器
        timer=setInterval(function(){  
            var total=player.duration;
            var current=player.currentTime;
            var percent=current/total*100+"%";
            var p=current/total*100; 
            pro.style.width=percent;
              if(p>=0){
            	$(".p1").css({color:"#ea5404"});
    			$(".p1>.img").css({"background-position-x":"-50px"});
            }
            if(p>=20){
            	$(".p2").css({color:"#ea5404"});
    			$(".p2>.img").css({"background-position-x":"-50px"});
            }
            if(p>=40){
            	$(".p3").css({color:"#ea5404"});
    			$(".p3>.img").css({"background-position-x":"-50px"});
            }
            if(p>=60){
            	$(".p4").css({color:"#ea5404"});
    			$(".p4>.img").css({"background-position-x":"-50px"});
            }
            if(p>=80){
            	$(".p5").css({color:"#ea5404"});
    			$(".p5>.img").css({"background-position-x":"-50px"});
            }
            if(p>=100){
            	$(".p6").css({color:"#ea5404"});
    			$(".p6>.img").css({"background-position-x":"-50px"});
            }

        },1000);

	}else{
		player.pause();
		bgimg.style.backgroundPositionY="-184px";
		bgimg.style.backgroundPositionX="-10px"; 
		clearInterval(timer);
		 
	}
}
function playBtn(th){
/*	alert(th);*/
	var player=document.getElementById("video");
	var bgimg=document.getElementById("playBtn");
	var pro=document.getElementById("progress");
	if(player.paused || player.ended){
		playMusic();
		play(th);
	}else{
		play(th);
	}
	 if(th==0){
    	$(".p1").css({color:"#ea5404"});
    	$(".p1>.img").css({"background-position-x":"-50px"});
    	for(var i=2;i<7;i++){
    		$(".p"+i).css({color:"black"});
    	}
    	for(var j=2;j<7;j++){
    		$(".p"+j+">.img").css({"background-position-x":"0px"});	
    	}
    }
   if(th==20){
    	for(var i=1;i<=2;i++){
    		$(".p"+i).css({color:"#ea5404"});
    	}
    	for(var j=1;j<=2;j++){
    		$(".p"+j+">.img").css({"background-position-x":"-50px"});	
    	}
    	for(var i=3;i<7;i++){
    		$(".p"+i).css({color:"black"});
    	}
    	for(var j=3;j<7;j++){
    		$(".p"+j+">.img").css({"background-position-x":"0px"});	
    	}
    }
   if(th==40){
    	for(var i=1;i<=3;i++){
    		$(".p"+i).css({color:"#ea5404"});
    	}
    	for(var j=1;j<=3;j++){
    		$(".p"+j+">.img").css({"background-position-x":"-50px"});	
    	}
    	for(var i=4;i<7;i++){
    		$(".p"+i).css({color:"black"});
    	}
    	for(var j=4;j<7;j++){
    		$(".p"+j+">.img").css({"background-position-x":"0px"});	
    	}
    }
    if(th==60){
    	for(var i=1;i<=4;i++){
    		$(".p"+i).css({color:"#ea5404"});
    	}
    	for(var j=1;j<=4;j++){
    		$(".p"+j+">.img").css({"background-position-x":"-50px"});	
    	}
    	for(var i=5;i<7;i++){
    		$(".p"+i).css({color:"black"});
    	}
    	for(var j=5;j<7;j++){
    		$(".p"+j+">.img").css({"background-position-x":"0px"});	
    	}
    }
    if(th==80){
    	for(var i=1;i<=5;i++){
    		$(".p"+i).css({color:"#ea5404"});
    	}
    	for(var j=1;j<=5;j++){
    		$(".p"+j+">.img").css({"background-position-x":"-50px"});	
    	}
    	for(var i=6;i<7;i++){
    		$(".p"+i).css({color:"black"});
    	}
    	for(var j=6;j<7;j++){
    		$(".p"+j+">.img").css({"background-position-x":"0px"});	
    	}
    }
     if(th==100){
    	for(var i=1;i<=6;i++){
    		$(".p"+i).css({color:"#ea5404"});
    	}
    	for(var j=1;j<=6;j++){
    		$(".p"+j+">.img").css({"background-position-x":"-50px"});	
    	}
    }
		
}


function play(m){
	clearInterval(timer);
	var player=document.getElementById("video");
	var bgimg=document.getElementById("playBtn");
	var pro=document.getElementById("progress");
	var total=player.duration;
	/*?*/
	player.currentTime =m*total/100;
/*	alert("当前的进度"+player.currentTime);*/
	pro.style.width=m+"%";
/*	alert("width"+pro.style.width);*/
	timer=setInterval(function(){  
            var current=player.currentTime;
            var percent=current/total*100+"%";
            var p=current/total*100; 
            pro.style.width=percent;
            if(p>=0){
            	$(".p1").css({color:"#ea5404"});
    			$(".p1>.img").css({"background-position-x":"-50px"});
            }
            if(p>=20){
            	$(".p2").css({color:"#ea5404"});
    			$(".p2>.img").css({"background-position-x":"-50px"});
            }
            if(p>=40){
            	$(".p3").css({color:"#ea5404"});
    			$(".p3>.img").css({"background-position-x":"-50px"});
            }
            if(p>=60){
            	$(".p4").css({color:"#ea5404"});
    			$(".p4>.img").css({"background-position-x":"-50px"});
            }
            if(p>=80){
            	$(".p5").css({color:"#ea5404"});
    			$(".p5>.img").css({"background-position-x":"-50px"});
            }
            if(p>=100){
            	$(".p6").css({color:"#ea5404"});
    			$(".p6>.img").css({"background-position-x":"-50px"});
            }

        },1000);

}

