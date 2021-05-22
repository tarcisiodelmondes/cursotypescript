/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/A0032-exercise-video/index.ts":
/*!*******************************************!*\
  !*** ./src/A0032-exercise-video/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class VideoPlayer {
    constructor(videoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.playerButton = videoPlayerElements.playerButton;
        this.stopButton = videoPlayerElements.stopButton;
    }
    initEvents() {
        this.playerButton.addEventListener('click', () => {
            this.playerToggle();
        });
        this.stopButton.addEventListener('click', () => {
            this.stop();
        });
    }
    playerToggle() {
        if (this.videoPlayer.paused) {
            this.playerButton.innerText = 'Pause';
            this.videoPlayer.play();
        }
        else {
            this.playerButton.innerText = 'Play';
            this.videoPlayer.pause();
        }
    }
    stop() {
        this.videoPlayer.pause();
        this.videoPlayer.currentTime = 0;
        this.playerButton.innerText = 'Play';
    }
}
exports.default = VideoPlayer;
const video = document.querySelector('.video');
const playerButton = document.querySelector('.play');
const stopButton = document.querySelector('.stop');
const videoPlayerElements = {
    videoPlayer: video,
    playerButton,
    stopButton,
};
const videoPlayer = new VideoPlayer(videoPlayerElements);
videoPlayer.initEvents();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************************!*\
  !*** ./src/A0019-exercise/index.ts ***!
  \*************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
//import './form-control';
__webpack_require__(/*! ../A0032-exercise-video/index */ "./src/A0032-exercise-video/index.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map