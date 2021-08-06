class Hero{
    constructor(x,y,r){
        var options = {
            density : 1.2,
            frictionAir : 1
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("images/Superhero.png");
        this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        this.image(this.image,0,0,this.width,this,height);
        pop();
    }
}