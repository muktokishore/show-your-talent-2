AFRAME.registerComponent("camera-head",{
  tick:function(){
    var cameraEl = this.el.sceneEl.camera.el;
    // console.log(cameraEl.object3D.position)
    var x = cameraEl.object3D.position.x;
    var y = cameraEl.object3D.position.y;
    var z = cameraEl.object3D.position.z;
    if(z<-35.5){
      var position = x+" "+y+" "+ "-35.5";
      cameraEl.setAttribute("position",position)
    }
    if (x<-13.5) {
      position = "-13.5"+" "+y+" "+z;
      cameraEl.setAttribute("position",position)
    }
    if (x>13.5) {
      position = "13.5"+" "+y+" "+z;
      cameraEl.setAttribute("position",position)
    }
    if(z>-8.5&&z<-7){
      if(x<-1.44||x>1.44){
        position = x+" "+y+" "+"-7"
        cameraEl.setAttribute("position",position)
      }
    }
    if(z>=15){
      var higherLimit = (z+5)/Math.tan(1.0123);
      var lowerLimit = higherLimit*-1;

    }
    if(z>-15.6&&x>-2.5&&x<2.3&&z<-13.1){
      if(z>-15.6){
        position = x+" "+y+" "+"-15.6"
        cameraEl.setAttribute("position",position)
      }
      if(z<-13.1){
        position = x+" "+y+" "+"-13.1"
        cameraEl.setAttribute("position",position)
      }
      
    }
    if(z>5.5){
      position = x+" "+y+" "+"5.5"
      cameraEl.setAttribute("position",position)
    }
  }
})