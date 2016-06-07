$(document).ready(function() {
  $("#palindrome form").submit(function(event) {


    // for (var i = 0; i < blanks.length; i++) {
    //   // console.log(blanks[i]);
      var input = $("input").val();
      var array  = input.split("");

      array.reverse();




      //  $("." + blanks[i]).append(input);
    }



    $("#story").show();

    event.preventDefault();
  });
});
