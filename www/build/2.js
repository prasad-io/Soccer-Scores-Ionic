webpackJsonp([2],{638:function(l,n,u){"use strict";function t(l){return i._22(0,[(l()(),i.Z(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i._20(-1,null,[" In progress"]))],null,null)}function a(l){return i._22(0,[(l()(),i.Z(0,0,null,null,7,"div",[],null,null,null,null,null)),(l()(),i._20(-1,null,["\n\n            "])),(l()(),i.Z(2,0,null,null,1,"ion-icon",[["name","football"],["role","img"]],[[2,"hide",null]],null,null,null,null)),i.Y(3,147456,[[3,4]],0,Y.a,[j.a,i.j,i.z],{name:[0,"name"]},null),(l()(),i._20(4,null,["   "," - "," \n\n            "])),(l()(),i.U(16777216,null,null,1,null,t)),i.Y(6,16384,null,0,C.j,[i.I,i.F],{ngIf:[0,"ngIf"]},null),(l()(),i._20(-1,null,["\n          "]))],function(l,n){l(n,3,0,"football");l(n,6,0,"IN_PLAY"===n.parent.context.$implicit.status)},function(l,n){l(n,2,0,i._11(n,3)._hidden);l(n,4,0,n.parent.context.$implicit.result.goalsHomeTeam,n.parent.context.$implicit.result.goalsAwayTeam)})}function o(l){return i._22(0,[(l()(),i.Z(0,0,null,null,16,"ion-item",[["class","item item-block"],["ion-item",""]],null,null,null,I.b,I.a)),i.Y(1,1097728,null,3,Z.a,[F.a,j.a,i.j,i.z,[2,A.a]],null,null),i._18(335544320,1,{contentLabel:0}),i._18(603979776,2,{_buttons:1}),i._18(603979776,3,{_icons:1}),i.Y(5,16384,null,0,y.a,[],null,null),(l()(),i._20(-1,2,["\n          \n          "])),(l()(),i.Z(7,0,null,2,1,"h2",[],null,null,null,null,null)),(l()(),i._20(8,null,[""," vs ",""])),(l()(),i._20(-1,2,["\n\n          "])),(l()(),i.U(16777216,null,2,1,null,a)),i.Y(11,16384,null,0,C.j,[i.I,i.F],{ngIf:[0,"ngIf"]},null),(l()(),i._20(-1,2,["\n          \n          "])),(l()(),i.Z(13,0,null,2,2,"p",[],null,null,null,null,null)),(l()(),i._20(14,null,["",""])),i._15(15,1),(l()(),i._20(-1,2,["\n\n        "]))],function(l,n){l(n,11,0,n.component.gameOver(n.context.$implicit.status))},function(l,n){l(n,8,0,n.context.$implicit.homeTeamName,n.context.$implicit.awayTeamName);l(n,14,0,i._21(n,14,0,l(n,15,0,i._11(n.parent,0),n.context.$implicit.date)))})}function e(l){return i._22(0,[i._13(0,C.d,[i.r]),(l()(),i._20(-1,null,["\n"])),(l()(),i.Z(2,0,null,null,10,"ion-header",[],null,null,null,null,null)),i.Y(3,16384,null,0,P.a,[j.a,i.j,i.z,[2,T.a]],null,null),(l()(),i._20(-1,null,["\n\n  "])),(l()(),i.Z(5,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,E.b,E.a)),i.Y(6,49152,null,0,z.a,[L.a,[2,T.a],[2,S.a],j.a,i.j,i.z],null,null),(l()(),i._20(-1,3,["\n    "])),(l()(),i.Z(8,0,null,3,2,"ion-title",[],null,null,null,N.b,N.a)),i.Y(9,49152,null,0,w.a,[j.a,i.j,i.z,[2,X.a],[2,z.a]],null,null),(l()(),i._20(-1,0,["Fixtures & Results "])),(l()(),i._20(-1,3,["\n  "])),(l()(),i._20(-1,null,["\n\n"])),(l()(),i._20(-1,null,["\n\n\n"])),(l()(),i.Z(14,0,null,null,9,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,$.b,$.a)),i.Y(15,4374528,null,0,q.a,[j.a,U.a,O.a,i.j,i.z,L.a,R.a,i.u,[2,T.a],[2,S.a]],null,null),(l()(),i._20(-1,1,["\n\n    "])),(l()(),i.Z(17,0,null,1,5,"ion-list",[],null,null,null,null,null)),i.Y(18,16384,null,0,D.a,[j.a,i.j,i.z,U.a,M.l,O.a],null,null),(l()(),i._20(-1,null,["\n        "])),(l()(),i.U(16777216,null,null,1,null,o)),i.Y(21,802816,null,0,C.i,[i.I,i.F,i.p],{ngForOf:[0,"ngForOf"]},null),(l()(),i._20(-1,null,["\n      "])),(l()(),i._20(-1,1,["\n    \n\n"])),(l()(),i._20(-1,null,["\n"]))],function(l,n){l(n,21,0,n.component.fixtures)},function(l,n){l(n,5,0,i._11(n,6)._hidden,i._11(n,6)._sbPadding);l(n,14,0,i._11(n,15).statusbarPadding,i._11(n,15)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var i=u(2),s=(u(1),u(160),u(646)),c=u(165),r=u(347),_=function(){function l(l,n,u){this.navCtrl=l,this.navParams=n,this.service=u}return l.prototype.ionViewDidLoad=function(){this.displayFixtures(),console.log("ionViewDidLoad FixturesPage")},l.prototype.displayFixtures=function(){var l=this;this.service.getItems(s.a.FIXTURES_EPL_1718).subscribe(function(n){l.fixtures=n.fixtures},function(l){if(!(l instanceof r.a))throw l;console.log("not found ")})},l.prototype.gameOver=function(l){switch(l){case"FINISHED":case"IN_PLAY":return!0;default:return!1}},l}(),b=function(){return function(){}}(),d=u(338),f=u(339),p=u(340),m=u(341),g=u(342),h=u(343),k=u(344),v=u(345),x=u(346),Y=u(52),j=u(3),C=u(25),I=u(348),Z=u(27),F=u(23),A=u(54),y=u(107),P=u(163),T=u(7),E=u(643),z=u(51),L=u(12),S=u(30),N=u(644),w=u(161),X=u(73),$=u(645),q=u(32),U=u(6),O=u(13),R=u(48),D=u(74),M=u(11),V=u(16),W=i.X({encapsulation:2,styles:[],data:{}}),B=i.V("page-fixtures",_,function(l){return i._22(0,[(l()(),i.Z(0,0,null,null,1,"page-fixtures",[],null,null,null,e,W)),i.Y(1,49152,null,0,_,[S.a,V.a,c.a],null,null)],null,null)},{},{},[]),H=u(26),G=u(162),J=u(49);u.d(n,"FixturesPageModuleNgFactory",function(){return K});var K=i.W(b,[],function(l){return i._7([i._8(512,i.i,i.S,[[8,[d.a,f.a,p.a,m.a,g.a,h.a,k.a,v.a,x.a,B]],[3,i.i],i.s]),i._8(4608,C.l,C.k,[i.r,[2,C.t]]),i._8(4608,H.k,H.k,[]),i._8(4608,H.c,H.c,[]),i._8(512,C.b,C.b,[]),i._8(512,H.j,H.j,[]),i._8(512,H.d,H.d,[]),i._8(512,H.i,H.i,[]),i._8(512,G.a,G.a,[]),i._8(512,G.b,G.b,[]),i._8(512,b,b,[]),i._8(256,J.a,_,[])])})},643:function(l,n,u){"use strict";function t(l){return a._22(0,[(l()(),a.Z(0,0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),a.Y(1,278528,null,0,o.h,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a.Z(2,0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==l.component.backButtonClick(u)&&t}return t},e.b,e.a)),a.Y(3,278528,null,0,o.h,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Y(4,1097728,null,0,i.a,[[8,"bar-button"],s.a,a.j,a.z],null,null),(l()(),a.Z(5,0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a.Y(6,278528,null,0,o.h,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a.Y(7,147456,null,0,c.a,[s.a,a.j,a.z],{name:[0,"name"]},null),(l()(),a.Z(8,0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),a.Y(9,278528,null,0,o.h,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a._20(10,null,["",""])),a._10(null,0),a._10(null,1),a._10(null,2),(l()(),a.Z(14,0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),a.Y(15,278528,null,0,o.h,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._10(null,3)],function(l,n){var u=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+u._mode);l(n,3,0,"back-button","back-button-"+u._mode);l(n,6,0,"back-button-icon","back-button-icon-"+u._mode);l(n,7,0,u._bbIcon);l(n,9,0,"back-button-text","back-button-text-"+u._mode);l(n,15,0,"toolbar-content","toolbar-content-"+u._mode)},function(l,n){var u=n.component;l(n,2,0,u._hideBb);l(n,5,0,a._11(n,7)._hidden);l(n,10,0,u._backText)})}u.d(n,"a",function(){return r}),n.b=t;var a=u(2),o=u(25),e=u(53),i=u(28),s=u(3),c=u(52),r=(u(7),u(30),a.X({encapsulation:2,styles:[],data:{}}))},644:function(l,n,u){"use strict";function t(l){return a._22(2,[(l()(),a.Z(0,0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),a.Y(1,278528,null,0,o.h,[a.p,a.q,a.j,a.A],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._10(null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}u.d(n,"a",function(){return e}),n.b=t;var a=u(2),o=u(25),e=(u(3),a.X({encapsulation:2,styles:[],data:{}}))},645:function(l,n,u){"use strict";function t(l){return a._22(2,[a._18(402653184,1,{_fixedContent:0}),a._18(402653184,2,{_scrollContent:0}),(l()(),a.Z(2,0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),a._10(null,0),(l()(),a.Z(4,0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),a._10(null,1),a._10(null,2)],null,null)}u.d(n,"a",function(){return o}),n.b=t;var a=u(2),o=(u(3),u(6),u(13),u(48),u(7),u(30),a.X({encapsulation:2,styles:[],data:{}}))},646:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t;!function(l){l.TEAMS_FIFA_WC18="https://api.football-data.org/v1/competitions/467/teams",l.TEAMS_EPL_1718="https://api.football-data.org/v1/competitions/445/teams",l.FIXTURES_FIFA_WC18="https://api.football-data.org/v1/competitions/467/fixtures",l.FIXTURES_EPL_1718="https://api.football-data.org/v1/competitions/445/fixtures",l.STANDINGS_EPL_1718="https://api.football-data.org/v1/competitions/445/leagueTable"}(t||(t={}))}});