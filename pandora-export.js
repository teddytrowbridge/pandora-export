// Create a div covering the entire page
$('body').prepend('<div id="pe-song-list"></div>')
$('#pe-song-list').css('position', 'absolute')
                  .css('left', 10)
                  .css('top', 10)
                  .css('right', 10)
                  .css('padding', 10)
                  .css('border', '5px solid #000')
                  .css('background', '#fff')
                  .css('color', '#000')
                  .css('z-index', 99999);

// Find all likes, add line items, delete the like from the page
function findAllSongs(){
    $('.infobox-body').each(function(index)
    {
        var title = $(this).find('h3 a').text();
        var artist = $(this).find('p a').first().text();

        $('#pe-song-list').prepend('<p>' + artist + ',' + title + '</p>');
        $(this).parent().parent().parent().remove();
    });
};

// Navigate to the likes page, continually load more likes until none are left
setTimeout(function()
{
    $('.myprofile_icon').click();
    setTimeout(function()
    {
        $('#profile_tab_likes').click();
        setInterval(function()
        {
            findAllSongs();
            $('.show_more:visible').last().click();     
        }, 250);
    }, 100);
}, 100);