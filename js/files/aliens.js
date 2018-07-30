class Aliens {
  init(config, Phaser) {
    this.game = config.game
    this.Phaser = Phaser
  }

  createAlien(i, Phaser, cb) {
    console.log(cb)
    const x = Math.floor(Math.random() * (4801 - 1775) + 1775)
    const y = Math.floor(Math.random() * (4786 - 2920) + 2920)
    this.distanceX = Math.floor(Math.random() * (4801 - 1775) + 1775)
    this.distanceY = Math.floor(Math.random() * (4786 - 2920) + 2920)
    
    const name = i
    i = this.game.add.sprite(x, y, 'alien');
      const style = {
        font: "26px Arial", fill: "#ff0000", wordWrap: true, wordWrapWidth: i.width, align: "center", marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
      };
  
    i.vida = 100
    i.name = name
    i.anchor.setTo(0.5, 0.5);
    i.smoothed = false;
    this.game.physics.enable(i, Phaser.Physics.ARCADE);
    i.inputEnabled = true;
    i.events.onInputDown.add(this.eventsOnClick.selectEnemy.bind(this, i), this)
    i.nameP = this.game.add.text(x, y, name, style);
    this.game.physics.enable(i.nameP, Phaser.Physics.ARCADE);
    this.game.physics.arcade.moveToXY(i, this.distanceX, this.distanceY, 80, null);
    this.game.physics.arcade.moveToXY(i.nameP, this.distanceX, this.distanceY, 80, null);
    const active = this.game.physics.arcade.distanceToXY(i, this.distanceX, this.distanceY)

    if (Math.round(active) >= 1 && Math.round(active) <= 6) {
      console.log('????')
      i.body.velocity.setTo(0, 0)
      infer(i, this.distanceX, this.distanceY, 280, null);
    }

    return cb(i)
  }

  changeRouteAliens(i) {
    //const active = this.game.physics.arcade.distanceToXY(i, this.distanceX, this.distanceY)
    this.distanceX = Math.floor(Math.random() * (4801 - 1775) + 1775)
    this.distanceY = Math.floor(Math.random() * (4786 - 2920) + 2920)
    //console.log(i.x, i.y, 'x-y')
    if ((i.x >= 4800 || i.y <= 1380) || (i.y <= 3050 || i.y >= 4700)){
      console.log('where?')
      i.body.velocity.setTo(0, 0)
      this.game.physics.arcade.moveToXY(i, this.distanceX, this.distanceY, 80, null);
      this.game.physics.arcade.moveToXY(i.nameP, this.distanceX, this.distanceY, 80, null);
      //infer(i, distanceX, distanceY, 280, null);
      //this.movingTimerAliens = this.game.time.now + 4000
    }
  }
}

export default Aliens