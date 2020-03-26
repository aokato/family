<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  name: "chart",
  props: {
    chartData: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
  },
  methods: {
    showChart: function() {
      console.dir(this.chartData);
      this.renderChart(this.chartData, this.options);
    },
  },
  mounted() {
    setTimeout(() => {
      this.showChart();
    }, 1000);
  },
};
</script>
<style lang="scss" scoped></style>
