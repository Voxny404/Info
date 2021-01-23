let informationArray = []; // stored user information

// gets GPU
try {
  let canvas = document.createElement('canvas');
  let gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl'),
      debugInfo, renderer

  if (gl) {
    debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    document.getElementById("gpu").innerHTML = `GPU : ${renderer}`
    informationArray.push({gpu: renderer})

  }
} catch (e) {}

// gets System
document.getElementById("platfom").innerHTML = `System : ${navigator.platform}`

// gets RAM
document.getElementById("ram").innerHTML = `RAM : ${navigator.deviceMemory} GB`

// gets processors
document.getElementById("cpus").innerHTML = `Processors : ${navigator.hardwareConcurrency }`

// checks for touch function
if(navigator.maxTouchPoints == '0'){
  document.getElementById("isTouch").innerHTML = `Touch : false`
  informationArray.push({isTouch: false})
} else {
  document.getElementById("isTouch").innerHTML = `Touch : true`
  informationArray.push({isTouch: true})
}

//checks download rate
setInterval(()=>{document.getElementById("downloadSpeed").innerHTML = `Download speed : ${navigator.connection.downlink  }`},2000)

//checks Online status
setInterval(()=>{document.getElementById("OnlineCheck").innerHTML = `Online : ${navigator.onLine}`},2000)

// gets location
navigator.geolocation.getCurrentPosition((successCallback) =>
{
  document.getElementById("lat").innerHTML = `Laditude : ${successCallback.coords.latitude}`
  document.getElementById("lon").innerHTML = `Longitude: ${successCallback.coords.longitude}`
  informationArray.push({lad: successCallback.coords.latitude},{lon:successCallback.coords.latitude})
})

// gets public ip
function getIP(json){
  document.getElementById("publicIp").innerHTML = `Public IP : ${json.ip}`
  informationArray.push({publicIP: json.ip})
}

//maps info
informationArray.push(
  {platform: navigator.platform},
  {ram: navigator.deviceMemory},
  {processors: navigator.hardwareConcurrency},
  {downloadSpeed:navigator.connection.downlink},
  {isOnline:navigator.onLine}
)
