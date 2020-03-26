<template>
  <div id="next-step">
    <Chart :chart-data="datacollection" :options="options"></Chart>
  </div>
</template>
<script>
import Chart from "@/components/Chart.vue";
import { db } from "@/firebase";
import store from "@/store";
export default {
  components: {
    Chart,
  },
  data() {
    return {
      array: [],
      labels: [],
      values: [],
      datacollection: null,
      options: null,
      data: {
        labels: {},
        datasets: [
          {
            label: "Web",
            data: [],
            borderWidth: 2,
          },
        ],
      },
      giveoptions: {
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Web",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 5,
              },
            },
          ],
        },
      },
    };
  },
  mounted() {
    const current_user = store.state.currentUser;
    let count = db.collection("counts").doc(current_user.uid);
    count.get().then(doc => {
      const info = {
        ...doc.data(),
      };
      this.array.push(info);
      for (let key in this.array[0]) {
        for (let key2 in this.array[0][key]) {
          if (key2 == "count") {
            //alert(array[key][key2]);
            this.labels.push(key);
            this.values.push(Number(this.array[0][key][key2]));
          }
        }
      }
    });
    this.data.labels = this.labels;
    this.data.datasets[0].data = this.values;
    this.datacollection = this.data;
    this.options = this.giveoptions;
  },
};
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1024px) {
  #next-step {
    background: white;
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (min-width: 700px) and (max-width: 1024px) {
  #next-step {
    background: white;
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: auto;
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  #next-step {
    background: white;
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
</style>
