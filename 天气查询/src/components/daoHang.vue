<template>
    <div class="title">
        <div class="search">
            <label for="tianQi" style="position:relative;">
                <input id="tianQi" type="text" placeholder="输入时间" v-model="cityName"/>
                <i class="iconfont icon-search"><a href="#" @click="getTianQi(cityName)"></a></i>
            </label>
        </div>
        <div class="right">
            <i class="iconfont icon-search" @click="getTianQi(cityName)"></i>
        </div>
    </div>
</template>
<script setup lang="ts" name="daoHang">
import { useTianqiStore } from '@/stores/tianqi';
import { storeToRefs } from 'pinia';
const tianqiStore = useTianqiStore();
const { cityName, show } = storeToRefs(tianqiStore);
const { getTianQi } = tianqiStore;

</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    
}
 .title {
    border-radius: 15px;
    height: 120px;
    width: 830px;
    background-color: #000000;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 60px;
    margin-right: 50px;
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#tianQi {
    width: 300px;
    height: 60px;
    border: 1px solid #707070;
    padding-left: 50px;
    font-size: 16px;
    border-radius: 20px;
}
#tianQi:focus {
    outline: none;
    border-color: #333333;
}
.search i {
    position: absolute;
    left: 10px;
    top: 55%;
    transform: translateY(-50%);
    color: #7a7a7a;
    cursor: pointer;
    font-size: 1.5rem;
    pointer-events: auto;
}
.right i{
    color: #fffefe;
    cursor: pointer;
    font-size: 3rem;
    pointer-events: auto;
}
</style>