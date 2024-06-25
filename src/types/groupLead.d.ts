export interface QueryType {
    label: string,
    value: number,
}

export interface Location{
    id:number | string,
    locationname: string,
    totalNight?: number
}

export interface Hubs{
    hubname: string | null | undefined,
}

export interface Requirements{
    tags: string,
}

export interface HotelType {
    type:string 
}

export interface TransportType {
    type:string
}

interface Package{
    hubsTypes : Hubs[],
    locations : Location[],
    tags: Requirements[]
}

interface Hotels {
    hotelTypes : HotelType[],
    locations : Location[],
}

interface Transport {
    transport_Types : TransportType[],
    locations : Location[],
}

interface Visa  {
    hubs: Hubs[],
    locations : Location[],
}

interface Flight{
    hubs: Hubs[],
    locations : Location[],
}



export interface QueryDetail {
    locations? : Location[],
    tags?: Requirements[],
    hubTypes? : Hubs[],
    transport_Types? : TransportType[],
    hotelTypes? : HotelType,
}

export interface Contact {
    firstName: string;
    lastName: string;
    phones: { type: string, number: string }[];
    emails: { type: string, address: string }[];
  }
  