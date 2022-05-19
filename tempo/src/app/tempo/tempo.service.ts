import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICurrentWeatherData } from '../icurrent-weather-data';
import { environment } from 'src/environments/environment';
import { ITempoAtual } from '../itempo-atual';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TempoService {

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(city: string, country: string): Observable<ITempoAtual> {
    return this.httpClient.get<ICurrentWeatherData>(
      `${environment.baseURL}api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${environment.appId}`
    ).pipe(map(data => this.transformToTempoAtual(data)))
  }

  private transformToTempoAtual(data: ICurrentWeatherData): ITempoAtual {
    return{
      cidade: data.name,
      pais: data.sys.country,
      date: new Date(data.dt * 1000).toLocaleDateString('pt-Br'),
      descricao: data.weather[0].description,
      temperatura: this.convertKelvinToCelcius(data.main.temp),
      imagem: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
    }
  }

  private convertKelvinToCelcius(kelvin: number): number {
    return kelvin - 272.15;
  }
}
