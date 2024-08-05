import { colors } from "../../../utils/utils";
import * as en from '../../../../assets/locales/en.json'
import * as es from '../../../../assets/locales/es.json'
import * as fr from '../../../../assets/locales/fr.json'

// Se obtienen de la carpeta `locales`, donde se hallan todas las traducciones
export const labels = {
    en: en.BAR.CHART.LEGEND,
    es: es.BAR.CHART.LEGEND,
    fr: fr.BAR.CHART.LEGEND
};

// Documentación en https://www.chartjs.org/docs/latest/charts/bar.html 
export const barData = {
    labels: [],
    datasets: [
        {
            label: 'X',
            data: [0, 0, 0],
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
        },
        {
            label: 'Y',
            data: [0, 0, 0],
            backgroundColor: [
                colors.chartColors.darkTeal,
                colors.chartColors.darkBlue,
                colors.chartColors.darkPurple
            ],
            borderColor: [
                colors.borderColors.darkTeal,
                colors.borderColors.darkBlue,
                colors.borderColors.darkPurple
            ],
            borderWidth: 1
        }
    ]
};

export const barOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
        y: {
            ticks: {
                font: {
                }
            }
        }
    }
}