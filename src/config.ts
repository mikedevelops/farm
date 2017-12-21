import * as moment from 'moment';

// Dimensions
export const WIDTH = 512;
export const HEIGHT = 512;

// Time
export const DEFAULT_GAME_TIME_START = moment({ year: 1988, month: 9, date: 3 });
export const REAL_TIME_START =  moment();
export const GAME_TIME_MULTIPLIERS = {
    // 1440 (24h) / 3 = 480x
    default: 2880
};

// Units
export const GAME_UNIT_SIZE = 128;
