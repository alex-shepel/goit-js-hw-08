import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const player = new Player(document.querySelector('#vimeo-player'));

const storedTime = localStorage.getItem('videoplayer-current-time');

const onTimeUpdate = e => localStorage.setItem('videoplayer-current-time', e.seconds);

player.setCurrentTime(storedTime ? storedTime : 0);

player.on('timeupdate', throttle(onTimeUpdate, 1000));
