// Side Menu
$(document).ready(function(){
  var menuButton = $('#sideTrigger');
menuButton.click(function() {
    $('body').toggleClass('sideOpen');
    $(this).text(function(i, text) {
        return text === "Open menu" ? "Close menu" : "Open menu";
    })
    return false;
});

var itemCount = 0,
    addItem = $('#addItem'),
    slideMenu = $('#itemMain');

addItem.click(function() {
    itemCount++;
    slideMenu.append('<div id="copy' + itemCount + '" class="copy-text"></div><div id="item' + itemCount + '" class="item"><label>Item#' + itemCount + '</label><textarea id="textItem' + itemCount + '" class="textItem" enabled rows="3"> </textarea><button class="remove btn btn-rem">Remove</button> </div> ')
});


//text change
$(document).delegate('.textItem', 'change', function(e) {
    copy = $(this).parent().prev('.copy-text');
    copy.text($(this).val())
});


//remove button
$(document).on("click", ".remove", function(e) {
  var isDisabled = $(this).parent().find('textarea').prop('disabled'),
      textArea = $(this).parent().find('textarea'),
      copy = $(this).parent().prev('.copy-text');

    // disabled button and hidden text
    if (!isDisabled) {
        textArea.prop("disabled", true);
        $(this).text(function(i, text) {
            return text === "Remove" ? "Restore" : "Remove";
        })
        copy.css('visibility', 'hidden')
        $(this).css('background', '#cb4e4e')
    }

    //enabled button and show text
    else {
        textArea.prop("disabled", false);
        $(this).text(function(i, text) {
            return text === "Restore" ? "Remove" : "Restore";
        })
        copy.css('visibility', 'visible')
        $(this).css('background', '')
    }

});
});