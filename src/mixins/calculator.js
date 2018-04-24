export default {
  data: function () {
    return {
      resultN: null,
      resultD: null,
      operator: null,
      n1: null,
      n2: null,
      d1: null,
      d2: null,
      error: null
    }
  },
  methods: {
    valid: function (value) {
      return value !== '' && value !== null
    },
    getResult: function (n1, n2, d1, d2, Op) {
      let result = false
      if (this.valid(n1) && this.valid(n2) && this.valid(d1) && this.valid(d2) && this.valid(Op)) {
        switch (Op) {
          case '+':
            this.resultN = (n1 * d2) + (n2 * d1)
            this.resultD = (d1 * d2)
            break
          case '-':
            this.resultN = (n1 * d2) - (n2 * d1)
            this.resultD = (d1 * d2)
            break
          case '*':
            this.resultN = n1 * n2
            this.resultD = d1 * d2
            break
          case '/':
            this.resultN = n1 * d2
            this.resultD = d1 * n2
            break
        }
        result = true
      }
      return result
    }
  }
}
