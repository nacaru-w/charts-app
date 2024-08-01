import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { BaseChartDirective } from 'ng2-charts';
import { barData, barOptions } from './chart-config/bar-config';
import { bodyFont, bodyFontColor } from '../../utils/utils';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [BaseChartDirective, TranslateModule],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss'
})
export class BarComponent implements OnInit {

  barChart: any;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    // Use browser language if available
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang && browserLang.match(/en|fr|es/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    this.buildChart();
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

  }

}
