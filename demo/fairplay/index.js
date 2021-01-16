{
    let ready = (callbackFunc) => {
        if (document.readyState !== 'loading') {
            callbackFunc();
        } else {
            document.addEventListener('DOMContentLoaded', callbackFunc);
        }
    }

    ready(() => {
        var player = videojs('video1', {
            width: 640, // 幅
            height: 360, // 高さ
            autoplay: false, // 自動再生
            loop: false, // ループ再生
            controls: true, // コントロール制御表示
            preload: 'auto', // 読み込み制御
        });
        var src = 'https://lv-watch-s3-video-output-bucket.s3-ap-southeast-1.amazonaws.com/hls/samplehlssample.m3u8';
        var certificateUri = 'https://lv-watch-test-bucket.s3-ap-southeast-1.amazonaws.com/keyaes.key';
        var licenseUri = 'https://lv-watch-test-bucket.s3-ap-southeast-1.amazonaws.com/keyaes.key';

        player.ready(function(){
            var playerConfig;
            
            player.eme();
            playerConfig = {
                src: src,
                type: 'application/x-mpegurl',
                keySystems: {
                    'com.apple.fps.1_0': {
                        certificateUri: certificateUri,
                        licenseUri: licenseUri
                    }
                }
            };

            player.src(playerConfig);
        });

        player.play();

        player.on(['loadstart', 'loadedmetadata', 'loadeddata', 'play', 'playing', 'pause', 'suspend', 'seeking', 'seeked', 'waiting', 'canplay', 'canplaythrough', 'ratechange', 'ended', 'emptied', 'error', 'abort'], function (e) {
            console.log('EVENT: ' + e.type);
        });
        player.on('loadeddata', () => {
            console.debug('########## VideoInfo [start] ##########');
            console.debug('>> source: ' + player.currentSrc());
            console.debug('>> duration: ' + player.duration());
            console.debug('>> videoSize(WxH): ' + player.videoWidth() + 'px x ' + player.videoHeight() + 'px');
            console.debug('>> readyState: ' + player.readyState());
            console.debug('>> networkState: ' + player.networkState());
            console.debug('########## VideoInfo [end] ##########');
        });
    });
}