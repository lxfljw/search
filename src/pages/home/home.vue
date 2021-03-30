<template>
  <div>
    <section class="search-wrap">
      <input type="text" class="search-input" placeholder="请输入关键词搜索" />
      <button class="search-btn">搜索</button>
    </section>
    <section class="custom-list"></section>
    <section class="side-bar">
      <div class="side-menu-list">
        <div
          :class="['menu-item', currentMenuIndex === index ? 'active' : '']"
          v-for="(item, index) in menuList"
          :key="item.name"
          @click="setCurrentMenuIndex(index)"
        >
          <img
            v-if="item.url"
            :src="item.icon || getDefaultFavicon(item)"
            alt=""
          />
          <div class="name">{{ item.name }}</div>
          <!-- <div>-</div> -->
        </div>
        <input
          ref="inputFirstMenu"
          :autofocus="true"
          v-if="showFirstInputText"
          placeholder="请输入分类名"
          class="input-first-menu"
          @input="handleAddFistMenuInput"
          @blur="handleAddFistMenu"
          @keyup.enter="handleEnter"
          type="text"
        />
        <div class="menu-item add-btn" @click="addFirstMenu">新增</div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from "vue";
import { MenuItem } from "./type";
import { setLocalStorage, getLocalStorage } from "../../utils";
import defaultMenuList from "../../config/menu.default";
const MENU_LIST_KEY = "menuList";
export default defineComponent({
  data() {
    return {
      showFirstInputText: false,
      firstMenuInputValue: "",
    };
  },
  setup() {
    const menuList = ref<MenuItem[]>([]);
    const currentMenuIndex = ref(0);
    const initMenuList = () => {
      const storageList: MenuItem[] = getLocalStorage(MENU_LIST_KEY);
      if (!storageList || storageList.length === 0) {
        menuList.value = defaultMenuList;
        return;
      }
      menuList.value = storageList;
    };
    onMounted(initMenuList);
    const setCurrentMenuIndex = (index: number) => {
      currentMenuIndex.value = index;
    };
    return {
      menuList,
      currentMenuIndex,
      setCurrentMenuIndex,
    };
  },
  methods: {
    handleEnter(e: any) {
      e.target.blur();
    },
    getDefaultFavicon(item: MenuItem) {
      return `${item.url}/favicon.ico`;
    },
    addFirstMenu() {
      this.$nextTick(() => {
        setTimeout(() => {
          const el: any = this.$refs.inputFirstMenu;
          el.focus();
        });
      });
      this.showFirstInputText = true;
    },
    handleAddFistMenu() {
      if (!this.showFirstInputText) return;
      this.showFirstInputText = false;
      this.menuList.push({
        name: this.firstMenuInputValue,
      });
      setLocalStorage(MENU_LIST_KEY, this.menuList);
    },
    handleAddFistMenuInput(e: any) {
      this.firstMenuInputValue = e.target.value;
    },
  },
});
</script>

<style scoped>
@import url("./home.css");
</style>
