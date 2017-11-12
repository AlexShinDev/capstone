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
  let st = Dog.Selector.getSelected();
  if (st != '') {
    let string = st.toString().replace(/\(/g, "\\(");
    string = string.replace(/\)/g, "\\)");
    let myRe = new RegExp("\\w*?" + string + "\\w*", "g");
    let articleContent = document.getElementById("article-content").innerHTML;
    let myArray = articleContent.match(myRe);
    st = myArray[0];
    document.getElementById("selection").innerHTML = st; 
  }
};

$ (document).ready(function() {
  $ (document).bind("mouseup", Dog.Selector.mouseup);
});

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
        },
        function() {
          $( "#refreshHighlights" ).load(window.location.href + " #refreshHighlights" );
        });
  document.getElementById("selection").innerHTML = "highlight has been saved";
}

// $(function() {
//   content = document.getElementById("searchable").textContent;
// });
// $(function() {
//   $('#searchForSelection').on('click', function() {
//     document.getElementById("searchable").innerHTML = content;
//     console.log(content);
//     $('#searchable').each(function() {
//       $(this).html($(this).html().replace($('#selection-highlight').val(),"<span class='highlight'>" + $('#selection-highlight').val() + "</span>"));
//     });
//   });
// });
