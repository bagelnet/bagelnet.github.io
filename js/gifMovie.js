encoder = new GIFEncoder();
encoder.setRepeat(0);
encoder.setDelay(500);
encoder.start();

function addPicture(context) {
  encoder.addFrame(context); // context defined on camera.js
}
function exportGifMovie() {
    encoder.finish();
    var binary_gif = encoder.stream().getData() //notice this is different from the as3gif package!
    var data_url = 'data:image/gif;base64,'+encode64(binary_gif);
    var image = document.getElementById('gifmovie')
    image.setAttribute('src', data_url);
    image.style.display = "block";
    document.getElementById('camera').style.display = "none";
}
