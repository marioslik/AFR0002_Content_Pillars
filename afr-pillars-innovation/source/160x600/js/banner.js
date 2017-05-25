var videoUrl;
var md = new MobileDetect(window.navigator.userAgent);
var isDesktop;
var playVideo = false;
var clickTag;
var bgImage01, bgImage02, bgImage03;
var featureImage;

console.log('start')

// Banner timings
var timingValues;
var frame01, frame02, frame03, frame04, frame05;

$(document).ready(() => {
    FastClick.attach(document.body);
    init();
})

function init() {

    //console.log('init')

    // Init CSS
    // =========================
    TweenMax.set('.logo-container', {y:26})
    TweenMax.set('.cta-arrow', {rotation:45, transformOrigin:'50% 50%'})

    TweenMax.set('.feature', {x:-22, y:300, scale:1, display:'block'})
    TweenMax.set('.panel-03', {x:-300}) // Reset the panels
    TweenMax.set('.panel-04', {x:-300}) // Reset the panels
    TweenMax.set('.panel-05', {x:-300}) // Reset the panels
    TweenMax.set('.eye', {alpha:0})
    TweenMax.set('#droid-1', {scale:1, transformOrigin:"100% 0%", x:50})
    TweenMax.set('#droid-2', {scale:1, transformOrigin:"100% 0%", x:50})
    TweenMax.set('#droid-3', {scale:1, transformOrigin:"100% 0%", x:50})
    TweenMax.set('#droid-4', {scale:1, transformOrigin:"100% 0%", x:50, alpha:0})

    // Feature images
    // =========================
    featureImage = 'droid.png'
    bgImage01 = 'skybg.jpg'

    // Copy
    // =========================


    $('.frame-2 p').html('PARANOID<br>DROID')
    $('.frame-3 p').html('THE RISE OF<br>AUTOMATION')
    $('.frame-4 p').html('STAY<br>AHEAD<br>OF THE<br>CURVE<br>WITH<br>THE AFR')
    $('.frame-5 p').html('TRY<br>THE AFR<br>FREE FOR<br>1 MONTH')

    $('.cta-copy').html('Find out more')

    $('.bg-image-01').attr('src', bgImage01)
    $('.droid').attr('src', featureImage)



    // Clicktag
    // =========================
    clickTag  = 'http://google.com'



    $('#banner').on('click', () => {
        console.log('clicktag invoked')
        window.open(window.clickTag)
    })

    // Timing values
    // =========================
    timingValues = '1,3,7,10,13'
    timingValues = timingValues.split(',')

    frame01 = timingValues[0]
    frame02 = timingValues[1]
    frame03 = timingValues[2]
    frame04 = timingValues[3]
    frame05 = timingValues[4]

    const manifest = [
        "droid.png",
        "skybg.jpg"
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

    var tlEyes = new TimelineMax({repeat:-1});

    function eyesFlickering() {
      tlEyes.to('.eye', 0.75, {ease:Power3.easeInOut, scale:0.85})
            .to('.eye', 0.75, {ease:Power3.easeInOut, scale:1});
    }

    function featureAnimation() {


        tlFeature.to('.feature', 0.65, {ease:Power1.easeOut, y:35, rotation:0})
                 .to('.main-droid .eye', 0.75, {ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 1, points: 30, taper: "none", randomize: true, clamp: false }), alpha:1, delay:0.5})
                 .to('.feature', 0.85, {ease:Power3.easeInOut, x:10}, "+=1.5")
                 .to('.main-droid', 0.85, {ease:Power3.easeInOut, y:'+=10'}, "-=0.85")
                 .to('#droid-1', 0.85, {ease:Power3.easeInOut, scale:0.75, alpha:1, x:40, y:4}, "-=0.85")
                 .to('#droid-2', 0.85, {ease:Power3.easeInOut, scale:0.7, alpha:0.9, x:25, y:0}, "-=0.85")
                 .to('#droid-3', 0.85, {ease:Power3.easeInOut, scale:0.65, alpha:0.8, x:8, y:0}, "-=0.85")
                 .to('#droid-4', 0.85, {ease:Power3.easeInOut, scale:0, alpha:0, x:-10, y:0}, "-=0.85")
                 .staggerTo('.clone .eye', 0.3, {ease: RoughEase.ease.config({ template: Power0.easeNone, strength: 1, points: 30, taper: "none", randomize: true, clamp: false }), alpha:1, delay:0.5}, -0.07)
                 .call(eyesFlickering, [], this, "-=1.8")
                 .to('#droid-4', 1.1, {ease:Power3.easeInOut, scale:1, alpha:0, x:10, y:0, delay:0.4})
                 .to('#droid-3', 1.1, {ease:Power3.easeInOut, scale:1, alpha:0, x:50, y:0}, "-=1.1")
                 .to('#droid-2', 1.1, {ease:Power3.easeInOut, scale:1, alpha:0, x:50, y:0}, "-=1.1")
                 .to('#droid-1', 1.1, {ease:Power3.easeInOut, scale:1, alpha:0, x:50, y:0}, "-=1.1")
                 .to('.feature', 1.1, {ease:Power3.easeInOut, x:300, y:'+=30', autoAlpha:0}, "-=0.75")
                 ;
        }


    const tl = new TimelineMax();



    tl//.set('.feature', {x:0, y:0, display:'block'})
      .set('.bg-image-01', {x:0, y:0, display:'block'})
      .set('#fr-logo-intro', {opacity:1})
      .to('.panel-01', 1.8, {y:485, ease:Power1.easeInOut})
      .to('.panel-02', 1.3, {y:505, ease:Power1.easeInOut, backgroundColor:"#ffffff", opacity:1, onComplete: () => {
          TweenMax.set('.panel-01', {y:-250}) // Reset the panels

      }}, '-=1.3')
      .to('#fr-logo-intro', 1.3, {ease:Power1.easeInOut, top:"543px"}, "-=1.3")
      .to('#tag-line-intro', 1.3, {ease:Power1.easeInOut, opacity:0}, "-=1.3")
      .to('#logo-lockup-intro .fr-logo-path', 0.5, {ease:Power1.easeInOut, fill:"#1289ca"}, "-=0.85")
      .call(featureAnimation, [], this, "-=0.7")

      .staggerFrom('.frame-2 p .splitLines', 0.8, {y:-30, alpha:0, ease:Power1.easeInOut}, -0.08, "-=0.1")
      .staggerTo('.frame-2 p .splitLines', 0.8, {y:40, alpha:0, ease:Power1.easeInOut, delay:1.5}, -0.08)

      .staggerFrom('.frame-3 p .splitLines', 0.8, {y:-30, alpha:0, ease:Power1.easeInOut}, -0.08, "-=0.1")
      .staggerTo('.frame-3 p .splitLines', 0.8, {y:30, alpha:0, ease:Power1.easeInOut, delay:3.5}, -0.08)

      .add('frame04', "-=0.6")
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
    // tl.pause(3)

}
