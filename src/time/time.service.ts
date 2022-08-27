import { Injectable } from "@nestjs/common";
import { TimeZoneDto } from "./dto/time-zone.dto";

@Injectable()
export class TimeService {
  private times = {
    '0': {
      time: '',
    },
    '+1': {
      time: '',
    },
    '+2': {
      time: '',
    },
    '+3': {
      time: '',
    },
    '+4': {
      time: '',
    },
    '+5': {
      time: '',
    },
    '+6': {
      time: '',
    },
  };

  newTime(currentTime: TimeZoneDto) {
    const date = new Date(Date.parse(currentTime.time));
    this.times['0'].time = `${date.getUTCHours()}:${date.getMinutes()}`;
    this.times['+1'].time = `${date.getUTCHours() + 1}:${date.getMinutes()}`;
    this.times['+2'].time = `${date.getUTCHours() + 2}:${date.getMinutes()}`;
    this.times['+3'].time = `${date.getUTCHours() + 3}:${date.getMinutes()}`;
    this.times['+4'].time = `${date.getUTCHours() + 4}:${date.getMinutes()}`;
    this.times['+5'].time = `${date.getUTCHours() + 5}:${date.getMinutes()}`;
    this.times['+6'].time = `${date.getUTCHours() + 6}:${date.getMinutes()}`;
    return this.times;
  }
}
