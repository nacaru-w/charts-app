/**
 * Componente PieComponent
 * 
 * Renderiza un gráfico circular que se actualiza en tiempo real con datos simulados 
 * obtenidos de una API. Utiliza la librería Chart.js para generar el gráfico y
 * ng2-charts para la integración con Angular. Las traducciones se gestionan a través de
 * @ngx-translate/core según el idioma seleccionado por el usuario.
 * 
 * Funcionalidades principales:
 * - Inicializar y renderizar el gráfico circular.
 * - Obtener y suscribirse a datos de votos desde un servicio simulado de API.
 * - Actualizar el gráfico en tiempo real con los datos obtenidos.
 */

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { BaseChartDirective } from 'ng2-charts';
import { bodyFont, bodyFontColor } from '../../utils/utils';
import { labels, pieData, pieOptions } from './chart-config/pie-config';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Languages } from '../../models/lang-models';
import { apiService } from '../../services/api.service';
import { Subscription } from 'rxjs';
import { Vote } from '../../models/charts-models';

@Component({
  selector: 'app-pie',
  standalone: true,
  imports: [BaseChartDirective, TranslateModule],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.scss'
})
export class PieComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  currentLang: Languages;
  pieChart: any;

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
    this.pieChart.update();
  }

  /**
  * Actualiza las etiquetas del gráfico según el idioma.
  * @param language El idioma actual.
  */
  private updateLabels(language: Languages): void {
    if (this.pieChart) {
      this.pieChart.data.labels = labels.party[language];
      this.pieChart.data.datasets[0].label = labels.votes[language];
      this.updateChart();
    }
  }

  /**
  * Añade un voto al gráfico.
  * @param vote El voto a añadir.
  */
  private addvoteToChart(vote: string): void {
    // Para poder modificar los datos mediante índice, los datos del array
    // deben estar dispuestos en el mismo orden que en pie-config.ts
    const parties = ['Democrat', 'Republican', 'Independent', 'Other'];
    this.pieChart.data.datasets[0].data[parties.indexOf(vote)] += 1;
    this.updateChart();
  }

  /**
  * Inicializa el gráfico circular.
  */
  private initializeChart(): void {
    const ctx = <HTMLCanvasElement>document.getElementById('pieChart');

    Chart.defaults.font.family = bodyFont;
    Chart.defaults.color = bodyFontColor;

    this.pieChart = new Chart(ctx, {
      type: 'doughnut',
      data: pieData,
      options: pieOptions
    })

    this.updateLabels(this.currentLang);
  }

  /**
  * Se suscribe al endpoint de la API que devuelve los votos.
  * Estos se introducirán en el gráfico de forma dinámica.
  */
  private subscribeToAPIEndpoint(): void {
    this.subscription = this.api.getVoteFromAPI().subscribe((res: Vote) => {
      this.addvoteToChart(res);
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