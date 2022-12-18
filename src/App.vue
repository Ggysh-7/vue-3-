<template id="app">
    <div id="container" v-if="isLogin">
      <div class="top">
        <nav-top />
      </div>
      <div class="center">
        <nav-left />
        <div class="main">
          <router-view />
        </div>
      </div>
    </div>
    <div id="container" v-if="!isLogin">
      <router-view />
    </div>
</template>

<script>
import NavTop from "./components/NavTop.vue"
import NavLeft from "./components/NavLeft.vue"
import { useRouter, useRoute } from "vue-router";
import { defineComponent, reactive, toRefs, computed, watch, onMounted, onUpdated } from 'vue'
export default defineComponent({
  components: {
    NavTop,
    NavLeft
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const state = reactive({
      isLogin: true,
    })
    const routes = computed(() => {
      console.log(routes, '---------------routes====================');
      return router.getRoutes().filter((e) => e.meta?.isLink);
    });
    watch(
      () => route.path,
      () => {
        if (route.path === "/login") {
          state.isLogin = false
        } else {
          state.isLogin = true
        }
        // route.path === "/homepage" && (state.isLogin = true)
        // route.path === "/login" && (state.isLogin = false)
      }
    );
    const currentRouteName = computed(() => route.name);
    onMounted(() => {
    });
    onUpdated(() => {
      console.log('我重新渲染了');
    })
    return {
      ...toRefs(state),
      routes,
      name: currentRouteName,
    }
  }
})

</script>

<style>
#container {
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 1000px;
  min-height: 100%;
  background-color: rgba(245, 247, 250, 1);
}

#container .center {
  display: flex;
}
</style>
