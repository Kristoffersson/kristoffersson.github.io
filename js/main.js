var pathEls = document.querySelectorAll('path');
var pathEls = document.querySelectorAll('path');

function pathLoop() {

  for (var i = 0; i < pathEls.length; i++) {

      var pathEl = pathEls[i];

      var offset = anime.setDashoffset(pathEl);

      pathEl.setAttribute('stroke-dashoffset', offset);



      var riverAnimations = anime({

          targets: pathEl,

          strokeDashoffset: [offset, 0],

          duration: 2500/*anime.random(1000, 2000)*/,

          delay: 0/*anime.random(0, 1500)*/,

          loop: true,

          direction: 'normal',

          easing: 'easeInOutSine',

          autoplay: true,

          complete: function() {}

      });

  }

}

var domAttributes = anime({

  targets: '#domPercent input',

  value: 88,

  round: 1,

  easing: 'easeOutElastic',

  duration: 5000,

});

pathLoop();
