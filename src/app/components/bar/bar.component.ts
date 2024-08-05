/**
 * Componente BarComponent
 * 
 * Renderiza un gráfico de barras que se actualiza en tiempo real con datos simulados 
 * obtenidos de una API. Utiliza la librería Chart.js para generar el gráfico y
 * ng2-charts para la integración con Angular. La internacionalización (locale) se gestiona usando
 * @ngx-translate.
 * 
 * Funcionalidades principales:
 * - Inicializar y renderizar el gráfico de barras.
 * - Obtener y suscribirse a datos de puntos XY desde un servicio simulado de API.
 * - Actualizar el gráfico en tiempo real con los datos obtenidos.
 */

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { BaseChartDirective } from 'ng2-charts';
import { barData, barOptions, labels } from './chart-config/bar-config';
import { bodyFont, bodyFontColor } from '../../utils/utils';
import { TranslateService, TranslateModule, LangChangeEvent } from '@ngx-translate/core';
import { Languages } from '../../models/lang-models';
import { Subscription } from 'rxjs';
import { apiService } from '../../services/api.service';
import { XYPoints } from '../../models/charts-models';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [BaseChartDirective, TranslateModule],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss'
})
export class BarComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  currentLang: Languages;
  barChart: any;

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

  private updateChart(): void {
    this.barChart?.update()
  }

  /**
  * Actualiza las etiquetas del gráfico según el idioma.
  * @param language El idioma actual.
  */
  private updateLabels(language: Languages): void {
    if (this.barChart) {
      this.barChart.data.labels = labels[language];
      this.updateChart();
    }
  }

  /**
  * Añade puntos al gráfico.
  * @param pointsObj Los puntos a añadir en forma de objeto.
  * El objeto contiene la letra y el color como claves
  */
  private addPointsToChart(pointsObj: XYPoints): void {
    // Para poder modificar los datos mediante índice, los datos del array
    // deben estar dispuestos en el mismo orden que en bar-config.ts
    const letters: XYPoints["letter"][] = ['x', 'y'];
    const colors: XYPoints["color"][] = ['teal', 'blue', 'purple'];
    const letterIndex = letters.indexOf(pointsObj.letter);
    const colorIndex = colors.indexOf(pointsObj.color);
    if (this.barChart) {
      this.barChart.data.datasets[letterIndex].data[colorIndex] += pointsObj.points
      this.updateChart()
    }
  }

  /**
   * Inicializa el gráfico de barras.
   */
  private initializeChart(): void {
    const ctx = <HTMLCanvasElement>document.getElementById('barChart');

    Chart.defaults.font.family = bodyFont;
    Chart.defaults.color = bodyFontColor;

    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: barData, // Los datos se importan de un archivo específico
      options: barOptions, // Las opciones de chart.js también
    })

    this.updateLabels(this.currentLang);
  }

  /**
  * Se suscribe al endpoint de la API que devuelve los puntos.
  * Estos puntos se introducirán en el gráfico de forma dinámica.
  */
  private subscribeToAPIEndpoint(): void {
    this.subscription = this.api.getXYPointsFromAPI().subscribe((res: XYPoints) => {
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
