
//本日より半年分のイベント情報を取得する
var base_date = new Date();

for (var i = 0; i <= 6; i++){
    base_date.setMonth(base_date.getMonth() + 1);
    target_ym = String(base_date.getFullYear()) + String(base_date.getMonth());

    $.get('https://connpass.com/api/v1/event/?series_id=921&ym=' + target_ym)
        .done(function(connpass) {
            connpass.events.forEach(function(event) {
                $("#connpass").append(
                    "<p id='event'>" + event.title + "<br/>" +
                    "<a href='" + event.event_url + "'>" + event.event_url + "</a><br/>" +
                    "</p>"
                )
            });
        })

        .fail(function() {
            $("#connpass").html("取得に失敗しました"); //表示1
        }
    )

}

