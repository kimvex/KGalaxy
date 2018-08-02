import Index from './index'
window.Phaser = require('phaser-ce/build/custom/phaser-split');

class EventsOnClick {
  click() {
    if (this.shooter && this.enemy) {
      this.shooter = false
    } else if (!this.shooter && this.enemy){
      this.eventsOnClick.fire.call(this)
      this.shooter = true
    }
  }
  
  shoot() {
    if (this.game.time.now > this.firingTimer) {
      this.fire = this.player.bullets.getFirstExists(false)
      this.fireEnemy = this.enemy.munition.getFirstExists(false)

      try {
        if (this.enemy.vida <= 1) {
          console.log('porque?', this.enemy.vida)
          const name = this.enemy.name
          this.enemy.kill()
          this.enemy.nameP.destroy()
          this.enemys.createAlien.call(this, name, Phaser, (i) => { 
            /*const index = this.listEnemies.indexOf(i)
            console.log('listEnemies', i, this.listEnemies, true)
            this.listEnemies[index] = i*/
           }, true)
          this.selectable.destroy()
          this.player.bullets.destroy()
          this.shooter = false
          this.enemy = undefined
          return 
        } else {
          
                if (this.player.health <= 1) {
                  console.log(this.player.drones, 'yeah')
                  this.player.drones.drone().map(d => d.destroy())
                  this.player.text.destroy()
                  this.player.rank.destroy()
                  this.player.destroy()
          
                  this.selectable.destroy()
                  this.player.bullets.destroy()
                  this.enemy.munition.destroy()
                  this.shooter = false
                  return 
                }

                this.fire.reset(this.player.body.x, this.player.body.y);
                this.game.physics.arcade.moveToObject(this.fire, this.enemy, 1020);
                this.firingTimer = this.game.time.now + 300
                this.enemy.vida = this.enemy.vida - this.player.damage
                
                
                this.fireEnemy.reset(this.enemy.body.x, this.enemy.body.y);
                this.game.physics.arcade.moveToObject(this.fireEnemy, this.player, 600);
                this.player.health = this.player.health - this.enemy.damage
        }
  

      } catch(e) {
        console.log(e)
      }
    }
  }
  
  selectEnemy(enemy) {
    this.ship.stop.call(this)
    this.enemy = enemy
    if (this.selectable) {
      this.selectable.destroy()
    }
    this.selectable = this.game.add.sprite(this.enemy.world.x - 70, this.enemy.world.y - 70, 'selectable');
    this.game.physics.enable(this.selectable, Phaser.Physics.ARCADE);
    this.selectable.scale.setTo(.2, .2);
    this.eventsOnClick.followSelection.call(this, this.enemy, this.selectable)
  }

  fire() {
    this.player.bullets = this.game.add.group();
    this.player.bullets.enableBody = true;
    this.player.bullets.physicsBodyType = Phaser.Physics.ARCADE;
    this.player.bullets.createMultiple(300, 'laser');
    this.player.bullets.setAll('anchor.x', 0.1);
    this.player.bullets.setAll('anchor.y', 0.1);
    this.player.bullets.setAll('outOfBoundsKill', true);
    this.player.bullets.setAll('checkWorldBounds', true);
  }

  followSelection(enemy, selectable) {
    this.game.physics.arcade.moveToXY(selectable, enemy.x - 70, enemy.y - 70, 80);
  }
}

export default EventsOnClick
