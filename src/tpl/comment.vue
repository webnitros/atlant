<template>
    <li class="list-group-item ">
        <div class="row">
            <div class="col-md-4">
                <p><strong>{{comment.username}}</strong> <small><i class="fa fa-circle text-success" aria-hidden="true"></i> {{comment.date}}</small></p>
            </div>
            <div class="col-md-5">
                {{comment.message}}
            </div>
            <div class="col-md-3">
                <button type="button" @click="delected" class="btn btn-danger btn-sm" title="Удалить">
                    Удалить
                </button>
            </div>
        </div>
    </li>
</template>
this.$emit('input', newvalue)
<script>
export default {
  props: {
    comment: Object
  },
  methods: {
    delected: function (val) {
      // Вернете индитификатор комментария для удаления
      this.$emit('input', this.comment.id)
    }
  }
}
</script>
