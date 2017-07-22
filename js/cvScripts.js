//Run after document is ready
$(document).ready(function(){
  $("main.hidden").fadeIn(1000).removeClass("hidden");
  
  //OnClick Event Handler for Rows
  $(".row").on("click", function() {
	  console.log("Row Clicked");
	  if($(this).hasClass("expanded"))
	  {
	  	$(this).removeClass("expanded", );
	  	$(this).css("background-color", "#FFF");
	  }
	  else 
	  {
	  	$(this).addClass("expanded");
	  	$(this).css("background-color", "#E0E0E0");
	  }
	  $(this).next(".expansion").slideToggle();
  });
});

