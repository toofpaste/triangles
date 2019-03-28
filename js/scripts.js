$(function(){
  var i = 0;
  while (active){
  var gender = parseInt($("#gender").val());
  var life = parseInt($("#life").val());
  console.log(gender);
  console.log(life);

  if(gender === 1 && life === 3){
    $("maleA").removeClass();
    $("#maleA").toggle();
    alert("3");
  }else if (gender === 1 && life === 4){
    alert("2");
    $("maleL").removeClass();
    $("#maleL").toggle();
  }else if (gender === 2 && life === 3){
    $("#femA").removeClass();
    $("#femA").toggle();
  }else if(gender === 2 && life === 4){
    $("#femL").removeClass();
    $("#femL").toggle();
  }else alert("Nothing");

};



});
