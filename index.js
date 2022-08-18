let now
function time(){
  setTimeout(()=>{
    now = new Date()
    document.querySelector('.h-hand').style.transform = "rotate("+30*(now.getHours()+now.getMinutes()/60+now.getSeconds()/3600)+"deg)"
    document.querySelector('.m-hand').style.transform = "rotate("+6*(now.getMinutes()+now.getSeconds()/60+now.getMilliseconds()/60000)+"deg)"
    document.querySelector('.s-hand').style.transform = "rotate("+6*(now.getSeconds()
    // uncomment line below for s-hand move smoothly
    // +now.getMilliseconds()/1000
    )+"deg)"
    time()
  }, 10)
}