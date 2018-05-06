webpackJsonp([2],{

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandingsPageModule", function() { return StandingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__standings__ = __webpack_require__(815);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StandingsPageModule = /** @class */ (function () {
    function StandingsPageModule() {
    }
    StandingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__standings__["a" /* StandingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__standings__["a" /* StandingsPage */]),
            ],
        })
    ], StandingsPageModule);
    return StandingsPageModule;
}());

//# sourceMappingURL=standings.module.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndPoint; });
var EndPoint;
(function (EndPoint) {
    EndPoint.TEAMS_FIFA_WC18 = 'https://api.football-data.org/v1/competitions/467/teams';
    EndPoint.TEAMS_EPL_1718 = 'https://api.football-data.org/v1/competitions/445/teams';
    EndPoint.FIXTURES_FIFA_WC18 = 'https://api.football-data.org/v1/competitions/467/fixtures';
    EndPoint.FIXTURES_EPL_1718 = 'https://api.football-data.org/v1/competitions/445/fixtures';
    EndPoint.STANDINGS_EPL_1718 = 'https://api.football-data.org/v1/competitions/445/leagueTable';
})(EndPoint || (EndPoint = {}));
//# sourceMappingURL=endpoints.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_common_endpoints__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_common_not_found_error__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_common_service_standings_service__ = __webpack_require__(345);
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
 * Generated class for the StandingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StandingsPage = /** @class */ (function () {
    function StandingsPage(navCtrl, navParams, service, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
    }
    StandingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create({ content: 'Loading...',
            spinner: 'dots'
        });
        this.loader.present().then(function () {
            _this.displayStandings();
        });
    };
    StandingsPage.prototype.displayStandings = function () {
        var _this = this;
        this.service.getItems(__WEBPACK_IMPORTED_MODULE_0__app_common_endpoints__["a" /* EndPoint */].STANDINGS_EPL_1718).subscribe(function (response) {
            _this.standings = response.standing;
            _this.loader.dismiss();
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_3__app_common_not_found_error__["a" /* NotFoundError */]) {
                console.log('not found ');
            }
            else
                throw error;
            _this.loader.dismiss();
        });
    };
    StandingsPage.prototype.viewPlayers = function (team) {
        var fetchPlayersUrl = team._links.team.href + "/players";
        this.navCtrl.push('PlayersPage', { teamUrl: fetchPlayersUrl, teamName: team.teamName });
    };
    StandingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-standings',template:/*ion-inline-start:"/Users/prasad/Desktop/SoccerScores/SoccerScores/src/pages/standings/standings.html"*/'<!--\n  Generated template for the StandingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Standings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let team of standings" (click)="viewPlayers(team)">\n\n      <ion-avatar item-start>\n        <img src={{team.crestURI}}>\n      </ion-avatar>\n\n      <ion-row>\n        <ion-col>\n          <h2 ion-text color="primary">{{team.teamName}}</h2>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <h4>Pts</h4>\n        </ion-col>\n        <ion-col>\n          <h4>MP</h4>\n        </ion-col>\n        <ion-col>\n          <h4>W</h4>\n        </ion-col>\n        <ion-col>\n          <h4>D</h4>\n        </ion-col>\n        <ion-col>\n          <h4>L</h4>\n        </ion-col>\n        <ion-col>\n          <h4>GF</h4>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <h5>{{team.points}}</h5>\n        </ion-col>\n        <ion-col>\n          <h5>{{team.playedGames}}</h5>\n        </ion-col>\n        <ion-col>\n          <h5>{{team.wins}}</h5>\n        </ion-col>\n        <ion-col>\n          <h5>{{team.draws}}</h5>\n        </ion-col>\n        <ion-col>\n          <h5>{{team.losses}}</h5>\n        </ion-col>\n        <ion-col>\n          <h5>{{team.goals}}</h5>\n        </ion-col>\n      </ion-row>\n\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/prasad/Desktop/SoccerScores/SoccerScores/src/pages/standings/standings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__app_common_service_standings_service__["a" /* StandingsService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */]])
    ], StandingsPage);
    return StandingsPage;
}());

//# sourceMappingURL=standings.js.map

/***/ })

});
//# sourceMappingURL=2.js.map