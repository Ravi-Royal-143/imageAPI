"use strict";(self.webpackChunkUI=self.webpackChunkUI||[]).push([[672],{516:(v,f,r)=>{r.r(f),r.d(f,{PictureComponent:()=>l});var d=r(895);const m_baseURL="https://momentous-verdant-sofa.glitch.me/";var i=r(256);const h=["imgElement"];function C(n,e){if(1&n&&i._UZ(0,"img",2,3),2&n){const t=i.oxw();i.Q6J("src",t.img.fullpath,i.LSH)}}class p{constructor(){this.deleteImgId=new i.vpe}copyToClipboard(){const e=this.selectedImage.nativeElement;e.crossOrigin="anonymous",e.onload=()=>{const t=document.createElement("canvas");t.width=e.width,t.height=e.height,t.getContext("2d").drawImage(e,0,0),t.toBlob(s=>{navigator.clipboard.write([new ClipboardItem({[s.type]:s})])},e.type)}}deleteImg(e){this.deleteImgId.emit(e)}}p.\u0275fac=function(e){return new(e||p)},p.\u0275cmp=i.Xpm({type:p,selectors:[["app-image"]],viewQuery:function(e,t){if(1&e&&i.Gf(h,5),2&e){let o;i.iGM(o=i.CRH())&&(t.selectedImage=o.first)}},inputs:{img:"img"},outputs:{deleteImgId:"deleteImgId"},standalone:!0,features:[i.jDz],decls:5,vars:1,consts:[[3,"src",4,"ngIf"],[3,"click"],[3,"src"],["imgElement",""]],template:function(e,t){1&e&&(i.YNc(0,C,2,1,"img",0),i.TgZ(1,"button",1),i.NdJ("click",function(){return t.copyToClipboard()}),i._uU(2,"Copy Image"),i.qZA(),i.TgZ(3,"button",1),i.NdJ("click",function(){return t.deleteImg(t.img.imgName)}),i._uU(4,"delete"),i.qZA()),2&e&&i.Q6J("ngIf",t.img)},dependencies:[d.ez,d.O5]});const g={upload:m_baseURL+"/upload",list:m_baseURL+"/list",delete:m_baseURL+"/delete/<PATH>"};var _=r(529);class c{constructor(e){this.http=e}addImagesToNode(e){return this.http.post(g.upload,e)}getImages(){return this.http.get(g.list)}deleteImgFromNode(e){return this.http.delete(g.delete.replace("<PATH>",e))}}c.\u0275fac=function(e){return new(e||c)(i.LFG(_.eN))},c.\u0275prov=i.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"});class y{constructor(e,t){this._document=t;const o=this._textarea=this._document.createElement("textarea"),s=o.style;s.position="fixed",s.top=s.opacity="0",s.left="-999em",o.setAttribute("aria-hidden","true"),o.value=e,o.readOnly=!0,this._document.body.appendChild(o)}copy(){const e=this._textarea;let t=!1;try{if(e){const o=this._document.activeElement;e.select(),e.setSelectionRange(0,e.value.length),t=this._document.execCommand("copy"),o&&o.focus()}}catch{}return t}destroy(){const e=this._textarea;e&&(e.remove(),this._textarea=void 0)}}let b=(()=>{class n{constructor(t){this._document=t}copy(t){const o=this.beginCopy(t),s=o.copy();return o.destroy(),s}beginCopy(t){return new y(t,this._document)}}return n.\u0275fac=function(t){return new(t||n)(i.LFG(d.K0))},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function I(n,e){if(1&n){const t=i.EpF();i.TgZ(0,"div",2)(1,"a",3),i._uU(2,"imageDetail.imgName"),i.qZA(),i.TgZ(3,"app-image",4),i.NdJ("deleteImgId",function(s){i.CHM(t);const a=i.oxw();return i.KtG(a.deleteImg(s))}),i.qZA()()}if(2&n){const t=e.$implicit;i.xp6(1),i.Q6J("download",t.imageNamewithExtension)("href",t.imagePath,i.LSH),i.xp6(2),i.Q6J("img",t)}}class l{onPaste(e){const t=e.clipboardData||window.clipboardData,s=Array.from(t.items).find(a=>/image/i.test(a.type));s&&this.saveFile(s.getAsFile())}constructor(e,t){this.pictureService=e,this.clipboard=t,this.imagesLists=[]}ngOnInit(){this.fetchImgs()}onFileSelected(e){const t=e.target.files[0];this.saveFile(t);const o=new FileReader;o.readAsDataURL(t),o.onload=()=>{this.imageSrc=o.result}}addFormData(e){const t=new FormData;return t.append("image",e),t}fetchImgs(){this.pictureService.getImages().subscribe(e=>{this.imagesLists=e.map(t=>{const o=t.split(".").pop(),a=2===t.split(`.${o}`).length?t.split("-").slice(0,-1).join("-"):t.split(".").slice(0,-2).join("");return{imagePath:`${m_baseURL}/file/${t}`,imageNamewithExtension:`${a}.${o}`,fullpath:m_baseURL+"/file/"+t,imgName:a,filePath:t}})})}saveFile(e){this.pictureService.addImagesToNode(this.addFormData(e)).subscribe(t=>{this.fetchImgs()})}deleteImg(e){this.pictureService.deleteImgFromNode(e).subscribe(t=>{this.fetchImgs()})}}l.\u0275fac=function(e){return new(e||l)(i.Y36(c),i.Y36(b))},l.\u0275cmp=i.Xpm({type:l,selectors:[["app-picture"]],hostBindings:function(e,t){1&e&&i.NdJ("paste",function(s){return t.onPaste(s)})},standalone:!0,features:[i.jDz],decls:2,vars:1,consts:[["type","file",3,"change"],["class","p-5",4,"ngFor","ngForOf"],[1,"p-5"],[1,"pi","pi-download",3,"download","href"],[3,"img","deleteImgId"]],template:function(e,t){1&e&&(i.TgZ(0,"input",0),i.NdJ("change",function(s){return t.onFileSelected(s)}),i.qZA(),i.YNc(1,I,4,3,"div",1)),2&e&&(i.xp6(1),i.Q6J("ngForOf",t.imagesLists))},dependencies:[d.ez,d.sg,p],styles:[".p-5[_ngcontent-%COMP%]{padding:5px}"]})}}]);