// JavaScript Document

$( document ).ready(function() {
	$('html, body').animate({scrollTop: 105}, 1);
	$('html, body').animate({scrollTop: 0}, 1);
  // Handler for .ready() called.
  $( window ).resize(function() {
	if (($("#bloque_submenu").css("float")) == "left"){
		$(document.body).trigger("sticky_kit:recalc");
		$("#bloque_submenu").stick_in_parent({offset_top: 20});
	}else{
		$("#bloque_submenu").trigger("sticky_kit:detach");
	}
});


	$('html,body').click(function(){
		//console.log($("#bloque_submenu").css("width"));
	});

	if (($("#bloque_submenu").css("float")) == "left"){
		$(document.body).trigger("sticky_kit:recalc");
		$("#bloque_submenu").stick_in_parent({offset_top: 20});
	}else{
		$("#bloque_submenu").trigger("sticky_kit:detach");
		console.log("no entra");
	}

	$('.btn').hover(function () {
	    $(this).children('.ov').toggle();
	}, function () {
	    $(this).children('.ov').toggle();
	});

	$('.m1').click(function(){
		$('html, body').animate({
    		scrollTop: $(".trabajo1").offset().top-80
 		}, 1000);
	});

	$('.m2').click(function(){
		$('html, body').animate({
    		scrollTop: $(".trabajo2").offset().top-20
 		}, 1000);
	});

	$('.m3').click(function(){
		$('html, body').animate({
    		scrollTop: $(".trabajo3").offset().top-20
 		}, 1000);
	});

	$('.m4').click(function(){
		$('html, body').animate({
    		scrollTop: $(".trabajo4").offset().top-20
 		}, 1000);
	});

	$('.m5').click(function(){
		$('html, body').animate({
    		scrollTop: $(".trabajo5").offset().top-20
 		}, 1000);
	});


	$('.m6').click(function(){
		$('html, body').animate({
    		scrollTop: $(".trabajo6").offset().top-20
 		}, 1000);
	});

	$('.l1').click(function(){
		$(this).parent().parent().find($(".alcien_w")).hide();
		$(this).parent().parent().find($(".t1")).show();
		console.log($(this));
	});

	$('.l2').click(function(){
		$(this).parent().parent().find($(".alcien_w")).hide();
		$(this).parent().parent().find($(".t2")).show();
	});

	$('.l3').click(function(){
		$(this).parent().parent().find($(".alcien_w")).hide();
		$(this).parent().parent().find($(".t3")).show();
	});

	$('.l4').click(function(){
		$(this).parent().parent().find($(".alcien_w")).hide();
		$(this).parent().parent().find($(".t4")).show();
	});

	$('.l5').click(function(){
		$(this).parent().parent().find($(".alcien_w")).hide();
		$(this).parent().parent().find($(".t5")).show();
	});

	$('.l6').click(function(){
		$(this).parent().parent().find($(".alcien_w")).hide();
		$(this).parent().parent().find($(".t6")).show();
	});

	$('.contacto').click(function(){
		$(".contact").toggle();
	});
});