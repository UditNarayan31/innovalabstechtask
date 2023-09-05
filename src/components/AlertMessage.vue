<template>
    <div>
        <!-- parent to child communication -->
        <h4 class="text_style">Parent to Child communication</h4>
        {{ msgs }}

        <!-- child to parent communication -->
        <h4 class="text_style">Child to Parent communication</h4>
        <button @click="success">Get Success Message</button>

        <!-- child to child communication -->
        <div class="child_main">
            <h4 class="text_style">Child to Child communication</h4>
            <button @click="performEventbus">Perform EventBus</button>
            <child-to-child />
        </div>
    </div>
</template>

<script>
import ChildToChild from './ChildToChild.vue';
import emitter from '../emitter'

export default {
    components: { ChildToChild },
    props: ['msgs'],
    data: () => ({
        msg: 'Success',
        eventbusMsg:'eventbus emitted success'
    }),
    methods: {
        success() {
            this.$emit('succmsg', this.msg)
        },
        performEventbus() {
            emitter.emit('eventbus_emitted', this.eventbusMsg)
        }

    }
}
</script>

<style>
.child_main {
    position: relative;
    top: 3rem;
}
</style>