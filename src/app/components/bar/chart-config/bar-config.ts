import { colors } from "../../../utils/utils";
import * as en from '../../../../assets/locales/en.json'
import * as es from '../../../../assets/locales/es.json'
import * as fr from '../../../../assets/locales/fr.json'

export const labels = {
    en: en.BAR.CHART.LEGEND,
    es: es.BAR.CHART.LEGEND,
    fr: fr.BAR.CHART.LEGEND
};

export const barData = {
    labels: [],
    datasets: [{
        label: 'My First Dataset',
        data: [27, 12, 31],
        backgroundColor: [
            colors.chartColors.teal,
            colors.chartColors.blue,
            colors.chartColors.purple
        ],
        borderColor: [
            colors.borderColors.teal,
            colors.borderColors.blue,
            colors.borderColors.purple
        ],
        borderWidth: 1
    }]
};

export const barOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                font: {
                }
            }
        }
    }
}