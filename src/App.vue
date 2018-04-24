<template>
  <div id="app">
    <Menu/>
    <br>
    <br>
    <router-view/>
  </div>
</template>

<script>
// Подключил меню для расширяемости
import Menu from '@/modules/menu'

export default {
  components: { Menu },
  name: 'App'
}
</script>
