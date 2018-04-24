<template>
    <div class="hello">
        <h1>{{ title }}</h1>
        <div class="card text-center p-5">
            <div class="content"><img src="./../assets/logo.png"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      title: 'Главная'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
