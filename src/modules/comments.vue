<template>
    <div class="modules_comments">
        <div class="sms-send-page-wrapper">

            <div class="row">
                <div class="col-lg-8">
                    <div class="sms-send-page">
                        <ul class="list-group">
                            <Comment v-for="item in filteredItems" :comment="item" :key="item.id" @input="delected"></Comment>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4" style="text-align: left">
                    <pre>
                        {{comments}}
                    </pre>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

// подключен компонент с шаблоном для разгразки кода а так для раширяемости, к  примеру если надо будет добавлять какие функции для работы только с комметарие (изменения комментари)
import Comment from '@/tpl/comment.vue'

export default {
  components: {Comment},
  data () {
    return {
      comments: [
        {
          id: 1,
          username: 'nitros',
          message: 'Тестовый коммент 1',
          date: '22.04.2018'
        },
        {
          id: 2,
          username: 'nitros',
          message: 'Это шедевр',
          date: '22.04.2018'
        },
        {
          id: 3,
          username: 'nitros',
          message: 'Это прекрасно',
          date: '23.04.2018'
        },
        {
          id: 4,
          username: 'nitros',
          message: 'Лучшее, что я видел',
          date: '23.04.2018'
        },
        {
          id: 5,
          username: 'nitros',
          message: 'Два чая этому автору',
          date: '24.04.2018'
        },
        {
          id: 6,
          username: 'nitros',
          message: 'message 6',
          date: '24.04.2018'
        },
        {
          id: 7,
          username: 'nitros',
          message: 'message 7',
          date: '24.04.2018'
        },
        {
          id: 8,
          username: 'nitros',
          message: 'message 8',
          date: '24.04.2018'
        },
        {
          id: 9,
          username: 'nitros',
          message: 'message 9',
          date: '25.04.2018'
        },
        {
          id: 10,
          username: 'nitros',
          message: 'message 10',
          date: '25.04.2018'
        }
      ]
    }
  },
  sockets: {
    // Отправка сообщения
    onopen: function (message) {
      // простая проверка чтобы не отсылать запросы в пустую при старте сервиса
      if (message.isTrusted === undefined) {
        this.$socket.send(message)
      }
    },
    // в случае если вернется ошибка
    onerror: function (evt) {
      console.log('socket onerror')
    },
    // Сюда вернутся сообщения
    onmessage: function (res) {
      // вынесен в отдельный метод для расширяемости
      this.response(event.data)
    }
  },
  computed: {
    filteredItems () {
      return this.comments.filter(item => {
        return item
      })
    }
  },
  methods: {
    delected: function (val) {
      this.$socket.onopen(val)
    },
    response: function (id) {
      id = parseInt(id) // проверям что вернулась строка

      // составляем новый список комментарие с исключением удаленного
      let arrLength = []
      for (let i = 0; i < this.comments.length; i++) {
        let item = this.comments[i]
        if (item.id !== id) {
          arrLength.push(item)
        }
      }
      // Записываем новый список для перезапуска filteredItems
      this.comments = arrLength
    }
  }
}
</script>
