/**
 * @name AppTimeTracker
 * @author Yimin
 * @description Description
 * @version 0.0.1
 */

module.exports = class AppTimeTracker {
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

  load() {} // Optional function. Called when the plugin is loaded in to memory

  // On plugin start
  start() {
    this.createHideDiv();
  }

  // On stop/reload
  stop() {
    this.deleteHideDiv();
  }

  observer(changes) {} // Optional function. Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>
}
