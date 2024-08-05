/**
 * Componente LineComponent
 * 
 * Este componente es responsable de renderizar un gráfico de líneas que se actualiza en tiempo real
 * con datos simulados obtenidos de una API. Utiliza la librería Chart.js para generar el gráfico y
 * ng2-charts para la integración con Angular. Gestiona la internacionalización usando
 * @ngx-translate/core para traducir las etiquetas del gráfico según el idioma seleccionado por el usuario.
 * 
 * Funcionalidades principales:
 * - Inicializar y renderizar el gráfico de líneas.
 * - Obtener y suscribirse al endpoint que arroja datos de países gestionado a través de un servicio que simula una API real.
 * - Actualizar el gráfico en tiempo real con los datos obtenidos.
 */

import { Component, OnDestroy, OnInit } from '@angular/core';
import { bodyFont, bodyFontColor } from '../../utils/utils';
import { BaseChartDirective } from 'ng2-charts';
import { Chart } from 'chart.js/auto';
import { countryLabels, lineData, lineOptions } from './chart-config/line-config';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Languages } from '../../models/lang-models';
import { Subscription } from 'rxjs';
import { apiService } from '../../services/api.service';
import { CountryPoints } from '../../models/charts-models';

@Component({
  selector: 'app-line',
  standalone: true,
  imports: [BaseChartDirective, TranslateModule],
  templateUrl: './line.component.html',
  styleUrl: './line.component.scss'
})
export class LineComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  currentLang: Languages;
  lineChart: any;

  constructor(private translate: TranslateService, private api: apiService) {
    this.currentLang = this.translate.currentLang as Languages;
  }

  /**
  * Se suscribe a los cambios de idioma gestionados con ngx-translate.
  */
  private subscribeToLangChange(): void {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      const language: Languages = event.lang as Languages;
      this.currentLang = language;
      this.updateLabels(this.currentLang);
    });
  }


  private updateChartData(): void {
    this.lineChart.update()
  }

  /**
  * Actualiza las etiquetas del gráfico según el idioma.
  * @param language El idioma actual.
  */
  private updateLabels(language: Languages): void {
    const countries: ('spain' | 'france' | 'germany')[] = ['spain', 'france', 'germany']
    let index = 0;
    this.lineChart.data.datasets.forEach((element: { label: string; }) => {
      element.label = countryLabels[countries[index]][language];
      index++;
    });
    this.lineChart.update();
  }

  /**
 * Añade puntos al gráfico.
 * @param countryPoints Los puntos a añadir en forma de objeto.
 * El objeto contiene el país y el número de puntos
 */
  addPointsToChart(countryPoints: CountryPoints) {
    // Para poder modificar los datos mediante índice, los datos del array
    // deben estar dispuestos en el mismo orden que en line-config.ts
    const countries = ['Spain', 'France', 'Germany'];
    const index = countries.indexOf(countryPoints.country);
    this.lineChart.data.datasets[index].data[3] += countryPoints.points;
    this.updateChartData();
  }

  /**
  * Inicializa el gráfico de líneas.
  */
  initializeChart(): void {
    const ctx = <HTMLCanvasElement>document.getElementById('lineChart');

    Chart.defaults.font.family = bodyFont;
    Chart.defaults.color = bodyFontColor;

    this.lineChart = new Chart(ctx, {
      type: 'line',
      data: lineData,
      options: lineOptions
    })

    this.updateLabels(this.currentLang);

  }

  /**
  * Se suscribe al endpoint de la API que devuelve los puntos.
  * Estos puntos se introducirán en el gráfico de forma dinámica.
  */
  subscribeToAPIEndpoint(): void {
    this.subscription = this.api.getCountryPointsFromAPI().subscribe((res: CountryPoints) => {
      console.log(res)
      this.addPointsToChart(res);
    })
  }

  ngOnInit(): void {
    this.initializeChart();
    this.subscribeToLangChange();
    this.subscribeToAPIEndpoint();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
