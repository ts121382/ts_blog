<template>
  <div class="login_container">
    <div class="wrapper">
      <div class="card-switch">
        <label class="switch">
          <input class="toggle" type="checkbox" />
          <span class="slider"></span>
          <span class="card-side"></span>
          <div class="flip-card__inner">
            <div class="flip-card__front">
              <!-- 登录界面 -->
              <div class="title">登录</div>
              <form action="" class="flip-card__form">
                <input
                  type="name"
                  placeholder="用户名"
                  name="name"
                  class="flip-card__input"
                  v-model="loginForm.username"
                  autoComplete="off"
                />
                <input
                  type="password"
                  placeholder="密码"
                  name="password"
                  class="flip-card__input"
                  v-model="loginForm.password"
                  autoComplete="off"
                />
                <button @click="loginBtn" class="flip-card__btn">进入!</button>
              </form>
            </div>
            <!--注册界面-->
            <div class="flip-card__back">
              <div class="title">注册</div>
              <form action="" class="flip-card__form">
                <input placeholder="用户名" class="flip-card__input" />
                <!-- <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  class="flip-card__input"
                /> -->
                <input
                  type="password"
                  placeholder="密码"
                  name="password"
                  class="flip-card__input"
                  autoComplete="off"
                />
                <button class="flip-card__btn">确认!</button>
              </form>
            </div>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import useUserStore from '@/store/modules/user.ts'
import { ElNotification } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'

let $router = useRouter()
let $route = useRoute()
let useStore = useUserStore()
let loginForm = reactive({ username: '', password: '' })

const loginBtn = async () => {
  try {
    await useStore.userLogin(loginForm)
    let redirect: any = $route.query.redirect
    ElNotification({
      type: 'success',
      message: '登录成功',
    })
    $router.push({ path: redirect || '/' })
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}
</script>

<style lang="scss" scoped>
.login_container {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('../../assets/login/file\ .jpeg') no-repeat;
  background-size: cover;
}
.wrapper {
  position: absolute;
  right: 20%;
  top: 50%;
  --input-focus: black;
  --font-color: white;
  --font-color-sub: #666;
  --bg-color: yellow;
  --bg-color-alt: pink;
  --main-color: #302727;
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
}
/* switch card */
.switch {
  transform: translateY(-200px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 50px;
  height: 20px;
}

.card-side::before {
  position: absolute;
  content: '登录';
  left: -70px;
  top: 0;
  width: 100px;
  text-decoration: underline;
  color: var(--font-color);
  font-weight: 600;
}

.card-side::after {
  position: absolute;
  content: '注册';
  left: 70px;
  top: 0;
  width: 100px;
  text-decoration: none;
  color: var(--font-color);
  font-weight: 600;
}

.toggle {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  box-sizing: border-box;
  border-radius: 5px;
  border: 2px solid white;
  box-shadow: 4px 4px white;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--bg-colorcolor);
  transition: 0.3s;
}

.slider:before {
  box-sizing: border-box;
  position: absolute;
  content: '';
  height: 20px;
  width: 20px;
  border: 2px solid var(--main-color);
  border-radius: 5px;
  left: -2px;
  bottom: 2px;
  background-color: var(--bg-color);
  box-shadow: 0 3px 0 var(--main-color);
  transition: 0.3s;
}

.toggle:checked + .slider {
  background-color: var(--input-focus);
}

.toggle:checked + .slider:before {
  transform: translateX(30px);
}

.toggle:checked ~ .card-side:before {
  text-decoration: none;
}

.toggle:checked ~ .card-side:after {
  text-decoration: underline;
}

/* card */

.flip-card__inner {
  width: 300px;
  height: 350px;
  position: relative;
  background-color: transparent;
  perspective: 1000px;
  /* width: 100%;
    height: 100%; */
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.toggle:checked ~ .flip-card__inner {
  transform: rotateY(180deg);
}

.toggle:checked ~ .flip-card__front {
  box-shadow: none;
}

.flip-card__front,
.flip-card__back {
  padding: 20px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: pink;
  gap: 20px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
}

.flip-card__back {
  width: 100%;
  transform: rotateY(180deg);
}

.flip-card__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.title {
  margin: 20px 0 20px 0;
  font-size: 25px;
  font-weight: 900;
  text-align: center;
  color: var(--main-color);
}

.flip-card__input {
  width: 250px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 15px;
  font-weight: 600;
  color: black;
  padding: 5px 10px;
  outline: none;
}

.flip-card__input::placeholder {
  color: var(--font-color-sub);
  opacity: 0.8;
}

.flip-card__input:focus {
  border: 2px solid var(--input-focus);
}

.flip-card__btn:active,
.button-confirm:active {
  box-shadow: 0px 0px var(--main-color);
  transform: translate(3px, 3px);
}

.flip-card__btn {
  margin: 20px 0 20px 0;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid var(--main-color);
  background-color: var(--bg-color);
  box-shadow: 4px 4px var(--main-color);
  font-size: 17px;
  font-weight: 600;
  color: black;
  cursor: pointer;
}
</style>
