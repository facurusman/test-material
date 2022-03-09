export class Movie {
  readonly popularity : number
  readonly realese_date : string
  readonly original_title :string
  readonly overview : string

  constructor({
    popularity, realese_date, original_title, overview
  }:{
    popularity : number, realese_date : string, original_title : string, overview : string
  }){
    this.popularity = popularity
    this.realese_date = realese_date
    this.original_title = original_title
    this.overview = overview
  }
}
