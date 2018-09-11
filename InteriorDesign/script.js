$(function () {
  $('header a').click(function () {
    var id = $(this).attr('href')
    var scrollTop = id === '#' ? 0 : $(id).offset().top
    $("html, body").animate({
      scrollTop
    }, 500)
  })
})