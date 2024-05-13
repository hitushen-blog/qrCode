<template>
  <metainfo></metainfo>
  <router-view></router-view>
</template>

<script setup>
import { onMounted, reactive, getCurrentInstance } from "vue";
import { useRoute } from "vue-router";
import routers from "./router";
import { useMeta } from "vue-meta";
let { proxy } = getCurrentInstance();
const router = useRoute();
const state = reactive({});
onMounted(() => {
  useMeta({
    title: "二维码生成器",
    titleTemplate: "轻量级简单便捷的二维码生成器",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
    meta: [
      {
        name: "keywords",
        content:
          "申云鹏,前端,技术,WEB,blog,BLOG,搭建博客,前端技术,VUE博客,申云鹏的博客",
      },
      {
        name: "description",
        content:
          "申云鹏,前端,技术,WEB,blog,BLOG,搭建博客,前端技术,VUE博客,申云鹏的博客",
      },
    ],
  });
});
</script>

<style lang="scss"></style>
