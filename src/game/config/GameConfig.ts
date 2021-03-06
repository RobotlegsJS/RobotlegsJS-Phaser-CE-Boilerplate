import { IConfig, injectable, inject, IContext } from "@robotlegsjs/core";

import { GameModel } from "../model/GameModel";

@injectable()
export class GameConfig implements IConfig {

    @inject(IContext)
    public context: IContext;

    public configure(): void {
        this.mapCommands();
        this.mapManager();
        this.mapModels();
    }

    private mapCommands(): void {
    }

    private mapManager(): void {
    }

    private mapModels(): void {
        this.context.injector.bind(GameModel).to(GameModel).inSingletonScope();
    }
}
