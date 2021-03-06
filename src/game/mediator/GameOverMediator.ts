import { injectable } from "@robotlegsjs/core";

import { StateMediator } from "@robotlegsjs/phaser";

import { GameOver } from "../state/GameOver";

@injectable()
export class GameOverMediator extends StateMediator<GameOver> {

    public initialize(): void {
        console.log("GameOverMediator: initialize");
    }

    public destroy(): void {
        console.log("GameOverMediator: destroy");
    }
}
