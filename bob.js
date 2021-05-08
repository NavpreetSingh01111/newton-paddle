class Bob {
    constructor (x,y,radius){
        var options = {
            "restitution" : 1.2 
        }

        this.body = Bodies.circle (x,y,radius,options)
        this.radius = radius
        World.add (world,this.body) 
    }
    display(){
        push()
        translate (this.body.position.x,this.body.position.y)
        ellipseMode(CENTER)
        ellipse(0,0,this.radius,this.radius)
        fill("pink")
        pop()

    }
}