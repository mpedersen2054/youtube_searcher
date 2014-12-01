$(function() {
    $('#query').focus();
    $('#results .container').html('<h1>No Search Term Entered</h1>');

    $('#search-results').on('submit', function(event) {
        var term = $('#query').val();
        event.preventDefault();

        getRequest(term);
        $('#query').val('');
    });


    function getRequest(searchTerm) {
        var url ='https://www.googleapis.com/youtube/v3/search';

        params = {
            part: 'snippet',
            key: 'AIzaSyDAVluCs90lmYwADQjoQe3T3FB8IlhOux0',
            q: searchTerm
        }

        $.getJSON(url, params, function(data) {
            showResults(data.items)
        });
    }

    function showResults(results) {
        $('#results .container').html('');

        for (var i = 0; i < results.length; i++) {
            var resImg = results[i].snippet.thumbnails.medium.url,
                resTitle = results[i].snippet.title,
                resDesc = results[i].snippet.description,
                resUrl = 'https://www.youtube.com/watch?v='+results[i].id.videoId;

            var template = outputResultHtml(resImg, resTitle, resDesc, resUrl)

            $('#results .container').append(template)
        }
    }

})();