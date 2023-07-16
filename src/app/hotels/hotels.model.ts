export class Hotel {
  public _id: string;
  public id: string;

  constructor(
    public imageUrl: string,
    public hotelTitle: string,
    public hotelText: string,
    public phone: string,
    public email: string,
    public hotelUrl: string
  ) {

  }
}
