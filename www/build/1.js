webpackJsonp([1],{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsPageModule", function() { return TeamsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teams__ = __webpack_require__(816);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TeamsPageModule = /** @class */ (function () {
    function TeamsPageModule() {
    }
    TeamsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__teams__["a" /* TeamsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__teams__["a" /* TeamsPage */]),
            ],
        })
    ], TeamsPageModule);
    return TeamsPageModule;
}());

//# sourceMappingURL=teams.module.js.map

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

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_common_service_teams_service__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_common_endpoints__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_common_not_found_error__ = __webpack_require__(344);
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
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeamsPage = /** @class */ (function () {
    function TeamsPage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
    }
    TeamsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeamsPage');
        this.displayTeamsList();
    };
    TeamsPage.prototype.displayTeamsList = function () {
        var _this = this;
        this.service.getItems(__WEBPACK_IMPORTED_MODULE_3__app_common_endpoints__["a" /* EndPoint */].TEAMS_EPL_1718).subscribe(function (response) {
            console.log(response);
            _this.teams = response.teams;
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_4__app_common_not_found_error__["a" /* NotFoundError */]) {
                console.log('not found ');
            }
            else
                throw error;
        });
    };
    TeamsPage.prototype.viewPlayers = function (team) {
        var fetchPlayersUrl = team._links.players.href;
        this.navCtrl.push('PlayersPage', { teamUrl: fetchPlayersUrl, teamName: team.name });
    };
    TeamsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teams',template:/*ion-inline-start:"/Users/prasad/Desktop/SoccerScores/SoccerScores/src/pages/teams/teams.html"*/'<!--\n  Generated template for the TeamsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>teams</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  \n  <ion-list>\n    <ion-item ion-item *ngFor="let team of teams">\n      <ion-thumbnail item-start>\n          <img mat-card-avatar src="{{ team.crestUrl }}" alt="{{team.name}}">\n        \n      </ion-thumbnail>\n      <h2>{{ team.name }}</h2>\n      <p>{{ team.code }}</p>\n      <button ion-button clear item-end (click)="viewPlayers(team)">View</button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/prasad/Desktop/SoccerScores/SoccerScores/src/pages/teams/teams.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_common_service_teams_service__["a" /* TeamsService */]])
    ], TeamsPage);
    return TeamsPage;
}());

//# sourceMappingURL=teams.js.map

/***/ })

});
//# sourceMappingURL=1.js.map