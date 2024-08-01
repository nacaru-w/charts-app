import { colors } from "../../../utils/utils";

const labels = ['Democrat', 'Republican', 'Independent', 'Other']

export const pieData = {
    labels: labels,
    datasets: [{
        label: 'Votes',
        data: [455, 433, 277, 77],
        backgroundColor: [
            colors.borderColors.blue,
            colors.borderColors.red,
            colors.borderColors.yellow,
            colors.borderColors.lightGray
        ],
        hoverOffset: 4
    }]
}