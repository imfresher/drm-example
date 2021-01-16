var src = 'https://d24xaz1fd2j7qt.cloudfront.net/hi/mpd/hi.mpd';
// var src = 'https://lv-watch-s3-video-output-bucket.s3-ap-southeast-1.amazonaws.com/hi/mpd/hi.mpd';
//var licenseUri = 'https://speke-keybucket-d1a3cd8jt0rm.s3-ap-southeast-1.amazonaws.com/0c04daa7-aaaf-4174-8e64-0540d1049747/dc21a585-da2e-4c16-b404-bae9b439f392';
// var licenseUri = 'https://ba4db506j4.execute-api.ap-southeast-1.amazonaws.com/EkeStage/copyProtection';
var licenseUri = 'https://ba4db506j4.execute-api.ap-southeast-1.amazonaws.com/EkeStage/demo';
// var licenseUri = 'https://d3htqs3c24fobs.cloudfront.net/0c04daa7-aaaf-4174-8e64-0540d1049747/dc21a585-da2e-4c16-b404-bae9b439f392';

// var src = 'https://contents.pallycon.com/bunny/stream.mpd';
// var licenseUri = 'https://license.pallycon.com/ri/licenseManager.do';

var player = videojs('video1', {
    width: 640,
    height: 360,
    autoplay: false,
    loop: false,
    controls: true,
    preload: 'auto',
});

player.ready(function() {
    player.src({
        'src': src,
        'type': 'application/dash+xml',
        keySystemOptions: [
            {
                name: 'com.widevine.alpha',
                options: {
                    serverURL: licenseUri
                }
            }
        ]
    });
});

// player.ready(function() {
//     player.src({
//         'src': src,
//         'type': 'application/dash+xml',
//         keySystemOptions: [
//             {
//                 name: 'com.widevine.alpha',
//                 options: {
//                     serverURL: licenseUri,
//                     'httpRequestHeaders' : {
//                         'pallycon-customdata-v2': 'eyJkcm1fdHlwZSI6IldpZGV2aW5lIiwic2l0ZV9pZCI6IklOS0EiLCJ1c2VyX2lkIjoic3ZtZjFidjIiLCJjaWQiOiJiaWdidWNrYnVubnkiLCJwb2xpY3kiOiIwNDV5ejUvK3BKbGpBWXRWYWpXZjlWd2c1MTFHekdtcTUrV1V4Y29JOHg4OHhkWHdFQnNvQW1HZHVoWkF6UXU2ZDQ4M3dpaXJOS0tVOWtpenRDRmRnUT09IiwicmVzcG9uc2VfZm9ybWF0Ijoib3JpZ2luYWwiLCJ0aW1lc3RhbXAiOiIyMDIxLTAxLTE3VDE2OjQ0OjI3WiIsImhhc2giOiJORzJONEhZdCt4WGFUUmQvMk04NDUzYjFyV0F5ZFNrYlNzc0RPYlk5MzhjPSIsImtleV9yb3RhdGlvbiI6ZmFsc2V9',
//                     }
//                 }
//             },
//             {
//                 'name': 'com.microsoft.playready',
//                 'options':{
//                     'serverURL' : licenseUri,
//                     'httpRequestHeaders' : {
//                         'pallycon-customdata-v2': 'eyJkcm1fdHlwZSI6IldpZGV2aW5lIiwic2l0ZV9pZCI6IklOS0EiLCJ1c2VyX2lkIjoic3ZtZjFidjIiLCJjaWQiOiJiaWdidWNrYnVubnkiLCJwb2xpY3kiOiIwNDV5ejUvK3BKbGpBWXRWYWpXZjlWd2c1MTFHekdtcTUrV1V4Y29JOHg4OHhkWHdFQnNvQW1HZHVoWkF6UXU2ZDQ4M3dpaXJOS0tVOWtpenRDRmRnUT09IiwicmVzcG9uc2VfZm9ybWF0Ijoib3JpZ2luYWwiLCJ0aW1lc3RhbXAiOiIyMDIxLTAxLTE3VDE2OjQ0OjI3WiIsImhhc2giOiJORzJONEhZdCt4WGFUUmQvMk04NDUzYjFyV0F5ZFNrYlNzc0RPYlk5MzhjPSIsImtleV9yb3RhdGlvbiI6ZmFsc2V9',
//                     }
//                 }
//             }
//         ]
//     });
// });

player.play();