class Nave {
  shipConstruction(config, Phaser) {
    this.game = config.game
    this.Phaser = Phaser
    this.player = this.game.add.sprite(3763.9733077084065, 3712.077713020402, 'player');
    this.player.anchor.setTo(0.5, 0.5);
    this.player.smoothed = false;
    this.game.physics.enable(this.player, this.Phaser.Physics.ARCADE);

    this.player.body.fixedRotation = true;
  }

  playerMove(drones) {
    switch (true) {
      case this.game.physics.arcade.angleToPointer(this.player) < -1 && this.game.physics.arcade.angleToPointer(this.player) > -1.9:
      // Arriba
        this.player.loadTexture('player2', 100, false);
        break;
      case this.game.physics.arcade.angleToPointer(this.player) > 1 && this.game.physics.arcade.angleToPointer(this.player) < 2:
      // Abajo
        this.player.loadTexture('player3', 100, false);
        break;
      case this.game.physics.arcade.angleToPointer(this.player) < -3 && this.game.physics.arcade.angleToPointer(this.player) > -4:
      // Izquierda
        this.player.loadTexture('player4', 100, false);
        break;
      case this.game.physics.arcade.angleToPointer(this.player) > 2 && this.game.physics.arcade.angleToPointer(this.player) < 3:
      // Izquierda Abajo
        this.player.loadTexture('player5', 100, false);
        break;
      case this.game.physics.arcade.angleToPointer(this.player) > 0 && this.game.physics.arcade.angleToPointer(this.player) < 1:
      // Derecha Abajo
        this.player.loadTexture('player6', 100, false);
        break;
      case this.game.physics.arcade.angleToPointer(this.player) < -0.5 && this.game.physics.arcade.angleToPointer(this.player) > -1:
      // Derecha arriba
        this.player.loadTexture('player7', 100, false);
        break;
      case this.game.physics.arcade.angleToPointer(this.player) < -2 && this.game.physics.arcade.angleToPointer(this.player) > -3:
      // Izquierda Arriba
        this.player.loadTexture('player8', 100, false);
        break;
      case this.game.physics.arcade.angleToPointer(this.player) > -0.5 && this.game.physics.arcade.angleToPointer(this.player) < 1:
        // Derecha
        this.player.loadTexture('player', 0, false);
        break;
      default:
        // Izquierda
        this.player.loadTexture('player4', 100, false);
    }
  }

  player() {
    return this.player
  }
}

export default Nave;