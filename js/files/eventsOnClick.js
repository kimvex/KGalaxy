import Index from './index'

class EventsOnClick {
  click() {
    console.log('click')
    /*console.log(pointer.position)
    this.bodies = this.game.physics.p2.hitTest(pointer.position, [this.portal1]);

    console.log(this.bodies.length)
    for (var i = 0; i < this.bodies.length; i++) {
      //	The bodies that come back are p2.Body objects.
      //	The parent property is a Phaser.Physics.P2.Body which has a property called 'sprite'
      //	This relates to the sprites we created earlier.
      //	The 'key' property is just the texture name, which works well for this demo but you probably need something more robust for an actual game.
      console.log(this.bodies[i].parent.sprite.key, 'yyyy')
      let result = result + this.bodies[i].parent.sprite.key;

      if (i < this.bodies.length - 1) {
        result = result + ', ';
        console.log(result)
      }
    }
    //console.log(this, 'ehats?')
    //console.log(this.bodies, [this.portal1],'bodies')*/
  }

  fire(bullet, alien) {
    console.log(alien, '-----')
  }
}

export default EventsOnClick
