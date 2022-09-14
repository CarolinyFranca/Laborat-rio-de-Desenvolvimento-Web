import { SetupServer } from "@src/server";
import supertest from "supertest";

beforeAll(()=>{
    //Configuração inicial do servidor que criamos
    //Criação do setup
    const server = new SetupServer()
    server.init()

    global.testRequest = supertest(server.getApp())
    console.log('Executando o beforeAll()')
})