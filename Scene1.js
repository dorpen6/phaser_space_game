class Scene1 extends Phaser.Game {
    constructor() {
        super("bootGame");
    }

    create() {
        this.add.text(20, 20, "Loading game...");
    }
}