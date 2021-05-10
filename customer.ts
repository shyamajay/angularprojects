import { Phonenumber } from "./phonenumber";

export class Customer {
    cid !: number;
    name !: String;
    numbers !: Set<Phonenumber>
}
