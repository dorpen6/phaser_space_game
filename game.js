var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    scene: [BootGame, PlayGame]
}

var game = new Phaser.Game(config);