<template>
    <div class="btn">
        <p class="btn__text">{{text}}</p>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
.btn {
  width: 124px;
  height: 48px;
  border: solid 2px #3B4ADF;
  border-radius: 6px;
  display: flex;
  align-items: center;
  &__text {
    color: #3B4ADF;
    font-size: 24px;
    width: 100%;
    text-align: center;
    text-transform: capitalize;
  }
  &:hover {
    background: #3B4ADF;
    transition-duration: 250ms;
    transition-timing-function: ease-out;
    transition-property: all;
  }
  &:hover &__text {
    color: white;
  }
}
</style>