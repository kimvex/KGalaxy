window.PIXI = require('phaser-ce/build/custom/pixi');
window.p2 = require('phaser-ce/build/custom/p2');
window.Phaser = require('phaser-ce/build/custom/phaser-split');

import Nave from './nave'
import Drones from './drones'

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
    this.game.load.image('portal1', './assets/portales/base3n.png');
  }

  create() {

    this.game.add.tileSprite(1386, 2920, 3840, 2160, 'background');

    this.game.world.setBounds(0, 0, 8000, 8000);

    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;

    // Portal izquierda abajo
    this.portal1 = this.game.add.sprite(1775, 4786, 'portal1');
    this.portal1.anchor.setTo(0.5, 0.5);

    this.ship = new Nave()
    this.ship.shipConstruction(this, Phaser)
    console.log(this.ship.player, 'whats?')

    const player = this.ship.player
    
    this.drones = new Drones()
    this.drones.createDrone(this, this.ship.player)

    this.rank = this.game.add.sprite(Math.floor(player.x + player.width / 7 - 63), Math.floor(player.y + player.height / 1.3), 'rank');
    this.rank.anchor.setTo(0.5, 0.5);

    const style = {
      font: "16px Arial", fill: "#FFFFFF", wordWrap: true, wordWrapWidth: player.width, align: "center", marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block'
    };

    this.text = this.game.add.text(Math.floor(player.x + player.width / 7 - 50), Math.floor(player.y + player.height / 1.5), "- Buraky -", style);

    this.cursors = this.game.input.keyboard.createCursorKeys();

    //  Notice that the sprite doesn't have any momentum at all,
    //  it's all just set by the camera follow type.
    //  0.1 is the amount of linear interpolation to use.
    //  The smaller the value, the smooth the camera (and the longer it takes to catch up)
    this.game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 1, 1);
    
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

      this.ship.playerMove(this.drones)
      this.drones.moveDrones()
      this.game.physics.arcade.moveToPointer(this.player, 180);
      //console.log(game.physics.arcade)
      console.log(this.game.world, this.game.world.position, this.game.input.mousePointer.x, this.game.input.mousePointer.y,'----', this.player.position.x, this.player.position.y, this.game.input.activePointer.leftButton.isDown, this.game.input.activePointer.rightButton.isDown, this.game.input.activePointer)
      //console.log(player.rotation)
      //player.body.moveUp(180)
      //game.physics.arcade.moveToPointer(player, 100);
    } else {
      this.player.body.velocity.setTo(0, 0);
    }

    if (this.cursors.up.isDown) {
      this.player.body.moveUp(180)
      /*console.log(game.camera.y, 'y')
      console.log(game.physics.arcade, 'yyyy')*/
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
    }

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