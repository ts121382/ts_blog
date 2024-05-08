<template>
  <div>
    <div class="user">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        :size="55"
        class="layout_slider_avatar"
      />
      <p class="layout_slider_username">{{ userStore.username }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import useUserStore from '@/store/modules/user'
import { onMounted } from 'vue'
let userStore = useUserStore()
onMounted(() => {
  // console.log(userStore.username)
})
</script>
<script lang="ts">
export default {
  name: 'Logo',
}
</script>

<style lang="scss" scoped>
.user {
  width: 100%;
  height: $base-menu-userInfo-height;
  align-items: center;
  padding: $base-menu-padding;
  .layout_slider_avatar {
    float: left;
  }
  .layout_slider_username {
    // display: flex;
    overflow: hidden;
    text-align: center;
    line-height: $base-menu-username-lineheight;
    color: white;
  }
}
</style>
