const calamari = "https://app-new.calamari.io/clockin/timesheet"
const VNDLY = 'https://cruise.vndly.com/candidate/timesheets/'

ClockIn = []
ClockOut = []

chrome.action.onClicked.addListener(async (tab) => {
    //Read Time from Calamri
    if (tab.url.startsWith(calamari)) {
        
    };
})

chrome.runtime.onMessage.addListener(function(message, sender){
    if(message.sendBack){
        chrome.tabs.sendMessage(sender.tab.id, message.data);
    }
})