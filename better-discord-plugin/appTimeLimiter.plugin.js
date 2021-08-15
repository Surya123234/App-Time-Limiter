/**
 * @name AppTimeLimiter
 * @author Yimin
 * @description Description
 * @version 0.0.1
 */

 module.exports = class AppTimeLimiter {
  constructor() {
    this.overlayElement;
  }

  createHideDiv() {
    const content = `
      <p style="color: white; text-align: center; font-size: 80px;">YOUR TIME IS UP!</p>
    `
    const overlay = document.createElement('div');
    overlay.innerHTML = content;
    overlay.style.cssText = 'position:fixed;width:100%;height:100%;z-index:999;background:black';
    document.body.appendChild(overlay);

    this.overlayElement = overlay;


    overlay.addEventListener('click', () => {
      this.deleteHideDiv();
    })
  }

  deleteHideDiv() {
    try {
      this.overlayElement.parentNode.removeChild(this.overlayElement);
    } catch (e) {

    }
  }

  connectToWS() {
    // Create WebSocket connection.
    const socket = new WebSocket('ws://localhost:8999');

    // Connection opened
    socket.addEventListener('open', function (event) {
        socket.send('{"origin": "discord", "action": "init"}');
    });

    // Listen for messages
    socket.addEventListener('message', (event) => {
      if (event.data === 'unblock') {
        this.deleteHideDiv();
      } else if (event.data === 'block') {
        this.createHideDiv();
      }
    });
  }

  load() {} // Optional function. Called when the plugin is loaded in to memory

  // On plugin start
  start() {
    this.createHideDiv();
    this.connectToWS();
  }

  // On stop/reload
  stop() {
    this.deleteHideDiv();
  }

  observer(changes) {} // Optional function. Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>
}
