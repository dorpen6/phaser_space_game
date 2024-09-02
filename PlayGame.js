class PlayGame extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    create() {
        this.background = this.add.image(0,0, "background");
        this.background.setOrigin(0, 0);
        this.background.setDisplaySize(this.cameras.main.width, this.cameras.main.height);

        this.ship1 = this.add.image(config.width/2 -50, config.height/2, "ship1").setDisplaySize(40, 40);
        this.ship2 = this.add.image(config.width/2, config.height/2, "ship2").setDisplaySize(40, 40);
        this.ship3 = this.add.image(config.width/2 +50, config.height/2, "ship3").setDisplaySize(40, 40);
    }
}