"use strict";(self.webpackChunkWiki_Minecraft=self.webpackChunkWiki_Minecraft||[]).push([[784],{7784:(x,c,o)=>{o.r(c),o.d(c,{AnimalsModule:()=>E});var e=o(6019),i=o(3019),p=o(8357);function g(t,a){if(1&t){const n=i.EpF();i.TgZ(0,"div",3),i.TgZ(1,"h4"),i._uU(2),i.qZA(),i.TgZ(3,"h4"),i._uU(4),i.qZA(),i._UZ(5,"img",4),i.TgZ(6,"h4"),i._uU(7),i.qZA(),i.TgZ(8,"h4"),i._uU(9),i.qZA(),i.TgZ(10,"h4"),i._uU(11),i.qZA(),i.TgZ(12,"button",5),i.NdJ("click",function(){const s=i.CHM(n).$implicit;return i.oxw(2).deleteAnimalById(s._id)}),i._uU(13),i.qZA(),i.qZA()}if(2&t){const n=a.$implicit;i.xp6(2),i.hij("Id: ",n._id,""),i.xp6(2),i.hij("Name: ",n.name,""),i.xp6(1),i.Q6J("src",n.image,i.LSH)("alt",n.name),i.xp6(2),i.hij("Description: ",n.description,""),i.xp6(2),i.hij("Spawning: ",n.spawning,""),i.xp6(2),i.hij("Behavior: ",n.behavior,""),i.xp6(2),i.hij("Delete ",n.name,"")}}function u(t,a){if(1&t&&(i.TgZ(0,"div",1),i.YNc(1,g,14,8,"div",2),i.qZA()),2&t){const n=i.oxw();i.xp6(1),i.Q6J("ngForOf",n.animalList)}}let k=(()=>{class t{constructor(n){this.requestAnimalsService=n,this.animalList=[]}deleteAnimalById(n){console.log("Estoy borrando un animal"),console.log(n),this.requestAnimalsService.deleteAnimalById(n).subscribe()}ngOnInit(){this.requestAnimalsService.getAnimals().subscribe(n=>{const m=n.map(({_id:s,name:r,description:S,spawning:h,behavior:R,image:F})=>({_id:s,name:r,description:S,spawning:h,behavior:R,image:F}));this.animalList=m})}}return t.\u0275fac=function(n){return new(n||t)(i.Y36(p.U))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-animals-container"]],decls:3,vars:1,consts:[["class","all_animals",4,"ngIf"],[1,"all_animals"],["class","animal_box",4,"ngFor","ngForOf"],[1,"animal_box"],[3,"src","alt"],[3,"click"]],template:function(n,A){1&n&&(i.TgZ(0,"h1"),i._uU(1,"Meet our animal friends!"),i.qZA(),i.YNc(2,u,2,1,"div",0)),2&n&&(i.xp6(2),i.Q6J("ngIf",A.animalList))},directives:[e.O5,e.sg],styles:['.all_animals[_ngcontent-%COMP%]{display:flex;padding:20px;width:100%;flex-wrap:wrap;justify-content:center;background-image:url(ImagenPeceraAnimales.a9253d61cbc2d083.jpg);background-size:cover;background-repeat:no-repeat}.animal_box[_ngcontent-%COMP%]{margin:30px;width:20%;text-align:center;min-width:200px;border:black;background-color:#fff;border-style:solid;font-family:"Lato",sans-serif;padding:60px}button[_ngcontent-%COMP%]{background-color:#4169e1;width:100%;padding:10px 0;color:#fff;border:none;margin-top:auto}h1[_ngcontent-%COMP%]{text-align:center;background-image:url(data:image/jpeg;base64,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);margin-bottom:0;height:100px;line-height:100px;color:#fff;text-shadow:2px 2px 4px #000000}']}),t})();var l=o(1368);const d=[{path:"",component:k}];let Q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[l.Bz.forChild(d)],l.Bz]}),t})(),E=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[e.ez,Q]]}),t})()}}]);