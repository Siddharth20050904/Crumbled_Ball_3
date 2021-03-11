class Ball {
    constructor(x,y,width,height,angle){
        var options = {
            isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:0.8
        }
       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
};