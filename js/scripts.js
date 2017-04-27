$(document).ready(function() {
  $(".java-hidden").click(function() {
    $(".java-showing").toggle();
    $(".java-hidden.java-showing").toggle();
  });
  
  $(".op-hidden").click(function() {
    $(".op-showing").toggle();
    $(".op-hidden.op-showing").toggle();
  });
});
