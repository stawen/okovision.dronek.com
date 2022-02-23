$(document).ready(function() {
    $.getJSON("update.json", function(roadmap) {
        var keys = Object.keys(roadmap).reverse();
        for (var i = 0; i < 8; i++) {
            $("#version").append(
                "<div> \
					<strong>" +
                keys[i] +
                " <br/>" +
                roadmap[keys[i]].date +
                '</strong> \
    			    <div"> ' +
                roadmap[keys[i]].changelog +
                ' </div> \
    			 </div><hr class="divider divider - light " />'
            );
        }
    });

    $.ajax({
        type: "GET",
        url: "http://api.okovision.dronek.com/json.php",
        async: true,
        jsonpCallback: "response",
        contentType: "application/json",
        dataType: "jsonp",
        success: function(json) {
            //console.log(json.nbClient);
            $("#nbClient").html(json.nbClient);
        },
    });
});