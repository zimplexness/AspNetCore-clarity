export class WeatherForecast {
    public DateFormatted: string;
    public TemperatureC: number;
    public Summary: string;
    public get TemperatureF(): number {
        return 32 + <number>(this.TemperatureC / 0.5556);
    }
}