window.PIXI = require('phaser-ce/build/custom/pixi');
window.p2 = require('phaser-ce/build/custom/p2');
window.Phaser = require('phaser-ce/build/custom/phaser-split');

//const Phaser = window.Phaser

import MoveAndStopPlugin from "phaser-move-and-stop-plugin";
import Nave from './nave'
import Drones from './drones'
import EventsOnClick from "./eventsOnClick";

class KGalaxy {
  init(game) {
    this.game = game;
  }

  preload() {
    this.game.load.image('background', './assets/mapas/56A.jpg');
    this.game.load.spritesheet('player', './assets/naves/33.png');
    this.game.load.spritesheet('player2', './assets/naves/17.png');
    this.game.load.spritesheet('player3', './assets/naves/49.png');
    this.game.load.spritesheet('player4', './assets/naves/1.png');
    this.game.load.spritesheet('player5', './assets/naves/59.png');
    this.game.load.spritesheet('player6', './assets/naves/39.png');
    this.game.load.spritesheet('player7', './assets/naves/27.png');
    this.game.load.spritesheet('player8', './assets/naves/7.png');
    this.game.load.spritesheet('iris1', './assets/drones/BvluCKE.png');
    this.game.load.spritesheet('iris2', './assets/drones/XwsHV70.png');
    this.game.load.spritesheet('iris3', './assets/drones/yDoPK8c.png');
    this.game.load.spritesheet('iris4', './assets/drones/RaKyUVE.png');
    this.game.load.spritesheet('iris5', './assets/drones/Qv9xsEi.png');
    this.game.load.spritesheet('iris6', './assets/drones/3g6M7bR.png');
    this.game.load.spritesheet('iris7', './assets/drones/Up9S8En.png');
    this.game.load.spritesheet('iris8', './assets/drones/T6tuLeE.png');
    this.game.load.image('rank', './assets/rangos/103_rank20.png');
    this.game.load.image('portal1', './assets/portales/MgChHOY.png');
    this.game.load.image('laser', './assets/laser/x1.png');
  }

  create() {
    this.emenys = [this.portal1, this.portal2]
    this.firingTimer = 0

    this.game.add.tileSprite(1386, 2920, 3840, 2160, 'background');
    
    this.game.world.setBounds(0, 0, 8000, 8000);
    
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;

    //	Enable the physics bodies on all the sprites and turn on the visual debugger
    //this.game.physics.p2.enable([this.portal1], true);


    this.ship = new Nave()
    this.ship.shipConstruction(this, Phaser)
    //console.log(this.ship.player, 'whats?')

    const player = this.ship.player

    //
    // this.bullets = this.game.add.weapon(30, 'laser')
    // this.bullets.bulletSpeed = 600;
    // this.bullets.trackSprite(player, 0, 0, true)
    // this.bullets.fireRate = 1000;
    this.bullets = this.game.add.group();
    this.bullets.enableBody = true;
    this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
    this.bullets.createMultiple(3000, 'laser');
    this.bullets.setAll('anchor.x', 0.1);
    this.bullets.setAll('anchor.y', 0.1);
    this.bullets.setAll('outOfBoundsKill', true);
    this.bullets.setAll('checkWorldBounds', true);

    this.drones = new Drones()
    this.drones.createDrone(this, this.ship.player, Phaser)

    this.rank = this.game.add.sprite(Math.floor(player.x + player.width / 7 - 63), Math.floor(player.y + player.height / 1.3), 'rank');
    this.rank.anchor.setTo(0.5, 0.5);
    this.game.physics.enable(this.rank, Phaser.Physics.ARCADE)

    const style = {
      font: "16px Arial", fill: "#FFFFFF", wordWrap: true, wordWrapWidth: player.width, align: "center", marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block'
    };

    this.text = this.game.add.text(Math.floor(player.x + player.width / 7 - 50), Math.floor(player.y + player.height / 1.5), "- Buraky -", style);

    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.shooter = false
    this.eventsOnClick = new EventsOnClick()
    
    this.key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.CONTROL);
    this.key1.onDown.add(this.eventsOnClick.click, this);    

