export abstract class Model {
    parse(original: Object) { 
        Object.assign(this, original);
    }
}