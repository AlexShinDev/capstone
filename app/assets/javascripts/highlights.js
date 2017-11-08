// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function() {
  // enter
    $("#searchTerm").keypress(function(e){
      if(e.keyCode===13){
        var searchTerm = $("#searchTerm").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?"; 
        $.ajax({
      url: url,
      type: 'GET',
      contentType: "application/json; charset=utf-8",
      async: false,
          dataType: "json",
          success: function(data, status, jqXHR) {
            $("#fade-in").fadeIn();
            $("#output").html();
            for(var i=0;i<data[1].length;i++){
              $("#output").prepend("<div><div class='well search-article'><a href='http://localhost:3000/api/v1/articles/'"+data[1][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
            }

          }
    })
      }
    });
// click ajax call
    $("#search").on("click", function() {
      $("#fade-in").fadeIn();
      var searchTerm = $("#searchTerm").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?"; 
    $.ajax({
      url: url,
      type: 'GET',
      contentType: "application/json; charset=utf-8",
      async: false,
          dataType: "json",
          // plop data
          success: function(data, status, jqXHR) {
            console.log(data[3]);

            $("#output").html("");
            for (var i = 0;i < data[1].length;i++) {
              $("#output").prepend("<div><div class='well search-article'><a href='http://localhost:3000/api/v1/articles/" + data[1][i] + "'><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
            }

          }
    })
    .done(function() {
      console.log("success");
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
    
        
    });
});