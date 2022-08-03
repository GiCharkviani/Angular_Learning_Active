export class UserModel {
  constructor(
    public email:string,
    public password: string,
    public name: string,
    public surname: string,
    public sex: string,
    public age: number,
    public bday:string,
    public picture: string,
    public status: string,
    public otherInfo?:any
  ){}
}
