var typed = new Typed('.title', {
    stringsElement: '#title-string',
    typeSpeed: 50,
    fadeOut: 'slow',
    onStringTyped: function () {
        document.querySelectorAll(".typed-cursor")[0].style.display = "none";
    },
    smartBackspace: true,
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);