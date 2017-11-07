<template lang="html">
  <div :class="className">
    <div class="card">
      <header class="card-header">
        {{ modal.title }}
      </header>
      <div class="card-content">
        <div class="inner">
          <!-- Dynamic component -->
          <component
            :is="modal.component"
            :data="modal.data"
            :close="close"
            :closeAll="closeAll">
          </component>

          <!-- Confirmation button -->
          <button
            v-if="modal.isConfirmation"
            @click="confirm()"
            class="btn btn-success btn-block">
            <span v-if="loading">Загрузка..</span>
            <span v-else>Подтвердить</span>
          </button>

          <!-- Dismiss modal btn -->
          <div class="gap"></div>
          <button class="btn btn-error btn-block btn-ghost" @click="close()">
            Закрыть
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['modal', 'closeModal', 'closeModals', 'className'],
  data () {
    return {
      loading: false
    }
  },
  methods: {
    close () {
      this.closeModal(this.modal.id)
    },
    closeAll () {
      this.closeModals()
    },
    confirm () {
      this.loading = true
      this.modal.confirm()
        .then(() => {
          this.loading = false
          this.close()
        })
    }
  }
}
</script>

<style lang="scss" scoped>

$width: 50em;

.modal {
  width: $width;
  margin: 1em;
  word-wrap: break-word;
  position: relative;
  background-color: white;

  -webkit-animation: modal-show .16s cubic-bezier(0.175, 0.885, 0.32, 1.27499); /* Safari 4+ */
  -moz-animation:    modal-show .16s cubic-bezier(0.175, 0.885, 0.32, 1.27499); /* Fx 5+ */
  -o-animation:      modal-show .16s cubic-bezier(0.175, 0.885, 0.32, 1.27499); /* Opera 12+ */
  animation:         modal-show .16s cubic-bezier(0.175, 0.885, 0.32, 1.27499);

  &.remove {
    -webkit-animation:  modal-hide .12s cubic-bezier(.34,.07,1,.2),
                        modal-shrink .24s .12s cubic-bezier(0.5, 0, 0, 1); /* Safari 4+ */
    -moz-animation:    modal-hide .12s cubic-bezier(.34,.07,1,.2),
                        modal-shrink .24s .12s cubic-bezier(0.5, 0, 0, 1); /* Fx 5+ */
    -o-animation:      modal-hide .12s cubic-bezier(.34,.07,1,.2),
                        modal-shrink .24s .12s cubic-bezier(0.5, 0, 0, 1); /* Opera 12+ */
    animation:         modal-hide .12s cubic-bezier(.34,.07,1,.2),
                        modal-shrink .24s .12s cubic-bezier(0.5, 0, 0, 1);

    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    -o-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  .card {
    border: 2px solid #ccc;
  }
}

// Animations

@keyframes modal-show {
  0% { opacity: 0; transform: perspective($width) translate(0, -5px) rotateX(90deg); }
  100% { opacity: 1; transform: perspective($width) translate(0, 0) rotateX( 0deg); }
}

@keyframes modal-shrink {
    0% {  opacity: 0; max-height: 500px; transform: scale(.8); }
  100% {  opacity: 0; max-height: 0;           transform: scale(.8); }
}

@keyframes modal-hide {
  0% { opacity: 1; transform: scale(1); }
  10% { opacity: 1; transform: scale(1.01); }
  20% { opacity: 1; transform: scale(1.02); }
  30% { opacity: 1; transform: scale(1.03); }
  40% { opacity: 1; transform: scale(1.04); }
  50% { opacity: 1; transform: scale(1.05); }
  60% { opacity: 1; transform: scale(1.04); }
  70% { opacity: 1; transform: scale(1.03); }
  80% { opacity: 1; transform: scale(1.01); }
  90% { opacity: 1; transform: scale(.9); }
  100% { opacity: 0; transform: scale(.8); }
}

</style>
