class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image =loadImage("block.png")
      World.add(world, this.body);
      this.visibility=255
    }
    display(){
        
      if(this.body.speed<5){
        //var angle = this.body.angle;
       // var pos= this.body.position;
       // push()
       // translate(pos.x, pos.y)
     //   rotate(angle)
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y,0,0)
        //pop()
      }
       else{
         World.remove(world,this.body)
         push()
         this.visibility=this.visibility-5
         tint(255,this.visibility)
         pop()

       }
      
    }
}