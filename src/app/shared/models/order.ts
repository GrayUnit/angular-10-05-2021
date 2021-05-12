import { StateOrder } from "../enums/state-order.enum";
import { OrderI } from "../interfaces/order-i";

export class Order implements OrderI { 
    tjmHt = 500;
    nbJours = 1;
    tva = 20;
    state = StateOrder.OPTION;
    id: number = -1;
    typePresta: string = "";
    client: string = "";
    comment: string = "";

    constructor(obj?: Partial<Order>) {
        if(obj) {
            Object.assign(this, obj);
        }
    }

    totalHt(): number {
        console.log("Total Ht called.");
        return this.nbJours * this.tjmHt;
    }
    
    totalTtc(): number {
        return this.totalHt() * (1 + this.tva / 100);
    }
}
