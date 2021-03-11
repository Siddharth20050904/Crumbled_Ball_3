class Dustbin {
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png")
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER);
        image(this.image,0,-100,this.width,this.height);
        pop();
    }
};