
//位置情報を取得する
    //geolocationが使えるかの判断
    if(navigator.geolocation){  
        navigator.geolocation.getCurrentPosition(       
        //位置情報を取得できた場合
        function (pos) {
        latitude     = "<li>"+"緯度：" + pos.coords.latitude        + "</li>";
        longitude    = "<li>"+"経度：" + pos.coords.longitude       + "</li>";
        var location     = "<li>"+"精度：" + pos.coords.accuracy        + "</li>";
            location    += "<li>"+"高度：" + pos.coords.altitude        + "</li>";
            location    += "<li>"+"精度：" + pos.coords.alitudeaccuracy + "</li>";
            location    += "<li>"+"方角：" + pos.coords.heading         + "</li>";
            location    += "<li>"+"速度：" + pos.coords.speed           + "</li>";
            console.log(typeof latitude);         
            document.getElementById("location").innerHTML = latitude + longitude +location;
            
            //マップを表示するメソッドを呼び出す
            maps(latitude,longitude);               

        },
        //位置情報を取得できなかった場合
         function(error){ 
            document.getElementById("location").innerHTML = "失敗";
         }
        );  
    }else{
        window.alert("使えません");
    }
    
function maps(x,y){
    var canvas = document.getElementById('map-canvas');
    var latlng = new google.maps.LatLng(x,y);
    var mapOption = {
      zoom:15,
      center:latlng,
    };
    var map = new google.maps.Map(canvas,mapOption);
}