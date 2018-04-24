<template>
    <div class="commnets">
        <h1>{{ title }}</h1>
        <div class="card text-center p-5">
            <Comments></Comments>
        </div>
    </div>
</template>

<script>
import Comments from '@/modules/comments'

export default {
  components: {Comments},
  name: 'CommnetsPage',
  data () {
    return {
      title: 'Коментарии'
    }
  }
}
</script>

<style>
    .sms-send-page-wrapper{
        background: #f6f9fc;
    }

    .sms-send-page {
        text-align: left;
    }

    .sms-send-page .list-group {
        box-shadow: 0 0 11px #eceeef;
        margin: 20px 0;
    }
    .sms-send-page .list-group-item{
        display: inline-block;
    }
    .sms-send-page .list-group-item:first-child {
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
    }
    .sms-send-page .list-group-item:last-child {
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
        margin-bottom: 0;
    }

</style>
