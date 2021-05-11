import { StateClient } from "../enums/state-client.enum";
import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI{
    id: number = -1;
    name: string = "default";
    ca: number = 0;
    state = StateClient.ACTIF;
}
