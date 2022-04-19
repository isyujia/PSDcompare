/**
 * @description 减少事件触发频率的慢速事件触发方式
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Window/resize_event
 * @param {String} eventType 触发速率较高的原生事件名称
 * @param {String} customEventName 重新自定义的触发速率较低的事件名称
 * @param {Number} interval 事件触发的间隔时间，单位毫秒
 * @param {Object} dom 触发原生事件的 dom 对象，默认为 window 对象
 */
function throttle(eventType, customEventName, interval, dom) {
    dom = dom || window;
    var resizeTimeout;
    var callback = function () {
        if (!resizeTimeout) {
            resizeTimeout = setTimeout(function () {
                resizeTimeout = null;
                dom.dispatchEvent(new CustomEvent(customEventName));
            }, interval);
        }
    };
    dom.addEventListener(eventType, callback, false);
}

export default {
    throttle
}