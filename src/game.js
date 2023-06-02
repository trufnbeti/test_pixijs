import { Application, Container, Graphics, Sprite } from "pixi.js";

export class Game {
    static init() {
        this.app = new Application({
            width: 720,
            height: 1280,
            backgroundColor: "lightblue",
        });
        document.body.appendChild(this.app.view);
        

        var clampy = Sprite.from("/assets/images/clampy.png");
        clampy.anchor.set(0.5);
        clampy.x = this.app.screen.width / 2;
        clampy.y = this.app.screen.height / 5;
        clampy.scale.x = 0.25;
        clampy.scale.y = 0.25;
        clampy.angle = 15;
        console.log(clampy.getBounds());

        var sun = new Graphics();
        
        sun.beginFill("red");
        sun.lineStyle(10, "yellow");
        sun.drawCircle(0, 0, 50); // See how I set the drawing at 0,0? NOT AT 100, 100!
        sun.endFill();
        // Here we set it at 100,100
        sun.x = 100;
        sun.y = 100;

        var cloud = new Graphics();
        cloud.beginFill("white");
        cloud.drawEllipse(0, 0, 50, 20);
        cloud.endFill();

        cloud.x = 350;
        cloud.y = 100;

        var tree = Sprite.from("/assets/images/tree.png");
        tree.anchor.set(0.85);
        tree.x = this.app.screen.width;
        tree.y = this.app.screen.height - 350;
        tree.scale.x = 0.4;
        tree.scale.y = 0.5;
        console.log(tree.getBounds());

        var grass = Sprite.from("/assets/images/grass.png");
        grass.anchor.set(0.04, 1);
        grass.x = 0;
        grass.y = this.app.screen.height - 300;
        grass.scale.x = 1;
        grass.scale.y = 0.4;
        
        var gamePlay = new Container();
        gamePlay.addChild(clampy);
        gamePlay.addChild(sun);
        gamePlay.addChild(cloud);
        gamePlay.addChild(grass);
        gamePlay.addChild(tree);

        this.app.stage.addChild(gamePlay);
    }
}

window.onload = function () {
    Game.init();
}
