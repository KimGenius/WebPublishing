$(function () {
  $('#fullpage').fullpage({
    //options here
    autoScrolling: true,
    anchors: ['content1', 'content2', 'content3', 'content4'],
    scrollHorizontally: true,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    navigation: true,
    navigationPosition: 'right',
    afterLoad: function (origin, destination) {
      if (destination) {
        console.log(destination.anchor)
        if (destination.anchor === 'content2') {
          $('.bike').animate({
            right: '-5%',
            bottom: '-3%'
          }, 1000, 'easeInElastic')
        } else if (destination.anchor === 'content3') {
          $('.people').animate({
            bottom: '0%'
          }, 500, 'easeOutCubic')
        } else if (destination.anchor === 'content4') {
          $('.flag').animate({
            bottom: '0%'
          }, 500, 'easeOutCubic')
        }
      }
    },
    onLeave: function (origin, destination, direction) {
      if (destination.anchor === 'content1') $('.appDown-image').css('opacity', 0)
      else $('.appDown-image').css('opacity', 1)
    }
  });
})