import { StateOrder } from "../enums/state-order.enum";

export interface OrderI {
    tjmHt: number;
    nbJours: number;
    tva: number;
    state: StateOrder;
    id: number;
    typePresta: string;
    client: string;
    comment: string;
    totalHt(): number;
    totalTtc(): number;
}
