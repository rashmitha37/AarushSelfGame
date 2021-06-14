class Quaffle{
    constructor(x, y, radius){
        var options={
          restitution:0.8,
          density:0.04,
          frictionAir:0.05,
          isStatic: true
        }
        this.body=Bodies.circle(x, y, radius, options)
        this.radius=radius
        this.image=loadImage("Img/Quaffle.png")
        World.add(world,this.body)
      }
      display(){
    var pos = this.body.position
    var ang = this.body.angle
    push()
    translate(pos.x, pos.y)
    rotate(ang)
    ellipseMode(RADIUS)
    fill("brown")
    image(this.image, 0, 0, this.radius, this.radius)
    pop()
      }
}