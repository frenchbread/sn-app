<template lang="html">
  <div class="modal-center">
    <Modal
      v-for="modal in modals"
      :key="modal.id"
      :modal="modal"
      :className="modal.class"
      :closeModal="closeModal"
      :closeModals="closeModals"
      >
    </Modal>
  </div>
</template>

<script>
import Modal from './Modal'
import ModalController from './ModalController'

export default {
  data () {
    return {
      modals: ModalController.state
    }
  },
  methods: {
    closeModal: id => {
      ModalController.close(id)
    },
    closeModals: () => {
      ModalController.closeAll()
    }
  },
  components: {
    Modal
  }
}
</script>

<style lang="scss" scoped>

.modal-center {
  position: fixed;
  z-index: 3;
  overflow-y: scroll;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  max-height: calc(100%); // 2em is a Modal top&bot margin
}

::-webkit-scrollbar {
  width: 0px;  /* remove scrollbar space */
  background: transparent;  /* optional: just make scrollbar invisible */
}

</style>
