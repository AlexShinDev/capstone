let content = "";
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
          $("html, body").animate({ scrollTop: 780 }, 500);
          $("#output").html();
          for(var i=0;i<data[1].length;i++){
            $("#output").prepend("<div><div class='well search-article'><a href='http://localhost:3000/api/v1/articles/" + data[1][i] + "'><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
          }
        }
      });
    }
  });
// click ajax call
  $("#search").on("click", function() {
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
        $("html, body").animate({ scrollTop: 780 }, 500);
        $("#output").html("");
        for (var i = 0;i < data[1].length;i++) {
          $("#output").prepend("<div><div class='well search-article'><a href='http://localhost:3000/api/v1/articles/" + data[1][i] + "'><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
        }
      }
    });  
  });
// random article
});

$(function() {
  $(".refresh").on("click", function() {
    console.log("orange");
    $( "#refreshHighlights" ).load(window.location.href + " #refreshHighlights" ); 

    console.log("orange");
  });
});


let openingSpan = '<span class="highlight">';
let closingSpan = '</span>';
let selectedHighlight = "";

function removeHighlight() {
  let articleDiv = document.querySelector("#article-content");
  let articleContent = articleDiv.innerHTML;
  let openSpanPosition = articleContent.indexOf(openingSpan);
  let closingSpanPosition = articleContent.indexOf(closingSpan);
  selectedHighlight = articleContent.slice(openSpanPosition + openingSpan.length, closingSpanPosition);
  if (articleContent.includes(openingSpan)) {
    let replaceContent = articleContent.slice(0, openSpanPosition) + articleContent.slice(openSpanPosition + openingSpan.length, closingSpanPosition) + articleContent.slice(closingSpanPosition + closingSpan.length);
    articleDiv.innerHTML = replaceContent; 
  }

}

function addHighlight(selectedText) {

  removeHighlight();

  let articleDiv = document.querySelector("#article-content");
  let articleContent = articleDiv.innerHTML;
  let firstMarker = articleContent.indexOf(selectedText);
  let secondMarker = firstMarker + selectedText.length;
  if (selectedHighlight === articleContent.slice(firstMarker, secondMarker)) {
    let replaceContent = articleContent.replace(openingSpan, "<span>");
    articleDiv.innerHTML = replaceContent; 
  } else {
    articleDiv.innerHTML = articleContent.slice(0, firstMarker) + openingSpan + articleContent.slice(firstMarker, secondMarker) + closingSpan + articleContent.slice(secondMarker);
    $('html, body').animate({
      scrollTop: $(".highlight").offset().top - $(".highlight").height() * 2
    }, 1000);
  }
}

// 