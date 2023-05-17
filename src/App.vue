<template>
    <div class="main_area">
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: Inter, sans-serif;
}
.main_area {
    background: #FFFFFF;
}
</style>