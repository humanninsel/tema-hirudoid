

$(document).ready(function () {



  

  var sliderGaleria = tns({

    container: ".carrossell-banner",

    items: 1,

    loop: true,

    slideBy: "page",

    autoplayButtonOutput: false,

    autoplay: true,

    controls: true,

    controlsPosition:'bottom',

    nav: false,

    controlsText:['<img src="http://localhost:3000/hirudoid/wp-content/themes/tema-padrao/dist/img/btn-prev.png">','<img src="http://localhost:3000/hirudoid/wp-content/themes/tema-padrao/dist/img/btn-next.png">']



  });

  var sliderGaleria = tns({

    container: ".carrosel-produtos",

    items: 1,

    loop: true,

    slideBy: "page",

    autoplayButtonOutput: false,

    autoplay: true,

    controls: false,


    nav: true,

    navPosition: 'bottom'


  });
  

});



