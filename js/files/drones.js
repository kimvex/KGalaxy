

class Drones {
  createDrone(config, player) {
    this.player = player
    this.game = config.game

    //Abajo Atras
    this.iris1 = this.game.add.sprite(Math.floor(this.player.x + this.player.width / 7 - 150), Math.floor((this.player.y + this.player.height) - 40), 'iris1');
    this.iris1.anchor.setTo(0.5, 0.5);

    // Arriba Atras
    this.iris2 = this.game.add.sprite(Math.floor(this.player.x + this.player.width / 7 - 150), Math.floor((this.player.y + this.player.height) - 140), 'iris1');
    this.iris2.anchor.setTo(0.5, 0.5);

    // Atras Izquierda
    this.iris3 = this.game.add.sprite(Math.floor(this.player.x + this.player.width / 7 - 210), Math.floor((this.player.y + this.player.height) - 90), 'iris1');
    this.iris3.anchor.setTo(0.5, 0.5);

    // Atras Derecha
    this.iris4 = this.game.add.sprite(Math.floor(this.player.x + this.player.width / 7 - 120), Math.floor((this.player.y + this.player.height) - 90), 'iris1');
    this.iris4.anchor.setTo(0.5, 0.5);

    // Arriba Arriba
    this.iris5 = this.game.add.sprite(Math.floor(this.player.x + this.player.width / 7 - 10), Math.floor((this.player.y + this.player.height) - 230), 'iris1');
    this.iris5.anchor.setTo(0.5, 0.5);

    // Arriba Abajo
    this.iris6 = this.game.add.sprite(Math.floor(this.player.x + this.player.width / 7 - 10), Math.floor((this.player.y + this.player.height) - 170), 'iris1');
    this.iris6.anchor.setTo(0.5, 0.5);

    // Abajo Arriba
    this.iris7 = this.game.add.sprite(Math.floor(this.player.x + this.player.width / 7 - 10), Math.floor((this.player.y + this.player.height) - -85), 'iris1');
    this.iris7.anchor.setTo(0.5, 0.5);

    // Abajo Abajo
    this.iris8 = this.game.add.sprite(Math.floor(this.player.x + this.player.width / 7 - 10), Math.floor((this.player.y + this.player.height) - -20), 'iris1');
    this.iris8.anchor.setTo(0.5, 0.5);
  }

