<template>
    <div class="modules_calculator">
        <table style="margin:0 auto;" class="fraction">
            <tbody>
            <tr>
                <td></td>
                <td></td>
                <td style="text-align:center;"> Дробь 1 </td>
                <td></td>
                <td></td>
                <td style="text-align:center;"> Дробь 2 </td>
                <td></td>
                <td class="fr-res-td"></td>
                <td class="fr-res-td"></td>
                <td style="text-align:center;" class="fr-res-td"> Результат </td>
            </tr>
            <tr>
                <td rowspan="3"></td>
                <td rowspan="3"></td>
                <td>
                    <input type="text" v-model="n1" :class="{ 'error-label': n1 === '' }" @input="changeInput"
                           name="n1">
                </td>
                <td rowspan="3">
                    <input type="text" v-model="operator" :class="{ 'error-label': operator === '' }"
                           @input="changeOperator" name="operator">
                </td>
                <td rowspan="3"></td>
                <td><input type="text" v-model="n2" :class="{ 'error-label': n2 === '' }" @input="changeInput"
                           name="n2"></td>
                <td rowspan="3" width="20"><span class="equal-sign">=</span></td>
                <td rowspan="3"></td>
                <td rowspan="3" class="fr-res-td"></td>
                <td class="cell_fr fr-res-td">
                    <input type="text" disabled v-model="resultN" value="">
                </td>
            </tr>
            <tr>
                <td class="line_fraction"></td>
                <td class="line_fraction"></td>
                <td class="line_fraction fr-res-td"></td>
            </tr>
            <tr>
                <td class="cell_fr">
                    <input type="text" v-model="d1" :class="{ 'error-label': d1 === '' }" @input="changeInput"
                           name="d1">
                </td>
                <td class="cell_fr">
                    <input type="text" v-model="d2" :class="{ 'error-label': d2 === '' }" @input="changeInput"
                           name="d2">
                </td>
                <td class="cell_fr fr-res-td">
                    <input type="text" disabled v-model="resultD" value="">
                </td>
            </tr>
            </tbody>
        </table>

        <br>
        <br>
        <div class="text-center">
            <a href="#" class="btn btn-outline-secondary" @click="addFraction">add fraction</a>
        </div>
        <div v-if="error" class="error">{{error}}</div>
    </div>
</template>

<script>
// Вынес в рассширяемы компонент для заргрузки модуля для покдлючения
import calculatorMixin from '@/mixins/calculator.js'

export default {
  mixins: [calculatorMixin],
  methods: {
    setOperator: function (val) {
      // Проверяем чтобы нельзя было указать другие операторы
      switch (val) {
        case '+':
        case '-':
        case '/':
        case '*':
          this.error = null
          this.operator = val
          break
        default:
          this.error = 'Допустимыем операторы "+-*/"'
          this.operator = ''
          break
      }
    },
    // Метод срабатывает на ввод в input с оператором
    changeOperator: function (e) {
      this.setOperator(e.target.value)
      this.changeFraction()
    },
    // Метод срабатывает на ввод в input с дробями
    changeInput: function (e) {
      let val = e.target.value
      let name = e.target.name

      // Проверим что введены только цифры и буквы
      if (isNaN(parseInt(val)) || !isFinite(val)) {
        this.error = 'Разрешенно вводить только цифры'
        this[name] = parseInt(val.replace(/\D+/g, ''))
      } else {
        this.error = null
        this.changeFraction()
      }
    },
    // Установка демострационных данных
    addFraction: function () {
      this.setOperator('+')
      this.n1 = 3
      this.n2 = 3
      this.d1 = 3
      this.d2 = 3
      this.changeFraction()
    },
    changeFraction: function () {
      // Проверяем значения были указаны верно перед тем как отправить на посдчет
      if (!this.error) {
        if (!this.getResult(this.n1, this.n2, this.d1, this.d2, this.operator)) {
          this.error = 'Требуется заполнить все четыре поля и указать оператор'
        } else {
          this.error = null
        }
      }
    }
  },
  watch: {}
}
</script>

<style>
    input {
        margin: 10px;
        text-align: center;
        width: 70px;
    }

    .error {
        color: red;
        padding: 10px;
        text-align: center;
    }
</style>
