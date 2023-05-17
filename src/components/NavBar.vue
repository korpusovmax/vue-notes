<template>
    <div class="navbar">
        <div v-if="title" class="navbar__title">
            <p class="title">{{title}}</p>
            <primary-button text="+" class="new_note_btn" @click="createNote()"></primary-button>
        </div>

        <div v-else class="navbar__content">
            <router-link to="/"><image-icon icon="cross"></image-icon></router-link>
            <div class="right_block">
                <!--            <image-icon icon="menu"></image-icon>-->
                <primary-button text="save" class="save_btn"></primary-button>
            </div>
        </div>
    </div>
</template>

<script>
import PrimaryButton from "@/components/PrimaryButton.vue";
import ImageIcon from "@/components/ImageIcon.vue";

export default {
    components: {ImageIcon, PrimaryButton},
    props: {
        title: {
            type: String,
            required: false
        }
    },
    methods: {
        generateId(length = 6, wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
            return Array.from(crypto.getRandomValues(new Uint32Array(length)))
                .map((x) => wishlist[x % wishlist.length])
                .join('');
        },
        createNote() {
            this.$router.push('/note/'+this.generateId())
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    width: 100vw;
    height: 88px;
    &__content {
        padding-left: 124px;
        padding-right: 124px;
        background: #EEF0F2;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
.right_block {
    display: flex;
    align-items: center;
    gap: 8px;
}
.navbar__title {
    padding-right: 124px;
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}
.title {
    font-size: 36px;
    color: rgba(#000000, 80%);
    margin-left: 124px;
    font-weight: 600;
}
</style>