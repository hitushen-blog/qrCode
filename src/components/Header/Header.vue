<template>
  <div>
    <el-header height="56px">
      <div class="header_left">云盘免费仓库</div>
      <div class="header_right">
        <el-icon :content="isFullScreen ? '退出全屏' : '全屏'">
          <FullScreen />
        </el-icon>

        <el-dropdown size="medium" @command="handleCommand">
          <div class="user_info">
            <el-avatar
              :size="36"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <span class="username">云仓库</span>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="user">个人中心</el-dropdown-item>
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>
  </div>
</template>

<script setup>
import { ref } from "vue";
// const users = computed(() => store.getters.getUserName);
const handleCommand = command => {};

const handleFullScreen = () => {};
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0 16px;
  border-bottom: 1px solid #ddd;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  :focus-visible {
    outline: none;
  }
  .header_left {
    flex: 1;
    font-size: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .header_right {
    display: flex;
    align-items: center;
    padding-left: 8px;
    width: auto;

    & > i {
      padding: 8px 6px;
      font-size: 20px;
      cursor: pointer;
    }

    .user_info {
      margin: 0 8px 0 16px;
      width: auto;
      text-align: right;
      cursor: pointer;
    }

    .el-avatar {
      vertical-align: middle;
    }

    span.username {
      margin-left: 8px;
      vertical-align: middle;

      &:hover {
        color: #409eff;
      }
    }
  }
}
</style>