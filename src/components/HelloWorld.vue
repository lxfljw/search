<template>
  <h1>{{ msg }}</h1>
  <h2>欢迎你, {{ name }}</h2>
  <button @click="count++">count is: {{ count }}</button>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, watch } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    const name = ref<string>("-");
    const initCount = () => {
      count.value = 20;
    };
    const getName = () => {
      setTimeout(() => {
        name.value = "luxiaofeng";
      }, 1000);
    };
    onMounted(getName);
    watch(name, initCount);
    return { count, name };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
