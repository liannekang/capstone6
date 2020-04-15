$(document).ready(function(){

//--1--//

// Skrollr
$(function() {var s = skrollr.init();})
// 


$.ready(function(){
  $(window).on('scroll', function(e){
    $('#scroll-container').innerText = $(window).scrollTop();
  });
});

	if ($(window).width() < 1400) {
   alert('Full-screen Please!!');
	
}




// Quiz


//Global:
var survey = []; //Bidimensional array: [ [1,3], [2,4] ]

//Switcher function:
$(".rb-tab").click(function(){
  //Spot switcher:
  $(this).parent().find(".rb-tab").removeClass("rb-tab-active");
  $(this).addClass("rb-tab-active");
  // $('html, body').animate({
  //           scrollTop(4000)
  //       }, 500);
});

//!!!!!!!!!!!!!!!! 
// $(".bullet-item-link").click(function(){
//   $(this) .parent().find(".bullet-item-link").removeClass("active");
//   $(this) .addClass("active");
// });
// !!!!!!!!!!!!


//Save data:
$(".trigger").click(function(){
  //Empty array:
  survey = [];
  //Push data:
  for (i=1; i<=$(".rb").length; i++) {
    var rb = "rb" + i;
    var rbValue = parseInt($("#rb-"+i).find(".rb-tab-active").attr("data-value"));
    //Bidimensional array push:
    survey.push([i, rbValue]); //Bidimensional array: [ [1,3], [2,4] ]
  };
  //Debug:
  debug();
});

//Debug:
function debug(){
  var debug = "";
  for (i=0; i<survey.length; i++) {
    debug += "Nº " + survey[i][0] + " = " + survey[i][1] + "\n";
  };
  alert(debug);
};


});