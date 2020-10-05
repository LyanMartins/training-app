import { ItemModel } from '../../data/model/ItemModel';

export class Item {
    public name: string;
    public quantity: number;
    public checked: boolean;
    public price: number;
    
    constructor(
        name: string,
        quantity: number,
        checked: boolean,
        price: number,
    ){
        this.name = name;
        this.quantity = quantity;
        this.checked = checked;
        this.price = price;
    }

    public fromEntity(): ItemModel{
        return new ItemModel(
            this.name,
            this.quantity,
            this.checked,
            this.price
        );
    }

}