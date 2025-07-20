import { defineStore } from 'pinia';
import { ref } from 'vue';
import { nanoid } from 'nanoid';
import axios from 'axios';
export const useTianqiStore = defineStore('tianqi', () => {
    const show = ref(false)
    const cityName = ref('')
    const data = ref({ "status": "1", "count": "1", "info": "OK", "infocode": "10000", "lives": [{ "province": "四川", "city": "绵阳市", "adcode": "510700", "weather": "阴", "temperature": "28", "winddirection": "东北", "windpower": "≤3", "humidity": "53", "reporttime": "2025-07-20 22:02:18", "temperature_float": "28.0", "humidity_float": "53.0" }] })
    async function getTianQi(city: string) {
        try {
            const response = await axios.get('https://restapi.amap.com/v3/weather/weatherInfo', {
                params: {
                    key: '6c85410f79de2e42f4604185b2da8267',
                    city: cityName,
                    extensions: 'all'
                }
            })
            console.log(response.data);
            data.value = response.data;
            return response.data;
        } catch (error) {
            console.error("Error fetching weather data:", error);
            alert("Error fetching weather data");
            return null;
        }
    }


    return { getTianQi, show, cityName, data };
})
