

class Drones {
  createDrone(config, player, Phaser) {
    this.player = player
    this.game = config.game

    //Abajo Atras
    this.iris1 = this.game.add.sprite(Math.floor(this.player.x + this.player.width / 7 - 150), Math.floor((this.player.y + this.player.height) - 490), 'iris1');
    this.iris1.anchor.setTo(0.5, 0.5);
    this.game.physics.enable(this.iris1, Phaser.Physics.ARCADE)

    // Arriba Atras
    this.iris2 = this.game.add.sprite(Math.floor(this.player.x + this.player.width / 7 - 150), Math.floor((this.player.y + this.player.height) - 10), 'iris1');
    this.iris2.anchor.setTo(0.5, 0.5);
    this.game.physics.enable(this.iris2, Phaser.Physics.ARCADE)

    // Atras Izquierda
    this.iris3 = this.game.add.sprite(Math.floor(this.player.x + this.player.width / 7 - 210), Math.floor((this.player.y + this.player.height) - 90), 'iris1');
    this.iris3.anchor.setTo(0.5, 0.5);
    this.game.physics.enable(this.iris3, Phaser.Physics.ARCADE)

    // Atras Derecha
    this.iris4 = this.game.add.sprite(Math.floor(this.player.x + this.player.width / 7 - 120), Math.floor((this.player.y + this.player.height) - 90), 'iris1');
    this.iris4.anchor.setTo(0.5, 0.5);
    this.game.physics.enable(this.iris4, Phaser.Physics.ARCADE)

    // Arriba Arriba
    this.iris5 = this.game.add.sprite(Math.floor(this.player.x + this.player.width / 7 - 10), Math.floor((this.player.y + this.player.height) - 230), 'iris1');
    this.iris5.anchor.setTo(0.5, 0.5);
    this.game.physics.enable(this.iris5, Phaser.Physics.ARCADE)

    // Arriba Abajo
    this.iris6 = this.game.add.sprite(Math.floor(this.player.x + this.player.width / 7 - 10), Math.floor((this.player.y + this.player.height) - 170), 'iris1');
    this.iris6.anchor.setTo(0.5, 0.5);
    this.game.physics.enable(this.iris6, Phaser.Physics.ARCADE)

    // Abajo Arriba
    this.iris7 = this.game.add.sprite(Math.floor(this.player.x + this.player.width / 7 - 10), Math.floor((this.player.y + this.player.height) - -85), 'iris1');
    this.iris7.anchor.setTo(0.5, 0.5);
    this.game.physics.enable(this.iris7, Phaser.Physics.ARCADE)

    // Abajo Abajo
    this.iris8 = this.game.add.sprite(Math.floor(this.player.x + this.player.width / 7 - 10), Math.floor((this.player.y + this.player.height) - -20), 'iris1');
    this.iris8.anchor.setTo(0.5, 0.5);
    this.game.physics.enable(this.iris8, Phaser.Physics.ARCADE)
  }

