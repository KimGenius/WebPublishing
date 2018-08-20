$(function() {
  // 움직일 거리
  var ANIMATION_WIDTH = -100
  // 몇번째 요소인지
  var index = 1
  // 요소들의 갯수
  var MAX_INDEX = $('.ani-div > ul > li').length -1
  $('.slide-div > span:first-child').css('display', 'none')
  $('.slide-div > span:first-child').click(function () {
    if (index === 1) $(this).css('display', 'none')
    index--
    $('.ani-div > ul').animate({
      left: ANIMATION_WIDTH * index
    }, 300)
  })
  $('.slide-div> span:last-child').click(function () {
    if (index === MAX_INDEX) $(this).css('display', 'none')
    $('.ani-div > ul').animate({
      left: ANIMATION_WIDTH * index
    }, 300)
    index++
    console.log(index)
    if (index !== 1) $('.slide-div > span:first-child').css('display', 'inline-block')
  })
})