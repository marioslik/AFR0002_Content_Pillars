var videoUrl;
var md = new MobileDetect(window.navigator.userAgent);
var isDesktop;
var playVideo = false;
var clickTag;
var bgImage01, bgImage02, bgImage03;
var pigSceneImage, pgLidImage;

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
    TweenMax.set('.logo-container', {y:26});
    TweenMax.set('.cta-arrow', {rotation:45, transformOrigin:'50% 50%'});
    TweenMax.set('.panel-03', {x:-300});
    TweenMax.set('.panel-04', {x:-300});
    TweenMax.set('.panel-05', {x:-300});

    // Feature images
    // =========================
    pigSceneImage = 'pig-scene.png';
    pgLidImage = 'pig-lid.png';
    bgImage01 = 'skybg.jpg';

    // Copy
    // =========================


    $('.frame-2 p').html('SAVING<br>YOUR<br>BACON');
    $('.frame-3 p').html("IT'S TIME TO<br>RETHINK<br>SUPER");
    $('.frame-4 p').html('MOVE<br>ON THE<br>MARKETS<br>WITH<br>THE AFR')
    $('.frame-5 p').html('TRY THE<br>AFR<br>FOR HALF<br>THE PRICE');

    $('.cta-copy').html('Save 50% now');

    $('.bg-image-01').attr('src', bgImage01);
    $('.pig-scene-image').attr('src', pigSceneImage);
    $('.pig-lid-image').attr('src', pgLidImage);




    // Clicktag
    // =========================
    clickTag  = 'http://google.com';

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
        "pig-lid.png",
        "pig-scene.png",
        "skybg.jpg"
    ];

    preloadimages(manifest)
        .done((images) => {
            $('#preloader').hide()
            $('#banner').show()
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



    function featureAnimation() {
        tlFeature.set('.feature', {x:-45, y:0, scale:0.9})
                 .set('.pig-lid-image', {x:-1000, transformOrigin:"0% 100%"})
                 .to('.feature', 1, {ease:Power1.easeInOut, y:-217})
                 .to('.pig-lid-image', 1.25, {ease:Power3.easeIn, rotation:50, delay:0.25})
                 .to('.pig-lid-image', 0.75, {y:"+=120", x:"+=20", rotation:110})
                 .to('.feature', 1, {ease:Power1.easeInOut, y:-207, x:-626, delay:0.8})
                 .to('.feature', 1.5, {ease:Power1.easeIn, y:102, autoAlpha:0, delay:2.7})
                 ;
        }


    const tl = new TimelineMax();


    tl.set('.panel-03', {x:-300}) // Reset the panels
      .set('.panel-04', {x:-300}) // Reset the panels
      .set('.panel-05', {x:-300}) // Reset the panels
      .set('#fr-logo-intro', {opacity:1})
      //.set('.splitLines', {alpha:0})
      .to('.panel-01', 1.8, {y:485, ease:Power1.easeInOut})
      .to('.panel-02', 1.3, {y:505, ease:Power1.easeInOut, backgroundColor:"#ffffff", opacity:1, onComplete: () => {
          TweenMax.set('.panel-01', {y:-250}) // Reset the panels

      }}, '-=1.3')
      .to('#fr-logo-intro', 1.3, {ease:Power1.easeInOut, top:"543px"}, "-=1.3")
      .to('#tag-line-intro', 1.3, {ease:Power1.easeInOut, opacity:0}, "-=1.3")
      .to('#logo-lockup-intro .fr-logo-path', 0.5, {ease:Power1.easeInOut, fill:"#1289ca"}, "-=0.85")
      .call(featureAnimation, [], this, "-=0.8")

      .staggerFrom('.frame-2 p .splitLines', 0.8, {y:-30, alpha:0, ease:Power1.easeInOut}, -0.08, "-=0.1")
      .staggerTo('.frame-2 p .splitLines', 0.8, {y:30, alpha:0, ease:Power1.easeInOut, delay:2}, -0.08)

      .staggerFrom('.frame-3 p .splitLines', 0.8, {y:-30, alpha:0, ease:Power1.easeInOut}, -0.08, "-=0.1")

      .staggerTo('.frame-3 p .splitLines', 0.8, {y:30, alpha:0, ease:Power1.easeInOut, delay:2.5}, -0.08)
      .add('frame04', "-=0.8")





      .to('.panel-05', 1.6, {x:0, ease:Power1.easeInOut}, 'frame04')
      .to('.panel-04', 1.3, {x:0, ease:Power1.easeInOut}, 'frame04+=.3')
      .to('.panel-03', 1.1, {x:0, ease:Power1.easeInOut}, 'frame04+=.5')


      .to('.panel-02', 1, {y:460, ease:Power1.easeInOut}, "-=1.3")
      .to('#fr-logo-intro', 1, {y:-28, ease:Power1.easeInOut}, "-=1.3")
      .to('#tag-line-intro', 1, {ease:Power1.easeInOut, opacity:1}, "-=1.3")
      .to('#tag-line-intro .fr-logo-path', 1, {ease:Power1.easeInOut, fill:"#1289ca"}, "-=1.3")
      .from('#tag-line', 1, {alpha:0, ease:Power1.easeOut}, 'endFrame+=1')
      
      .staggerFrom('.frame-4 p .splitLines', 0.8, {y:30, alpha:0, ease:Power1.easeInOut}, 0.08, 'frame04+=1')

      .staggerTo('.frame-4 p .splitLines', 0.8, {y:-30, alpha:0, ease:Power1.easeInOut, delay:2}, 0.08)

      .staggerFrom('.frame-5 p .splitLines', 0.8, {y:30, alpha:0, ease:Power1.easeInOut}, 0.08)


      .from('.button', 0.8, {alpha:0, y:20, ease:Power1.easeOut}, "-=0.2")

      ;


    // Testing
    // =========================
    // tl.pause(8)

}
