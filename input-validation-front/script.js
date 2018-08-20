$(function () {
  $('.name').on("keydown", function () {
    var textLength = $(this).val().length
    if (textLength > 10) {
      $(this).css('border', '1px solid red')
      $('span').css('display', 'block')
    }
  })
})