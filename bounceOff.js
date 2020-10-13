
function bounceOff(obj3,obj4){
if (obj3.x - obj4.x < obj4.width/2 + obj3.width/2
  && obj4.x - obj3.x < obj4.width/2 + obj3.width/2) {
obj3.velocityX = obj3.velocityX * (-1);
fixedRect.velocityX = obj4.velocityX * (-1);
}
if (obj3.y - obj4.y < obj4.height/2 + obj3.height/2
&& obj4.y - obj3.y < obj4.height/2 + obj3.height/2){
obj3.velocityY = obj3.velocityY * (-1);
obj4.velocityY = obj4.velocityY * (-1);
}
}