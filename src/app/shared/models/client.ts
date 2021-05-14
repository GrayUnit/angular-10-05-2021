import { StateClient } from "../enums/state-client.enum";
import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI{
    id: number = 0;
    name: string = "default";
    ca: number = 0;
    state = StateClient.ACTIF;

    constructor(obj?: Partial<Client>) {
        if(obj) {
            Object.assign(this, obj);
        }
    }
}
