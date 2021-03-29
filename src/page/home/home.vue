<template>
  <div>
    <section class="search-wrap">
      <input type="text" class="search-input" placeholder="请输入关键词搜索" />
      <button class="search-btn">搜索</button>
    </section>
    <section class="custom-list"></section>
    <section class="side-bar">
      <div class="side-menu-list">
        <div class="menu-item" v-for="item in menuList" :key="item.name">
          <img :src="item.icon" alt="" />
          <div class="name">{{ item.name }}</div>
          <!-- <div>-</div> -->
        </div>
        <input
          class="input-first-menu"
          @input="handleAddFistMenuInput"
          @keyup.enter="handleAddFistMenu"
          type="text"
          v-if="showFirstInputText"
        />
        <div class="menu-item add-btn" @click="addFirstMenu">新增</div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { MenuItem } from "./type";
import { setSessionStorage, getSessionStorage } from "../../utils";

export default {
  data() {
    return {
      showFirstInputText: false,
      firstMenuInputValue: "",
    };
  },
  setup() {
    const menuList = ref<MenuItem[]>([]);
    const initMenuList = () => {
      const storageList: MenuItem[] = getSessionStorage("menuList");
      console.log(storageList);
      menuList.value = storageList;
    };
    onMounted(initMenuList);
    return {
      menuList,
    };
  },
  methods: {
    addFirstMenu() {
      this.showFirstInputText = true;
      console.log(this.menuList);
    },
    handleAddFistMenu() {
      if (!this.showFirstInputText) return;
      this.showFirstInputText = false;
      this.menuList.push({
        name: this.firstMenuInputValue,
      });
    },
    handleAddFistMenuInput(e) {
      this.firstMenuInputValue = e.target.value;
      console.log(e.target.value);
    },
  },
};
</script>

<style scoped>
@import url("./home.css");
</style>
