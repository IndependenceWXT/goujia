$(document).ready(function () {
	$(window).load(function ()
	{
		$(".G3-X1 .item-bg").addClass("animated fadeIn");
		$(".G3-X1 .name").addClass("fadeTop50");
		$(".G3-X1 .price").addClass("fadeTop100");
		$(".G3-X1 .line").addClass("lineLeft");
		$(".G3-X1 .description").addClass("fadeTop30");
		$(".G3-X1 .linkDetail").addClass("fadeTop100");
	});
    $(window).scroll(function ()
	{
		var st = $(this).scrollTop();
		
			if(st<40){
				$("#header").css({display:"block"});
				$(".designConcept").css({
					"position":"relative"
				});
				$(".subNav").removeClass("fixed");
			}
			if(st>40){
				/*固定导航条的改变*/
				$("#header").css({display:"none"});
				$(".designConcept").css({
					"position":"fixed",
					top:"0px",
					left:"0px"
				});
				$(".subNav").addClass("fixed");
			}
			if(st>55){			
				$(".G3-X2 .name").addClass("fadeTop50");
				$(".G3-X2 .price").addClass("fadeTop100");
				$(".G3-X2 .line").addClass("lineLeft");
				$(".G3-X2 .description").addClass("fadeTop30");
				$(".G3-X2 .linkDetail").addClass("fadeTop100");
				$(".G3-X2 .embellish").addClass("animated fadeIn");
		    }
			if(st>681){
				$(".G3-X3 .item-bg").addClass("animated fadeIn");
				$(".G3-X3 .name").addClass("fadeTop50");
				$(".G3-X3 .price").addClass("fadeTop100");
				$(".G3-X3 .line").addClass("lineLeft");
				$(".G3-X3 .description").addClass("fadeTop30");
				$(".G3-X3 .linkDetail").addClass("fadeTop100");
			}
			if(st>1360){
				
				$(".G3-J1 .name").addClass("fadeTop50");
				$(".G3-J1 .price").addClass("fadeTop100");
				$(".G3-J1 .line").addClass("lineLeft");
				$(".G3-J1 .description").addClass("fadeTop30");
				$(".G3-J1 .linkDetail").addClass("fadeTop100");

			}
			if(st>1920){
				$(".G3-J2 .item-bg").addClass("animated fadeIn");
				$(".G3-J2 .name").addClass("fadeTop50");
				$(".G3-J2 .price").addClass("fadeTop100");
				$(".G3-J2 .line").addClass("lineLeft");
				$(".G3-J2 .description").addClass("fadeTop30");
				$(".G3-J2 .linkDetail").addClass("fadeTop100");
			}
			if(st>2560){
				
				$(".G3-Y1 .name").addClass("fadeTop50");
				$(".G3-Y1 .price").addClass("fadeTop100");
				$(".G3-Y1 .line").addClass("lineLeft");
				$(".G3-Y1 .description").addClass("fadeTop30");
				$(".G3-Y1 .linkDetail").addClass("fadeTop100");
				$(".G3-Y1 .embellish2").addClass("animated fadeIn");
			}
			console.log(st);
	});

            
}); 