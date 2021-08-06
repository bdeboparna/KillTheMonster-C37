class Monster{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            restitution : 0.5,
            friction : 1
        }

        this.body = Bodies.rectangle(x,y,width,heght,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/Monster.png");
        World.add(world,this.image);
    }

    display(){
        push();
        translate(this.body.position.x,this.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}