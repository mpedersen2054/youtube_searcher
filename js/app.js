$(function() {
    
    $('#search-results').on('submit', function(event) {
        var term = $('#query').val(),
            key = 'AIzaSyDAVluCs90lmYwADQjoQe3T3FB8IlhOux0',
            url = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key=+'+key+'+&q='+term;
        event.preventDefault();

        $.getJSON(url, function(data) {
            showResults(data.items)
        })
    })

    function showResults(results) {

        for (var i = 0; i < results.length; i++) {
            var resImg = results[i].snippet.thumbnails.medium.url,
                resTitle = results[i].snippet.title,
                resDesc = results[i].snippet.description;

            var template = outputResultHtml(resImg, resTitle, resDesc)

            $('#results').append(template)

        }
    }

})();