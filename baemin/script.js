$(function () {
  $('#fullpage').fullpage({
    //options here
    autoScrolling: true,
    anchors: ['content1', 'content2', 'content3'],
    scrollHorizontally: true,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    navigation: true,
    navigationPosition: 'right',
    onLeave: function (origin, destination, direction) {
      if (destination.anchor === 'content1') $('.appDown-image').css('opacity', 0)
      else $('.appDown-image').css('opacity', 1)
    }
  });
})