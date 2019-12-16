<script>
import { Bar } from "vue-chartjs";

export default {
  name: "BarChart",
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  //   props: ["chartData", "chartOptions"],
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>
