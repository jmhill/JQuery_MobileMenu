// Nav wraps on smaller window sizes
// Solution: Hide text links and substitute new nav.

//Create a select and append to #menu

var $select = $("<select></select>");
$("#menu").append($select);

//Cycle through links to create select options
$("#menu a").each(function(){
  var $anchor = $(this);
  //Create an option
  var $option = $("<option></option>");
  //Make sure option is in state "selected" on correct pages
  if ($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }

  //Set option value to nav href
  $option.val($anchor.attr("href"));
  //Set option text to link text
  $option.text($anchor.text());
  //Append option to select
  $select.append($option);

});

// Change page upon selection
$select.change(function(){
  window.location = $select.val();
});
