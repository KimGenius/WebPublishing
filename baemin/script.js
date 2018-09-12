$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() === 0) {
      $('.appDown-image').css('opacity', 0)
    } else {
      $('.appDown-image').css('opacity', 1)
    }
  })
})