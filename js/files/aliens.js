class Aliens {
  init(config, Phaser) {
    this.game = config.game
    this.Phaser = Phaser
  }

  createAlien(i, Phaser) {
    console.log('yy', i)
    const x = Math.floor(Math.random() * (4801 - 1775) + 1775)
    const y = Math.floor(Math.random() * (4786 - 2920) + 2920)
    
    console.log(x, y)
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
    //events.onInputDown.add(this.eventsOnClick.selectEnemy.bind(this, e), this)
  }
}

export default Aliens