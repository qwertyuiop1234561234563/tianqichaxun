<template>
    <div class="head">
        <div class="logo">
            <i class="iconfont icon-tianqi5"> </i>
            <h3>Weather</h3>
        </div>
        <div class="search">
            <label for="tianQi" style="position:relative;">
                <input id="tianQi" type="text" placeholder="输入城市名字" v-model="cityName"/>
                <i class="iconfont icon-search" @click="getTianQi(cityName)" @keydown.enter="getTianQi(cityName)"></i>
            </label>
        </div>
        <div class="menu">
            <p>忘记你</p>
            <i class="iconfont icon-menu" @click="aboutMe"></i>
        </div>
    </div>
    
    <transition name="slide" mode="out-in" @mouseleave="hide">
        <div v-if="show" class="about-me">
            <img src="@/assets/img/touxiang.jpg" alt="头像" style="width: 100px; height: 100px; border-radius: 50%;vertical-align: middle;">
            <h3 style="vertical-align: middle;">about me</h3>
            <ul>
                <li v-for="(item, index) in state" :key="index" v-html="item.show" ></li>
            </ul>
            <p>内容未完善！！！</p>
        </div>
    </transition>
</template>
<script setup lang="ts">
import stateRaw from '@/hooks/useAboutMe';
import { useTianqiStore } from '@/stores/tianqi';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
const { state } = stateRaw();
const tianqiStore = useTianqiStore();
const { cityName, show } = storeToRefs(tianqiStore);
const { getTianQi } = tianqiStore;
const aboutMe = () => {
    show.value = true;
}
const hide = () => {
    setTimeout(() => {
        show.value = false;
    }, 900)
}
onMounted(() => {
    getTianQi('绵阳');
});
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: inline-block;
}

/* .about-me i{
    width: 60px;
    height: 60px;
    font-size: 60px !important;
} */
ul{
    padding: 10px;
}
li{
    line-height: 100px;
    list-style: none;
    border: 1px solid  rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    height: 100px;
    width: 250px;
    text-align: center;
    justify-content: space-between;
    padding: 0 20px;
    cursor: pointer;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.8s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}


.about-me {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
}
.icon-search {
    position: absolute;
    right: 10px;
    top: 55%;
    transform: translateY(-50%);
    color: #7a7a7a;
    cursor: pointer;
    font-size: 1.5rem;
    pointer-events: auto;
}
#tianQi {
    width: 400px;
    height: 50px;
    border: 1px solid #707070;
    padding-left: 10px;
    font-size: 16px;
    border-radius: 20px;
}
#tianQi:focus {
    outline: none;
    border-color: #333333;
}
.logo {
    display: flex;
    align-items: center;
    justify-content:space-around;
    margin-left: 20px;
}
.menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 20px;
}
.head {
    height: auto;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    justify-content: space-between;
    margin-top: 10px;
}
h3{
    margin-left: 10px;
    color: #252627;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
}
.iconfont {
    font-size: 2rem;
    color: #5a5959;
}
p {
    font-size: 1.5rem;
    color: #5a5959;
    margin-right: 10px;
}
i{
    cursor: pointer;
}

</style>