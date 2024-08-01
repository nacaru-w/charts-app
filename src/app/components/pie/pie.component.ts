import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { BaseChartDirective } from 'ng2-charts';
import { bodyFont, bodyFontColor } from '../../utils/utils';
import { pieData } from './chart-config/pie-config';

@Component({
  selector: 'app-pie',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.scss'
})
export class PieComponent implements OnInit {

  pieChart: any;

  constructor() { }

  ngOnInit(): void {
    this.buildChart();
  }

  buildChart(): void {
    const ctx = <HTMLCanvasElement>document.getElementById('pieChart');

    Chart.defaults.font.family = bodyFont;
    Chart.defaults.color = bodyFontColor;

    this.pieChart = new Chart(ctx, {
      type: 'doughnut',
      data: pieData,
    })

  }

}
