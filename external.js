function makeCanvas() {
  const target = document.getElementById('box')

  let html = ''

  const div = "<div class='pixel'></div>"

  for (var i = 2500 - 1; i >= 0; i--) {
    
    html = html + div
  }

  target.innerHTML = html

  return target
}

const makeActive = function() {
  console.log('mouse down')
  $('.pixel').on('mouseenter', function() {
    console.log('mouse enter')
    $(this).css('background-color', 'red')
  })
}
