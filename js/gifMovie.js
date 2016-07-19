function exportGifMovie(context) {
    var encoder = new GIFEncoder();
    encoder.setRepeat(0);
    encoder.setDelay(500);
    encoder.start();
    encoder.addFrame(context); // ctx defined on camera.js
    encoder.finish();
    var binary_gif = encoder.stream().getData() //notice this is different from the as3gif package!
    var data_url = 'data:image/gif;base64,'+encode64(binary_gif);
    document.getElementById('gifmovie').setAttribute('src', data_url);
}
