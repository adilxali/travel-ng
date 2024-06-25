export interface User {

    name: string
    email: string
    password: string
  
    dial_code?: string
    phone: string
    
    

}

export interface Plans {
	name: string
	price: number
	duration: number
    durationtype:string
    description?:string
    max_users:number
    max_roles:number
    discount?:any
    discount_setting:string
    active_status: any

}
