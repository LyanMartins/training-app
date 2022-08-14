import { Model } from 'src/app/common/model/model';
import { Item } from '../../domain/entity/Item';

export class ItemModel extends Model {
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
        super()
        this.name = name;
        this.quantity = quantity;
        this.checked = checked;
        this.price = price;
    }

    public toEntity(): Item{
        return new Item(
            this.name,
            this.quantity,
            this.checked,
            this.price
        );
    }
}