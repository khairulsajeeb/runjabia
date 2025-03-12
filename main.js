let player = document.querySelector('.player')
let obstacle = document.querySelector('.obstacle')

document.addEventListener('click', ap)


function ap() {
  player.classList.add('ap')
  
  setTimeout(()=>{
    player.classList.remove('ap')
  },1000)
}



setInterval(()=>{
  px = parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
  py = parseInt(window.getComputedStyle(player, null).getPropertyValue('top'));

  ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
  oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
  
  dx = Math.abs(ox-px)
  dy = Math.abs(oy-py)
  
  let distance = Math.sqrt( dx*dx + dy*dy )
  collide(distance)
}, 500)


function collide(distance) {
  if (distance < 55) {
    alert('collide')
  } else {
    console.log('ok')
  }
}