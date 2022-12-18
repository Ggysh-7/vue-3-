<template>
  <div :style="{
    margin: 'auto',
    background: `url(${require('@/assets/images/background/zuihao.jpg')})`,
    backgroundSize: '100% 100%',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }">
    <div :style="{
      width: '500px',
      height: '300px',
      padding: '50px 30px',
      textAlign: 'center',
      alignItems: 'center',
      borderRadius: '10px',
      background: 'rgba(255,255,255,.8)',
      boxShadow: '20px 20px 60px #bebebe,-20px -20px 60px #ffffff',
    }">
      <a-form :model="formState" name="basic" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
        <a-form-item label="用户名" name="username" :rules="rules.userName">
          <a-input v-model:value="formState.username" placeholder="请输入用户名" />
        </a-form-item>

        <a-form-item label="密 码" name="password" :rules="rules.passWord">
          <a-input-password v-model:value="formState.password" placeholder="请输入密码" />
        </a-form-item>

        <a-form-item name="remember">
          <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>

</template>
<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { sessionStorage } from "@/api/storage"

export default {
  name: "loginPage",
  setup() {
    const router = useRouter();
    const state = reactive({
      formState: {
        username: "",
        password: "",
        remember: true,
      },
    });
    const rules = {
      userName: [{
        required: true,
        message: 'Please input your username!',
      }],
      passWord: [{
        required: true,
        message: 'Please input your password!',
      }]
    }
    const onFinish = values => {
      console.log('Success:', values);
      sessionStorage.set('userlogin', '123')
      router.push({ path: "/homepage" });
    };
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    return {
      ...toRefs(state),
      onFinish,
      onFinishFailed,
      rules,
    };
  },
};
</script>
