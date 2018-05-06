webpackJsonp([3],{

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersPageModule", function() { return PlayersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__players__ = __webpack_require__(813);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlayersPageModule = /** @class */ (function () {
    function PlayersPageModule() {
    }
    PlayersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__players__["a" /* PlayersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__players__["a" /* PlayersPage */]),
            ],
        })
    ], PlayersPageModule);
    return PlayersPageModule;
}());

//# sourceMappingURL=players.module.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_common_not_found_error__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_common_service_players_service__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PlayersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlayersPage = /** @class */ (function () {
    function PlayersPage(navCtrl, navParams, service, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.teamurl = navParams.get('teamUrl');
        this.teamName = navParams.get('teamName');
    }
    PlayersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create({ content: 'Loading players...',
            spinner: 'dots'
        });
        this.loader.present().then(function () {
            _this.displayTeamsList();
        });
    };
    PlayersPage.prototype.toHttps = function (val) {
        if (!val.includes("https")) {
            val = val.replace("http", "https");
        }
        console.log(val);
        return val;
    };
    PlayersPage.prototype.displayTeamsList = function () {
        var _this = this;
        //console.log(this.teamurl);
        this.service.getItems(this.toHttps(this.teamurl)).subscribe(function (response) {
            _this.players = response.players;
            _this.loader.dismiss();
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_2__app_common_not_found_error__["a" /* NotFoundError */]) {
                console.log('not found ');
            }
            else {
                throw error;
            }
            _this.loader.dismiss();
        });
    };
    PlayersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-players',template:/*ion-inline-start:"/Users/prasad/Desktop/SoccerScores/SoccerScores/src/pages/players/players.html"*/'<!--\n  Generated template for the PlayersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{teamName}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor = "let player of players ">\n  \n      <!-- <ion-avatar item-start>\n        <ion-text-avatar color="primary">{{player.jerseyNumber}}</ion-text-avatar>\n      </ion-avatar> -->\n\n      <h1>{{player.name}}</h1>\n      <h3>{{player.position}}</h3>\n      <p>{{player.nationality}}</p>\n      <p>{{player.jerseyNumber}}</p>\n      <p>{{player.contractUntil}}</p>\n      <p>{{player.dateOfBirth}}</p>\n      \n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/prasad/Desktop/SoccerScores/SoccerScores/src/pages/players/players.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_common_service_players_service__["a" /* PlayersService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], PlayersPage);
    return PlayersPage;
}());

//# sourceMappingURL=players.js.map

/***/ })

});
//# sourceMappingURL=3.js.map