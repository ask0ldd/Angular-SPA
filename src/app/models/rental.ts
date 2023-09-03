export interface Rental {
    id : string
    title : string
    cover : string
    pictures : Array<string>
    description : string
    host : Host
    rating : string
    location : string
    equipments : Array<string>
    tags : Array<string>
}

interface Host{
    name : string
    picture : string
}

export interface IOwner{
    id : number
    firstname : string
    lastname : string
    picture : string
    createdAt ?: Date
    updatedAt ?: Date
}