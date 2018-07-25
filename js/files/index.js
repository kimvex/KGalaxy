window.PIXI = require('phaser-ce/build/custom/pixi');
window.p2 = require('phaser-ce/build/custom/p2');
window.Phaser = require('phaser-ce/build/custom/phaser-split');

var game = new Phaser.Game(document.body.clientWidth, 800, Phaser.CANVAS, 'canvas', { preload: preload, create: create, update: update, render: render });

function preload() {

  game.load.image('background', './assets/mapas/56A.jpg');
  game.load.spritesheet('player', './assets/naves/33.png');
  game.load.spritesheet('player2', './assets/naves/17.png');
  game.load.spritesheet('player3', './assets/naves/49.png');
  game.load.spritesheet('player4', './assets/naves/1.png');
  game.load.spritesheet('player5', './assets/naves/59.png');
  game.load.spritesheet('player6', './assets/naves/37.png');
  game.load.spritesheet('player7', './assets/naves/27.png');
  game.load.spritesheet('player8', './assets/naves/7.png');
  game.load.image('rank', './assets/rangos/rank_19.png');
}

var player;
var cursors;
var text;
var rank;

function create() {

  game.add.tileSprite(1386, 2920, 3840,  2160, 'background');

  game.world.setBounds(0, 0, 8000, 8000);

  game.physics.startSystem(Phaser.Physics.P2JS);
  game.scale.scaleMode = Phaser.ScaleManager.RESIZE;

  player = game.add.sprite(3763.9733077084065, 3712.077713020402, 'player');
  player.anchor.setTo(0.5, 0.5);
  player.smoothed = false;
  game.physics.enable(player, Phaser.Physics.ARCADE);

  player.body.fixedRotation = true;

  rank = game.add.sprite(Math.floor(player.x + player.width / 7 - 63), Math.floor(player.y + player.height / 1.3), 'rank');
  rank.anchor.setTo(0.5, 0.5);

  var style = {
    font: "16px Arial", fill: "#FFFFFF", wordWrap: true, wordWrapWidth: player.width, align: "center", marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block'
  };

  var w = window.innerWidth;
  var h = window.innerHeight;
  text = game.add.text(Math.floor(player.x + player.width / 7 - 50), Math.floor(player.y + player.height / 1.5), "- Buraky -", style);

  cursors = game.input.keyboard.createCursorKeys();

  //  Notice that the sprite doesn't have any momentum at all,
  //  it's all just set by the camera follow type.
  //  0.1 is the amount of linear interpolation to use.
  //  The smaller the value, the smooth the camera (and the longer it takes to catch up)
  game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 1, 1);

}

function update() {

  //player.body.setZeroVelocity();


  if (game.input.activePointer.isDown) {
    //player.body.moveRight(180);
    text.x = Math.floor(player.x + player.width / 7 - 50);
    text.y = Math.floor(player.y + player.height / 1.5);

    rank.x = Math.floor(player.x + player.width / 7 - 63);
    rank.y = Math.floor(player.y + player.height / 1.3);
    console.log(game.physics.arcade.angleToPointer(player))
    if (game.physics.arcade.angleToPointer(player) < -1 && game.physics.arcade.angleToPointer(player) > -1.9) {
      // Arriba
      player.loadTexture('player2', 100, false);
    } else if (game.physics.arcade.angleToPointer(player) > 1 && game.physics.arcade.angleToPointer(player) < 2) {
      // Abajo
      player.loadTexture('player3', 100, false);
    } else if (game.physics.arcade.angleToPointer(player) < -3 && game.physics.arcade.angleToPointer(player) > -4) {
      // Izquierda
      player.loadTexture('player4', 100, false);
    } else if (game.physics.arcade.angleToPointer(player) > 2 && game.physics.arcade.angleToPointer(player) < 3) {
      // Izquierda abajo
      player.loadTexture('player5', 100, false);
    } else if (game.physics.arcade.angleToPointer(player) > 0 && game.physics.arcade.angleToPointer(player) < 1) {
      // Derecha abajo
      player.loadTexture('player6', 100, false);
    } else if (game.physics.arcade.angleToPointer(player) < -0.5 && game.physics.arcade.angleToPointer(player) > -1) {
      // Derecha arriba
      player.loadTexture('player7', 100, false);
    } else if (game.physics.arcade.angleToPointer(player) < -2 && game.physics.arcade.angleToPointer(player) > -3) {
      // Izquierda arriba
      player.loadTexture('player8', 100, false);
    } else if (game.physics.arcade.angleToPointer(player) > -0.5 && game.physics.arcade.angleToPointer(player) < 1) {
      // Derecha
      player.loadTexture('player', 0, false);
    }
    game.physics.arcade.moveToPointer(player, 180);
    //console.log(game.physics.arcade)
    //console.log(game.world, game.world.position, game.input.mousePointer.x, game.input.mousePointer.y,'----', player.position.x, player.position.y, game.input.activePointer.leftButton.isDown, game.input.activePointer.rightButton.isDown, game.input.activePointer)
    //console.log(player.rotation)
    //player.body.moveUp(180)
    //game.physics.arcade.moveToPointer(player, 100);
  } else {
    player.body.velocity.setTo(0, 0);
  }

  if (cursors.up.isDown) {
    player.body.moveUp(180)
    /*console.log(game.camera.y, 'y')
    console.log(game.physics.arcade, 'yyyy')*/
  }
  else if (cursors.down.isDown) {
    player.body.moveDown(180);
    console.log(game.camera.y, 'y')
  }

  if (cursors.left.isDown) {
    player.body.velocity.x = -180;
    console.log(game.camera.x, 'x')
  }
  else if (cursors.right.isDown) {
    console.log(game.camera.x, 'x')
    player.body.moveRight(180);
  }

}

function render() {
  game.debug.text("Arrows to move.", 32, 32);
}