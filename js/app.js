$(function() {
    
    $('#search-results').on('submit', function(event) {
        var term = $('#query').val();
        url = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyDAVluCs90lmYwADQjoQe3T3FB8IlhOux0&q='+term;
        event.preventDefault();

        $.getJSON(url, function(data) {
            showResults(data.items)
        })
    })

    function showResults(results) {

        for (var i = 0; i < results.length; i++) {
            var resObj = results[i].snippet,
                resImg = resObj.thumbnails.medium.url,
                resTitle = resObj.title,
                resDesc = resObj.description;
            // $('#results').append('<img src='+results[i].snippet.thumbnails.medium.url+'>');
            console.log(resImg);
            console.log(resTitle);
            console.log(resDesc);
        };
    }

})();