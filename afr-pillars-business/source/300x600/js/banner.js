var videoUrl;
//var md = new MobileDetect(window.navigator.userAgent);
var isDesktop;
var playVideo = false;
var clickTag;
var bgImage01, bgImage02, bgImage03;
var featureImage1, featureImage1b, featureImage2;

// Banner timings
var timingValues;
var frame01, frame02, frame03, frame04, frame05;

$(document).ready(() => {
    FastClick.attach(document.body);
    init();
})

function init() {

    // Init CSS
    // =========================
    TweenMax.set('.logo-container', {y:26})
    TweenMax.set('.cta-arrow', {rotation:45, transformOrigin:'50% 50%'})
    TweenMax.set('.panel-03', {x:-300}) // Reset the panels
    TweenMax.set('.panel-04', {x:-300}) // Reset the panels
    TweenMax.set('.panel-05', {x:-300}) // Reset the panels

    // Feature images
    // =========================
    featureImage1 = 'iceberg.png';
    featureImage1b = 'icebergMain.png';
    featureImage2 = 'dollar.png';
    bgImage01 = 'skybg.jpg';

    // Copy
    // =========================


    $('.frame-2 p').html('GET STRAIGHT<br>TO THE<br>BOTTOM LINE');
    $('.frame-3 p').html('THE BIG<br>INVESTMENT<br>IN SMALL <br>BUSINESS');
    $('.frame-4 p').html('BE THE<br>BUSINESS<br>WITH<br>THE AFR');
    $('.frame-5 p').html('TRY THE AFR<br>FOR HALF<br>THE PRICE');

    $('.cta-copy').html('Save 50% now');

    $('.bg-image-01').attr('src', bgImage01);
    $('.iceberg').attr('src', featureImage1);
    $('#main-iceberg .iceberg').attr('src', featureImage1b);
    $('.dollar').attr('src', featureImage2);



    // Clicktag
    // =========================
    clickTag  = 'http://google.com'

    // Button hover
    // =========================
    $('.button').on('mouseenter', () => {
        // TweenLite.to('.arrow-circle', .2, {autoAlpha:1, x:0, ease:Power1.easeOut, overwrite:'all'})
        // TweenLite.to('.cta-copy', .2, {x:-5, ease:Power1.easeOut, overwrite:'all'})
    }).on('mouseleave', () => {
        // TweenLite.to('.arrow-circle', .2, {autoAlpha:0, x:-10, ease:Power1.easeOut, overwrite:'all'})
        // TweenLite.to('.cta-copy', .2, {x:0, ease:Power1.easeOut, overwrite:'all'})
    })

    $('#banner').on('click', () => {
        console.log('clicktag invoked');
        window.open(window.clickTag);
    })

    // Timing values
    // =========================
    timingValues = '1,3,7,10,13';
    timingValues = timingValues.split(',');

    frame01 = timingValues[0];
    frame02 = timingValues[1];
    frame03 = timingValues[2];
    frame04 = timingValues[3];
    frame05 = timingValues[4];

    const manifest = [
        "icebergMain.png",
        "iceberg.png",
        "dollar.png"
    ];

    preloadimages(manifest)
        .done((images) => {
            $('#preloader').hide();
            $('#banner').show();
            start();
        });
}

