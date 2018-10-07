
$(document).ready(function () {

$(document).scroll(function(){ 
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

});
  $('.nav-1-btn').click(function(e) {
    e.preventDefault();
  $('html, body').animate({
    scrollTop: $(".nav-2").offset().top  }, 1500);
});

});


