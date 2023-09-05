<template>
    <div>
        <!-- success msg from alertMsg component for child to child component -->
        {{ eventBusMsg }}
    </div>
</template>

<script>
import emitter from '@/emitter';
export default {
    data: () => ({
        eventBusMsg: null
    }),
    mounted() {
        emitter.on('eventbus_emitted', (data) => {
            this.eventBusMsg = data
        })
    }
}
</script>

<style>

</style>