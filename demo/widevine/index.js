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

        var src = 'https://lv-watch-s3-video-output-bucket.s3-ap-southeast-1.amazonaws.com/mpd/sample.mpd';
        var licenseUri = 'https://speke-keybucket-d1a3cd8jt0rm.s3-ap-southeast-1.amazonaws.com/0c04daa7-aaaf-4174-8e64-0540d1049747/dc21a585-da2e-4c16-b404-bae9b439f392';

        player.src({
            type: 'application/dash+xml',
            src: src,
            keySystemOptions: [{
                name: 'com.widevine.alpha',
                options: {
                    serverURL: licenseUri
                }
            }]
        });

        player.on(['loadstart', 'loadedmetadata', 'loadeddata', 'play', 'playing', 'pause', 'suspend', 'seeking', 'seeked', 'waiting', 'canplay', 'canplaythrough', 'ratechange', 'ended', 'emptied', 'error', 'abort'], (e) => {
            console.log(`EVENT: ${e.type}`);
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