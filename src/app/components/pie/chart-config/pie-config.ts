import { colors } from "../../../utils/utils";
import * as en from '../../../../assets/locales/en.json'
import * as es from '../../../../assets/locales/es.json'
import * as fr from '../../../../assets/locales/fr.json'

// Se obtienen de la carpeta `locales`, donde se hallan todas las traducciones
export const labels = {
    party: {
        en: en.PIE.CHART.LEGEND,
        es: es.PIE.CHART.LEGEND,
        fr: fr.PIE.CHART.LEGEND
    },
    votes: {
        en: en.PIE.CHART.TAGS.VOTES,
        es: es.PIE.CHART.TAGS.VOTES,
        fr: fr.PIE.CHART.TAGS.VOTES
    }
}

// Documentación en https://www.chartjs.org/docs/latest/charts/pie.html 
export const pieData = {
    labels: [],
    datasets: [{
        label: 'Votes',
        data: [0, 0, 0, 0],
        backgroundColor: [
            colors.borderColors.blue,
            colors.borderColors.red,
            colors.borderColors.yellow,
            colors.borderColors.lightGray
        ],
        hoverOffset: 4
    }]
}

export const pieOptions = {
    maintainAspectRatio: false
}