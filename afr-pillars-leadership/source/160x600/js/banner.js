var videoUrl;
//var md = new MobileDetect(window.navigator.userAgent);
var isDesktop;
var playVideo = false;
var clickTag;
var bgImage01, bgImage02, bgImage03;
var cloudImage1, cloudImage2, cloudImage3, cloudImage4, featureImage;

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
    TweenMax.set('.feature', {x:-20, y:0, display:'block'})
    TweenMax.set('.logo-container', {y:26});
    TweenMax.set('.cta-arrow', {rotation:45, transformOrigin:'50% 50%'});
    TweenMax.set('.panel-03', {x:-300});
    TweenMax.set('.panel-04', {x:-300});
    TweenMax.set('.panel-05', {x:-300});
    TweenMax.set('.graph-line', {scaleX:0});
    TweenMax.set('#fr-logo-intro', {opacity:1});
    TweenMax.set('.ladder', {y:-900, left:"95px", width:"90px"});
    TweenMax.set('.cloud3', {top:"94px", left:"70px", width:"160px"});
    TweenMax.set('.cloud2', {top:"120px", left:"50px", width:"140px"});
    TweenMax.set('.cloud1', {left:"30px", top:"220px", width:"160px"});
    TweenMax.set('.cloud4', {top:"220px", left:"210px", width:"240px"});



    // Feature images
    // =========================
    bgImage01 = 'skybg.jpg';
    featureImage = 'ladder.png';
    cloudImage1 = 'cloud1.png';
    cloudImage2 = 'cloud2.png';
    cloudImage3 = 'cloud3.png';
    cloudImage4 = 'cloud4.png';


    // Copy
    // =========================


    $('.frame-2 p').html('THE SKY\'S<br>THE LIMIT');
    $('.frame-3 p').html('CLIMBING<br>THE<br>CORPORATE<br>LADDER');
    $('.frame-4 p').html('TAKE<br>THE LEAD<br>WITH<br>THE AFR');
    $('.frame-5 p').html('TRY<br>THE AFR<br>FREE FOR<br>1 MONTH');

    $('.cta-copy').html('Find out more');

    $('.bg-image-01').attr('src', bgImage01);
    $('.ladder').attr('src', featureImage);
    $('.cloud1').attr('src', cloudImage1);
    $('.cloud2').attr('src', cloudImage2);
    $('.cloud3').attr('src', cloudImage3);
    $('.cloud4').attr('src', cloudImage4);



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
        "skybg.jpg",
        "cloud1.png",
        "cloud2.png",
        "cloud3.png",
        "cloud4.png",
        "ladder.png",
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
    var tlClouds = new TimelineMax({repeat:1, repeatDelay:0});

    function cloudsAnimation() {
      tlClouds

      //.to('.cloud3', 0.5, {ease: Power1.easeInOut, y:"+=380"}, "-=0.25")

    }

    function featureAnimation() {
        tlFeature.to('.ladder', 4, {ease: Back.easeOut.config(1), y:170})
                 .fromTo('.cloud4', 9, {ease: Power1.easeInOut, y:-190}, {y:370}, "-=6")
                 .fromTo('.cloud2', 16, {ease: Power1.easeInOut, y:30}, {y:270}, "-=10")
                 .fromTo('.cloud3', 10, {ease: Power1.easeInOut, y:-290}, {y:340}, "-=16")
                 .fromTo('.cloud1', 16, {ease: Power1.easeInOut, y:-300}, {y:100}, "-=16")
                 .to('.ladder', 3, {ease: Power1.easeInOut, y:210}, "-=9")
        ;
        }


    const tl = new TimelineMax();



    tl
      .to('.panel-01', 1.8, {y:485, ease:Power1.easeInOut})
      .to('.panel-02', 1.3, {y:505, ease:Power1.easeInOut, backgroundColor:"#ffffff", opacity:1, onComplete: () => {
          TweenMax.set('.panel-01', {y:-250}) // Reset the panels

      }}, '-=1.3')
      .to('#fr-logo-intro', 1.3, {ease:Power1.easeInOut, top:"543px"}, "-=1.3")
      .to('#tag-line-intro', 1.3, {ease:Power1.easeInOut, opacity:0}, "-=1.3")
      .to('#logo-lockup-intro .fr-logo-path', 0.5, {ease:Power1.easeInOut, fill:"#1289ca"}, "-=0.85")
      .call(featureAnimation, [], this, "-=1.7")

      .staggerFrom('.frame-2 p .splitLines', 0.8, {y:-30, alpha:0, ease:Power1.easeInOut}, -0.08, "-=0.1")
      .staggerTo('.frame-2 p .splitLines', 0.8, {y:40, alpha:0, ease:Power1.easeInOut, delay:2}, -0.08)

      .staggerFrom('.frame-3 p .splitLines', 0.8, {y:-30, alpha:0, ease:Power1.easeInOut}, -0.08)
      .staggerTo('.frame-3 p .splitLines', 0.8, {y:30, alpha:0, ease:Power1.easeInOut, delay:1.5}, -0.08)
      .add('frame04', "-=0.8")


      .to('.panel-05', 1.6, {x:0, ease:Power1.easeInOut}, 'frame04')
      .to('.panel-04', 1.3, {x:0, ease:Power1.easeInOut}, 'frame04+=.3')
      .to('.panel-03', 1.1, {x:0, ease:Power1.easeInOut}, 'frame04+=.5')

      .staggerFrom('.frame-4 p .splitLines', 0.8, {y:30, alpha:0, ease:Power1.easeInOut}, 0.08, 'frame04+=1')
      .staggerTo('.frame-4 p .splitLines', 0.8, {y:-30, alpha:0, ease:Power1.easeInOut, delay:2}, 0.08)



      .staggerFrom('.frame-5 p .splitLines', 0.8, {y:30, alpha:0, ease:Power1.easeInOut}, 0.08)


      .from('.button', 0.8, {alpha:0, y:20, ease:Power1.easeOut}, "-=0.2")
      .to('.panel-02', 1, {y:460, ease:Power1.easeInOut}, "-=1.3")
      .to('#fr-logo-intro', 1, {y:-28, ease:Power1.easeInOut}, "-=1.3")
      .to('#tag-line-intro', 1, {ease:Power1.easeInOut, opacity:1}, "-=1.3")
      .to('#tag-line-intro .fr-logo-path', 1, {ease:Power1.easeInOut, fill:"#1289ca"}, "-=1.3")
      .from('#tag-line', 1, {alpha:0, ease:Power1.easeOut}, 'endFrame+=1')

      ;






    // Testing
    // =========================
    //tl.pause(6)


}
