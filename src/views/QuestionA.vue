<template>
    <div>
        <h3>Question A</h3>
        <!-- Rander template -->
        <alert-message :msgs="msgs" @succmsg="getMsg" />
        <!-- success msg from alertMsg component for child to parent component -->
        <div class="msgtext__main">
            {{ msg }}
        </div>
    </div>
</template>

<script>
import AlertMessage from '@/components/AlertMessage.vue'
export default {
    components: { AlertMessage },
    data: () => ({
        msg: '',
        msgs: ['success', 'failed', 'hold'],

    }),
    methods: {
        getMsg(data) {
            this.msg = data
        }
    }
}
</script>

<style>
.msgtext__main {
    position: relative;
    bottom: 3.5rem;
}
</style>