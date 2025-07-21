import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import type WeatherData from '@/types/tianQi';

export const useTianqiStore = defineStore('tianqi', () => {
    const show = ref(false)
    const cityName = ref('')
    const data = ref<WeatherData | null>(null)

    async function getTianQi(city: string) {
        try {
            const response = await axios.get('https://restapi.amap.com/v3/weather/weatherInfo', {
                params: {
                    key: '6c85410f79de2e42f4604185b2da8267',
                    city: city,
                    extensions: 'all'
                }
            });
            console.log(response.data.forecasts?.[0]);
            data.value = response.data.forecasts?.[0] || null;
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

    return { getTianQi, show, cityName, data }
}
)