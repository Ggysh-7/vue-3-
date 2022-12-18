<template>
  <div class="navTop">
    <div class="navTopMain">
      <div class="navTopLeft">
        <div class="navLogo">
          <img src="@/assets/images/navtop/logo.png" alt=""
            style="width: 80px;height: 70px;margin-right: 18px;background-size: 100% 100%;">
        </div>
        管理
      </div>
      <div class="navTopRight">
        <div class="navUser">
          <div class="userAvatar"
            :style="{ width: '50px', height: '50px', marginRight: '15px', background: `url(${require('@/assets/images/navtop/user.png')})`, backgroundSize: '100% 100%', borderRadius: '50%' }">
          </div>
        </div>
        <span>{{ "userName" }}</span>
        <div class="signOutMain" @click="loginOut">
          <img style="width: 27px; height: 27px" src="@/assets/images/navtop/signout.png" />
          <span class="signOut">退出</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { sessionStorage } from "@/api/storage"

export default {
  name: "NavTop",
  components: {
  },
  setup() {
    const router = useRouter();
    const state = reactive({
    });
    const loginOut = () => {
      sessionStorage.remove('userlogin')
      router.push({ path: "/login" });
    }
    return {
      ...toRefs(state),
      loginOut,
    };
  },
};
</script>
<style>
.navTop {
  width: 100%;
  min-width: 1000px;
  height: 80px;
}

.navTopMain {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(-270deg, rgb(155, 250, 242), rgb(255, 223, 228));
}

.navTopLeft {
  margin-left: 37px;
  display: flex;
  align-items: center;
}

.navTopRight {
  margin-right: 37px;
  height: 80px;
  display: flex;
  align-items: center;
}

.signOutMain {
  width: 60px;
  height: 60px;
  margin-left: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
  