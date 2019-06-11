const axios = require('axios')
const axiosChromeMessagingAdapter = require('axios-chrome-messaging-adapter')
 
// register the adapter message hanlder
axiosChromeMessagingAdapter.registerMessageHandler()
chrome.webNavigation.onCompleted.addListener(

  function (navigationEvent) {
    let tabId = navigationEvent.tabId
    chrome.tabs.insertCSS(tabId, { file: 'insta-down-css.css' })
    chrome.tabs.executeScript(tabId, { file: 'download.js' })
    chrome.tabs.executeScript(tabId, { file: 'dist/jszip.min.js' })
    chrome.tabs.executeScript(tabId, { file: 'dist/jszip-utils.min.js' })
    chrome.tabs.executeScript(tabId, { file: 'dist/FileSaver.min.js' })
    const axios = require('axios')
    const axiosChromeMessagingAdapter = require('axios-chrome-messaging-adapter')
 
    // register the adapter message hanlder
    axiosChromeMessagingAdapter.registerMessageHandler()
  },
  { url: [{ hostSuffix: '.instagram.com' }] }
)
