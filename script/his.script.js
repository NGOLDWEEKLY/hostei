
$(document).ready(function () {
	
	
	

	$(window).resize(function() {

 $("footer").css({
            'top' : $('.nav-1').outerHeight() + $('.nav-2-det').outerHeight()  + 'px' 
        });
	
});
	   $("footer").css({
            'top' : $('.nav-1').outerHeight() + $('.nav-2-det').outerHeight()  + 'px' 
        });
	
	
$(document).scroll(function(){ 
	var x=window.pageYOffset; 
	var na = $( ".nav-2" );
	var a=x*2000/ $( document).height();
	var off = na.offset().top;
	var d =off-20;
	$('#navc').toggleClass("nav-ban-container-active",(x>=d));
   $('.nav-2-pic img ').css('transform','rotate('+a+'deg)');
	if(x >= d){
	document.getElementById("navc-pic").setAttribute("src","sub/logo-old.png");
		}else{
	document.getElementById("navc-pic").setAttribute("src","sub/logo.png");
			}
			
			
			   $("footer").css({
            'top' : $('.nav-1').outerHeight() + $('.nav-2-det').outerHeight()  + 'px' 
        });
	
});

  $('.nav-1-btn').click(function(e) {
    e.preventDefault();
  $('html, body').animate({
    scrollTop: $(".nav-2").offset().top  }, 1500);
});


});


