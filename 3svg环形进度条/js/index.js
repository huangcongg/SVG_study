var processDom = document.querySelector(".progress")
var textDom = document.querySelector(".text")
function rotateCircle (percent) {
  // 获取svg圆形环的总长,通过获取半径长度算出总长
  var circleLength = Math.floor(2 * Math.PI * parseInt(processDom.getAttribute("r")));
  // 按照百分比,算出进度环的长度
  var value = percent*circleLength/100;
  // 红色rgb是255,0,0
  // 蓝色rgb是0,191,255
  var red = 255 + parseInt((0-255)/100*percent);
  var green = 0 + parseInt((191-0)/100*percent);
  var blue = 0 + parseInt((255-0)/100*percent);
  // 设置stroke-dasharray和路径的颜色
  processDom.setAttribute('stroke-dasharray', value + ", 10000");
  processDom.setAttribute('stroke', `rgb(${red},${green},${blue})`);
  // 设置文本内容和颜色
  textDom.innerHTML = percent + '%';
  textDom.setAttribute("fill", `rgb(${red},${green},${blue})`)
}

// 30毫秒变化将进度+1
let num = 0;
setInterval(() => {
  num++;
  if(num>100){
    num = 0
  }
  rotateCircle(num)
},30)