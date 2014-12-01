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
            // console.log(results[i].snippet.title);
            $('#results').append('<img src='+results[i].snippet.thumbnails.medium.url+'>');
            // console.log(results[i].snippet.thumbnails.medium.url)
        };
    }

})();