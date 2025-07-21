<template>
    <div class="title">
        <i :class="weathericon"></i>
        <div class="bottom">
            <dl>
                <dt>天气</dt>
                <dt>风向</dt>
            </dl>
            <dl>
                <dd><strong>{{ data?.casts?.[0].dayweather||'加载中' }}</strong></dd>
                <dd><strong>{{ data?.casts?.[0].daywind||'加载中' }}</strong></dd>
            </dl>
        </div>
    </div>
</template>
<script setup lang="ts" name="ws1">
  import { useTianqiStore } from '@/stores/tianqi';
    import { storeToRefs } from 'pinia';
    import { ref } from 'vue';
    const store = useTianqiStore();
    const { cityName , data } = storeToRefs(store);
      const {weathericon} = store
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    color: #000;
    font-family: 'Nunito', 'PingFang SC', 'Microsoft YaHei', sans-serif;
    
}
.title {
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    height: 450px;
    width: 370px;
    margin-top: 30px;
    padding: 70px;
}
.bottom {
    margin-top: 60px;
}
dl{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}
i {
    display: block;
        font-size: 200px;
        color: #3b3b3b;
        text-align: center;
        transition: all 1.5s ease;
    }
    dd{
        transition: all 1s ease;
    }
</style>