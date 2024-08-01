import { Component, OnInit } from '@angular/core';
import { bodyFont, bodyFontColor } from '../../utils/utils';
import { BaseChartDirective } from 'ng2-charts';
import { Chart } from 'chart.js/auto';
import { lineData, lineOptions } from './chart-config/line-config';

@Component({
  selector: 'app-line',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './line.component.html',
  styleUrl: './line.component.scss'
})
export class LineComponent implements OnInit {

  lineChart: any;

  constructor() { }

  ngOnInit(): void {
    this.buildChart();
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
  }

}
