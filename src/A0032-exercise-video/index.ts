interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playerButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  playerToggle(): void;
  stop(): void;
  initEvents(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private playerButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playerButton = videoPlayerElements.playerButton;
    this.stopButton = videoPlayerElements.stopButton;
  }

  initEvents(): void {
    this.playerButton.addEventListener('click', () => {
      this.playerToggle();
    });

    this.stopButton.addEventListener('click', () => {
      this.stop();
    });
  }

  playerToggle(): void {
    if (this.videoPlayer.paused) {
      this.playerButton.innerText = 'Pause';
      this.videoPlayer.play();
    } else {
      this.playerButton.innerText = 'Play';
      this.videoPlayer.pause();
    }
  }

  stop(): void {
    this.videoPlayer.pause();
    this.videoPlayer.currentTime = 0;
    this.playerButton.innerText = 'Play';
  }
}

const video = document.querySelector('.video') as HTMLVideoElement;
const playerButton = document.querySelector('.play') as HTMLButtonElement;
const stopButton = document.querySelector('.stop') as HTMLButtonElement;

const videoPlayerElements: VideoPlayerElements = {
  videoPlayer: video,
  playerButton,
  stopButton,
};

const videoPlayer = new VideoPlayer(videoPlayerElements);

videoPlayer.initEvents();
