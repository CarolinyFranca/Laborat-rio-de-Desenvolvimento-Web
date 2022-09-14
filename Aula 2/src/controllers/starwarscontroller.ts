import { Controller, Get} from "@overnightjs/core";
import { Request, Response } from "express";
import planetsDataset from '@static/planets_dataset.json';

//Controller que processa métodos
//da API https://swapi.dev/
//inicialmente vamos criar os recursos Mocks
//usando alguns objetos hard-coded

//Uma API em HTTP tem vários verbos
// GET, PUSH, HEAD, OPTION
//Usamos um recurso para comunicação

//Request & Response
// GET [endpoint]/api/planets
//  |       |           |
//Verbo  endereço    recurso
//       servidor

// Comunicação ocorre via parâmetros
// [Request] --> servidor --> [Response]
//     |                          |
// Parâmetros                Objeto Json
//GET endpoint/api/planets

@Controller('planets')
export class StarwarsController{

    @Get('')
    public getStarwarsPlanet(request: Request, response: Response): 
    void {
        response.send(planetsDataset)
    }
}