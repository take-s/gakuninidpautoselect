// ==UserScript==
// @name         GakuninIdP AutoSelect
// @namespace    https://github.com/take-s/gakuninidpautoselect
// @version      2025-07-16-v0.11
// @description  Gakunin IdP AutoSelect
// @author       takesaku
// @match        https://cg.gakunin.jp/Shibboleth.sso/DS?target=/map/top/index?url=top/index&url=top/index
// @match        https://cg.gakunin.jp/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gakunin.jp
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...


    // ページの読み込みを待ってから実行
    window.addEventListener('load', function() {
        const textbox1 = document.getElementById('keytext');
        const checkbox1 = document.getElementById('wayf_remember_checkbox');
        const btn_img1 = document.getElementById('dropdown_img');

        if (textbox1) {
            textbox1.value = 'IdPの一覧に出てくる組織名称をここに入れる';
        }
        if (checkbox1) {
            checkbox1.checked = true;
        }
        if (btn_img1) {
            btn_img1.click(); // 1回目のクリック
            setTimeout(() => {
                btn_img1.click(); // 2回目のクリック（少し遅らせて）
            }, 100); // 100ミリ秒後に2回目
        }

    });


})();