/**
 * @name AppTimeLimiter
 * @author Yimin
 * @description Describe the basic functions. Maybe a support server link.
 * @version 0.0.1
 */

module.exports = class ExamplePlugin {
  load() {} // Optional function. Called when the plugin is loaded in to memory

  start() {} // Required function. Called when the plugin is activated (including after reloads)
  stop() {} // Required function. Called when the plugin is deactivated

  observer(changes) {} // Optional function. Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>
}