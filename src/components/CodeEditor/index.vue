<template>
  <div class="code-editor">
    <div class="editor-header">
      <span class="file-name">{{ currentRoute }}.vue</span>
      <div class="editor-actions">
        <a-button size="small" type="primary" @click="runCode">运行</a-button>
        <a-button size="small" @click="resetCode">重置</a-button>
      </div>
    </div>
    <codemirror
      ref="editor"
      v-model="code"
      :options="editorOptions"
      @input="onCodeChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/vue/vue.js'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/xml/xml.js'
import 'codemirror/mode/css/css.js'
import 'codemirror/mode/htmlmixed/htmlmixed.js'
import 'codemirror/addon/edit/closebrackets.js'
import 'codemirror/addon/edit/closetag.js'
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/brace-fold.js'

const props = defineProps<{
  currentRoute?: string
  initialCode?: string
}>()

const emit = defineEmits<{
  (e: 'code-change', code: string): void
  (e: 'run-code', code: string): void
  (e: 'reset-code'): void
}>()

const code = ref(props.initialCode || '')
const editorOptions = ref({
  tabSize: 2,
  mode: 'text/x-vue',
  theme: 'material',
  lineNumbers: true,
  line: true,
  autoCloseBrackets: true,
  autoCloseTags: true,
  foldGutter: true,
  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
})

let debouncedEmit: ((val: string) => void) | null = null

function debounce(fn: Function, delay: number) {
  let timer: ReturnType<typeof setTimeout> | null = null
  return function(...args: any[]) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}

const onCodeChange = (val: string) => {
  if (debouncedEmit) {
    debouncedEmit(val)
  }
}

const runCode = () => {
  emit('run-code', code.value)
}

const resetCode = () => {
  code.value = props.initialCode || ''
  emit('reset-code')
}

watch(() => props.initialCode, (val) => {
  code.value = val || ''
})

onMounted(() => {
  // 防抖处理
  debouncedEmit = debounce((val: string) => {
    emit('code-change', val)
  }, 500)
})
</script>

<style scoped>
.code-editor {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #263238;
}

.editor-header {
  height: 40px;
  background: #1e272c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  border-bottom: 1px solid #37474f;
}

.file-name {
  color: #80cbc4;
  font-size: 13px;
}

.editor-actions {
  display: flex;
  gap: 8px;
}

.code-editor :deep(.vue-codemirror) {
  flex: 1;
  overflow: hidden;
}

.code-editor :deep(.CodeMirror) {
  height: 100%;
  font-size: 14px;
  font-family: 'Fira Code', 'Monaco', monospace;
}
</style>
