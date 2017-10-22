// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
if (!window.Grabber) {
  Grabber = {};
}

Grabber.Selector = {};
Grabber.Selector.getSelected = function() {
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

Grabber.Selector.mouseup = function(){
  var st = Grabber.Selector.getSelected();
  if(st!=''){
    alert("You selected:\n" + st);
  }
};

$ (document).ready(function() {
  $ (document).bind("mouseup", Grabber.Selector.mouseup);
});
