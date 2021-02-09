class Man {
   
  constructor(x,y){
      var options = {
          restitution: 0.5,
          friction:1, 
          density:1.5
      }
      this.body = Bodies.rectangle(x,y,100,100, options);
      this.width=100;
      this.height=100;
      this.image=loadImage("sprites/images/Superhero-01.png")
      World.add(world, this.body);
  }
  
  display(){
      var pos  =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();

  }
}
