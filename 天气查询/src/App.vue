<template>
    <div class="app">
        <Head />
        <div class="fading-line"></div>
        <div class="main">
            <neiRong/>
            <div class="daoHang-container">
                <daoHang/>
                <div class="ws-container">
                    <ws1/>
                    <ws2/>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts" name="App">
import Head from './components/head.vue';
import daoHang from './components/daoHang.vue';
import neiRong from './components/neiRong.vue';
import ws1 from './components/ws1.vue';
import ws2 from './components/ws2.vue';
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .ws-container {
        display: flex;
        justify-content: space-between;
        width: 830px;
    }
    .app {
        width: 100%;
        height: 100%;
        background-color: rgba(248, 248, 248, 0.822);
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.1);
    }
    .fading-line {
        height: 3px;
        background: linear-gradient(90deg, transparent, #747474 20%, #838383 80%, transparent);
        margin: 20px 0; 
    }
    .main {
        display: flex;
        justify-content: space-between;
        
        padding: 20px;
    }
</style>