<template>
    <div class="item">
        <image-icon icon="trash" size="36" alpha="20" class="delete_btn" @click="removeNote"></image-icon>
        <div class="block" @click="openNote(noteInformation.id)">
            <h3 class="block__title">{{noteInformation.title}}</h3>
            <p class="block__text">{{removeTags(noteInformation.text)}}</p>
        </div>
    </div>
</template>

<script>
import ImageIcon from "@/components/ImageIcon.vue";

export default {
    components: {ImageIcon},
    props: {
        noteInformation: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    methods: {
        removeTags(str) {
            let result = str.replaceAll(/(<p>)/g, '\n<p>').replaceAll(/(<)\/?(strong|u|p|em|code|blockquote|h1|hr)(>)/g, '').replaceAll('\n', '  ');
            if (result.length > 35) {
                return result.substring(0, 35) + '...';
            }
            return result;
        },
        openNote(id) {
            this.$router.push('/note/'+id);
        },
        removeNote() {
            this.$emit('delete');
        }
    }
}
</script>

<style lang="scss" scoped>
.block {
    //margin-left: 124-32px;
    margin-top: 12px;
    margin-right: 124px;
    width: 100%;
    padding: 12px;
    border-radius: 6px;
    background: #616161;
    opacity: 5%;
    &__text {
        color: rgb(0, 0, 0, 40%);
        font-size: 24px;
    }
    &__title {
        margin-bottom: 8px;
        font-size: 32px;
        font-weight: 400;
        opacity: 80%;
    }
    &:hover {
        background: rgba(#616161, 10%);
    }
}
.item {
    display: flex;
    align-items: center;
    gap: 8px;
}
.delete_btn {
    opacity: 0;
    width: 124px;
    text-align: right;
}
.item:hover .delete_btn {
    opacity: 100%;
}
</style>