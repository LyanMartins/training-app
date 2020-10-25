import { List } from '../../domain/entity/List';

export class ListModel {

    public title: string;
    public token: string;
    public inActive: boolean;

    constructor(
        title: string, 
        token: string, 
        inActive: boolean
    ){
        this.title = title;
        this.token = token;
        this.inActive = inActive;
    }

    public toEntity(): List{
        return new List(
          this.title,
          this.token,
          this.inActive
        );
    }

}