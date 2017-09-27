function run(){
			var newDate=new Date("2017-10-01 00:00:00");
			var date=new Date();
			var milliSeconds=newDate.getTime()-date.getTime();
			if(milliSeconds<0){
				document.getElementById("lastDate").innerHTML="时间已经到了哇！！！";
			}else{
				var seconds=milliSeconds/1000;//秒
				var day=Math.floor(seconds/60/60/24);//天
				var hour=Math.floor(seconds/60/60%24);//小时
				var minute=Math.floor(seconds/60%60);//分钟
				var sec=Math.floor(seconds%60);//秒
				minute=checkNum(minute);
				sec=checkNum(sec);
				document.getElementById("lastDate").innerHTML=day+"天"+hour+":"+minute+":"+sec;
			}

		}

		function checkNum(num){
			if(num<10){
				num="0"+num;
			}
			return num;
		}
window.onload=function(){
	run();
	setInterval(run,1000);
	var swiper = new Swiper('.swiper-container', {
			    pagination: '.swiper-pagination',
			    paginationClickable: true,
			    loop:true,
			    autoplay:1500,
	});
	

};
$(function(){
	$("#grabdown").click(function(){
		if($(".aa").is(":hidden")){
			$(".aa").css("display","block");
		}else{
			$(".aa").css("display","none");
		}
	});
	$("#add,.updown").on("click",function(){
		if($(".selectdown").is(":hidden")){
			$(".selectdown").show();
			$(".updown").css("transform","rotate(180deg)");
		}else{
			$(".selectdown").css("display","none");
			$(".updown").css("transform","rotate(360deg)");
		}
	});
	$(".selectdown li").click(function(){
		$("#add").html($(this).html());
		// $(this).html("南京");

		// $("<li>南京</li>").appendTo($(".selectdown"));
		$(".updown").css("transform","rotate(360deg)");
		$(".selectdown").css("display","none");
	});
});