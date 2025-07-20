<template>
    <div class="title">
        <div class="header"><h3>当前气温</h3><i class="iconfont icon-arrow-down"></i></div>
        <div class="temp">{{ data?.lives?.[0]?.temperature || '未知' }}</div>
        <div class="bottom">
            <div>
                <dl>
                    <dt>城市</dt>
                </dl>
                <dl>
                    <dd>{{ cityName || '绵阳' }}</dd>
                </dl>
            </div>
            <div id="weather">
                <dl>
                    <dt>风向</dt>
                    <dt>风力</dt>
                </dl>
                <dl>
                    <dd>{{ data.lives?.[0].winddirection }}</dd>
                    <dd>{{ data.lives?.[0].windpower }}</dd>
                </dl>
            </div>
       </div>
    </div>
</template>
<script setup lang="ts" name="neiRong">
    import { useTianqiStore } from '@/stores/tianqi';
    import { storeToRefs } from 'pinia';
    const store = useTianqiStore();
    const { cityName , data } = storeToRefs(store);
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* display: inline-block; */
        color: #ffffff;
        font-family:sans-serif
    }
    .temp {
        font-size: 300px;
        color: #ffffff;
        text-align: left;
        height: 300px;
        line-height: 300px;
    }
 .title {
    border-radius: 15px;
    height: 600px;
    width: 830px;
    background-color: #000000;
    /* font-family: Arial, Helvetica, sans-serif; */
    margin-top: 60px;
    margin-left: 60px;
    margin-bottom: 100px;
    padding: 20px 110px;
}
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
}
.bottom {
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
}
h3{
    
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
}
i{
    font-size: 20px;
    color: #ffffff;
}
dl{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
dt{
    color: #616161;
}
#weather dt,#weather dd{
    margin-left: 120px;
   text-align: center;
}

</style>