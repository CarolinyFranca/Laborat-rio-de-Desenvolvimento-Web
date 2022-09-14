import { StarwarsController } from "./controllers/starwarscontroller";
import { Server } from "@overnightjs/core";
import bodyParser from "body-parser";
import { Application } from "express";

export class SetupServer extends Server{
    constructor(private port=3000){
        super()
    }

    public init(): void{
        this.setupExpress()
        this.setupController()
    }

    public setupExpress(): void{
        //Método para configurar Express
        //Esse método utiliza um processador JSON
        //Configuaração padrão em ambientes
        //Com Node.js + Typescript + Express
        this.app.use(bodyParser.json())
    }

    public setupController(): void{
        //Criação de uma instância no StarwarsController
        //Adicionar essa instância para servidor (server)
        //O servidor (server) recebe uma lista de instâncias
        const starwarsController = new StarwarsController()
        this.addControllers([starwarsController])
    }

    //Criar um método para resolver o getApp()
    public getApp(): Application{

        return this.app
    }
}