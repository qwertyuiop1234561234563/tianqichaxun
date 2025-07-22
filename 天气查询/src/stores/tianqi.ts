import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import axios from 'axios';
import type WeatherData from '@/types/tianQi';

export const useTianqiStore = defineStore('tianqi', () => {

    async function getTianQi(city: string) {
        try {
            data.value = null;
            const response = await axios.get('https://restapi.amap.com/v3/weather/weatherInfo', {
                params: {
                    key: '6c85410f79de2e42f4604185b2da8267',
                    city: city,
                    extensions: 'all'
                }
            });

            data.value = response.data.forecasts?.[0] || null;
            if (data.value) {
                weathericon.value = weatherDayMap[data.value.casts[0].dayweather] || '未知';
                weathericonNight.value = weatherNightMap[data.value.casts[0].nightweather] || '未知';
                console.log('天气数据:', data.value);
                console.log('白天天气图标:', weathericon.value);
                console.log('夜间天气图标:', weathericonNight.value);
            }
            if (
                response.data &&
                Array.isArray(response.data.lives) &&
                response.data.lives.length > 0
            ) {
                cityName.value = response.data.lives[0].city;
            } else {
                cityName.value = city;
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
            alert("开小差了，稍后再试^_^");
        }
        cityName.value = '';
    }
    const show = ref(false)
    const cityName = ref('')
    const data = ref<WeatherData | null>(null)
    const weathericon = ref('未知')
    const weathericonNight = ref('未知')
    const weatherDayMap: Record<string, string> = {
        '晴': 'iconfont icon-lieri',
        '多云': 'iconfont icon-duoyun',
        '阴': 'iconfont icon-yun',
        '阵雨': 'iconfont icon-tianqi-zhenyu',
        '雷阵雨': 'iconfont icon-rijiantianqi-leizhenyu',
        '雷阵雨伴有冰雹': 'iconfont icon-tianqi_leizhenyubanyoubingbao',
        '雨夹雪': 'iconfont icon-yujiaxue',
        '小雨': 'iconfont icon-tianqi4',
        '中雨': 'iconfont icon-xiaoyu',
        '大雨': 'iconfont icon-weather-9',
        '暴雨': 'iconfont icon-dayu',
        '大暴雨': 'iconfont icon-tianqi-baoyu',
        '特大暴雨': 'iconfont icon-tianqi-tedabaoyu',
        '阵雪': 'iconfont icon-tianqi-zhenxue',
        '小雪': 'iconfont icon-tianqi-xiaoxue',
        '中雪': 'iconfont icon-zhongxue',
        '大雪': 'iconfont icon-daxue',
        '暴雪': 'iconfont icon-tianqi-baoxue',
        '雾': 'iconfont icon-wuqi',
        '大雾': 'iconfont icon-wuqi',
        '浓雾': 'iconfont icon-wuqi',
        '冻雨': 'iconfont icon-dongyu',
        '沙尘暴': 'iconfont icon-weather-21',
        '浮尘': 'iconfont icon-tianqi-fuchen',
        '扬沙': 'iconfont icon-stand-storm',
        '强沙尘暴': 'iconfont icon-weather-21',
        '小到中雨': 'iconfont icon-weather-9',
        '中到大雨': 'iconfont icon-dayu',
        '大到暴雨': 'iconfont icon-tianqi-baoyu',
        '暴雨到大暴雨': 'iconfont icon-tianqi-baoyuzhuandabaoyu',
        '大暴雨到特大暴雨': 'iconfont icon-tianqi-tedabaoyu',
        '小到中雪': 'iconfont icon-zhongxue',
        '中到大雪': 'iconfont icon-daxue',
        '大到暴雪': 'iconfont icon-tianqi-baoxue',
        '霾': 'iconfont icon-tianqi_mai',
        '强浓雾': 'iconfont icon-wuqi',
        '特强浓雾': 'iconfont icon-wuqi',
        '中度霾': 'iconfont icon-tianqi_mai',
        '重度霾': 'iconfont icon-tianqi_mai',
        '严重霾': 'iconfont icon-tianqi_mai',
    }



    const weatherNightMap: Record<string, string> = {
        '晴': 'iconfont icon-tianqi_yewan',
        '多云': 'iconfont icon-tianqi_lunkuoxian--copy',
        '阴': 'iconfont icon-yun',
        '阵雨': 'iconfont icon-wanjiantianqi-zhenyu',
        '雷阵雨': 'iconfont icon-rijiantianqi-leizhenyu',
        '雷阵雨伴有冰雹': 'iconfont icon-tianqi_leizhenyubanyoubingbao',
        '雨夹雪': 'iconfont icon-yujiaxue',
        '小雨': 'iconfont icon-tianqi4',
        '中雨': 'iconfont icon-xiaoyu',
        '大雨': 'iconfont icon-weather-9',
        '暴雨': 'iconfont icon-dayu',
        '大暴雨': 'iconfont icon-tianqi-baoyu',
        '特大暴雨': 'iconfont icon-tianqi-tedabaoyu',
        '阵雪': 'iconfont icon-tianqi-zhenxue',
        '小雪': 'iconfont icon-tianqi-xiaoxue',
        '中雪': 'iconfont icon-zhongxue',
        '大雪': 'iconfont icon-daxue',
        '暴雪': 'iconfont icon-tianqi-baoxue',
        '雾': 'iconfont icon-wuqi',
        '大雾': 'iconfont icon-wuqi',
        '浓雾': 'iconfont icon-wuqi',
        '冻雨': 'iconfont icon-dongyu',
        '沙尘暴': 'iconfont icon-weather-21',
        '浮尘': 'iconfont icon-tianqi-fuchen',
        '扬沙': 'iconfont icon-stand-storm',
        '强沙尘暴': 'iconfont icon-weather-21',
        '小到中雨': 'iconfont icon-weather-9',
        '中到大雨': 'iconfont icon-dayu',
        '大到暴雨': 'iconfont icon-tianqi-baoyu',
        '暴雨到大暴雨': 'iconfont icon-tianqi-baoyuzhuandabaoyu',
        '大暴雨到特大暴雨': 'iconfont icon-tianqi-tedabaoyu',
        '小到中雪': 'iconfont icon-zhongxue',
        '中到大雪': 'iconfont icon-daxue',
        '大到暴雪': 'iconfont icon-tianqi-baoxue',
        '霾': 'iconfont icon-tianqi_mai',
        '强浓雾': 'iconfont icon-wuqi',
        '特强浓雾': 'iconfont icon-wuqi',
        '中度霾': 'iconfont icon-tianqi_mai',
        '重度霾': 'iconfont icon-tianqi_mai',
        '严重霾': 'iconfont icon-tianqi_mai',
    }


    return { getTianQi, show, cityName, data, weathericon, weathericonNight }
}
)