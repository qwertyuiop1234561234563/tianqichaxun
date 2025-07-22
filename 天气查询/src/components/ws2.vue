<template>
    <div class="title">
          <i :class="weathericonNight"></i>
        <div class="bottom">
            <dl>
                <dt>天气</dt>
                <dt>风向</dt>
            </dl>
            <dl>
                <dd><strong>{{ data?.casts?.[0]?.nightweather || '加载中' }}</strong></dd>
                <dd><strong>{{ data?.casts?.[0]?.nightwind || '加载中' }}</strong></dd>
            </dl>
        </div>
    </div>
</template>
<script setup lang="ts" name="ws2">
  import { useTianqiStore } from '@/stores/tianqi';
    import { storeToRefs } from 'pinia';
    import { ref } from 'vue';
    import { watchEffect } from 'vue';
    const store = useTianqiStore();
    const { cityName , data, weathericonNight} = storeToRefs(store);
    const weatherIcon = ref('');
    watchEffect(() => {
        weatherIcon.value = weathericonNight.value;
    });
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    color: #ffffff;
    font-family: 'Nunito', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}
.title {
    background-color: rgb(0, 0, 0);
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
        color: #ffffff;
        text-align: center;
        transition: all 1.5s ease;
    }
dd{
        transition: all 1s ease;
}
</style>