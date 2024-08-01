import { colors } from "../../../utils/utils";

const labels = ['Turquesa', 'Azul', 'Morado'];

export const barData = {
    labels: labels,
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
    maintainAspectRatio: true,
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