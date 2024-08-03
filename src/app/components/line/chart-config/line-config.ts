import { colors } from "../../../utils/utils";
import * as en from '../../../../assets/locales/en.json'
import * as es from '../../../../assets/locales/es.json'
import * as fr from '../../../../assets/locales/fr.json'

const labels = ['Q1', 'Q2', 'Q3', 'Q4'];
export const countryLabels = {
    spain: {
        en: en.LINE.CHART.TAGS.COUNTRIES.SPAIN,
        es: es.LINE.CHART.TAGS.COUNTRIES.SPAIN,
        fr: fr.LINE.CHART.TAGS.COUNTRIES.SPAIN
    },
    france: {
        en: en.LINE.CHART.TAGS.COUNTRIES.FRANCE,
        es: es.LINE.CHART.TAGS.COUNTRIES.FRANCE,
        fr: fr.LINE.CHART.TAGS.COUNTRIES.FRANCE
    },
    germany: {
        en: en.LINE.CHART.TAGS.COUNTRIES.GERMANY,
        es: es.LINE.CHART.TAGS.COUNTRIES.GERMANY,
        fr: fr.LINE.CHART.TAGS.COUNTRIES.GERMANY
    }

}

export const lineData = {
    labels: labels,
    datasets: [
        {
            label: countryLabels.spain.en,
            data: [8, 11, 15, 16],
            borderColor: colors.borderColors.teal,
            tension: 0.3

        },
        {
            label: countryLabels.france.en,
            data: [8, 9, 6, 4],
            borderColor: colors.borderColors.blue,
            tension: 0.3
        },
        {
            label: countryLabels.germany.en,
            data: [4, 6, 12, 4],
            borderColor: colors.borderColors.purple,
            tension: 0.3
        }
    ]
}

export const lineOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
        y: {
            beginAtZero: true
        }
    }
}