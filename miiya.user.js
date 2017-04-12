// ==UserScript==
// @name         pointatume
// @namespace    miiya
// @homepageURL https://gist.github.com/esabox/fba49da6a8f99c728243488b4de3bc4b/edit
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.rakuten-card.co.jp/*
// @match        https://workflowy.com/*
// @match        https://workflowy.com/*
// @match        https://workflowy.com/*
// @grant        none
// ==/UserScript==

// console.log(window.hoge==hoge);

(function() {
	"use strict";

	window.nsMiiya={}; //namespace
	nsMiiya.hoge=function(){
		//console.log(hoge);
		const base = document.body.appendChild(Object.assign(document.createElement('div'), {
			id: 'copy-buttons',
			style: 'background-color: white; border: 1px solid silver;padding: 1em; position: fixed; top: 0; left: 0; z-index: 2147483646;'
		}));
		base.innerHTML += '<input type="button" id="nIdo" value="移">';

		var btn_enc = document.createElement('button');
		btn_enc.textContent = '下';
		btn_enc.onclick = function () {
			this.f=this.f ? 0:1;

			if (this.f) {
				this.textContent = '下';
				this.parentNode.style.bottom=0;
				this.parentNode.style.top='';
			} else {
				this.textContent = '上';
				this.parentNode.style.bottom='';
				this.parentNode.style.top='0';
			}

		};
		base.appendChild(btn_enc);

		const btn = base.appendChild(Object.assign(document.createElement('button'), {
			id: 'sads',
			textContent:'左',
			onclick:function(){
				this.f=this.f ? 0:1;

				if (!this.f) {
					this.textContent = '左';
					this.parentNode.style.left=0;
					this.parentNode.style.right='';
				} else {
					this.textContent = '右';
					this.parentNode.style.left='';
					this.parentNode.style.right='0';
				}},
		}));
	};
	console.log(nsMiiya.hoge);
	nsMiiya.hoge();

})();