import { colors } from "../../../utils/utils";

const labels = ['Q1', 'Q2', 'Q3', 'Q4'];

export const lineData = {
    labels: labels,
    datasets: [
        {
            label: 'Spain',
            data: [8, 11, 15, 16],
            borderColor: colors.borderColors.teal,
            tension: 0.3

        },
        {
            label: 'France',
            data: [8, 9, 6, 4],
            borderColor: colors.borderColors.blue,
            tension: 0.3
        },
        {
            label: 'Germany',
            data: [4, 6, 12, 4],
            borderColor: colors.borderColors.purple,
            tension: 0.3
        }
    ]
}

export const lineOptions = {
    maintainAspectRatio: true,
    scales: {
        y: {
            beginAtZero: true
        }
    }
}