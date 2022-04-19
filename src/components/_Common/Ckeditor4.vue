<!--
 * @Author: Billy
 * @Date: 2021-08-25 01:20:11
 * @LastEditors: Billy
 * @LastEditTime: 2021-09-17 11:04:53
 * @Description: 富文本编辑器
-->

<!--
参考
https://ckeditor.com/docs/ckeditor4/latest/guide/dev_vue.html#basic-usage
https://ckeditor.com/latest/samples/toolbarconfigurator/index.html#basic
-->

<template>
  <div class="editor-container">
    <ckeditor
      v-model="data"
      :config="editorConfig"
      @ready="onEditorReady"
    ></ckeditor>
  </div>
</template>
<script>
import CKEditor from "ckeditor4-vue";

export default {
  components: {
    ckeditor: CKEditor.component,
  },
  props: {
    editorData: { type: String },
  },
  computed: {
    data: {
      get() {
        return this.editorData;
      },
      set(val) {
        this.$emit("update:editorData", val);
      },
    },
  },
  data() {
    return {
      // editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        height: 300,
        toolbarGroups: [
          { name: "document", groups: ["mode", "document", "doctools"] },
          { name: "clipboard", groups: ["clipboard", "undo"] },
          {
            name: "editing",
            groups: ["find", "selection", "spellchecker", "editing"],
          },
          { name: "forms", groups: ["forms"] },
          // "/",
          { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
          {
            name: "paragraph",
            groups: ["list", "indent", "blocks", "align", "bidi", "paragraph"],
          },
          { name: "links", groups: ["links"] },
          { name: "insert", groups: ["insert"] },
          // "/",
          { name: "styles", groups: ["styles"] },
          { name: "colors", groups: ["colors"] },
          { name: "tools", groups: ["tools"] },
          { name: "others", groups: ["others"] },
          { name: "about", groups: ["about"] },
        ],
        removeButtons:
          "Save,NewPage,Print,Language,BidiRtl,BidiLtr,Blockquote,CreateDiv,Outdent,Indent,Underline,Italic,Subscript,Superscript,Templates,Cut,Copy,Paste,PasteFromWord,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,RemoveFormat,CopyFormatting,Link,Unlink,Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Styles,Format,Font,FontSize,TextColor,BGColor,ShowBlocks,About,Source,ExportPdf,Preview",
      },
    };
  },
  methods: {
    onEditorReady() {},
  },
};
</script>