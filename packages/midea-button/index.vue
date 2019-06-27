<template>
    <div class="wrapper">
        {{flag === 'true' ? 'YES' : 'No'}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            flag: true
        }
    }
}
</script>
<style scoped>
.wrapper {
    border: 1px solid red;
}
</style>

