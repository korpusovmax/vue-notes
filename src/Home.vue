<template>
    <div class="home">
<!--        <h1>All notes</h1>-->
        <nav-bar title="All your notes here"></nav-bar>
        <div v-for="(item, index) in notes.slice().reverse()">
            <note-item :note-information="item" :key="index" index="index" @delete="deleteNote(index)"></note-item>
        </div>
    </div>
</template>

<script>
import NoteItem from "@/components/NoteItem.vue";
import NavBar from "@/components/NavBar.vue";

export default {
    components: {NavBar, NoteItem},
    data() {
        return {
            notes: []
        }
    },
    mounted() {
        if (localStorage.notes) {
            this.notes = JSON.parse(localStorage.notes);
        }
    },
    methods: {
        deleteNote(index) {
            this.notes.splice(this.notes.length-index-1, 1);
        }
    },
    watch: {
        notes: {
            handler(old_value, new_value) {
                localStorage.notes = JSON.stringify(this.notes);
            },
            deep: true
        }
    }
}
</script>

<style lang="scss" scoped>
.home {
    padding-bottom: 24px;
}
</style>