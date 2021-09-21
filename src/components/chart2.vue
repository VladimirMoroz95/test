<script>
import { defineComponent } from 'vue'
import { Pie } from 'vue3-chart-v2'
import moment from 'moment'

export default defineComponent({
  props: {
    data: String
  },
  extends: Pie,

  watch: {
    data (value) {
      const data = []
      const labels = ['RUB', 'EUR', 'USD']
      const currenciesCount = {
        usd: 0,
        rub: 0,
        eur: 0
      }

      value.forEach(item => {
        currenciesCount[item.CurrencyName.toLowerCase()]++
      })

      data.push(currenciesCount.rub)
      data.push(currenciesCount.eur)
      data.push(currenciesCount.usd)

      this.renderChart({
        labels,
        datasets: [
          {
            label: 'График №2',
            data,
            backgroundColor: ['Red', 'Yellow', 'Blue', 'Green']
          }
        ]
      })
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
