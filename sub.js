if(!window.isTop){
    var data = 'test';
    chrome.runtime.sendMessage({sendBack:true,data:data});
}