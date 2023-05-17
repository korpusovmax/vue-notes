<template>
    <editor-content :editor="editor" />
</template>

<script>
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'
import {Underline} from "@tiptap/extension-underline";

export default {
    components: {
        EditorContent,
    },

    props: {
        modelValue: {
            type: String,
            default: '',
        },
    },

    emits: ['update:modelValue'],

    data() {
        return {
            editor: null,
        }
    },

    watch: {
        modelValue(value) {
            // HTML
            const isSame = this.editor.getHTML() === value

            // JSON
            // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

            if (isSame) {
                return
            }

            this.editor.commands.setContent(value, false)
        },
    },

    mounted() {
        this.editor = new Editor({
            extensions: [
                StarterKit,
                Underline
            ],
            content: this.modelValue,
            onUpdate: () => {
                // HTML
                this.$emit('update:modelValue', this.editor.getHTML())

                // JSON
                // this.$emit('update:modelValue', this.editor.getJSON())
            },
        })
    },

    beforeUnmount() {
        this.editor.destroy()
    },

    methods: {
        makeBold() {
            this.editor.chain().focus().toggleBold().run();
        },
        makeItalic() {
            this.editor.chain().focus().toggleItalic().run();
        },
        makeUnderline() {
            this.editor.chain().focus().toggleUnderline().run();
        },
        makeStrike() {
            this.editor.chain().focus().toggleStrike().run();
        },
        makeHeader() {
            this.editor.chain().focus().toggleHeading({ level: 1 }).run();
        },
        makeHorizontalLine() {
            this.editor.chain().focus().setHorizontalRule().run();
        },
        makeQuote() {
            this.editor.chain().focus().toggleBlockquote().run();
        }
    }
}
</script>