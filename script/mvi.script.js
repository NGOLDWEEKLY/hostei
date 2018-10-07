
$(document).ready(function () {
	

	$(window).resize(function() {

 $("footer").css({
            'top' : $('.nav-1').outerHeight() + $('.nav-2').outerHeight()  + 'px' 
        });
	
});
	   $("footer").css({
            'top' : $('.nav-1').outerHeight() + $('.nav-2').outerHeight()  + 'px' 
        });
	
$(document).scroll(function(){ 
   $("footer").css({
            'top' : $('.nav-1').outerHeight() + $('.nav-2').outerHeight()  + 'px' 
        });
	

	var x=window.pageYOffset; 
	var na = $( ".nav-2" );
	var off = na.offset().top;
	var d =off-20;
	$('#navc').toggleClass("nav-ban-container-active", (x >= d));
	if(x >= d){
	document.getElementById("navc-pic").setAttribute("src","sub/logo-old.png");
		}else{
	document.getElementById("navc-pic").setAttribute("src","sub/logo.png");
			}
var y= $(".nav-2").offset().top;
var yz = 1- x/777;
	if(x<=y){
$(".nav-1-overlay").css("opacity", yz);
	}

});
  $('.nav-1-btn').click(function(e) {
    e.preventDefault();
  $('html, body').animate({
    scrollTop: $(".nav-2").offset().top  }, 1500);
});

});


