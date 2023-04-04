$(document).ready(function() {
    $.getJSON('https://api.tvmaze.com/search/shows?q=death+note', function(data, status) {
        var text = '';
        for (let i = 0; i < 5; i++) {
            if (data[i] != null) {
                text += `${data[i].show.name}<br>`;
                if (data[i].show.image && data[i].show.image.medium != null) {
                    text += `<img src=${data[i].show.image.medium} height="300"><br>`;
                } else {
                    text += `<p>No image available.</p>`;
                }
                text += `${data[i].show.summary}<br><br>`;
            } else {
                console.log("Found null data.");
            }
        }
        $(".note").html(text);
    });
});
$(document).ready(function() {
    $("#myDiv").hover(function() {
      $(this).css("background-color", "red");
    }, function() {
      $(this).css("background-color", "");
    });
  });