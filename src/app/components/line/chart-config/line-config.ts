import { colors } from "../../../utils/utils";
import * as en from '../../../../assets/locales/en.json'
import * as es from '../../../../assets/locales/es.json'
import * as fr from '../../../../assets/locales/fr.json'

// Las etiquetas inferiores no varían según el idioma en este caso
const labels = ['Q1', 'Q2', 'Q3', 'Q4'];

// Se obtienen de la carpeta `locales`, donde se hallan todas las traducciones
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
};

// Documentación en https://www.chartjs.org/docs/latest/charts/line.html 
export const lineData = {
    labels: labels,
    datasets: [
        {
            label: countryLabels.spain.en,
            data: [8, 4, -1, 0],
            borderColor: colors.borderColors.teal,
            tension: 0.3

        },
        {
            label: countryLabels.france.en,
            data: [4, 0, -3, 0],
            borderColor: colors.borderColors.blue,
            tension: 0.3
        },
        {
            label: countryLabels.germany.en,
            data: [5, 3, 1, 0],
            borderColor: colors.borderColors.purple,
            tension: 0.3
        }
    ]
};

export const lineOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
        y: {
            beginAtZero: true
        }
    }
};