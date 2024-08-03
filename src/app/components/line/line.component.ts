import { Component, OnInit } from '@angular/core';
import { bodyFont, bodyFontColor } from '../../utils/utils';
import { BaseChartDirective } from 'ng2-charts';
import { Chart } from 'chart.js/auto';
import { countryLabels, lineData, lineOptions } from './chart-config/line-config';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Languages } from '../../models/lang-models';

@Component({
  selector: 'app-line',
  standalone: true,
  imports: [BaseChartDirective, TranslateModule],
  templateUrl: './line.component.html',
  styleUrl: './line.component.scss'
})
export class LineComponent implements OnInit {

  currentLang: Languages;
  lineChart: any;

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang as Languages;
  }

  ngOnInit(): void {
    this.buildChart();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      const language: Languages = event.lang as Languages;
      this.updateLabels(language);
    })
  }

  updateLabels(language: Languages): void {
    const countries: ('spain' | 'france' | 'germany')[] = ['spain', 'france', 'germany']
    let index = 0;
    this.lineChart.data.datasets.forEach((element: { label: string; }) => {
      element.label = countryLabels[countries[index]][language]
      index++
    });
    this.lineChart.update();
  }

  buildChart(): void {
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

}
