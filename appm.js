const ap1 = new APlayer({
    element: document.getElementById('player1'),
    mini: false,
    autoplay: false,
    lrcType: false,
    mutex: true,
    preload: 'metadata',
    audio: [{
        name: 'Attouteki Vivid Days',
        artist: '吉七味。',
        url: '#',
        cover: 'https://1.bp.blogspot.com/-bMx_ctDEe6U/XRiEDRiPzuI/AAAAAAAACOo/mrsFfT0rvrIyI7yN4GLG3FqFaGb5PNz7QCLcBGAs/s1600/COVER.jpg',
        theme: '#ebd0c2'
    }]
});
ap1.on('play', function () {
    console.log('play');
});
ap1.on('play', function () {
    console.log('play play');
});
ap1.on('pause', function () {
    console.log('pause');a
});
ap1.on('canplay', function () {
    console.log('canplay');
});
ap1.on('playing', function () {
    console.log('playing');
});
ap1.on('ended', function () {
    console.log('ended');
});
ap1.on('error', function () {
    console.log('error');
});

$.ajax({
    url: 'https://api.i-meto.com/meting/api?server=netease&type=playlist&id=35798529',
    success: function (list) {
        ap8.list.add(JSON.parse(list));
    }
});