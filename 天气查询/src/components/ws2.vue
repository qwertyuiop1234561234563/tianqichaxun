<template>
    <div class="title">
          <i class="iconfont icon-lieri"></i>
        <div class="bottom">
            <dl>
                <dt>天气</dt>
                <dt>时间</dt>
            </dl>
            <dl>
                <dd><strong>{{ data.lives?.[0].weather }}</strong></dd>
                <dd><strong>{{ data.lives?.[0].reporttime }}</strong></dd>
            </dl>
        </div>
    </div>
</template>
<script setup lang="ts" name="ws2">
  import { useTianqiStore } from '@/stores/tianqi';
    import { storeToRefs } from 'pinia';
    const store = useTianqiStore();
    const { cityName , data } = storeToRefs(store);
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
    }
</style>