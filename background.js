 chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({id:"contextmenu1", title:"Don't Click Me!"});
  chrome.contextMenus.onClicked.addListener((info, tab) => { 
    console.log("What");
    chrome.scripting.executeScript({target: { tabId: tab.id },func: () => alert("Why would you do that")})
  });
  /*chrome.webNavigation.onCommitted.addListener(() => {
    chrome.storage.sync.get(['grdTogl'], function(tgReslt){
      chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        console.log(tgReslt);
        if (message === 'get-grade-options') {
          if (tgReslt.grdTogl === true)  {
            sendResponse(true);
            console.log(true);
          }
          if (tgReslt.grdTogl === false)  {
            sendResponse(false);
            console.log(false);
          }
        }
        
      });
    });
  });*/
}); 
