<script>

import { defineComponent } from 'vue'
import { Bar } from 'vue3-chart-v2'
import moment from 'moment'

export default defineComponent({
  props: {
    data: String,
    title: String
  },
  extends: Bar,

  watch: {
    data (value) {
      const data = []
      const labels = []

      value.forEach(item => {
        data.push(item.PaymentValueBase)
        labels.push(moment(item.PaymentDate).format('DD.MM.YYYY - hh.mm.ss'))
      })

      this.renderChart({
        labels,
        datasets: [
          {
            label: this.title,
            backgroundColor: '#b63f3f',
            data
          }
        ]
      })
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
