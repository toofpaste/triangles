$(function(){

  $("form#select").submit(function(event){
      var gender = parseInt($("#gender").val());
      var life = parseInt($("#life").val());
      console.log(gender);
      console.log(life);
      if(gender === 1 && life === 3){
        $("#maleA").removeClass();
        $("#maleL, #femL, #femA").addClass("hide");
        $("#maleA").toggle();
      }else if (gender === 1 && life === 4){
        $("#maleL").removeClass();
        $("#maleA, #femL, #femA").addClass("hide");
        $("#maleL").toggle();
      }else if (gender === 2 && life === 3){
        $("#femA").removeClass();
        $("#maleL, #femL, #maleA").addClass("hide");
        $("#femA").toggle();
      }else if(gender === 2 && life === 4){
        $("#femL").removeClass();
        $("#maleL, #maleA, #femA").addClass("hide");
        $("#femL").toggle();
      }else alert("Nothing");



      event.preventDefault();
    });




});
