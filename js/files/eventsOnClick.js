import Index from './index'
window.Phaser = require('phaser-ce/build/custom/phaser-split');

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
      if (this.enemy.vida <= 0) {
        const name = this.enemy.name
        this.enemy.kill()
        this.enemy.nameP.destroy()
        this.shooter = false
        this.enemy = undefined
        this.fire.kill()
        this.enemys.createAlien.call(this, name, Phaser)
        this.selectable.destroy()
        return
      }
      this.game.physics.arcade.moveToObject(this.fire, this.enemy, 320);
      this.firingTimer = this.game.time.now + 500
      this.enemy.vida = this.enemy.vida - 10
    }
  }
  
  selectEnemy(enemy) {

    this.ship.stop.call(this)
    this.enemy = enemy
    if (this.selectable) {
      this.selectable.destroy()
    }
    this.selectable = this.game.add.sprite(-10, 0, 'selectable');
    this.selectable.scale.setTo(.2, .2);
    this.selectable.x = this.enemy.world.x - 70
    this.selectable.y = this.enemy.world.y - 70
  }

  fire(bullet, alien) {
    
  }
}

export default EventsOnClick