  moveDrones(angle) {
      switch (true) {
        case angle < -1 && angle > -1.9:
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
        case angle > 1 && angle < 2:
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
        case angle < -3 && angle > -4:
        // Izquierda
          //Abajo Atras
          this.iris1.loadTexture('iris2', 100, false);
          this.iris1.x = Math.floor(this.player.world.x + this.player.width / 7 - -140);
          this.iris1.y = Math.floor((this.player.world.y + this.player.height) - 40);
  
          // Arriba Atras
          this.iris2.loadTexture('iris2', 100, false);
          this.iris2.x = Math.floor(this.player.world.x + this.player.width / 7 - -140);
          this.iris2.y = Math.floor((this.player.world.y + this.player.height) - 140);
  
          // Atras Izquierda
          this.iris3.loadTexture('iris2', 100, false);
          this.iris3.x = Math.floor(this.player.world.x + this.player.width / 7 - -180);
          this.iris3.y = Math.floor((this.player.world.y + this.player.height) - 90);
  
          // Atras Derecha
          this.iris4.loadTexture('iris2', 100, false);
          this.iris4.x = Math.floor(this.player.world.x + this.player.width / 7 - -90);
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
        case angle > 2 && angle < 3:
        // Izquierda Abajo
          //Abajo Atras
          this.iris1.loadTexture('iris8', 100, false);
          this.iris1.x = Math.floor(this.player.world.x + this.player.width / 7 - -40);
          this.iris1.y = Math.floor((this.player.world.y + this.player.height) - 230);
  
          // Arriba Atras
          this.iris2.loadTexture('iris8', 100, false);
          this.iris2.x = Math.floor(this.player.world.x + this.player.width / 7 - -110);
          this.iris2.y = Math.floor((this.player.world.y + this.player.height) - 240);
  
          // Atras Izquierda
          this.iris3.loadTexture('iris8', 100, false);
          this.iris3.x = Math.floor(this.player.world.x + this.player.width / 7 - -140);
          this.iris3.y = Math.floor((this.player.world.y + this.player.height) - 160);
  
          // Atras Derecha
          this.iris4.loadTexture('iris8', 100, false);
          this.iris4.x = Math.floor(this.player.world.x + this.player.width / 7 - -70);
          this.iris4.y = Math.floor((this.player.world.y + this.player.height) - 170);
  
          // Arriba Arriba
          this.iris5.loadTexture('iris8', 100, false);
          this.iris5.x = Math.floor(this.player.world.x + this.player.width / 7 - 90);
          this.iris5.y = Math.floor((this.player.world.y + this.player.height) - 230);
  
          // Arriba Abajo
          this.iris6.loadTexture('iris8', 100, false);
          this.iris6.x = Math.floor(this.player.world.x + this.player.width / 7 - 50);
          this.iris6.y = Math.floor((this.player.world.y + this.player.height) - 160);
  
          // Abajo Arriba
          this.iris7.loadTexture('iris8', 100, false);
          this.iris7.x = Math.floor(this.player.world.x + this.player.width / 7 - -100);
          this.iris7.y = Math.floor((this.player.world.y + this.player.height) - -25);
  
          // Abajo Abajo
          this.iris8.loadTexture('iris8', 100, false);
          this.iris8.x = Math.floor(this.player.world.x + this.player.width / 7 - -40);
          this.iris8.y = Math.floor((this.player.world.y + this.player.height) - 40);
          break;
        case angle > 0 && angle < 1:
        // Derecha Abajo
          //Abajo Atras
          this.iris1.loadTexture('iris5', 100, false);
          this.iris1.x = Math.floor(this.player.world.x + this.player.width / 7 - 190);
          this.iris1.y = Math.floor((this.player.world.y + this.player.height) - 120);
  
          // Arriba Atras
          this.iris2.loadTexture('iris5', 100, false);
          this.iris2.x = Math.floor(this.player.world.x + this.player.width / 7 - 100);
          this.iris2.y = Math.floor((this.player.world.y + this.player.height) - 240);
  
          // Atras Izquierda
          this.iris3.loadTexture('iris5', 100, false);
          this.iris3.x = Math.floor(this.player.world.x + this.player.width / 7 - 190);
          this.iris3.y = Math.floor((this.player.world.y + this.player.height) - 210);
  
          // Atras Derecha
          this.iris4.loadTexture('iris5', 100, false);
          this.iris4.x = Math.floor(this.player.world.x + this.player.width / 7 - 110);
          this.iris4.y = Math.floor((this.player.world.y + this.player.height) - 160);
  
          // Arriba Arriba
          this.iris5.loadTexture('iris5', 100, false);
          this.iris5.x = Math.floor(this.player.world.x + this.player.width / 7 - -60);
          this.iris5.y = Math.floor((this.player.world.y + this.player.height) - 230);
  
          // Arriba Abajo
          this.iris6.loadTexture('iris5', 100, false);
          this.iris6.x = Math.floor(this.player.world.x + this.player.width / 7 - -20);
          this.iris6.y = Math.floor((this.player.world.y + this.player.height) - 170);
  
          // Abajo Arriba
          this.iris7.loadTexture('iris5', 100, false);
          this.iris7.x = Math.floor(this.player.world.x + this.player.width / 7 - 150);
          this.iris7.y = Math.floor((this.player.world.y + this.player.height) - -10);
  
          // Abajo Abajo
          this.iris8.loadTexture('iris5', 100, false);
          this.iris8.x = Math.floor(this.player.world.x + this.player.width / 7 - 80);
          this.iris8.y = Math.floor((this.player.world.y + this.player.height) - 50);
          break;
        case angle < -0.5 && angle > -1:
        // Derecha Arriba
          //Abajo Atras
          this.iris1.loadTexture('iris6', 100, false);
          this.iris1.x = Math.floor(this.player.world.x + this.player.width / 7 - 160);
          this.iris1.y = Math.floor((this.player.world.y + this.player.height) - -40);
  
          // Arriba Atras
          this.iris2.loadTexture('iris6', 100, false);
          this.iris2.x = Math.floor(this.player.world.x + this.player.width / 7 - 100);
          this.iris2.y = Math.floor((this.player.world.y + this.player.height) - 40);
  
          // Atras Izquierda
          this.iris3.loadTexture('iris6', 100, false);
          this.iris3.x = Math.floor(this.player.world.x + this.player.width / 7 - 190);
          this.iris3.y = Math.floor((this.player.world.y + this.player.height) - 30);
  
          // Atras Derecha
          this.iris4.loadTexture('iris6', 100, false);
          this.iris4.x = Math.floor(this.player.world.x + this.player.width / 7 - 70);
          this.iris4.y = Math.floor((this.player.world.y + this.player.height) - -50);
  
          // Arriba Arriba
          this.iris5.loadTexture('iris6', 100, false);
          this.iris5.x = Math.floor(this.player.world.x + this.player.width / 7 - 140);
          this.iris5.y = Math.floor((this.player.world.y + this.player.height) - 200);
  
          // Arriba Abajo
          this.iris6.loadTexture('iris6', 100, false);
          this.iris6.x = Math.floor(this.player.world.x + this.player.width / 7 - 90);
          this.iris6.y = Math.floor((this.player.world.y + this.player.height) - 150);
  
          // Abajo Arriba
          this.iris7.loadTexture('iris6', 100, false);
          this.iris7.x = Math.floor(this.player.world.x + this.player.width / 7 - -110);
          this.iris7.y = Math.floor((this.player.world.y + this.player.height) - -20);
  
          // Abajo Abajo
          this.iris8.loadTexture('iris6', 100, false);
          this.iris8.x = Math.floor(this.player.world.x + this.player.width / 7 - -50);
          this.iris8.y = Math.floor((this.player.world.y + this.player.height) - 30);
          break;
        case angle < -2 && angle > -3:
        // Izquierda arriba
          //Abajo Atras
          this.iris1.loadTexture('iris7', 100, false);
          this.iris1.x = Math.floor(this.player.world.x + this.player.width / 7 - -100);
          this.iris1.y = Math.floor((this.player.world.y + this.player.height) - -20);
  
          // Arriba Atras
          this.iris2.loadTexture('iris7', 100, false);
          this.iris2.x = Math.floor(this.player.world.x + this.player.width / 7 - -120);
          this.iris2.y = Math.floor((this.player.world.y + this.player.height) -80);
  
          // Atras Izquierda
          this.iris3.loadTexture('iris7', 100, false);
          this.iris3.x = Math.floor(this.player.world.x + this.player.width / 7 - -150);
          this.iris3.y = Math.floor((this.player.world.y + this.player.height) - 20);
  
          // Atras Derecha
          this.iris4.loadTexture('iris7', 100, false);
          this.iris4.x = Math.floor(this.player.world.x + this.player.width / 7 - -60);
          this.iris4.y = Math.floor((this.player.world.y + this.player.height) - 40);
  
          // Arriba Arriba
          this.iris5.loadTexture('iris7', 100, false);
          this.iris5.x = Math.floor(this.player.world.x + this.player.width / 7 - -80);
          this.iris5.y = Math.floor((this.player.world.y + this.player.height) - 210);
  
          // Arriba Abajo
          this.iris6.loadTexture('iris7', 100, false);
          this.iris6.x = Math.floor(this.player.world.x + this.player.width / 7 - -50);
          this.iris6.y = Math.floor((this.player.world.y + this.player.height) - 150);
  
          // Abajo Arriba
          this.iris7.loadTexture('iris7', 100, false);
          this.iris7.x = Math.floor(this.player.world.x + this.player.width / 7 - 90);
          this.iris7.y = Math.floor((this.player.world.y + this.player.height) - -70);
  
          // Abajo Abajo
          this.iris8.loadTexture('iris7', 100, false);
          //this.game.physics.arcade.moveToXY(this.iris8, x, y, 180 )
          this.iris8.x = Math.floor(this.player.world.x + this.player.width / 7 - 50);
          this.iris8.y = Math.floor((this.player.world.y + this.player.height) - -10);
          break;
        case angle > -0.5 && angle < 1:
        // Derecha
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
        case angle == undefined: 
          // Derecha
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
        default:
          // Izquierda
          //Abajo Atras
          this.iris1.loadTexture('iris2', 100, false);
          this.iris1.x = Math.floor(this.player.world.x + this.player.width / 7 - -140);
          this.iris1.y = Math.floor((this.player.world.y + this.player.height) - 40);

          // Arriba Atras
          this.iris2.loadTexture('iris2', 100, false);
          this.iris2.x = Math.floor(this.player.world.x + this.player.width / 7 - -140);
          this.iris2.y = Math.floor((this.player.world.y + this.player.height) - 140);

          // Atras Izquierda
          this.iris3.loadTexture('iris2', 100, false);
          this.iris3.x = Math.floor(this.player.world.x + this.player.width / 7 - -180);
          this.iris3.y = Math.floor((this.player.world.y + this.player.height) - 90);

          // Atras Derecha
          this.iris4.loadTexture('iris2', 100, false);
          this.iris4.x = Math.floor(this.player.world.x + this.player.width / 7 - -90);
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
      } 
  }

  drone() {
    return this.iris1
  }

  stop() {
    this.iris1.body.velocity.setTo(0, 0)
    this.iris2.body.velocity.setTo(0, 0)
    this.iris3.body.velocity.setTo(0, 0)
    this.iris4.body.velocity.setTo(0, 0)
    this.iris5.body.velocity.setTo(0, 0)
    this.iris6.body.velocity.setTo(0, 0)
    this.iris7.body.velocity.setTo(0, 0)
    this.iris8.body.velocity.setTo(0, 0)
  }
}

export default Drones