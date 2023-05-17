<template>
    <div class="icon">
        <img class="icon_image" alt="close" :src="'../src/assets/images/'+ icon +'.png'" :style="{width: size+'px', height: size+'px'}">
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            required: false,
            default: 24
        },
        alpha: {
            type: Number,
            required: false,
            default: 70
        }
    },
    computed: {
        getAlpha() {
            return this.$props.alpha + '%';
        }
    }
}
</script>

<style lang="scss" scoped>
.icon_image {
    opacity: v-bind(getAlpha);
    &:hover {
      opacity: 100%;
      transform: scale(1.2);
      transition-duration: 80ms;
      transition-timing-function: ease-out;
      transition-property: all;
    }
}
</style>