  moveDrones() {
    switch (true) {
      case this.game.physics.arcade.angleToPointer(this.player) < -1 && this.game.physics.arcade.angleToPointer(this.player) > -1.9:
      // Arriba
        //Arriba Izquierda
        this.iris1.loadTexture('iris4', 100, false);
        this.iris1.x = Math.floor(this.player.world.x + this.player.width / 7 - 60);
        this.iris1.y = Math.floor((this.player.world.y + this.player.height) - -40);

        // Arriba Atras
        this.iris2.loadTexture('iris4', 100, false);
        this.iris2.x = Math.floor(this.player.world.x + this.player.width / 7 - -40);
        this.iris2.y = Math.floor((this.player.world.y + this.player.height) - -40);

        // Atras Izquierda
        this.iris3.loadTexture('iris4', 100, false);
        this.iris3.x = Math.floor(this.player.world.x + this.player.width / 7 - 200);
        this.iris3.y = Math.floor((this.player.world.y + this.player.height) - 120);

        // Atras Derecha
        this.iris4.loadTexture('iris4', 100, false);
        this.iris4.x = Math.floor(this.player.world.x + this.player.width / 7 - 120);
        this.iris4.y = Math.floor((this.player.world.y + this.player.height) - 120);

        // Arriba Arriba
        this.iris5.loadTexture('iris4', 100, false);
        this.iris5.x = Math.floor(this.player.world.x + this.player.width / 7 - 10);
        this.iris5.y = Math.floor((this.player.world.y + this.player.height));

        // Arriba Abajo
        this.iris6.loadTexture('iris4', 100, false);
        this.iris6.x = Math.floor(this.player.world.x + this.player.width / 7 - 10);
        this.iris6.y = Math.floor((this.player.world.y + this.player.height) - -80);

        // Derecha Arriba
        this.iris7.loadTexture('iris4', 100, false);
        this.iris7.x = Math.floor(this.player.world.x + this.player.width / 7 - -170);
        this.iris7.y = Math.floor((this.player.world.y + this.player.height) - 120);

        // Derecha Abajo
        this.iris8.loadTexture('iris4', 100, false);
        this.iris8.x = Math.floor(this.player.world.x + this.player.width / 7 - -90);
        this.iris8.y = Math.floor((this.player.world.y + this.player.height) - 120);
        break;
      case this.game.physics.arcade.angleToPointer(this.player) > 1 && this.game.physics.arcade.angleToPointer(this.player) < 2:
      // Abajo
        //Arriba Izquierda
        this.iris1.loadTexture('iris3', 100, false);
        this.iris1.x = Math.floor(this.player.world.x + this.player.width / 7 - 60);
        this.iris1.y = Math.floor((this.player.world.y + this.player.height) - 240);

        // Arriba Atras
        this.iris2.loadTexture('iris3', 100, false);
        this.iris2.x = Math.floor(this.player.world.x + this.player.width / 7 - -40);
        this.iris2.y = Math.floor((this.player.world.y + this.player.height) - 240);

        // Atras Izquierda
        this.iris3.loadTexture('iris3', 100, false);
        this.iris3.x = Math.floor(this.player.world.x + this.player.width / 7 - 200);
        this.iris3.y = Math.floor((this.player.world.y + this.player.height) - 120);

        // Atras Derecha
        this.iris4.loadTexture('iris3', 100, false);
        this.iris4.x = Math.floor(this.player.world.x + this.player.width / 7 - 120);
        this.iris4.y = Math.floor((this.player.world.y + this.player.height) - 120);

        // Arriba Arriba
        this.iris5.loadTexture('iris3', 100, false);
        this.iris5.x = Math.floor(this.player.world.x + this.player.width / 7 - 10);
        this.iris5.y = Math.floor((this.player.world.y + this.player.height) - 280);

        // Arriba Abajo
        this.iris6.loadTexture('iris3', 100, false);
        this.iris6.x = Math.floor(this.player.world.x + this.player.width / 7 - 10);
        this.iris6.y = Math.floor((this.player.world.y + this.player.height) - 200);

        // Derecha Arriba
        this.iris7.loadTexture('iris3', 100, false);
        this.iris7.x = Math.floor(this.player.world.x + this.player.width / 7 - -170);
        this.iris7.y = Math.floor((this.player.world.y + this.player.height) - 120);

        // Derecha Abajo
        this.iris8.loadTexture('iris3', 100, false);
        this.iris8.x = Math.floor(this.player.world.x + this.player.width / 7 - -90);
        this.iris8.y = Math.floor((this.player.world.y + this.player.height) - 120);
        break;
      case this.game.physics.arcade.angleToPointer(this.player) < -3 && this.game.physics.arcade.angleToPointer(this.player) > -4:
      // Izquierda
        //Abajo Atras
        this.iris1.loadTexture('iris2', 100, false);
        this.iris1.x = Math.floor(this.player.world.x + this.player.width / 7 - -150);
        this.iris1.y = Math.floor((this.player.world.y + this.player.height) - 40);

        // Arriba Atras
        this.iris2.loadTexture('iris2', 100, false);
        this.iris2.x = Math.floor(this.player.world.x + this.player.width / 7 - -150);
        this.iris2.y = Math.floor((this.player.world.y + this.player.height) - 140);

        // Atras Izquierda
        this.iris3.loadTexture('iris2', 100, false);
        this.iris3.x = Math.floor(this.player.world.x + this.player.width / 7 - -210);
        this.iris3.y = Math.floor((this.player.world.y + this.player.height) - 90);

        // Atras Derecha
        this.iris4.loadTexture('iris2', 100, false);
        this.iris4.x = Math.floor(this.player.world.x + this.player.width / 7 - -120);
        this.iris4.y = Math.floor((this.player.world.y + this.player.height) - 90);

        // Arriba Arriba
        this.iris5.loadTexture('iris2', 100, false);
        this.iris5.x = Math.floor(this.player.world.x + this.player.width / 7 - 10);
        this.iris5.y = Math.floor((this.player.world.y + this.player.height) - 230);

        // Arriba Abajo
        this.iris6.loadTexture('iris2', 100, false);
        this.iris6.x = Math.floor(this.player.world.x + this.player.width / 7 - 10);
        this.iris6.y = Math.floor((this.player.world.y + this.player.height) - 170);

        // Abajo Arriba
        this.iris7.loadTexture('iris2', 100, false);
        this.iris7.x = Math.floor(this.player.world.x + this.player.width / 7 - 10);
        this.iris7.y = Math.floor((this.player.world.y + this.player.height) - -85);

        // Abajo Abajo
        this.iris8.loadTexture('iris2', 100, false);
        this.iris8.x = Math.floor(this.player.world.x + this.player.width / 7 - 10);
        this.iris8.y = Math.floor((this.player.world.y + this.player.height) - -20);
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
      // Derecha Arriba
        this.player.loadTexture('player7', 100, false);
        break;
      case this.game.physics.arcade.angleToPointer(this.player) < -2 && this.game.physics.arcade.angleToPointer(this.player) > -3:
      // Izquierda arriba
        this.player.loadTexture('player8', 100, false);
        break;
      case this.game.physics.arcade.angleToPointer(this.player) > -0.5 && this.game.physics.arcade.angleToPointer(this.player) < 1:
      // Derecha
      console.log('logs and more logs')
        //Abajo Atras
        this.iris1.loadTexture('iris1', 100, false);
        this.iris1.x = Math.floor(this.player.world.x + this.player.width / 7 - 150);
        this.iris1.y = Math.floor((this.player.world.y + this.player.height) - 40);

        // Arriba Atras
        this.iris2.loadTexture('iris1', 100, false);
        this.iris2.x = Math.floor(this.player.world.x + this.player.width / 7 - 150);
        this.iris2.y = Math.floor((this.player.world.y + this.player.height) - 140);

        // Atras Izquierda
        this.iris3.loadTexture('iris1', 100, false);
        this.iris3.x = Math.floor(this.player.world.x + this.player.width / 7 - 210);
        this.iris3.y = Math.floor((this.player.world.y + this.player.height) - 90);

        // Atras Derecha
        this.iris4.loadTexture('iris1', 100, false);
        this.iris4.x = Math.floor(this.player.world.x + this.player.width / 7 - 120);
        this.iris4.y = Math.floor((this.player.world.y + this.player.height) - 90);

        // Arriba Arriba
        this.iris5.loadTexture('iris1', 100, false);
        this.iris5.x = Math.floor(this.player.world.x + this.player.width / 7 - 10);
        this.iris5.y = Math.floor((this.player.world.y + this.player.height) - 230);

        // Arriba Abajo
        this.iris6.loadTexture('iris1', 100, false);
        this.iris6.x = Math.floor(this.player.world.x + this.player.width / 7 - 10);
        this.iris6.y = Math.floor((this.player.world.y + this.player.height) - 170);

        // Abajo Arriba
        this.iris7.loadTexture('iris1', 100, false);
        this.iris7.x = Math.floor(this.player.world.x + this.player.width / 7 - 10);
        this.iris7.y = Math.floor((this.player.world.y + this.player.height) - -85);

        // Abajo Abajo
        this.iris8.loadTexture('iris1', 100, false);
        this.iris8.x = Math.floor(this.player.world.x + this.player.width / 7 - 10);
        this.iris8.y = Math.floor((this.player.world.y + this.player.height) - -20);
        
        break;
    }
  }

  drone() {
    return this.iris1
  }
}

export default Drones