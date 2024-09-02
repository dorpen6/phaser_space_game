class BootGame extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.image("background", "Assets/background.png");
        this.load.image("ship1", "Assets/ship1.png");
        this.load.image("ship2", "Assets/ship2.png");
        this.load.image("ship3", "Assets/ship3.png");
    }

    create() {
        this.add.text(20, 20, "Booting Game...", { fontSize: '32px Arial', fill: '#ffffff' });
        console.log("Loading game...");
        this.scene.start("playGame");
    }

}

