<template>
    <div class="note">
        <nav-bar></nav-bar>
        <div class="workspace">
            <span class="note_name" contenteditable="true" spellcheck="false">{{ noteData.title }}</span>
            <div class="icons">
                <image-icon icon="header" @click="$refs.editorRef.makeHeader()"></image-icon>
                <image-icon icon="bold" @click="$refs.editorRef.makeBold()"></image-icon>
                <image-icon icon="italic" @click="$refs.editorRef.makeItalic()"></image-icon>
                <image-icon icon="underline" @click="$refs.editorRef.makeUnderline()"></image-icon>
                <image-icon icon="line" @click="$refs.editorRef.makeHorizontalLine()"></image-icon>
                <image-icon icon="comma" @click="$refs.editorRef.makeQuote()"></image-icon>
            </div>
            <Editor v-model="noteData['text']" ref="editorRef" spellcheck="false"></Editor>
<!--            <p class="text" ref="text" contenteditable="true" spellcheck="false" v-html="noteData.text"></p>-->
        </div>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ImageIcon from "@/components/ImageIcon.vue";
import Editor from "@/components/Editor.vue";


export default {
    components: {
        Editor,
        ImageIcon,
        NavBar
    },
    data() {
      return {
          noteData: {
              'title': 'Title here...',
              'text': '<p>Type here your <u>note</u>. Use <code>ctrl + b</code> to <strong>bold</strong> selection and <code>ctrl + i</code> to <em>italic</em> selection</p>',
          }
      }
    },
    mounted() {
        const e = document.getElementsByClassName('save_btn')[0];
        const route = this.$route;
        let titleElement = document.getElementsByClassName('note_name')[0];
        let that = this;
        e.addEventListener('click', function () {
            //const text = refs.text.innerHTML.toString().replaceAll(/( data).*(")/g, '');
            const note = {
                'text': that.noteData['text'],
                'title': titleElement.textContent,
                'id': route.params.id
            };
            console.log(titleElement.textContent);
            let notes = JSON.parse(localStorage.notes);
            const index = notes.findIndex(x => x['id'] === route.params.id);
            if (index === -1) {
                this.noteData = notes[index];
                notes.push(note);
            } else {
                notes[index] = note;
            }
            localStorage.notes = JSON.stringify(notes);
        });

        if (localStorage.notes) {
            let notes = JSON.parse(localStorage.notes);
            const index = notes.findIndex(x => x['id'] === route.params.id);
            if (index !== -1) {
                this.noteData = notes[index];
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.workspace {
    padding-left: 124px;
    padding-right: 124px;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;
}
.note_name {
    font-size: 42px;
    font-weight: 500;
    color: #646A78;
    border: solid 1px transparent;
    &:focus {
        outline: none;
    }
}
.text {
    margin-top: 48px;
    font-size: 24px;
    color: black;
    border: solid 1px transparent;
    &:focus {
        border: solid 1px transparent;
        outline: 0;
    }
}
.icons {
    width: min-content;
    margin-top: 24px;
    margin-right: 124px;
    padding: 8px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 16px;
    background: rgb(0, 0, 0, 7%);
}
</style>

<style lang="scss">
//global styles
.ProseMirror {
    margin-top: 48px;
    height: max-content;
    h1 {
        margin-bottom: 8px;
    }
    p {
        font-size: 24px;
    }
    code {
        background-color: rgba(#616161, 0.1);
        color: #616161;
        border-radius: 4px;
        padding: 2px;
    }
    hr {
        border: none;
        border-top: 2px solid rgba(#0D0D0D, 0.1);
        margin: 2rem 0;
        width: 100%;
    }
    blockquote {
        padding-left: 1rem;
        border-left: 2px solid rgba(#0D0D0D, 0.1);
        color: #616161;
        margin: 2px 0 2px 0;
    }
}
.ProseMirror-focused {
    outline: none;
}
</style>