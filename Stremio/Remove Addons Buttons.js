// ==UserScript==
// @name        Stremio - Remove Addons Buttons
// @namespace   https://github.com/BreezeSpark
// @match       https://web.stremio.com/*
// @version     1.0
// @author      BreezeSpark
// @description Remove addons buttons from Stremio
// @icon        https://t3.gstatic.com/faviconV2?client=SOCIAL&url=http://stremio.com
// @downloadURL https://raw.githubusercontent.com/BreezeSpark/Userscripts/main/Stremio/Remove%20Addons%20Buttons.js
// ==/UserScript==
(function () {
  'use strict'
  new MutationObserver(() => {
    document.querySelectorAll('a[title="Addons"]').forEach(el => el.remove())
    if (location.href.includes('/#/addons')) location.href = 'https://web.stremio.com/#/'
  }).observe(document.body, { childList: true, subtree: true })
})()
