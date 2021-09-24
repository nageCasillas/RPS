$(document).ready(function () {
  var round = 1;
  var cpuwin = 0;
  var playerwin = 0;
  
  function reset(){
    round = 1;
    cpuwin = 0;
    playerwin = 0;
    $('.containerbox1').text("Round "+round);
    $('#playerwin').text(playerwin);
    $('#playerwin2').text(playerwin);
    $('#cpuwin').text(cpuwin);
    $('#cpuwin2').text(cpuwin);
  }

  function random(val){
    var random = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    console.log(val, random);
    if(val === random){
      if(val === 1){
        $("#cpuwin2").css("background-color", "	#FDFF00");
        $("#playerwin2").css("background-color", "	#FDFF00");
        $("#rightrock").show();
        $(".con1").show();
      }
      if(val === 2){
        $("#cpuwin2").css("background-color", "	#FDFF00");
        $("#playerwin2").css("background-color", "	#FDFF00");
        $("#rightpaper").show();
        $(".con2").show();
      }
      if(val ===3){
        $("#cpuwin2").css("background-color", "	#FDFF00");
        $("#playerwin2").css("background-color", "	#FDFF00");
        $("#rightscissor").show();
        $(".con3").show();
      }
    }
    // Rock wins against scissors.
    if(val === 1 && random === 3){
      $("#rightscissor").show();
      playerwin++;
      $("#cpuwin2").css("background-color", " #E62020");
      $("#playerwin2").css("background-color", "  #00FF00");
      $(".con4").show();
    }
    if(val === 3 && random === 1){
      $("#rightrock").show();
      cpuwin++;
      $("#cpuwin2").css("background-color", " #00FF00");
      $("#playerwin2").css("background-color", "  #E62020");
      $(".con5").show();
    }
    // Scissors win against paper
    if(val === 3 && random === 2){
      $("#rightpaper").show();
      playerwin++;
      $("#cpuwin2").css("background-color", " #E62020");
      $("#playerwin2").css("background-color", "  #00FF00");
      $(".con6").show();
    }
    if(val === 2 && random ===3){
      $("#rightscissor").show();
      cpuwin++;
      $("#cpuwin2").css("background-color", " #00FF00");
      $("#playerwin2").css("background-color", "  #E62020");
      $(".con7").show();
    }
    // Paper wins against rock.  
    if(val === 2 && random === 1){
      $("#rightrock").show();
      playerwin++;
      $("#cpuwin2").css("background-color", " #E62020");
      $("#playerwin2").css("background-color", "  #00FF00");
      $(".con8").show();
    }
    if(val === 1 && random === 2){
      $("#rightpaper").show();
      cpuwin++;
      $("#cpuwin2").css("background-color", "	#00FF00");
      $("#playerwin2").css("background-color", "  #E62020");
      $(".con9").show();
    }
    if(cpuwin === 5 || playerwin === 5){
      $('#cpuwin2').text(cpuwin);
      $('#playerwin2').text(playerwin);
      $("#modal-content3").hide();
      $("#OK").hide();
      $("#leftpaper").hide();
      $("#leftrock").hide();
      $("#leftscissor").hide();
      $("#rightpaper").hide();
      $("#rightrock").hide();
      $("#rightscissor").hide();
      if(cpuwin === 5){
        $('.textcontent').text("You lost.\n Better luck next time.");
      }
      if(playerwin === 5){
        $('.textcontent').text("You Won.\n Thank You for playing.");
      }
      $("#modal-content4").show();
    }
    else{
      round++;
      $('.containerbox1').text("Round "+round);
      $('#playerwin').text(playerwin);
      $('#playerwin2').text(playerwin);
      $('#cpuwin').text(cpuwin);
      $('#cpuwin2').text(cpuwin);
    }
  }
  $("#containerheader2").hide();
  $("#rightcontainer2").hide();
  $("#rightmiddle").hide();
  $("#leftmiddle").hide();
  $("#playerwin").hide();
  $("#cpurwin").hide();
    $("#getting_started").click(function(){
        $("#containerheader").hide();
        $("#rightcontainer").hide();
        $("#containerheader2").show();
        $("#rightcontainer2").show();
        $("#rightmiddle").show();
        $("#leftmiddle").show();
        $("#playerwin").show();
        $("#cpuwin").show();
    });
    $("#exit").click(function(){
      $("#containerheader2").hide();
      $("#rightcontainer2").hide();
      $("#rightmiddle").hide();
      $("#leftmiddle").hide();
      $("#playerwin").hide();
      $("#cpuwin").hide();
      $("#AboutModal3").hide();
      $( "#containerheader" ).slideUp( 300 ).delay( 400 ).fadeIn( 400 );
      $("#rightcontainer").show();
    });
    $("#exit2").click(function(){
      $("#containerheader2").hide();
      $("#rightcontainer2").hide();
      $("#rightmiddle").hide();
      $("#leftmiddle").hide();
      $("#playerwin").hide();
      $("#cpuwin").hide();
      $("#AboutModal4").hide();
      $("#modal-content4").hide();
      $( "#containerheader" ).slideUp( 300 ).delay( 400 ).fadeIn( 400 );
      $("#rightcontainer").show();
    });
    $("#paper").click(function(){
      $("#rightmiddle").hide();
      $("#leftmiddle").hide();
      $("#playerwin").hide();
      $("#cpuwin").hide();
      $("#AboutModal4").show();
      $("#rightmiddle2").show();
      $("#leftmiddle2").show();
      $("#playerwin2").show();
      $("#cpuwin2").show();
      $("#leftpaper").show();
      random(2);
    });
    $("#rock").click(function(){
      $("#rightmiddle").hide();
      $("#leftmiddle").hide();
      $("#playerwin").hide();
      $("#cpuwin").hide();
      $("#AboutModal4").show();
      $("#rightmiddle2").show();
      $("#leftmiddle2").show();
      $("#playerwin2").show();
      $("#cpuwin2").show();
      $("#leftrock").show();
      random(1);
    });
    $("#scissor").click(function(){
      $("#rightmiddle").hide();
      $("#leftmiddle").hide();
      $("#playerwin").hide();
      $("#cpuwin").hide();
      $("#AboutModal4").show();
      $("#rightmiddle2").show();
      $("#leftmiddle2").show();
      $("#playerwin2").show();
      $("#cpuwin2").show();
      $("#leftscissor").show();
      random(3);
    });
    $("#OK").click(function(){
      $(".con1").hide();
      $(".con2").hide();
      $(".con3").hide();
      $(".con4").hide();
      $(".con5").hide();
      $(".con6").hide();
      $(".con7").hide();
      $(".con8").hide();
      $(".con9").hide();
      $("#leftpaper").hide();
      $("#leftrock").hide();
      $("#leftscissor").hide();
      $("#rightpaper").hide();
      $("#rightrock").hide();
      $("#rightscissor").hide();
      $("#AboutModal4").hide();
      $("#rightmiddle").show();
      $("#leftmiddle").show();
      $("#playerwin").show();
      $("#cpuwin").show();
    });
    $("#restart").click(function(){
      reset();
      $("#AboutModal3").hide();
    })
    $("#restart2").click(function(){
      reset();
      $("#AboutModal4").hide();
      $("#modal-content4").hide();
      $("#rightmiddle").show();
      $("#leftmiddle").show();
      $("#playerwin").show();
      $("#cpuwin").show();
    })
});
