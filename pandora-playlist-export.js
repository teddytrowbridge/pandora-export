// Create a div covering the entire page
$('body').prepend('<textarea id="pe-song-list"></textarea>')
$('#pe-song-list').css('position', 'absolute')
                  .css('top', 10)
                  .css('bottom', 10)
                  .css('left',10)
                  .css('width','calc(100% - 24px)')
                  .css('height', 'auto')
                  .css('border', '2px solid #000')
                  .css('background', '#fff')
                  .css('color', '#000')
                  .css('z-index', 99999);

// Find all likes, add line items
function findAllSongs(){
    $('.thumb_up_list li').each(function(index)
    {
        var info = $(this).find('a');
        var title = $(info[0]).text();
        var artist = $(info[1]).text();

        var textArea = $('#pe-song-list');

        textArea.val(textArea.val() + artist + ',' + title + '\n');
    });
};

// Kick off a setInterval that will click show more as many times as possible,
// then clear it and call findAllSongs
var interval = setInterval(function()
{
  var showMoreButton = $('.thumb_up_list .show_more:visible').first();
  if (showMoreButton.length > 0){
    console.log("clicking show more.");
    showMoreButton.click();
  }
  else {
    console.log("Clearing interval and finding songs")
    clearInterval(interval);
    findAllSongs();
  }
}, 750);
