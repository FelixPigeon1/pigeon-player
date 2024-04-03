const { invoke } = window.__TAURI__.tauri
import { appDataDir, join } from '@tauri-apps/api/path';
import { convertFileSrc } from '@tauri-apps/api/tauri';

invoke('greet', { name: 'World'})
    .then((response) => {
        window.header.innerHTML = response
    })

function play() {
    let audio = new Audio("assets/audio/10-Cigarette_Daydreams.mp3");
    audio.play();
}

// const appDataDirPath = await appDataDir();
// const filePath = await join(appDataDirPath, 'assets/audio/10-Cigarette_Daydreams.mp4');
// const assetUrl = convertFileSrc(filePath);
    
// const video = document.getElementById('my-video');
// const source = document.createElement('source');
// source.type = 'video/mp4';
// source.src = assetUrl;
// video.appendChild(source);
// video.load();