function start() {

    // Split text
    // =========================

    var $messaging01 = $(".frame-2 p"),
    mySplitText01 = new SplitText($messaging01, {type:"words"});
    mySplitText01.split({type:"lines, chars, words", linesClass:"splitLines"});

    var $messaging02 = $(".frame-3 p"),
    mySplitText02 = new SplitText($messaging02, {type:"words"});
    mySplitText02.split({type:"lines, chars, words", linesClass:"splitLines"});

    var $messaging03 = $(".frame-4 p"),
    mySplitText03 = new SplitText($messaging03, {type:"words"});
    mySplitText03.split({type:"lines, chars, words", linesClass:"splitLines"});

    var $messaging04 = $(".frame-5 p"),
    mySplitText04 = new SplitText($messaging04, {type:"words"});
    mySplitText04.split({type:"lines, chars, words", linesClass:"splitLines"});


    var tlFeature = new TimelineMax();
    var tlWater = new TimelineMax();
    var tlMainIceberg = new TimelineMax();
    var tlMainIceberg3 = new TimelineMax();
    var tlIceberg2 = new TimelineMax();
    var tlIceberg3 = new TimelineMax();


    function bounceMainIceberg(){
        tlMainIceberg.to('#main-iceberg', 1, {repeat:10, repeatDelay:0, yoyo: true, y:"+=1" , ease: Power1.easeInOut});
    }

    function bounceMainIceberg2(){
        //tlMainIceberg.to('#main-iceberg', 1, {repeat:-1, repeatDelay:0, yoyo: true, y:17.5 , ease: Power1.easeInOut});
    }

    function bounceMainIceberg3(){
        tlMainIceberg3.to('#main-iceberg', 1, {repeat:10, repeatDelay:0, yoyo: true, rotation:1 , ease: Power1.easeInOut});
    }


    function bounceIceberg2(){
        tlIceberg2.to('#iceberg2', 1, {repeat:10, repeatDelay:0, yoyo: true, y:"-=2" , ease: Power1.easeInOut});
    }

    function bounceIceberg3(){
        tlIceberg3.to('#iceberg3', 1, {repeat:10, repeatDelay:0, yoyo: true, y:"+=4" , ease: Power1.easeInOut});
    }


    function animateWaves(){
        tlWater.to('#water', 1, { x: -100, repeat: 10, repeatDelay:0, yoyo: true, ease: Power1.easeInOut });
    }





    function featureAnimation() {
        tlFeature.set('.feature', {x:0})
                 .set('#main-iceberg', {scale:1, x:-5, transformOrigin:"50% 40%"})
                 .set('#main-iceberg .dollar', {alpha:1})
                 .set('#main-iceberg .iceberg', {alpha:0.95})
                 .set('#iceberg2', {x:-12, y:24, scale:0.4})
                 .set('#iceberg2 .iceberg', {alpha:0.7})
                 .set('#iceberg2 .dollar', {alpha:0})
                 .set('#iceberg3', {x:148, y:19, scale:0.67})
                 .set('#iceberg3 .iceberg', {alpha:0.6})
                 .set('#iceberg3 .dollar', {alpha:0})
                 .set('.feature', {y:-102})
                 .set('#water', {x:-250, y:-9})
                 .call(bounceMainIceberg, [], this, "")
                 .call(bounceMainIceberg3, [], this, "")
                 .call(bounceIceberg2, [], this, "")
                 .call(bounceIceberg3, [], this, "")
                 .call(animateWaves, [], this, "")

                 .to('.feature', 1.5, {ease:Power1.easeInOut, y:-122})
                 .to('#water', 1.5, {ease:Power1.easeInOut, y:"-=21"}, "-=1.5")
                 .to('#iceberg2', 1.5, {ease:Power1.easeInOut, scale:0.4, x:2}, "-=1.5")
                 .to('#iceberg2 .dollar', 1.5, {ease:Power1.easeInOut, alpha:0.4}, "-=1.5")

                 .to('#main-iceberg', 1.5, {ease:Power1.easeInOut, scale:0.9, y:33, x:15}, "-=1.5")
                 .to('#iceberg3', 1.5, {ease:Power1.easeInOut, scale:0.45, x:169, y:21}, "-=1.5")
                 .to('#iceberg3 .dollar', 1.5, {ease:Power1.easeInOut, alpha:0.3}, "-=1.5")
                 .to('.feature', 1, {ease:Power1.easeInOut, y:-138, delay:2})
                 .to('#water', 1, {ease:Power1.easeInOut, y:"-=18"}, "-=1")

                 .to('#main-iceberg', 1, {ease:Power1.easeInOut, scale:0.8, y:14, x:30}, "-=1")

                 .to('.feature', 1.5, {ease:Power1.easeIn, y:102, autoAlpha:0, delay:3.7})
                 .to('#water', 1.5, {ease:Power1.easeIn, y:"+=244"}, "-=1.5")



                 ;
        }


    const tl = new TimelineMax();



    tl
      .set('#fr-logo-intro', {opacity:1})
      //.set('.splitLines', {alpha:0})
      .to('.panel-01', 1.8, {y:485, ease:Power1.easeInOut})
      .to('.panel-02', 1.3, {y:505, ease:Power1.easeInOut, backgroundColor:"#ffffff", opacity:1, onComplete: () => {
          TweenMax.set('.panel-01', {y:-250}) // Reset the panels

      }}, '-=1.3')
      .to('#fr-logo-intro', 1.3, {ease:Power1.easeInOut, top:"539px"}, "-=1.3")
      .to('#tag-line-intro', 1.3, {ease:Power1.easeInOut, opacity:0}, "-=1.3")
      .to('#logo-lockup-intro .fr-logo-path', 0.5, {ease:Power1.easeInOut, fill:"#1289ca"}, "-=0.85")
      .call(featureAnimation, [], this, "-=0.8")

      .staggerFrom('.frame-2 p .splitLines', 0.8, {y:-30, alpha:0, ease:Power1.easeInOut}, -0.08, "-=0.1")
      .staggerTo('.frame-2 p .splitLines', 0.8, {y:40, alpha:0, ease:Power1.easeInOut, delay:1.5}, -0.08)

      .staggerFrom('.frame-3 p .splitLines', 0.8, {y:-30, alpha:0, ease:Power1.easeInOut}, -0.08, "-=0.1")
      .staggerTo('.frame-3 p .splitLines', 0.8, {y:30, alpha:0, ease:Power1.easeInOut, delay:3.5}, -0.08)

      .add('frame04', "-=0.6")
      .to('.panel-05', 1.6, {x:0, ease:Power1.easeInOut}, 'frame04')
      .to('.panel-04', 1.3, {x:0, ease:Power1.easeInOut}, 'frame04+=.3')
      .to('.panel-03', 1.1, {x:0, ease:Power1.easeInOut}, 'frame04+=.5')


      .to('.panel-02', 1, {y:485, ease:Power1.easeInOut}, "-=1.3")
      .to('#fr-logo-intro', 1, {y:-21, ease:Power1.easeInOut}, "-=1.3")
      .to('#tag-line-intro', 1, {ease:Power1.easeInOut, opacity:1}, "-=1.3")
      .to('#tag-line-intro .fr-logo-path', 1, {ease:Power1.easeInOut, fill:"#1289ca"}, "-=1.3")
      .from('#tag-line', 1, {alpha:0, ease:Power1.easeOut}, 'endFrame+=1')

      .staggerFrom('.frame-4 p .splitLines', 0.8, {y:30, alpha:0, ease:Power1.easeInOut}, 0.08, 'frame04+=1')

      .staggerTo('.frame-4 p .splitLines', 0.8, {y:-30, alpha:0, ease:Power1.easeInOut, delay:2}, 0.08)

      .staggerFrom('.frame-5 p .splitLines', 0.8, {y:30, alpha:0, ease:Power1.easeInOut}, 0.08)

      .set('.button',{y:-20},0)
      .from('.button', 0.8, {alpha:0, y:0, ease:Power1.easeOut}, "-=0.2")

      ;






    // Testing
    // =========================
    //tl.pause(9)

}
