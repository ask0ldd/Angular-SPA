export class Rental {
    id : string;
    title : string;
    cover : string;
    description : string;
    host : {
        name: string;
        picture : string;
    };
    rating : number;
    location : string;
    equipments : Array<string>;
    tags : Array<string>;
}