    //  Notice that the sprite doesn't have any momentum at all,
    //  it's all just set by the camera follow type.
    //  0.1 is the amount of linear interpolation to use.
    //  The smaller the value, the smooth the camera (and the longer it takes to catch up)
    this.game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 1, 1);
    //this.game.moveAndStop = this.game.plugins.add(MoveAndStopPlugin);
    this.x
    this.y
    this.angle
    this.enemy

    //this.game.physics.p2.enable([ this.portal1 ], true);
    this.iterating
    this.emenys.map((e, index) => {
      // Portal izquierda abajo
      if (this.iterating < index || index > 0) {
        e = this.game.add.sprite(800, 4786, 'portal1');
      } else {
        e = this.game.add.sprite(1775, 4786, 'portal1');
      }
      e.anchor.setTo(0.5, 0.5);
      e.enableBody = true;
      //e.physicsBodyType = Phaser.Physics.ARCADE;
      this.game.physics.enable(e, Phaser.Physics.ARCADE);

      e.inputEnabled = true;
      e.events.onInputDown.add(this.eventsOnClick.selectEnemy.bind(this, e), this)
    })
  }

  update() {
    
    //this.player.body.setZeroVelocity();
    this.player = this.ship.player
    if (this.game.input.activePointer.isDown) {
      //this.player.body.moveRight(180);
      this.text.x = Math.floor(this.player.x + this.player.width / 7 - 50);
      this.text.y = Math.floor(this.player.y + this.player.height / 1.5);

      this.rank.x = Math.floor(this.player.x + this.player.width / 7 - 63);
      this.rank.y = Math.floor(this.player.y + this.player.height / 1.3);
      this.x = this.game.input.activePointer.worldX
      this.y = this.game.input.activePointer.worldY
      
      this.angle = this.game.physics.arcade.angleToPointer(this.player)
      this.game.physics.arcade.moveToXY(this.player, Math.floor(this.game.input.activePointer.worldX), Math.floor(this.game.input.activePointer.worldY), 280, null);
      this.ship.playerMove(this.angle)
      this.drones.moveDrones(this.angle)
      //console.log(this.game.physics.arcade.distanceToXY(this.player, this.game.input.activePointer.worldX, this.game.input.activePointer.worldY))
      /*this.game.moveAndStop.toXY(this.player, this.game.input.activePointer.worldX, this.game.input.activePointer.worldY, 180, 1000, {
        onPositionReached: () => {
          console.log('......')
          //this.game.moveAndStop.stop(this.player)
          //this.drones.stop()
        },
        onStopped: () => {
          this.player.body.velocity.setTo(0, 0)
          console.log('ah')
        }
      })*/
      //this.game.physics.arcade.moveToObject(this.rank, this.player, 280)
      //this.game.moveAndStop.toXY(this.rank, Math.floor(this.game.input.activePointer.worldX / 7 - 63), Math.floor(this.game.input.activePointer.worldY / 1.3), 180, null)
      //console.log(this.game.physics.arcade, '-------', this.game.physics.arcade, this.game.input.activePointer.worldX)
      //console.log(game.physics.arcade)
      //console.log(this.game.world, this.game.world.position, this.game.input.mousePointer.x, this.game.input.mousePointer.y,'----', this.player.position.x, this.player.position.y, this.game.input.activePointer.leftButton.isDown, this.game.input.activePointer.rightButton.isDown, this.game.input.activePointer)
      //console.log(player.rotation)
      //player.body.moveUp(180)
      //game.physics.arcade.moveToPointer(player, 100);
      //  To avoid them being allowed to fire too fast we set a time limit
      /*if (this.game.time.now > this.bulletTime) {
        //  Grab the first bullet we can from the pool
        this.bullet = this.bullets.getFirstExists(false);

        if (this.bullet) {
          //  And fire it
          this.bullet.reset(this.player.x, this.player.y + 8);
          this.bullet.body.velocity.y = -400;
          this.bulletTime = this.game.time.now + 200;
        }
      }*/
      //console.log(this.bullet)
    } else {
      //this.drones.stop()
      const active = this.game.physics.arcade.distanceToXY(this.player, Math.floor(this.x), Math.floor(this.y))
      if (Math.round(active) >= 1 && Math.round(active) <= 6) {
        this.player.body.velocity.setTo(0, 0)
      }

      this.drones.moveDrones(this.angle)
      this.rank.x = Math.floor(this.player.x + this.player.width / 7 - 63);
      this.rank.y = Math.floor(this.player.y + this.player.height / 1.3);
      this.text.x = Math.floor(this.player.x + this.player.width / 7 - 50);
      this.text.y = Math.floor(this.player.y + this.player.height / 1.5);
    }
    if (this.shooter && this.enemy) {
      this.eventsOnClick.shoot.call(this)
      this.game.physics.arcade.overlap(this.bullets, this.enemy, (a, b) => {
        b.kill()
      }, null, this);
    }


    /*if (this.cursors.up.isDown) {
      this.player.body.moveUp(180)
      console.log(game.camera.y, 'y')
      console.log(game.physics.arcade, 'yyyy')
    }
    else if (this.cursors.down.isDown) {
      this.player.body.moveDown(180);
      console.log(game.camera.y, 'y')
    }

    if (this.cursors.left.isDown) {
      this.player.body.velocity.x = -180;
      console.log(game.camera.x, 'x')
    }
    else if (this.cursors.right.isDown) {
      console.log(game.camera.x, 'x')
      this.player.body.moveRight(180);
    }*/

  }

  render() {
    this.game.debug.text("Arrows to move.", 32, 32);
  }  
}

const Kg = new KGalaxy()

const Game = new Phaser.Game(document.body.clientWidth, 800, Phaser.CANVAS, 'canvas', {
  preload: Kg.preload,
  create: Kg.create,
  update: Kg.update,
  render: Kg.render
});

Kg.init(Game)