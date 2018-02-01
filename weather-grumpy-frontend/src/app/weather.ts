export interface Weather {
    responseCode: number;
    rawResponse: string;
    dateTime: number;
    weatherCount: number;
    cityName: string;
    mainInstance: MainInstance;
    baseStation: string;
    rainInstance?: null;
    windInstance: WindInstance;
    coordInstance: CoordInstance;
    cityCode: number;
    sysInstance: SysInstance;
    cloudsInstance: CloudsInstance;
    valid: boolean;
  }
  export interface MainInstance {
    pressure: number;
    humidity: number;
    temperature: number;
    maxTemperature: number;
    minTemperature: number;
  }
  export interface WindInstance {
    windGust: string;
    windDegree: number;
    windSpeed: number;
  }
  export interface CoordInstance {
    latitude: number;
    longitude: number;
  }
  export interface SysInstance {
    type: number;
    id: number;
    message: number;
    countryCode: string;
    sunsetTime: number;
    sunriseTime: number;
  }
  export interface CloudsInstance {
    percentageOfClouds: number;
  }
