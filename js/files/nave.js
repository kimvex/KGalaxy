import Drones from './drones'

class Nave {
  shipConstruction(config, Phaser) {
    this.game = config.game
    this.Phaser = Phaser
    this.player = this.game.add.sprite(3763.9733077084065, 3712.077713020402, 'player');
    this.player.anchor.setTo(0.5, 0.5);
    this.player.smoothed = false;
    this.player.damage = 8700
    this.player.health = 256000
    this.game.physics.enable(this.player, this.Phaser.Physics.ARCADE);

    // Drones
    let drones = new Drones()
    this.player.drones = drones
    this.player.dronesArr = drones.createDrone(config, this.player, Phaser)
    

    // Rango
    this.player.rank = this.game.add.sprite(Math.floor(this.player.x + this.player.width / 7 - 63), Math.floor(this.player.y + this.player.height / 1.3), 'rank');
    this.player.rank.anchor.setTo(0.5, 0.5);
    this.game.physics.enable(this.player.rank, Phaser.Physics.ARCADE)

    // Nanme of user
    const style = {
      font: "16px Arial", fill: "#FFFFFF", wordWrap: true, wordWrapWidth: this.player.width, align: "center", marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block',
      textShadow: "2px 2px #ff0000"
    };
    
    this.player.text = this.game.add.text(Math.floor(this.player.x + this.player.width / 7 - 50), Math.floor(this.player.y + this.player.height / 1.5), "- Buraky -", style);
    this.player.text.fontWeight = 'bold';
    this.player.text.setShadow(2, 2, 'rgba(5, 5, 5, 0.9)', 10);

    this.player.body.fixedRotation = true;
  }

  playerMove(angle) {
    switch (true) {
      case angle < -1 && angle > -1.9:
      // Arriba
        this.player.loadTexture('player2', 100, false);
        break;
      case angle > 1 && angle < 2:
      // Abajo
        this.player.loadTexture('player3', 100, false);
        break;
      case angle < -3 && angle > -4:
      // Izquierda
        this.player.loadTexture('player4', 100, false);
        break;
      case angle > 2 && angle < 3:
      // Izquierda Abajo
        this.player.loadTexture('player5', 100, false);
        break;
      case angle > 0 && angle < 1:
      // Derecha Abajo
        this.player.loadTexture('player6', 100, false);
        break;
      case angle < -0.5 && angle > -1:
      // Derecha arriba
        this.player.loadTexture('player7', 100, false);
        break;
      case angle < -2 && angle > -3:
      // Izquierda Arriba
        this.player.loadTexture('player8', 100, false);
        break;
      case angle > -0.5 && angle < 1:
        // Derecha
        this.player.loadTexture('player', 0, false);
        break;
      case angle == NaN:
        // Derecha
        this.player.loadTexture('player4', 0, false);
        break;
      default:
        // Izquierda
        this.player.loadTexture('player4', 100, false);
    }
  }

  player() {
    return this.player
  }

  stop() {
    console.log('ya')
    this.player.body.velocity.setTo(0, 0);
  }
}

export default Nave;