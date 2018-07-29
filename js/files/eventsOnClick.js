import Index from './index'

class EventsOnClick {
  click() {
    if (this.shooter && this.enemy) {
      this.shooter = false
    } else if (!this.shooter && this.enemy){
      this.shooter = true
    }
  }

  shoot() {
    if (this.game.time.now > this.firingTimer) {
      this.fire = this.bullets.getFirstExists(false)

      this.fire.reset(this.player.body.x, this.player.body.y);

      this.game.physics.arcade.moveToObject(this.fire, this.enemy, 320);
      this.firingTimer = this.game.time.now + 500
    }
  }

  selectEnemy(enemy) {
    this.ship.stop.call(this)
    this.enemy = enemy
  }

  fire(bullet, alien) {
    
  }
}

export default EventsOnClick
