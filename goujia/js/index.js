$(document).ready(function () {
    $(window).scroll(function ()
	{
		var st = $(this).scrollTop();
			if(st>189){
				$(".feature").find(".title").addClass("animated fadeInUp");
				$(".feature").find(".des").addClass("animated fadeInUp");
				
			}
			if(st>484){
				var player=document.getElementById("video");
				var bgimg=document.getElementById("playBtn");
				bgimg.style.backgroundPositionY="-184px";
		        bgimg.style.backgroundPositionX="-310px";
				player.play();
				
			}
			if(st>1580){
				$(".convinient").find("h3").addClass("animated fadeInUp");
				$(".convinient .line").addClass("animated fadeInUp");
				$(".convinient .info").addClass("animated fadeInUp");
		    }
			if(st>2433){
				$(".design .mask").addClass("animated fInLeft");
				$(".design .line-art").addClass(" animated fInUp");
				$(".design .model").addClass("animated fInDown");
				$(".design .title").addClass(" animated fadeIn");
				$(".design .line").addClass("animated fadeInUp");
				$(".design .info").addClass("animated fadeInUp");
				$(".design .more-link").addClass("animated fadeInUp");
				$(".design .ln").addClass("animated fadeIn");
				$(".design .h-line").addClass("animated fadeInLeftBig");
			}
			if(st>3333){
				$(".buy .mask").addClass("animated fInLeft");
				$(".buy .demo").addClass("animated fadeInUp");
				$(".buy .title").addClass("animated fadeInUp");
				$(".buy .line").addClass("animated fadeInUp");
				$(".buy .info").addClass("animated fadeInUp");
				$(".buy .more-link").addClass("animated fadeInUp");
				$(".buy .h-line").addClass("animated fadeInRightBig");
			}
			if(st>4040){
				$(".construct .mask").addClass("animated fInLeft");
				$(".construct .demo").addClass("animated fadeInLeft");
				$("#cdome").addClass('expand');
				$(".construct .ly1").addClass("animated fadeIn");
				$(".construct .ly2").addClass("animated fadeInLef");
				$(".construct .ly3").addClass("animated fadeInLef");
				$(".construct .ly4").addClass("animated fadeInLef");
				$(".construct .ly5").addClass("animated fadeInLef");
				$(".construct .ly6").addClass("animated fadeInLef");
				$(".construct .ly7").addClass("animated fadeInLef");
				$(".construct .ly8").addClass("animated fadeInLef");
				$(".construct .title").addClass("animated fadeInUp");
				$(".construct .line").addClass("animated fadeIn");
				$(".construct .info").addClass("animated fadeInUp");
				$(".construct .more-link").addClass("animated fadeInUp");
				$(".construct .In").addClass("animated fadeIn");
				$(".construct .h-line").addClass("animated fadeInLeftBig");
			}
			if(st>5243){
				$(".ensure .one").addClass("animated sequence-in");
				$(".ensure .two").addClass("animated sequence-in");
				$(".ensure .three").addClass("animated sequence-in");
				$(".ensure .four").addClass("animated sequence-in");
			}
			console.log(st);
	});

            
}); 