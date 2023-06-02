import { Application, Sprite } from "pixi.js";

export class Game {
    static init() {
        this.app = new Application({
            width: 720,
            height: 1280,
            backgroundColor: "pink",
        });
        document.body.appendChild(this.app.view);
        var clampy = Sprite.from("assets/images/clampy.png");
        clampy.anchor.set(0.5);
        clampy.x = this.app.screen.width / 2;
        clampy.y = this.app.screen.height / 3;
        clampy.scale.x = 0.5;
        clampy.scale.y = 0.5;
        this.app.stage.addChild(clampy);
    }
}

window.onload = function () {
    Game.init();
}
