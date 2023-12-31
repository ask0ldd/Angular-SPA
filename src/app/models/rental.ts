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
    id ?: number | null
    firstname : string
    lastname: string
    picture : string
}

export interface IHost{
    id : number
    firstname : string
    lastname : string
    picture : string
    createdAt ?: Date
    updatedAt ?: Date
}

export interface IRental {
    id : number
    title : string
    cover : string
    pictures : Array<string>
    description : string
    host : Host
    rating : number
    location : string
    equipments : Array<string>
    tags : Array<string>
}