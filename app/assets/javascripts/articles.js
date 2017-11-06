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
        "http://localhost:3000/api/v1/highlights",
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

