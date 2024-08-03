import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { BaseChartDirective } from 'ng2-charts';
import { barData, barOptions, labels } from './chart-config/bar-config';
import { bodyFont, bodyFontColor } from '../../utils/utils';
import { TranslateService, TranslateModule, LangChangeEvent } from '@ngx-translate/core';
import { Languages } from '../../models/lang-models';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [BaseChartDirective, TranslateModule],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss'
})
export class BarComponent implements OnInit {

  barChart: any;
  currentLang: Languages;

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang as Languages;
  }

  ngOnInit(): void {
    this.buildChart();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      const language: Languages = event.lang as Languages;
      this.currentLang = language;
      this.updateLabels(this.currentLang);
    })
  }

  updateLabels(language: Languages): void {
    this.barChart.data.labels = labels[language];
    this.barChart.update()
  }

  buildChart(): void {
    const ctx = <HTMLCanvasElement>document.getElementById('barChart');

    Chart.defaults.font.family = bodyFont;
    Chart.defaults.color = bodyFontColor;

    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: barData,
      options: barOptions,
    })

    this.updateLabels(this.currentLang)

  }

}
