<template>
    <div class="calculator">
        <h1>{{ title }}</h1>

        <div class="card text-center p-5">
            <Calculator></Calculator>
        </div>
    </div>
</template>

<script>
import Calculator from '@/modules/calculator'

export default {
  components: { Calculator },
  name: 'CalculatorPage',
  data () {
    return {
      title: 'Калькулятор обыкновенных дробей'
    }
  }
}
</script>
