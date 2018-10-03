export class CityDetails {
    //display city details nicely
    public cleanText:string;
    constructor(public city:string, public state:string, public country: string) {
        this.cleanText =  this.country == "US"? 
              this.city + ", " + this.state  + " (USA)"
            : this.city + ", " + this.country;
    }
}
