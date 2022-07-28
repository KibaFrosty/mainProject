const selected = $(".selected");
const optionsContainer = $(".options-container");
const optionsList = $(".option");

$(selected).click(function(){
  $(this).parent().find(optionsContainer).toggleClass("active");
});

  $(optionsList).click(function(){
    var optionValue = $(this).text();
    $(this).parents(".select-box").find(selected).text(optionValue);
    $(this).parent(optionsContainer).removeClass("active");
    filterMovie(optionValue, ".sec-2__poster","filter-name");
  });

 function filterMovie(filterValue, selector, param) {
    $(selector).hide();
    $(selector+'[data-'+param+'="'+filterValue+'"]').show();
 }