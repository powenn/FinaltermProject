import { Route } from "../abstract/Route"
import { AuthController } from "../controller/AuthController";
import { logger } from "../middlewares/log";

export class AuthRoute extends Route {

    protected url: string;
    protected Contorller = new AuthController();

    constructor() {
        super()
        this.url = '/api/v1/auth/'
        this.setRoutes()
    }

    protected setRoutes(): void {

        this.router.post(`${this.url}register`, (req, res) => {
            this.Contorller.register(req, res);
        })
    }
}