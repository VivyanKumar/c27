class Slingshot {
    constructor(bodyA,bodyB) {
        var slingshot_options={
                bodyA : bodyA,
                bodyB : bodyB,
                length : 20,
                stiffness : 0.9
        };

        this.constraint = Constraint.create(slingshot_options);
        World.add(world,this.constraint);
    }
        display(){
            strokeWeight(4);
            stroke("red");
            line(this.constraint.bodyA.position.x,this.constraint.bodyA.position.y,this.constraint.bodyB.position.x,this.constraint.bodyB.position.y);
        }
}