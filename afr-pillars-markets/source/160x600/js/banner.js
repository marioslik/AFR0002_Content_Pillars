var videoUrl,
  isDesktop, playVideo = false,
  clickTag, bgImage01, bgImage02, bgImage03, featureImage, houseImage, roofImage, treeImage, timingValues, frame01, frame02, frame03, frame04, frame05;

$(document).ready(function() {
  FastClick.attach(document.body), init()
});

function init() {
  TweenMax.set(".feature", {
    x: -120,
    y: 20,
    scale: 1,
    display: "block"
  }), TweenMax.set(".logo-container", {
    y: 26
  }), TweenMax.set(".cta-arrow", {
    rotation: 45,
    transformOrigin: "50% 50%"
  }), TweenMax.set(".panel-03", {
    x: -300
  }), TweenMax.set(".panel-04", {
    x: -300
  }), TweenMax.set(".panel-05", {
    x: -300
  }), TweenMax.set(".graph-line", {
    scaleX: 0
  }), TweenMax.set("#fr-logo-intro", {
    opacity: 1
  }), TweenMax.set("#bull-horns", {
    drawSVG: "0%",
    immediateRender: !1
  }), TweenMax.set("#bull-bottom", {
    drawSVG: "0%",
    immediateRender: !1
  }), TweenMax.set("#bull-extra", {
    drawSVG: "0%",
    immediateRender: !1
  }), bgImage01 = "skybg.jpg", $(".frame-2 p").html("MARKET<br>BULLS<br>CHARGE<br>AHEAD"), $(".frame-3 p").html('Head the<br>investment<br>herd'), $(".frame-4 p").html("MASTER<br>THE<br>MARKETS<br>WITH<br>THE AFR"), $(".frame-5 p").html("TRY<br>THE AFR<br>FREE FOR<br>1 MONTH"), $(".cta-copy").html("Find out more"), $(".bg-image-01").attr("src", bgImage01), $(".feature-image").attr("src", featureImage), $(".house").attr("src", houseImage), $(".roof").attr("src", roofImage), $(".tree").attr("src", treeImage), clickTag = "http://google.com", $("#banner").on("click", function() {
    console.log("clicktag invoked"), window.open(window.clickTag)
  }), timingValues = "1,3,7,10,13", timingValues = timingValues.split(","), frame01 = timingValues[0], frame02 = timingValues[1], frame03 = timingValues[2], frame04 = timingValues[3], frame05 = timingValues[4];
  var e = ["skybg.jpg"];
  preloadimages(e).done(function(e) {
    $("#preloader").hide(), $("#banner").show(), start()
  })
}

function start() {
  function e() {
    n.staggerTo("#graph-lines .graph-line", 1, {
      ease: Power1.easeInOut,
      scaleX: 1
    }, .05).to("#bull-horns .cls-1", 1.3, {
      ease: Power1.easeInOut,
      drawSVG: "0% 100%"
    }, "+=0.0").to("#bull-bottom .cls-1", 1.3, {
      ease: Power1.easeInOut,
      drawSVG: "0% 100%"
    }, "-=0.4").to("#bull-extra1", .75, {
      ease: Power1.easeInOut,
      drawSVG: "0% 100%"
    }, "+=0.5").add("endOfLine").to("#bull-extra2", .5, {
      ease: Power1.easeInOut,
      drawSVG: "0% 100%"
    }, "endOfLine")
  }
  var a = $(".frame-2 p");
  new SplitText(a, {
    type: "words"
  }).split({
    type: "lines, chars, words",
    linesClass: "splitLines"
  });
  var t = $(".frame-3 p");
  new SplitText(t, {
    type: "words"
  }).split({
    type: "lines, chars, words",
    linesClass: "splitLines"
  });
  var r = $(".frame-4 p");
  new SplitText(r, {
    type: "words"
  }).split({
    type: "lines, chars, words",
    linesClass: "splitLines"
  });
  var s = $(".frame-5 p");
  new SplitText(s, {
    type: "words"
  }).split({
    type: "lines, chars, words",
    linesClass: "splitLines"
  });
  var n = new TimelineMax;
  (new TimelineMax).to(".panel-01", 1.8, {
    y: 485,
    ease: Power1.easeInOut
  }).to(".panel-02", 1.3, {
    y: 505,
    ease: Power1.easeInOut,
    backgroundColor: "#ffffff",
    opacity: 1,
    onComplete: function() {
      TweenMax.set(".panel-01", {
        y: -250
      })
    }
  }, "-=1.3").to("#fr-logo-intro", 1.3, {
    ease: Power1.easeInOut,
    top: "543px"
  }, "-=1.3").to("#tag-line-intro", 1.3, {
    ease: Power1.easeInOut,
    opacity: 0
  }, "-=1.3").to("#logo-lockup-intro .fr-logo-path", .5, {
    ease: Power1.easeInOut,
    fill: "#1289ca"
  }, "-=0.85").call(e, [], this, "-=0.7").staggerFrom(".frame-2 p .splitLines", .8, {
    y: -30,
    alpha: 0,
    ease: Power1.easeInOut
  }, -.08, "-=0.1").staggerTo(".frame-2 p .splitLines", .8, {
    y: 30,
    alpha: 0,
    ease: Power1.easeInOut,
    delay: 2
  }, -.08).staggerFrom(".frame-3 p .splitLines", .8, {
    y: -30,
    alpha: 0,
    ease: Power1.easeInOut
  }, -.08, "-=0.1").staggerTo(".frame-3 p .splitLines", .8, {
    y: 30,
    alpha: 0,
    ease: Power1.easeInOut,
    delay: 2.5
  }, -.08).add("frame04", "-=0.8").to(".panel-05", 1.6, {
    x: 0,
    ease: Power1.easeInOut
  }, "frame04").to(".panel-04", 1.3, {
    x: 0,
    ease: Power1.easeInOut
  }, "frame04+=.3").to(".panel-03", 1.1, {
    x: 0,
    ease: Power1.easeInOut
  }, "frame04+=.5")
  .to(".panel-02", 1, {
    y: 460,
    ease: Power1.easeInOut
  }, "-=1.3").to("#fr-logo-intro", 1, {
    y: -28,
    ease: Power1.easeInOut
  }, "-=1.3").to("#tag-line-intro", 1, {
    ease: Power1.easeInOut,
    opacity: 1
  }, "-=1.3").to("#tag-line-intro .fr-logo-path", 1, {
    ease: Power1.easeInOut,
    fill: "#1289ca"
  }, "-=1.3").from("#tag-line", 1, {
    alpha: 0,
    ease: Power1.easeOut
  }, "endFrame+=1")
  .staggerFrom(".frame-4 p .splitLines", .8, {
    y: 30,
    alpha: 0,
    ease: Power1.easeInOut
  }, .08, "frame04+=1").staggerTo(".frame-4 p .splitLines", .8, {
    y: -30,
    alpha: 0,
    ease: Power1.easeInOut,
    delay: 2
  }, .08).staggerFrom(".frame-5 p .splitLines", .8, {
    y: 30,
    alpha: 0,
    ease: Power1.easeInOut
  }, .08).from(".button", .8, {
    alpha: 0,
    y: 20,
    ease: Power1.easeOut
  }, "-=0.2")
  ;
}
