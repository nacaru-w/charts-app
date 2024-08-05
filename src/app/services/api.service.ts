/**
* Servicio ApiService
* 
* Simula la obtención de datos desde una API para diferentes tipos de estadísticas 
* en tiempo real. Proporciona métodos para generar votos, puntos XY y 
* puntos de países aleatorios, utilizando RxJS para emitir datos en intervalos.
*/

import { Injectable } from '@angular/core';
import { map, interval, Observable } from 'rxjs';
import { CountryPoints, Vote, XYPoints } from '../models/charts-models';

@Injectable({
  providedIn: 'root'
})
export class apiService {

  constructor() { }

  /**
 * Genera un número aleatorio entre 0 y el límite especificado.
 * @param limit El límite superior para el número aleatorio.
 * Como usa `Math.floor`, el límite será siempre un número menor al 
 * proporcionado como argumento.
 * @returns Un número aleatorio.
 */
  private getRandomNumber(limit: number): number {
    return Math.floor(Math.random() * limit);
  }

  /**
 * Convierte un número en negativo aleatoriamente.
 * @param num El número a modificar.
 * @returns El número modificado, que puede ser negativo.
 */
  private maybeMakeNumberNegative(num: number): number {
    const shouldMakeNegative = Math.random() > 0.5;
    if (shouldMakeNegative && num > 0) {
      return -num
    }
    return num
  }


  /**
 * Simula la obtención de un voto de una API.
 * @returns Un observable que emite votos aleatorios.
 */
  getVoteFromAPI(): Observable<Vote> {
    const votes: Vote[] = ['Democrat', 'Republican', 'Independent', 'Other']
    return interval(1000).pipe(
      map(() => {
        const number = this.getRandomNumber(votes.length)
        return votes[number]
      })
    )
  }

  /**
 * Simula la obtención de puntos XY de una API.
 * @returns Un observable que emite puntos XY aleatorios.
 */
  getXYPointsFromAPI(): Observable<XYPoints> {
    const letters: XYPoints["letter"][] = ['x', 'y'];
    const colors: XYPoints["color"][] = ['teal', 'blue', 'purple'];
    return interval(1500).pipe(
      map(() => {
        const letter = letters[this.getRandomNumber(letters.length)];
        const color = colors[this.getRandomNumber(colors.length)];
        const points: number = this.getRandomNumber(6);
        return {
          letter: letter,
          color: color,
          points: points
        }
      })
    )
  }

  /**
 * Simula la obtención de puntos asignados a países de una API.
 * @returns Un observable que emite puntos de países aleatorios.
 */
  getCountryPointsFromAPI(): Observable<CountryPoints> {
    const countries: CountryPoints["country"][] = ['Spain', 'France', 'Germany'];
    return interval(1000).pipe(
      map(() => {
        const country = countries[this.getRandomNumber(countries.length)];
        const number = this.maybeMakeNumberNegative(this.getRandomNumber(3));
        return {
          country: country,
          points: number
        }
      })
    )
  }

}
