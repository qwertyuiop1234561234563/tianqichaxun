export default interface WeatherData {
    casts: Array<{
        date: string;
        week: string;
        daytemp: string;
        dayweather: string;
        daywind: string;
        nighttemp: string;
        nightweather: string;
        nightwind: string;
    }>;
    city: string;
    province: string;
}