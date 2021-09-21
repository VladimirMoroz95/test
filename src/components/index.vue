<template>
  <div class="main-page-view">
    <div class="form-wrapper">
      <input type="date" v-model="startDate" label="Дата начала" />
      <input type="date" v-model="endDate" label="Дата окончания" />
      <button @click="getData">Отправить</button>
    </div>

    <div class="chart-wrapper">
      <Chart1Component :data="chartData" :title="`${startDate} - ${endDate}`"  :width="1600" :height="600" />
      <Chart2Component :data="chartData" />
    </div>
  </div>
</template>

<script>

import { getData } from '@/api'
import moment from 'moment'
import Chart1Component from './chart1'
import Chart2Component from './chart2'
export default {
  data () {
    return {
      chartData: [],
      startDate: '2021-01-09',
      endDate: '2021-05-09'
    }
  },

  methods: {
    async getData () {
      const format = 'DD.MM.YYYY'
      const data = await getData({ from: moment(this.startDate).format(format), to: moment(this.endDate).format(format) })
      console.log('DATA', data)
      this.chartData = data
    }
  },

  components: {
    Chart1Component,
    Chart2Component
  }
}
</script>

<style lang="scss" scoped>
  .main-page-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .form-wrapper {
    margin-top: 25px;
    display: flex;
    justify-content: flex-start;
    width: 80%;
    height: 40px;

    input {
      margin-left: 15px;
    }

    button {
      margin-left: 20px;
    }
  }

  .chart-wrapper {
    margin-top: 25px;
  }

</style>
