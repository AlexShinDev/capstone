// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
if (!window.Dog) {
  Dog = {};
}

Dog.Selector = {};
Dog.Selector.getSelected = function() {
  var t = '';
  if (window.getSelection) {
    t = window.getSelection();
  } else if (document.getSelection) {
    t = document.getSelection();
  } else if (document.selection) {
    t = document.selection.createRange().text;
  }
  return t;
};

Dog.Selector.mouseup = function() {
  var st = Dog.Selector.getSelected();
  if (st != '') {
    //let obj = { "selction": st};
    //var myJSON = JSON.stringify(obj);
    document.getElementById("selection").innerHTML = st;
  }
};

$ (document).ready(function() {
  $ (document).bind("mouseup", Dog.Selector.mouseup);
});

function multiFunction() {
  sendHighlight();
  updateHighlights();
}

function sendHighlight() {
  let highlightSelection = document.getElementById('selection').innerHTML;
  let userId = parseInt(document.getElementById('showUserId').innerHTML);
  let articleId = parseInt(document.getElementById('showArticleId').innerHTML);

  $.post(
        "http://localhost:3000/highlights",
        {
          selection: highlightSelection,
          user_id: userId,
          article_id: articleId
        }
  );
  document.getElementById("selection").innerHTML = "highlight has been saved";
}

function updateHighlights() {
  $(function(){
    location.reload();
  });
}

$(document).ready(function() {
  var processedUri = "Soccer%20(disambiguation)";

  // $('#sendInfo').on('click', function() {
  //   $.get(
  //       "http://localhost:3000/articles/" + processedUri
  //   )
  // });

  $.get( "http://localhost:3000/articles/" + processedUri)
  .done(function(resp) {
    console.log("success response:", resp);
  })
  .fail(function(resp) {
    console.log("error response:", resp);
  });
});


//--------
// document.addEventListener("mouseup", Dog.Selector.mouseup);

// possibly bind the event to a toggle so that it only works for certain areas of the page
//alternatively maybe use css to just trigger the event on to certain tags

//window.getSelection().toString()

/// Don't need to use vue necessarily, might be overkill
//--------
// let highlightedText = document.getElementsByClassName(".articleContent");
// document.addEventListener("mouseup", highlightedText.Selector.mouseup);



