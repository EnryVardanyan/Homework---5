const Airplane = {
    name : "My plane",
    isFlying : false
}
Airplane.takeOff = function(){
    this.isFlying = true
}
Airplane.land = function(){
    this.isFlying = false
}