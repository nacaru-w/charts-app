import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { BaseChartDirective } from 'ng2-charts';
import { bodyFont, bodyFontColor } from '../../utils/utils';
import { labels, pieData } from './chart-config/pie-config';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Languages } from '../../models/lang-models';
import { MediawikiService } from '../../services/mediawiki.service';

@Component({
  selector: 'app-pie',
  standalone: true,
  imports: [BaseChartDirective, TranslateModule],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.scss'
})
export class PieComponent implements OnInit, AfterViewChecked {

  currentLang: Languages;
  pieChart: any;

  constructor(private translate: TranslateService, private mw: MediawikiService) {
    this.currentLang = this.translate.currentLang as Languages;
  }

  ngOnInit() {
    this.buildChart();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      const language: Languages = event.lang as Languages;
      this.updateLabels(language);
    })

  }

  ngAfterViewChecked(): void {
    this.getStreamData();
  }

  updateLabels(language: Languages): void {
    this.pieChart.data.labels = labels.party[language];
    this.pieChart.data.datasets[0].label = labels.votes[language];
    this.pieChart.update();
  }

  buildChart(): void {
    const ctx = <HTMLCanvasElement>document.getElementById('pieChart');

    Chart.defaults.font.family = bodyFont;
    Chart.defaults.color = bodyFontColor;

    this.pieChart = new Chart(ctx, {
      type: 'doughnut',
      data: pieData,
    })

    this.updateLabels(this.currentLang);
  }

  getStreamData() {
    console.log("holla");
    this.mw.getNewPages().subscribe((res: any) => {
      console.log(res);
    })
  }

}
