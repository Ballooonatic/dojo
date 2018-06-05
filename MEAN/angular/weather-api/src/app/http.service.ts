import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { }

  getBurbankWeatherData(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Burbank&appid=49d7a59770b5bb224a966200ebb07a6a')
  }
  getChicagoWeatherData(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=49d7a59770b5bb224a966200ebb07a6a')
  }
  getDallasWeatherData(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=49d7a59770b5bb224a966200ebb07a6a')
  }
  getSanJoseWeatherData(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=San%20jose&appid=49d7a59770b5bb224a966200ebb07a6a')
  }
  getSeattleWeatherData(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=49d7a59770b5bb224a966200ebb07a6a')
  }
  getWashingtonDcWeatherData(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Prince%20George%27s%20County&appid=49d7a59770b5bb224a966200ebb07a6a')
  }

}
