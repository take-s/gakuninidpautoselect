// ==UserScript==
// @name         GakuninIdP_AutoSelect
// @namespace    https://github.com/take-s/gakuninidpautoselect
// @version      2025-07-16-v0.2
// @description  Gakunin IdP AutoSelect
// @author       takesaku
// @match        https://cg.gakunin.jp/Shibboleth.sso/DS?target=/map/top/index?url=top/index&url=top/index
// @match        https://cg.gakunin.jp/*
// @match        https://ds.gakunin.nii.ac.jp/Shibboleth.sso/DS*
// @match        https://ds.gakunin.nii.ac.jp/*
// @match        https://rdm.nii.ac.jp/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gakunin.jp
// @grant        none
// ==/UserScript==


(function() {
  'use strict';
  const orgname = 'IdPの一覧に出てくる組織名称をここに入れる';

  const observer = new MutationObserver((mutations, obs) => {
    const textbox1 = document.querySelector('input#keytext');
    if (textbox1) {
      textbox1.value = orgname;

      const checkbox1 = document.getElementById('wayf_remember_checkbox');
      if (checkbox1) {
        checkbox1.checked = true;
      }

      const btn_img1 = document.getElementById('dropdown_img');
      if (btn_img1) {
        btn_img1.click();
        setTimeout(() => btn_img1.click(), 100);
      }

      obs.disconnect(); // 一度処理したら監視を停止
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
