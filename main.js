var isTop = true;
chrome.runtime.onMessage.addListener(function(d){
    alert('Message: ' + d.data);
});