export function loadingMap(key) {
  return new Promise(function(resolve, reject) {
    //百度地图引入
    window.HOST_TYPE = "2";
    window.BMap_loadScriptTime = new Date().getTime();
    window.BMap = window.BMap || {};
    window.BMap.apiLoad = function() {
      delete window.BMap.apiLoad;
      if (typeof init == "function") {
        init();
      }
    };
    let s = document.createElement("script");
    s.src = "http://api.map.baidu.com/api?v=3.0&ak=" + key;
    document.body.appendChild(s);
    s.onload = function() {
      resolve(BMap);
    };
  });
}
