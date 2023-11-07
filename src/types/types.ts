export type Product ={
  id:number,
  image:string,
  name:string,
  oldPrice:string,
  price:number,
  sale:boolean,
  desc:string,
}
export type Blog = {
  id:number,
  title:string,
  dateTime:string,
  author:string,
  category:string,
  img:string,
  content:string,
  blockQuote:string,
}
export type CartItem ={
  id:number,
  quantity:number,
}

export type Order = {
  firstName: string,
  lastName: string,
  company: string,
  country: string,
  address: string,
  apartment: string,
  postCode: number,
  townCity: string,
  phone: number,
  email: string,
  orderNotes: string,
  couponCode:string,
  orderProducts:Product[]|undefined,
  subTotal: number,
  total:number,
}