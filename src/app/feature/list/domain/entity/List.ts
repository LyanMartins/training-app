export class List {

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

}