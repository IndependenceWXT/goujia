$(document).ready(function () {
	var h= document.documentElement.clientHeight|| document.body.clientHeight;
	alert("h:"+h);
	var sh=document.documentElement.scrollHeight|| document.body.scrollHeight;
	alert("sh:"+sh);
/*	if(sh==h){
		alert("====");
	}*/
	/*$(window).scroll(function () {
	if ($(window).scrollTop() == h) {
		alert('第一屏');
	}
	else if($(window).scrollTop() == h+h){
		alert('第二瓶');
	}*/
	$(window).scroll(function ()
	{
		var st = $(this).scrollTop();
/*		if(st>621){
			alert('yi');
		}*/
		console.log(st);
	});

});
