import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = new Player('vimeo-player');
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

const onTimeUpdate = throttle(async (time) => {
    try {
        await localStorage.setItem(LOCAL_STORAGE_KEY, time);
    } catch (error) {
        console.error('Error saving video time to local storage:', error);
    }
}, 1000);

vimeoPlayer.on('timeupdate', (event) => {
    onTimeUpdate(event.seconds);
});

async function restoreVideoTime() {
    try {
        const currentTime = await localStorage.getItem(LOCAL_STORAGE_KEY);
        if (currentTime) {
            vimeoPlayer.setCurrentTime(parseFloat(currentTime));
        }
    } catch (error) {
        console.error('Error retrieving video time from local storage:', error);
    }
}

restoreVideoTime();
