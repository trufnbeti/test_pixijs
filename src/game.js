import { AnimatedSprite, Application, BitmapFont, BitmapText, Container, Graphics, Sprite, Texture } from "pixi.js";

export class Game {
    static init() {
        this.app = new Application({
            width: 720,
            height: 1280,
            backgroundColor: "lightblue",
        });
        document.body.appendChild(this.app.view);
        

        var clampyFrames = [
            "/assets/images/clampy_1.png",
            "/assets/images/clampy_2.png",
            "/assets/images/clampy_3.png",
            "/assets/images/clampy_4.png"
        ]
        var animatedClampy = new AnimatedSprite(clampyFrames.map((stringy) => Texture.from(stringy)));
        animatedClampy.anchor.set(0.5);
        animatedClampy.position.set(this.app.screen.width / 2, this.app.screen.height / 5);
        var clampy = Sprite.from("/assets/images/clampy_1.png");
        clampy.anchor.set(0.5);
        clampy.x = this.app.screen.width / 2;
        clampy.y = this.app.screen.height / 5;
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
        cloud.position.set(350, 100);
        var tree = Sprite.from("/assets/images/tree.png");
        tree.anchor.set(0.85);
        tree.x = this.app.screen.width;
        tree.y = this.app.screen.height - 350;
        tree.scale.x = 0.4;
        tree.scale.y = 0.5;
        console.log(tree.getBounds());

        var grass = Sprite.from("/assets/images/grass.png");
        grass.anchor.set(0.04, 1);
        grass.position.set(0, this.app.screen.height - 300);
        grass.scale.x = 1;
        grass.scale.y = 0.4;

        BitmapFont.from("comic 32", {
            fill: "#ffffff", // White, will be colored later
            fontFamily: "Comic Sans MS",
            fontSize: 32
        })
        
        // Remember, this font only has letters and numbers. No commas or any other symbol.
        var bitmapTexty = new BitmapText("I love baking, my family, and my friends",
            {
                fontName: "comic 32",
                fontSize: 32, // Making it too big or too small will look bad
                tint: 0xFF0000 // Here we make it red.
            });
        
        bitmapTexty.text = "This is cheap";
        bitmapTexty.text = "Trufn iu em";
        

        var gamePlay = new Container();
        gamePlay.addChild(animatedClampy);
        animatedClampy.play();
        animatedClampy.animationSpeed = 0.25;
        gamePlay.addChild(sun);
        gamePlay.addChild(cloud);
        gamePlay.addChild(grass);
        gamePlay.addChild(tree);
        gamePlay.addChild(bitmapTexty);

        this.app.stage.addChild(gamePlay);
    }
}

window.onload = function () {
    Game.init();
}
