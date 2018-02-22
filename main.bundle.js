webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"content\">\n\n\n\n  <div class=\"block\">\n\n    <div class=\"header\">\n      <div class=\"logo\">\n        <img src=\"../assets/img/it_krasnodar.png\">\n      </div>\n      <div class=\"title\">\n        Муниципальный проект Краснодарского местного<br>\n        отделения партии «Единая Россия»\n      </div>\n    </div>\n\n    <h1>\n      {{title}}\n    </h1>\n\n    <div class=\"buttons\">\n      <a href=\"#\" (click)=\"changeMap(true)\" [ngClass]=\"{ 'active': mainMap }\">\n        <span>\n          Краснодарский край\n        </span>\n      </a>\n\n      <a href=\"#\" (click)=\"changeMap(false)\" [ngClass]=\"{ 'active': !mainMap }\">\n        <span>\n          Краснодар\n        </span>\n      </a>\n\n    </div>\n\n\n    <a href=\"#\" (click)=\"showPopup(true)\" class=\"bottom-link\">\n      Результаты по Краснодарскому краю\n    </a>\n\n  </div>\n\n  <div class=\"block\">\n\n    <div class=\"map\" [ngClass]=\"{ 'active': mainMap }\">\n      <svg version=\"1.1\"  xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 1772 1772\" style=\"enable-background:new 0 0 1772 1772;\" xml:space=\"preserve\">\n\n\n       <path (click)=\"changeMap(false)\"  class=\"st18 map_path\" d=\"M954.7,913.3c2.8-2,0-7.5,0-7.5l-21.8-1v5.3l-16.3,0.5V921H892c0,0,0.3-10.5,0.3-12s-2.3-2.5-2.3-2.5l4.3-9.5  l-31.8-9.3l2.3-10.5l-13-6.3l-17.8,0.3l-1.3,10.8l6.8,0.8c0,0,0,3.5,2.5,5s4,2.3,3.8,5.3s0.5,6.8-1.5,10.5s-9.5,1.8-12,0.3  s-2-13.8-2-13.8s-9.3,0-25.5-0.3s-16-0.5-17-3.8s-2-0.5-3.5,0s-3.3,0.8-6-1c-2.7-1.8-0.3-3.5,0-4.8s-15.5-14.7-15.5-14.7  s-10.5,9.9-13.5,13.4s2.3,3,2.3,3s-1,1.3-2,4s10.5,10.3,13.8,16s-2.5,8.8-10.8,18.3s-8.8,4.5-10.3,2.5s-3.5-3.8-6.8-1.3  s0.3,7.8,0,10.5s-5.3,6.3-5.3,6.3l0,0.3c0.9-0.1,1.8-0.1,3,0.3c3.7,1.2,3.5,5.3,2.8,9c-0.7,3.7,3,2.5,6.2-2s4-5.3,8.3-5.3  c4.3,0,3.3,10.2,3.3,16.3s4,8.8,8,9.8s2.5,3.2,4.5,4.2s1.2-4.3,2.2-6.3s1.2-1,2.7-0.3c1.5,0.7,1.7,3.3,4.8,2.3c3.2-1,3.7-1,4.7-0.7  s1,2.8,3.7,2.2c2.7-0.7,1-2.8,0.8-5.8s-3.5-2-3.7-4.8c-0.2-2.8,2-4,4.5-5s3.5-2,5.5-4.8c2-2.8,3.5-4,5.2-3.7s2.8,1.3,2.8,3.5  s-0.5,4.2-2.5,6.3c-2,2.2-1.3,2.5-0.7,3.7c0.7,1.2,1.5,2.5,3.8,0s3.7-2.8,7.3-4.8c3.7-2,5.8-1.7,7.5-0.7c1.7,1,0.7,3.8-1.3,5.5  s-2.5,3.7-0.5,6s1.7,3.3,1.5,6s3.8,3.2,5,3s-0.2-3.5,0.5-5.8c0.7-2.3,3.5-2.3,5-2c1.5,0.3,1.8,2.8,5.5,2.5c3.7-0.3,2.8,0.2,5.2,1.8  c2.3,1.7-0.5,1.5-1,3.2c-0.5,1.7,1.2,2.3,2.2,4.8s-1,5.3,0.5,6.5s1.3-0.5,3-3c1.7-2.5,1.8-3.2,2.8-3.8c1-0.7,2.7-0.3,3.3,1  c0.7,1.3,2,3.5,5.2,2.8c3.2-0.7,3.3-2.5,3.7-4.3c0.3-1.8,4.3-1.2,7-1.5c2.7-0.3,3.5-4.2,5.5-5c2-0.8,1.5,1.7,2.7,1.7s3.8-2,5.2-2.5  c1.3-0.5,2.3,1.5,3.7,2.3c1.3,0.8,1.3,0.5,3.7,0.3s4.3,1.2,7.7,1.2c3.3,0,3.7-4,5.7-5.2s3.3,0.5,4.5,2.3c1.2,1.8,2,2.5,3.2,2.8  c1.2,0.3,2-2.3,1.7-5.8c-0.3-3.5,0.2-4.8,0.7-6c0.5-1.2,2-0.5,1.8,0.8c-0.2,1.3-1.2,1.7-0.3,2.7c0.8,1,2.2,0.2,4,0.5  c1.8,0.3,3.3,2.2,5.2,1.5c1.8-0.7,1.2-2.3,1.2-6c0-3.7,1.5-6,2.5-5.7c1,0.3-0.7,2.5-0.2,4.2c0.5,1.7,1.7,2,4.5,1.7s3.3-4.8,6.2-6.8  c2.8-2,2.5,1.2,4.7-0.2c2.2-1.3,1.7-1.5,2-2.8c0.3-1.3-0.7-3.5,1.3-3.7s2,1.7,4.7,1.7c2.7,0,3.2-1.7,5.5-3.7c2.3-2,4.2-1.5,5.5-3.2  c1.3-1.7,0.3-3.5,1-5.5c0.6-1.7,1.5-3,3.1-3.8c-3.5-5.6-7.7-12.4-8.3-13.6C949.8,916.8,952,915.3,954.7,913.3z\"/>\n\n      <g *ngFor=\"let dataItem of data let i = index\"  (click)=\"onSelect(dataItem); select($event);\">\n        <path  *ngIf=\"i>=6\" class=\"map_path\" [ngClass]='dataItem.id' [attr.d]=\"dataItem.d\"/>\n      </g>\n\n\n<text transform=\"matrix(1 0 0 1 223.4664 886)\" class=\"st32 st33 st34\">26</text>\n<text transform=\"matrix(1 0 0 1 322.9146 1054.8719)\" class=\"st32 st33 st34\">27</text>\n<text transform=\"matrix(1 0 0 1 586.9949 1211.5433)\" class=\"st32 st33 st34\">29</text>\n<text transform=\"matrix(1 0 0 1 948.7952 1311.5433)\" class=\"st32 st33 st34\">32</text>\n<text transform=\"matrix(1 0 0 1 1046.1333 1525.2668)\" class=\"st32 st33 st34\">33</text>\n<text transform=\"matrix(1 0 0 1 1203.0023 1600.3604)\" class=\"st32 st33 st34\">35</text>\n<text transform=\"matrix(1 0 0 1 1403.0023 1311.5432)\" class=\"st32 st33 st34\">10</text>\n<text transform=\"matrix(1 0 0 1 1343.4635 964.5002)\" class=\"st32 st33 st34\">11</text>\n<text transform=\"matrix(1 0 0 1 1343.4639 729.0175)\" class=\"st32 st33 st34\">12</text>\n<text transform=\"matrix(1 0 0 1 1188.2914 597.1024)\" class=\"st32 st33 st34\">13</text>\n<text transform=\"matrix(1 0 0 1 1394.8927 521.476)\" class=\"st32 st33 st34\">15</text>\n<text transform=\"matrix(1 0 0 1 1079.9409 819.2664)\" class=\"st32 st33 st34\">14</text>\n<text transform=\"matrix(1 0 0 1 922.9416 720.5789)\" class=\"st32 st33 st34\">21</text>\n<text transform=\"matrix(1 0 0 1 821.3588 827.2475)\" class=\"st32 st33 st34\">20</text>\n<text transform=\"matrix(1 0 0 1 1067.9105 1077.2476)\" class=\"st32 st33 st34\">31</text>\n<text transform=\"matrix(1 0 0 1 724.5298 1096.8386)\" class=\"st32 st33 st34\">30</text>\n<text transform=\"matrix(1 0 0 1 567.7819 1045.9968)\" class=\"st32 st33 st34\">24</text>\n<text transform=\"matrix(1 0 0 1 451.2644 981.7132)\" class=\"st32 st33 st34\">25</text>\n<text transform=\"matrix(1 0 0 1 429.9901 750.0003)\" class=\"st32 st33 st34\">22</text>\n<text transform=\"matrix(1 0 0 1 577.5242 597.1027)\" class=\"st32 st33 st34\">23</text>\n<text transform=\"matrix(1 0 0 1 821.3589 553.9992)\" class=\"st32 st33 st34\">19</text>\n<text transform=\"matrix(1 0 0 1 922.9415 400.551)\" class=\"st32 st33 st34\">17</text>\n<text transform=\"matrix(1 0 0 1 959.1638 220.3274)\" class=\"st32 st33 st34\">18</text>\n<text transform=\"matrix(1 0 0 1 568.7819 266.8794)\" class=\"st32 st33 st34\">16</text>\n<text transform=\"matrix(1 0 0 1 1628.692 1281.6399)\" class=\"st32 st33 st34\">8</text>\n<text transform=\"matrix(1 0 0 1 1450.1058 886.0002)\" class=\"st32 st33 st34\">9</text>\n<text transform=\"matrix(1 0 0 1 389.4595 1118.8953)\" class=\"st32 st33 st35\">28</text>\n<text transform=\"matrix(1 0 0 1 824.5828 943.2061)\" class=\"st32 st33 st35\">1 - 6</text>\n<text transform=\"matrix(1 0 0 1 1075.941 1614.0078)\" class=\"st32 st33 st35\">34</text>\n<text transform=\"matrix(1 0 0 1 1518.8599 972.9044)\" class=\"st32 st33 st35\">7</text>\n</svg>\n    </div>\n\n\n    <div class=\"map\" [ngClass]=\"{ 'active': !mainMap }\">\n\n\n      <svg version=\"1.1\"   xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 1700 1700\" style=\"width: 200%;    margin-left: -50%;    margin-top: -50%;\" xml:space=\"preserve\">\n\n      <g *ngFor=\"let dataItem of data let i = index\"  (click)=\"onSelect(dataItem); select($event);\">\n        <path  *ngIf=\"i<6\" class=\"map_path\" [ngClass]='dataItem.id' [attr.d]=\"dataItem.d\"/>\n      </g>\n\n\n<text transform=\"matrix(1 0 0 1 663.214 845.0001)\" class=\"st32 st33 st34\">4</text>\n<text transform=\"matrix(1 0 0 1 871.214 822.0001)\" class=\"st32 st33 st34\">5</text>\n<text transform=\"matrix(1 0 0 1 1017.214 906.0001)\" class=\"st32 st33 st34\">3</text>\n<text transform=\"matrix(1 0 0 1 840.214 949.5201)\" class=\"st32 st33 st34\">2</text>\n<text transform=\"matrix(1 0 0 1 792.1465 954.5201)\" class=\"st32 st33 st34\">6</text>\n<text transform=\"matrix(1 0 0 1 762.1465 980.5201)\" class=\"st32 st33 st34\">1</text>\n</svg>\n\n\n    </div>\n\n\n\n\n\n  </div>\n\n\n</div>\n\n<div class=\"modal krai\" [ngClass]=\"{ 'active': popup}\">\n  <a href=\"#\" class=\"close\" (click)=\"showPopup()\">закрыть</a>\n\n  <div class=\"more\">\n    <div class=\"more-title\">\n      <div class=\"more-title-name\">\n        Выборы депутатов Законодательного\n        Собрания Краснодарского края\n        шестого созыва 10.09.17\n      </div>\n\n        <h3><span>Избирательная комиссия Краснодарского края</span></h3>\n\n\n        <span>В выборах приняли участие:</span> 42,06 %\n\n    </div>\n    <h2>Результаты</h2>\n\n    <ul>\n      <li>\n        Единая Россия» – 70,77%\n      </li>\n      <li>\n        КПРФ – 11,53%\n      </li>\n      <li>\n        ЛДПР  – 11,15%\n      </li>\n      <li>\n        Справедливая Россия – 3,46%\n      </li>\n      <li>\n        Коммунисты России – 1,54%\n      </li>\n    </ul>\n\n    <div class=\"krai-item\">\n      <div class=\"krai-item-img\">\n        <img src=\"/assets/img/beketov_vladimir_andreevich.JPG\">\n      </div>\n      <div class=\"krai-item-name\">\n        Бекетов Владимир<br>\n        Андреевич\n      </div>\n    </div>\n\n    <div class=\"krai-item\">\n      <div class=\"krai-item-img\">\n        <img src=\"/assets/img/burlachko_yurij_aleksandrovich.jpg\">\n      </div>\n      <div class=\"krai-item-name\">\n        Бурлачко Юрий<br>\n        Александрович\n      </div>\n    </div>\n\n    <div class=\"krai-item\">\n      <div class=\"krai-item-img\">\n        <img src=\"/assets/img/porhanov_vladimir_alekseevich.jpg\">\n      </div>\n      <div class=\"krai-item-name\">\n        Порханов Владимир<br>\n        Алексеевич\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n<detail [dataItem]=\"selectedArea\"  [showDetail]=\"showDetail\" (onClosed)=\"onClosed($event)\"></detail>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mapData_sevice__ = __webpack_require__("../../../../../src/app/mapData.sevice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(mapDataService) {
        this.mapDataService = mapDataService;
        this.title = 'Итоги выборов депутатов Законодательного Собрания Краснодарского края 2017';
        this.showDetail = true;
        this.mainMap = true;
        this.popup = false;
    }
    AppComponent.prototype.getData = function () {
        var _this = this;
        this.mapDataService.getMapData().then(function (data) { return _this.data = data; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    AppComponent.prototype.onSelect = function (dataItem) {
        this.selectedArea = dataItem;
        this.showDetail = true;
    };
    AppComponent.prototype.onClosed = function (isShow) {
        this.showDetail = isShow;
        this.popup = false;
    };
    AppComponent.prototype.changeMap = function (triger) {
        this.mainMap = triger;
        this.popup = false;
    };
    AppComponent.prototype.showPopup = function (trigger) {
        this.popup = trigger;
    };
    AppComponent.prototype.select = function ($event) {
        var el = document.getElementsByTagName('path');
        for (var i = 0; i < el.length; i++) {
            el[i].classList.remove('active');
        }
        $event.target.classList.add('active');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__mapData_sevice__["a" /* MapDataService */]]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[d]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mapData_sevice__["a" /* MapDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mapData_sevice__["a" /* MapDataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.detail.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.detail.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"dataItem\" class=\"modal\" [ngClass]=\"{ 'active': showDetail }\">\r\n\r\n    <a href=\"#\" class=\"close\" (click)=\"onClose()\">закрыть</a>\r\n    <div class=\"more\">\r\n        <div class=\"more-title\">\r\n            <div class=\"more-title-name\">\r\n                {{dataItem.name}}\r\n            </div>\r\n            <div class=\"more-title-info\">\r\n                <span>Местные отделения: </span>{{dataItem.info}}\r\n            </div>\r\n            <div class=\"more-title-voters-count\">\r\n                <span>Явка:</span> {{dataItem.voterCount}} %\r\n            </div>\r\n        </div>\r\n        <h2>Результаты</h2>\r\n        <div class=\"more-candidate\">\r\n            <div *ngFor=\"let candidate of dataItem.candidates\" class=\"more-candidate-item\">\r\n                <h3>{{candidate.area}}</h3>\r\n                <div  *ngIf=\"candidate.photo!='/assets/img/nophoto.png'\" class=\"more-candidate-item-img\" [style.background-image]=\"'url(' + candidate.photo + ')'\">\r\n                    <!--<img [src]=\"candidate.photo\" >-->\r\n                </div>\r\n                <div class=\"more-candidate-item-name\">\r\n                    <ul>\r\n                        <li *ngFor=\"let candidateItem of candidate.name\" ><span [ngClass]=\"{ 'bold': candidateItem.strong }\">{{candidateItem.text}} {{candidateItem.percent}}%</span> </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <h2 *ngIf=\"dataItem.secretaries\">Лучшие секретари первичных отделений:</h2>\r\n        <div class=\"more-candidate\" *ngIf=\"dataItem.secretaries\">\r\n            <div *ngFor=\"let secretar of dataItem.secretaries\" class=\"more-candidate-item\">\r\n                <div *ngIf=\"secretar.photo!='/assets/img/nophoto.png'\"  class=\"more-candidate-item-img\" [style.background-image]=\"'url(' + secretar.photo + ')'\">\r\n                    <!--<img [src]=\"secretar.photo\">-->\r\n                </div>\r\n                <div class=\"more-candidate-item-name\">\r\n                    <span class=\"sec-fio\">{{secretar.fio}}</span>\r\n                    <h3>Результаты</h3>\r\n                    <ul>\r\n                        <li *ngFor=\"let Item of secretar.name\" ><span>{{Item.text}} {{Item.percent}}%</span> </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_component__ = __webpack_require__("../../../../../src/app/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_2__detail_component__["a" /* DetailComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mapData__ = __webpack_require__("../../../../../src/app/mapData.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailComponent = (function () {
    function DetailComponent() {
        this.onClosed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    DetailComponent.prototype.onClose = function () {
        this.onClosed.emit(false);
    };
    return DetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mapData__["a" /* MapData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mapData__["a" /* MapData */]) === "function" && _a || Object)
], DetailComponent.prototype, "dataItem", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], DetailComponent.prototype, "showDetail", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], DetailComponent.prototype, "onClosed", void 0);
DetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'detail',
        template: __webpack_require__("../../../../../src/app/app.detail.html"),
        styles: [__webpack_require__("../../../../../src/app/app.detail.css")]
    })
], DetailComponent);

var _a;
//# sourceMappingURL=detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/mapData.sevice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_mapData__ = __webpack_require__("../../../../../src/app/mock-mapData.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MapDataService = (function () {
    function MapDataService() {
    }
    MapDataService.prototype.getMapData = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_mapData__["a" /* MAPDATA */]);
    };
    return MapDataService;
}());
MapDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], MapDataService);

//# sourceMappingURL=mapData.sevice.js.map

/***/ }),

/***/ "../../../../../src/app/mapData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapData; });
var MapData = (function () {
    function MapData() {
    }
    return MapData;
}());

//# sourceMappingURL=mapData.js.map

/***/ }),

/***/ "../../../../../src/app/mock-mapData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MAPDATA; });
var MAPDATA = [
    {
        id: "st0",
        name: "Карасунский одномандатный избирательный округ №3",
        info: "Часть Краснодарского",
        voterCount: 35.12,
        d: "M1169.7,833.4c12.3-4.2,17.9-15.5,27-24.1c-7.5-1.7-14.2-1.4-20.8-1.6c-5.4-0.2-8.3-2.1-8.7-7.5c-0.3-4-2.6-4.9-6.4-4.9c-14.2,0.1-28.3-0.1-42.5-0.2c-9.5,0-9.7,0-9.5,9.6c0,3.4-0.8,4.6-4.4,4.5c-14.7-0.2-29.3,0-44-0.2c-3.6,0-4.5,1-4.4,4.5c0.2,8.3,0,16.7,0.1,25c0.1,2.8-0.8,3.6-3.6,3.7c-18.6,0.4-37.3,1-55.9,1.7c-3.4,0.1-4.7-0.5-4.5-4.2c0.3-8.5,0.1-17,0.1-25.5c0-9.4,0-9.4-8.9-10.1c-4.2,0.9-6.5,4.5-9.4,7c-22.6,20.3-45,40.8-67.5,61.2c-3.3,3-6.7,5.9-10.1,8.9c-8.3,9.3-18.1,17-27,25.7c-0.7,0.7-1.6,1.2-2.3,1.9c-5,4.6-5.2,4.8-0.6,9.8c7.3,8.1,9.4,17.5,8.7,28c-0.2,3.4-2,3.8-4.2,4.2c-3.1,0.6-6.2,0.9-9.3,1.4c-2.3,0.4-3.9,1.2-2,3.9c0.2,0.3,0.3,0.6,0.5,0.9c3.8,8.4,3.8,8.5,12.6,6.3c3.3-0.8,6.5,0.9,8.3,2.2c2.8,2.2,4.8,1.4,7.3,0.7c1.1-0.3,2.2-0.7,3.3-1c2.6-0.7,5.2-2,7.7-1.8c4.1,0.3,0.6,4.6,2.8,6.4c1.1,0.9,1.5,2.6,2.4,3.7c5.2,6.3,9,13.1,7.9,21.7c0.9-0.8,1.8-1.5,2.5-2.3c4-4.4,8.4-6.9,14.2-3.4c2.2,1.3,4.6,0.8,6.8,0.3c4.6-1.1,8.9-3.1,14-3c3,0.1,5.6-2.5,6.7-5.9c0.9-2.7,1.8-5.4,2.9-7.9c1.3-2.9,3.1-5,6.9-3.3c2.5,1.2,4.9,0.2,7.5-1c4.9-2.2,9.8-2.1,15.4-0.8c5.7,1.3,11.2,4,16.6,4.5c10.1,0.8,19.8-2.6,25.9-11.8c3.1-4.7,7.4-3.9,10.2-1.5c3.9,3.3,8.1,4.5,12.6,6c9,3,17.6-2,18.5-11.3c0.4-4.3,3.1-7.4,6.7-9.4c3.4-1.9,4.8,1.9,7,3.3c1.2,0.8,2.2,2,3.4,3c4.1,3.7,7.1,3.8,11.1-0.3c3.5-3.7,7.5-6.6,12-8.7c4.7-2.2,9.2-4.4,13-8.1c2.2-2.1,5.3-3.2,8.7-3c12,1,23.9-0.2,35.7-2.4c12.7-2.4,19.8-9.3,22.1-21.9c1.8-9.9,1.2-18.9-4.3-28.1c-7.6-12.6-13.7-26.2-20.7-39.2C1166,835.9,1166.4,834.5,1169.7,833.4z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Алешкевич Юлия Сергеевна", percent: "78,96", strong: "true" },
                    { text: "Бесленей Ахмед Шамилевич", percent: "2,88" },
                    { text: "Десятников Денис Станиславович", percent: "8,85" },
                    { text: "Малов Владимир Сергеевич", percent: "6,04" },
                    { text: "Морозов Игорь Александрович", percent: "2,02" }
                ],
                photo: "/assets/img/candidates/3/Aleshkevich_YUliya_Sergeevna.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: " Политическая партия СПРАВЕДЛИВАЯ РОССИЯ ", percent: "2,97" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России ", percent: "14,29" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Агеев Александр Александрович", percent: "75,03", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "5,93" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "0,93" },
                ],
                photo: "/assets/img/candidates/3/Ageev_Aleksandr_Aleksandrovich.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Голяшева Валентина Викентьевна",
                name: [
                    { text: "Одномандатный округ", percent: "86,18" },
                    { text: "Территориальная группа", percent: "81,08" },
                ],
                photo: "/assets/img/secretaries/3/golyasheva_valentina_vikentevna.jpg"
            },
            {
                fio: "Гуляев Игорь Олегович",
                name: [
                    { text: " Одномандатный округ", percent: "75,04" },
                    { text: "Территориальная группа", percent: "74,96" },
                ],
                photo: "/assets/img/secretaries/3/gulyaev_igor_olegovich.jpg"
            },
            {
                fio: "Петчанина Ольга Ивановна",
                name: [
                    { text: " Одномандатный округ", percent: "95,08" },
                    { text: "Территориальная группа", percent: "82,60" },
                ],
                photo: "/assets/img/secretaries/3/petchanina_olga_ivanovna.jpg"
            }
        ]
    },
    {
        id: "st1",
        name: "Калининский одномандатный избирательный округ №5",
        info: "Часть Краснодарского",
        voterCount: 21.39,
        d: "M997.2,769.2c-27.8-9.7-55.8-18.4-84.7-24.3c-5-1-6.1-3.7-4-8.3c3.9-8.4,7.9-16.9,11.9-25.2c1.1-2.4,0.9-3.6-1.4-5.3c-12.5-8.5-26.7-12.1-41.4-12.6c-19.3-0.7-38.6-0.1-57.9-0.3c-3.4,0-4.3,1.5-4.5,4.4c-0.4,7.3-0.7,14.6-1.3,21.9c-0.3,3.1,1,4.1,3.9,4.2c5.5,0.2,11,0.6,16.4,0.9c8.4,0.6,8.4,0.6,8.9,8.9c0.7,13.1,0.7,13.1,13.5,13.5c0.5,0,1,0.1,1.5,0c3.6-0.5,4.4,1.4,4.4,4.7c0,3.3-0.6,5-4.3,4.7c-3.1-0.2-6.3,0.1-9.5,0.2c-12.3,0.2-12.3,0.2-12.3,12.7c0,9.1,0,9.2-8.8,9.6c-3.3,0.1-5.1,1.1-4.4,4.7c0.2,1.4-0.3,2.4-1.9,2.1c-4.1-0.7-8.9,0.2-11.2-4.7c-1.2,8-2.7,16.1-3.5,24.1c-0.5,4.8-2.4,6.5-6.9,5.6c-4.2-0.8-5.4,1.4-5.6,5.2c-0.6,12.4-3.5,24.2-7.3,36c-1.4,4.1-3.1,5.9-7.4,4.3c-3.5-1.3-5.4,0.1-6.4,3.7c-1.2,4.3-3.6,8.3-4.6,12.6c-1.3,5.4-4.1,7.4-9.4,6.5c-3.2-0.5-5,0.1-5.1,4.3c-0.1,4.6,2.1,4.5,5.4,4.5c3.4,0,7.6-1.5,9.7,3c0.4-0.3,1-0.4,1.2-0.8c3.9-5.5,9.1-7.7,15.7-6.3c3.4,0.8,4.9-3.5,8.2-2.7c9-0.9,17.9-0.1,26.9-0.4c1.8-0.1,2.2,0.8,2.3,2.4c0.2,3.6,0.7,7.3,0.9,10.9c0.3,6.2,0.2,6.2-6,6.6c1.2,1.8,2.1,3.7,4.3,3.5c3.3-0.2,3.6,1.6,3.3,4c-0.2,2.3,0.9,2.9,2.9,2.7c4.7-0.5,6.9,2.2,6.3,6.3c-0.8,5.8,2.4,5.6,6.6,5.8c4.6,0.2,5.8-1.2,5.7-5.8c-0.3-11.1-0.1-22.3-0.1-33.4c0-2.3,0.3-3.7,3.2-3.6c14.8,0.1,29.6,0.1,44.4,0.1c0.6,0,1.2,0.4,1.8,0.7c3.4-3,6.7-5.9,10.1-8.9c22.5-20.4,44.9-40.9,67.5-61.2c2.9-2.6,5.2-6.2,9.4-7c5.5-9.3,11-18.6,16.6-27.9C1002.8,771.1,1002.8,771.1,997.2,769.2z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Сигидин Андрей Сергеевич", percent: "57,66", strong: "true" },
                    { text: "Гусельникова Татьяна Геннадьевна", percent: "11,49" },
                    { text: "Жерлицына Наталия Владимировна", percent: "7,61" },
                    { text: "Мишин Константин Александрович", percent: "5,46" },
                    { text: "Сафронов Александр Михайлович", percent: "15,97" }
                ],
                photo: "/assets/img/candidates/5/Sigidin_Andrej_Sergeevich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: " Политическая партия СПРАВЕДЛИВАЯ РОССИЯ ", percent: "5,61" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России ", percent: "12,14" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» ", percent: "61,14" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "17,32" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "" },
                ],
                photo: "/assets/img/nophoto.png"
            }
        ],
        secretaries: [
            {
                fio: "Долгушина Наталья Викторовна",
                name: [
                    { text: "Одномандатный округ", percent: "70,96" },
                    { text: "Территориальная группа", percent: "75,29" },
                ],
                photo: "/assets/img/secretaries/5/dolgushina_natalya_viktorovna.jpg"
            },
            {
                fio: "Альшева Наталья Ивановна",
                name: [
                    { text: " Одномандатный округ", percent: "68,85" },
                    { text: "Территориальная группа", percent: "67,55" },
                ],
                photo: "/assets/img/secretaries/5/alsheva_natalya_ivanovna.jpg"
            },
            {
                fio: "Федянин Андрей Александрович",
                name: [
                    { text: " Одномандатный округ", percent: "61,43" },
                    { text: "Территориальная группа", percent: "60,99" },
                ],
                photo: "/assets/img/secretaries/5/fedyanin_andrej_aleksandrovich.jpg"
            }
        ]
    },
    {
        id: "st2",
        name: "Екатеринодарский одномандатный избирательный округ №2",
        info: "Часть Краснодарского",
        voterCount: 27.54,
        d: "M904.3,973.5c-0.9-1.1-1.3-2.8-2.4-3.7c-2.1-1.8,1.3-6.1-2.8-6.4c-2.5-0.2-5.1,1.1-7.7,1.8c-1.1,0.3-2.2,0.7-3.3,1c-2.5,0.7-4.5,1.5-7.3-0.7c-1.8-1.4-4.9-3-8.3-2.2c-8.7,2.2-8.8,2-12.6-6.3c-0.1-0.3-0.3-0.6-0.5-0.9c-2-2.6-0.3-3.5,2-3.9c3.1-0.5,6.2-0.8,9.3-1.4c2.3-0.4,4-0.8,4.2-4.2c0.6-10.6-1.5-20-8.7-28c-4.6-5.1-4.4-5.2,0.6-9.8c0.7-0.7,1.6-1.2,2.3-1.9c8.9-8.7,18.7-16.4,27-25.7c-0.6-0.2-1.2-0.7-1.8-0.7c-14.8,0-29.6,0-44.4-0.1c-2.9,0-3.2,1.3-3.2,3.6c0.1,11.1-0.2,22.3,0.1,33.4c0.1,4.5-1,6-5.7,5.8c-4.2-0.2-7.3,0-6.6-5.8c0.5-4.1-1.7-6.8-6.3-6.3c-2.1,0.2-3.2-0.4-2.9-2.7c0.2-2.4,0-4.3-3.3-4c-2.2,0.2-3.1-1.7-4.3-3.5c6.2-0.4,6.3-0.4,6-6.6c-0.2-3.6-0.7-7.3-0.9-10.9c-0.1-1.6-0.5-2.4-2.3-2.4c-9,0.3-17.9-0.4-26.9,0.4c-0.6,4-1.2,7.9-1.8,11.9c1.8-0.1,3.7-0.1,5.5-0.2c6.9-0.2,10.7,3.3,11.2,10.1c0.2,2.5,0.6,5,0.9,7.4c0.1,1.2,0.5,2,1.9,2.6c4.6,2.1,5,6.4,0.7,9.3c-2.4,1.6-1.7,3.1-0.3,4.3c3.9,3.5,6.7,8.7,13,8.7c1.2,0,2.4,0.7,4.6,1.3c-4.9,3-9.1,5.5-13.3,8c-1.9,1.1-3.5,2.3-2,4.6c1.4,2.2,0.5,6.2,5.2,6c14-0.5,26.5,5,38.9,10.6c2.1,0.9,4.2,1.8,6.3,2.7c0,1.6-1.3,1.2-2.1,1.6c-8,3.4-16.4,16.3-16.3,25.1c0.1,4.9,3.3,7.4,7.6,8.7c2.6,0.7,4.2,1.9,3.5,4.8c2.4,1.9,3.2,4.9,4.8,7.4c3.5,5.4,8.6,5.9,16.5,1.5c5.3-2.9,6.2-5.5,3.2-11.3c-1.3-2.6-0.3-3.6,1.4-4.9c2.1-1.6,4.2-1.2,6.6-0.4c7.9,2.8,17.3,0.1,22.5-6.1C913.3,986.5,909.5,979.8,904.3,973.5z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Прокопенко Сергей Васильевич", percent: "65,72", strong: "true" },
                    { text: "Волынский Владимир Павлович", percent: "8,59" },
                    { text: "Крутоголов Антон Викторович ", percent: "5,15" },
                    { text: "Наш Константин Юрьевич", percent: "12,20" },
                    { text: "Шурыгин Вячеслав Геннадьевич", percent: "6,24" }
                ],
                photo: "/assets/img/candidates/2/Prokopenko_Sergej_Vasilevich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: " Политическая партия СПРАВЕДЛИВАЯ РОССИЯ ", percent: "4,74" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России ", percent: "8,61" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ»  Бойченко Олег Игоревич", percent: "71,43", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "12,25" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "1,40" },
                ],
                photo: "/assets/img/candidates/2/Bojchenko_Oleg_Igorevich.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Скворцова Валентина Владимировна",
                name: [
                    { text: "Одномандатный округ", percent: "79,5" },
                    { text: "Территориальная группа", percent: "91,27" },
                ],
                photo: "/assets/img/secretaries/2/skvorcova_valentina_vladimirovna.JPG"
            },
            {
                fio: "Победа Андрей Александрович",
                name: [
                    { text: " Одномандатный округ", percent: "57,8" },
                    { text: "Территориальная группа", percent: "70,61" },
                ],
                photo: "/assets/img/secretaries/2/pobeda_andrej_aleksandrovich.jpg"
            },
            {
                fio: "Нескородова Лариса Евгеньевна",
                name: [
                    { text: " Одномандатный округ", percent: "67,52" },
                    { text: "Территориальная группа", percent: "70,11" },
                ],
                photo: "/assets/img/secretaries/2/neskorodova_larisa_evgenevna.jpg"
            }
        ]
    },
    {
        id: "st3",
        name: "Западный одномандатный избирательный округ №1",
        info: "Часть Краснодарского",
        voterCount: 23.99,
        d: "M777,932.1c1.9-0.4,4.4,2.5,5.5-1.5c3.4-12.4,8.5-24.3,9.7-37.3c0.6-4,1.2-7.9,1.8-11.9c-3.3-0.9-4.7,3.5-8.2,2.7c-6.5-1.5-11.8,0.8-15.7,6.3c-0.3,0.4-0.8,0.5-1.2,0.8c-1.5,1.9-0.9,4.2-0.7,6.3c0.4,4.4-0.8,8.5-2,12.6c-0.6,2.1-1.5,2.6-3.5,2.1c-3.7-0.9-7.5-1.5-11.2-2.2c-11.3-2.2-11.6-2.3-13.1,9.1c-0.7,5.6-2.6,8.6-8.5,9.7c-8.2,1.5-8.1,2-11.8-5.1c-3.3,5.5-6.8,11-10,16.6c-1.3,2.3-1.9,4.9-1.9,7.6c0,4.5,1.6,6.2,5.7,4.7c7.7-2.7,15.8-6,21.1-11.8c7.1-7.6,15.1-8.3,23.9-7.3c7.2,0.8,10.5,7,8.3,13.9c-0.3,0.9-0.2,1.5-1.6,1.8c-6.4,1.6-8.3,6.5-8.5,12.4c-0.2,6.8,3.4,12.9,3,20c-0.4,6.9,5.7,10.9,10.6,14.8c4.7,3.7,9.2,1.6,10.3-4.4c0.3-1.5,0.1-3,0.2-4.5c0.4-6.3,0.7-12.7,6.8-16.7c-1.8-3-4-5.5-7.9-6c-3.4-0.5-4-2.7-3.1-5.8c1.2-4.3,2.1-8.7,3.1-13c0.2-1,0.8-1.9-0.5-2.5c-0.9-0.4-1.7-1.1-2.6,0.1c-1.7,2.5-3.1,0.8-4.2-0.4c-3.4-3.7-0.8-7.6,0.5-11C772.3,929.4,775,932.5,777,932.1z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Тутаришев Батырбий Зульевич", percent: "69,62", strong: "true" },
                    { text: "Доронин Дмитрий Юрьевич", percent: "10,63" },
                    { text: "Ковалёва Надежда Григорьевна", percent: "7,65" },
                    { text: "Лапанина Марина Сергеевна", percent: "5,82" },
                    { text: "Огурцова Ольга Степановна", percent: "4,24" }
                ],
                photo: "/assets/img/candidates/1/Tutarishev_Batyrbij_Zulevich.JPG",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ ", percent: "5,16" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России ", percent: "11,15" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Левитский Борис Евгеньевич ", percent: "72,69", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "10,94" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "1,69" },
                ],
                photo: "/assets/img/candidates/1/Levitskij_Boris_Evgenevich.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Есаян Михаил Оганесович",
                name: [
                    { text: "Одномандатный округ", percent: "81,31" },
                    { text: "Территориальная группа", percent: "91,40" },
                ],
                photo: "/assets/img/secretaries/1/esayan_mihail_oganesovich.jpg"
            },
            {
                fio: "Булыженко Виктор Николаевич",
                name: [
                    { text: " Одномандатный округ", percent: "73,32" },
                    { text: "Территориальная группа", percent: "73,32" },
                ],
                photo: "/assets/img/secretaries/1/bulyzhenko_viktor_nikolaevich.jpg"
            },
            {
                fio: "Нехай Аслан Юсуфович",
                name: [
                    { text: " Одномандатный округ", percent: "80,91" },
                    { text: "Территориальная группа", percent: "72,67" },
                ],
                photo: "/assets/img/secretaries/1/nekhaj_aslan_yusufovich.jpg"
            }
        ]
    },
    {
        id: "st4",
        name: "Прикубанский одномандатный избирательный округ №4",
        info: "Часть Краснодарского",
        voterCount: 29.42,
        d: "M811.5,743.5c-3.9-1.1-4.1-3.8-4.1-6.9c0-1.4-0.6-2.5-1.7-3.4c-3.4-2.8-4.1-7.2-7.2-10.6c6.2-0.8,6.2-0.8,6.3-6c0-1.5,0-3,0-4.5c0-6.9-2.9-9.5-9.9-9.4c-2.4,0.1-3.3,0.8-3.9,3.3c-1.5,5.7-2.4,11.4-1.9,17.2c0.3,4.6-1.9,4.5-5.1,3.3c-0.8-0.3-1.5-0.8-2.2-1.2c-2.9-1.5-5.1-1.3-4.4,2.7c0.7,3.8-2,8.9,3.9,10.9c0.5,0.2,0.6,1.8,0.7,2.8c0.3,2,0.4,3.9,0.7,6.2c-0.9,0-1.9,0.1-2.9,0c-29.9-1.9-59.9-1.8-89.9-2c-5.6,0-10.9-0.3-15.8-3.6c-1.1-0.8-2.9-2-3.9,0c-2.8,5.4-5.6,2.3-8.5,0.3c-3-2-6-4.2-9.2-6c-2.1-1.2-2.2-2.4-0.8-4.3c1-1.3,1.6-3,2.6-4.2c2.8-3.4,1.8-5.9-0.9-9.1c-4.6-5.6-10.6-9.5-16-14.1c-8.3-7.2-16-15.1-24.8-21.8c-2.6-2-4.3-2.1-6.8,0.1c-11.8,10.8-23.9,21.3-35.6,32.2c-10.6,9.8-9.1,7.5-0.9,17.2c0.3,0.4,0.6,0.8,1,1.1c3.5,2.7,4,5.7,1.3,9.3c-3.1,4-1.8,7,1.8,10.2c10.2,9.1,20,18.6,30.1,27.8c1.9,1.7,2.4,2.9,0.7,5.2c-16.6,22.7-33,45.6-49.4,68.4c-2.2,3.1-3.5,2.7-5.9,0.3c-5.2-5.2-10.5-10.3-16-15c-3.1-2.7-7.5-3.9-10.8-1.3c-9.5,7.3-9.4,8-4.1,18.8c0.2,0.4,0.4,0.9,0.7,1.3c3,3.9,2.5,7.4-0.9,10.9c-2.8,2.8-4,5.9,0.9,8c-1,1.4-1.8,2.7-2.7,3.9c-4,5.8-3,11.1,2.8,15c2.6,1.7,4.2,4,4.5,7.3c0.5,5.1,1.1,10.3,2.6,15.2c2.9,9.9,9.4,11.8,17.5,5.4c4.3-3.4,6.2-8,8.2-12.7c3.3-7.8,7.8-10.4,16-9.8c3.6,0.3,6.3,2.2,8,5.2c1.7,3-0.4,5.5-2,7.7c-2.8,3.7-6,7.1-8.8,10.9c-4.9,6.5-3.5,11.9,3.6,15.4c1,0.5,2.1,1,3.2,1.4c3.4,1.2,5.8,3.6,6.5,7c1.5,7.5,5.9,13.5,9.2,20.1c4.4,8.8,11.7,13.9,19.6,18.5c6.5,3.8,12.5,2.1,15.2-3.7c1.3-3,0.7-6.2,1-9.4c0.2-2.3-1.1-5.2,1.9-6.7c3.1-1.5,4.8,1.2,6.9,2.7c0.7,0.5,1.2,1.1,1.8,1.7c4.9,5.3,5.9,5.5,12.9,2.7c7.5-3.1,8.7-2.8,13.6,4c2.1,2.9,4.7,4.1,8.2,2.9c3.6-1.3,6.8-3.5,7.1-7.5c0.4-5.5-0.1-11-5.1-14.9c-1.7-1.3-3-3.1-4.3-4.8c-5.9-7.4-3.7-15.3,5.2-18.2c3-1,6-2,9.1-2.8c5.3-1.2,9.4-3.9,11.7-9c2.5-5.6,6.3-10.2,10.9-14c5.3-4.4,12-2,13.4,4.8c0.5,2.6,1.1,5.2,1.7,7.8c3.7,7.1,3.6,6.7,11.8,5.1c5.9-1.1,7.8-4.1,8.5-9.7c1.5-11.4,1.8-11.4,13.1-9.1c3.7,0.7,7.5,1.4,11.2,2.2c2,0.5,2.9,0,3.5-2.1c1.2-4.2,2.4-8.2,2-12.6c-0.2-2.1-0.8-4.3,0.7-6.3c-2.1-4.5-6.2-3-9.7-3c-3.3,0-5.5,0.1-5.4-4.5c0.1-4.2,1.9-4.8,5.1-4.3c5.3,0.9,8.2-1.2,9.4-6.5c1-4.3,3.4-8.3,4.6-12.6c1-3.6,2.9-5,6.4-3.7c4.3,1.6,6-0.2,7.4-4.3c3.8-11.7,6.7-23.6,7.3-36c0.2-3.8,1.4-6,5.6-5.2c4.5,0.9,6.5-0.8,6.9-5.6c0.8-8.1,2.3-16.1,3.5-24.1c0.8-10.9,1.7-21.9,2.5-32.9C812.7,746.6,813.7,744.1,811.5,743.5z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Трубилин Александр Иванович", percent: "61,09", strong: "true" },
                    { text: "Темников Андрей Владимирович", percent: "6,53" },
                    { text: "Усатова Мария Сергеевна", percent: "12,12" },
                    { text: "Уфимцев Геннадий Станиславович", percent: "6,38" },
                    { text: "Шевцов Андрей Витальевич", percent: "11,61" }
                ],
                photo: "/assets/img/candidates/4/Trubilin_Aleksandr_Ivanovich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: " Политическая партия СПРАВЕДЛИВАЯ РОССИЯ ", percent: "5,07" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России ", percent: "14,19" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» ", percent: "63,41" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "13,03" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "2,57" },
                ],
                photo: "/assets/img/nophoto.png"
            }
        ],
        secretaries: [
            {
                fio: "Акулова Анна Александровна",
                name: [
                    { text: "Одномандатный округ", percent: "80,26" },
                    { text: "Территориальная группа", percent: "80,94" },
                ],
                photo: "/assets/img/secretaries/4/akulova_anna_aleksandrovna.JPG"
            },
            {
                fio: "Кожевников Анатолий Александрович",
                name: [
                    { text: " Одномандатный округ", percent: "57,84" },
                    { text: "Территориальная группа", percent: "91,40" },
                ],
                photo: "/assets/img/secretaries/4/kozhevnikov_anatolij_aleksandrovich.jpg"
            },
            {
                fio: "Грикина Лидия Михайловна",
                name: [
                    { text: " Одномандатный округ", percent: "72,15" },
                    { text: "Территориальная группа", percent: "70,84" },
                ],
                photo: "/assets/img/secretaries/4/grikina_lidiya_mihajlovna.jpg"
            }
        ]
    },
    {
        id: "st5",
        name: "Центральный одномандатный избирательный округ №6",
        info: "Часть Краснодарского",
        voterCount: 22.01,
        d: "M858.2,966c-12.4-5.7-24.8-11.1-38.9-10.6c-4.7,0.2-3.7-3.8-5.2-6c-1.5-2.3,0.1-3.5,2-4.6c4.2-2.4,8.4-5,13.3-8c-2.2-0.6-3.4-1.3-4.6-1.3c-6.3,0-9.1-5.2-13-8.7c-1.4-1.2-2.1-2.7,0.3-4.3c4.3-2.9,3.9-7.3-0.7-9.3c-1.3-0.6-1.7-1.4-1.9-2.6c-0.3-2.5-0.7-4.9-0.9-7.4c-0.5-6.9-4.3-10.3-11.2-10.1c-1.8,0.1-3.7,0.1-5.5,0.2c-1.2,13-6.2,24.9-9.7,37.3c-1.1,4-3.6,1.1-5.5,1.5c-2,0.4-4.7-2.7-5.7,0.2c-1.2,3.4-3.9,7.3-0.5,11c1.2,1.3,2.6,2.9,4.2,0.4c0.8-1.2,1.7-0.5,2.6-0.1c1.3,0.6,0.8,1.5,0.5,2.5c-1.1,4.3-1.9,8.7-3.1,13c-0.9,3.1-0.3,5.4,3.1,5.8c3.9,0.5,6.1,3,7.9,6c3.3-0.4,6,0.4,8.5,2.8c4.6,4.3,9.9,7.3,16.7,6.2c4.7-0.8,7.5,1.7,9.5,5.5c2.1,3.8,2,8.7,3.9,12.1c4.3,8,4.4,15.6,2.2,24c-1.5,6,2.4,11.9,7.8,12.6c5.2,0.6,8.3-2.6,8-9.8c-0.2-5.6,2.3-8.9,6.3-12.1c2.5-2,5.5-2.1,8.2-3.4c0.7-3-0.9-4.1-3.5-4.8c-4.3-1.2-7.5-3.8-7.6-8.7c-0.2-8.8,8.3-21.7,16.3-25.1c0.8-0.3,2.2,0,2.1-1.6C862.4,967.8,860.3,967,858.2,966z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Бураков Дмитрий Геннадьевич", percent: "18,59" },
                    { text: "Жилищиков Иван Андреевич", percent: "16,74" },
                    { text: "Хмелевской Денис Леонидович", percent: "57,37" },
                    { text: "Цибулин Василий Вячеславович", percent: "4,24" }
                ],
                photo: "/assets/img/nophoto.png",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ ", percent: "6,83" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России ", percent: "11,30" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» ", percent: "57,28" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "21,71" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "1,12" },
                ],
                photo: "/assets/img/nophoto.png"
            }
        ],
        secretaries: [
            {
                fio: "Пузин Даниил Петрович",
                name: [
                    { text: "Территориальная группа", percent: "76,38" },
                ],
                photo: "/assets/img/secretaries/6/puzin_daniil_petrovich.jpg"
            },
            {
                fio: "Степанова Елена Михайловна",
                name: [
                    { text: "Территориальная группа", percent: "71,74" },
                ],
                photo: "/assets/img/secretaries/6/stepanova_elena_mihajlovna.jpg"
            },
            {
                fio: "Захарин Александр Борисович",
                name: [
                    { text: "Территориальная группа", percent: "70,89" },
                ],
                photo: "/assets/img/secretaries/6/zaharin_aleksandr_borisovich.jpg"
            }
        ]
    },
    //-----------------------------------------------------------------------------
    {
        id: "st0",
        name: "Солнечный одномандатный избирательный округ №26",
        info: "часть Темрюкского, часть Анапского",
        voterCount: 29.57,
        d: "M309.5,966.8c11.7-4.3,10.8-2.3,20.5-2.2c9.7,0.2,13.8,4.8,17.5,11.2c3.7,6.3,10.5,5.3,13,5.3s1.7-2.3,0.2-3.7c-1.5-1.3-0.2-2.3-0.7-5c-0.5-2.7-8.2-6.7-10.1-8.7s-0.3-4,3.9-2.3c4.2,1.7,4.5,3.7,7,4.7s2.3-2,2.3-3.1s1.5-2.5,2.7-2.5c1.2,0,4.8,0.7,6.2,0.8c1.3,0.2,3.2,2.3,3.7,1.5s2.5,0,5.5,0s-0.2-3.2-1.7-4.5s-1.2-1.7-2.2-3.7s-5.3,1-6.5,0c-1.2-1-2-4.2-2.8-5.5c-0.8-1.3-1.7,0.7-4.2,0c-2.5-0.7-3.2-2-5.3-4.5c-2.2-2.5-5-2.3-8.5-4.3s-4-4-4-6.7c0-2.7-2.3-6.2-4.8-10.2s-4-7.2-3.7-8.3c0.3-1.2,1.3-1.8,2.3-2c1-0.2,0-6-1.3-9.5c-1.3-3.5-0.2-4-0.8-7.2c-0.7-3.2-1.8-2.5-3.5-2.8c-1.7-0.3-5-1.8-6.7-3.2c-1.7-1.3-5.8,0.5-7.8,0s-2.5-0.7-2-3.7s2.2-4.5,4-6s2.7-2.8,3-5s-5.7-3.5-5.7-4.7c0-1.2,1.5-2.2,2.7-3c1.2-0.8,0.7-2.8,2.3-3.2c1.7-0.3,2.7,2.7,4.3,3.3c1.7,0.7,4.3,2.8,6,2.8c1.7,0,0.7-2.2-0.3-3.3s-0.2-3.3,1.3-5.3s3.8-6.2,4.7-9.7c0.8-3.5-1-8-2.3-11.7c-1.3-3.7-4.7-14.5-3.3-17.7c1.3-3.2,4.8-7.3,7.7-10.7c2.8-3.3,7-6.5,9.3-8.2c2.3-1.7,4.2-4.5,8.2-9.5s9.7-9,11-11.2c1.3-2.2,0.7-2.8-0.7-4.8c-1.3-2,1.8-4,2-5.3c0.2-1.3-3.5-2.5-7-4.3c-0.9-0.5-2.2-1.6-3.5-2.9c-0.1,0.2-0.3,0.4-0.4,0.6c-7.3,10.1-15.3,17.7-24.7,23c-9.3,5.3-12.7,8.7-16.8,9.7c-4.2,1-5-0.3-6.8,0.7s-2.5,5-4.2,4.3c-1.7-0.7-2.8-1.7-0.8-2s1.7-1.7-0.3-2.8c-2-1.2-5.7-1-7.3-1.5c-1.7-0.5-5.5,1.2-4.5,2.5c1,1.3,6.5,5.5,3.8,4.8c-2.7-0.7-3.3-0.9-5,0.1c-1.7,0.9-3.3,0.7-5.5,0c-2.2-0.7-0.7-0.7-4.2,0.6s-17,0.5-27.3,0c-10.3-0.5-11.2,0.6-20.8-1.7c-9.7-2.3-35.3-11.3-48-17.6c-12.7-6.4-29.5-17.4-37.2-24.2c-7.7-6.8-8.8-6.8-15-9c-6.2-2.2-10-3.7-12.3-5.3c-2.3-1.7-2.7-2.5-7-1.7c-4.3,0.8-3.8,2.3-8.7,2.8c-4.8,0.5-6.8-1.7-10.8,2.8s-7.2,10.8-14.7,21.8s-12.3,15-15.5,17.5c-3.2,2.5-8,4-8.3,4.7c-0.3,0.7,0,3.2-1.2,3.3c-1.2,0.2-1.7,2.3-3.8,3.2c-2.2,0.8-2,3.2-3.8,4.1s-3.8,1.3-5.2,3.3c-1.3,2-1.8,3.7-1.8,3.7s1-2.2,2.7-2c1.7,0.2,3.5,0.2,5.5-1.5c2-1.7,3-5.7,4-5c1,0.7,2.2,0.5,4-1.3c1.8-1.8,3.2-4.7,5-5c1.8-0.3,2.8,1.3,4.2-1c1.3-2.3,1.3-4.3,3-4.8c1.7-0.5,3,0.2,3.5-1.8s1-4.8,4.7-7.3s0.7-3.3,4.5-8.7c3.8-5.3,6.7-11.2,7.5-11c0.8,0.2,3.7,1.7,5,3.8c1.3,2.2,0,4.8,2.3,5.8c2.3,1,8.3-0.7,8.7,1.5s-1.2,2-1.2,2.8c0,0.8,0,2,5,1.8c5-0.3,8.7-1.1,10.2,0s-2.7,4.1-7.5,7.1s-8.7,5.7-10.8,4.5c-2.2-1.2-5-4-5.5-7s-1.7-4.6-1.7-4.6s0.8,1.7-0.7,2.6c-1.5,0.8-3.5-1.5-4-0.5s0.8,2,0.5,4.3c-0.3,2.3,0,2.5,1.3,3.5c1.3,1,2.5,0,2.2,4.2c-0.3,4.2-0.2,7.2,1.5,10c1.7,2.8,3.3,6.7,3.8,9.7s2.3,2.5,3,2.2c0.7-0.3,5-3.2,9.8-4.3c4.8-1.2,10.7-2.2,16-3.5c5.3-1.3,15.2-3.3,21.2-2.7s7.3,1.7,11.3,1.8c4,0.2,6.2,0,6.2,1.3c0,1.3-1,1.5-3.3,2.8c-2.3,1.3-1.7,2.3-0.5,4.8c1.2,2.4,3.2,5.4,0.3,8.7c-2.8,3.3-5.2,3.8-10.7,4.5s-11.2,1.3-13.7,2.2c-2.5,0.8-3.8,2-5.2,3.5c-1.3,1.5,0,1-0.8,3c-0.8,1.9-2.6,0.2-2.8,0c0.1,0.1,0,0.5-3.9,2c-4.5,1.7-4.8,2.3-12.8,2.3s-13.8,0.8-17,2.2c-3.2,1.3-5.2,2.7-5.7,1.5c-0.5-1.2-2-1.8-3-1.3s0.3,3-2.2,5.3c-2.5,2.3-3.8,3.5-5.7,3.8c-1.8,0.3-3,0.3-3.5,1.2c-0.5,0.8-0.8,1.2-2.2,0c-1.3-1.2-2.2-1.8-3.3-1.2c-1.2,0.7-1.3,2-3.3,0.7c-2-1.3-2.8-3.8-6.2-3.5c-3.3,0.3-2.3,0.7-5.7,2.2c-3.3,1.5-4.5,2-6.8,1.7c-2.3-0.3-4,0-6.2,0.9c-2.2,0.9-4.3,2.7-5.5,1.9c-1.2-0.8-3.3-1.2-3.3-1.2s-0.3,3-0.8,3.7c-0.5,0.7-3,3.2-1.7,3.8c1.3,0.7,5.3,4.5,5.5,7c0.2,2.5-0.2,6.5,2.2,10.8s2,8,4.8,9.2c2.8,1.2,11.7,4.3,16.5,6.3c4.8,2,8.5,2.2,10.8,4.5c2.3,2.3,3.2,3.5,4.3,4.3c1.2,0.8,3.2,1,4.3,0c1.2-1-0.3-2.2,4.8-2.2c5.2,0,12.2-1.2,16.7-1.2s19.5,2.3,26.5,5.3c7,3,20.3,9.5,34.7,16.2s26,9.8,35.8,15.2c9.8,5.3,32.7,17.5,46.2,30.5c7.4,7.2,13.7,14.2,17.8,20.3c4.5-2.9,11.1-7,16.7-10.3C290.4,974.8,297.9,971.2,309.5,966.8z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Конограева Ирина Дмитриевна", percent: "71,02", strong: "true" },
                    { text: "Грудинин Сергей Васильевич", percent: "10,53" },
                    { text: "Перков Сергей Иванович", percent: "9,11" },
                    { text: "Сытник Сергей Евгеньевич", percent: "5,66" }
                ],
                photo: "/assets/img/candidates/26/Konograeva_Irina_Dmitrievna.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: " Политическая партия СПРАВЕДЛИВАЯ РОССИЯ ", percent: "3,78" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России ", percent: "17,70" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» ", percent: "63,06" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "10,15" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "2,29" },
                ],
                photo: "/assets/img/nophoto.png"
            }
        ],
        secretaries: [
            {
                fio: "Пряников Александр Владимирович",
                name: [
                    { text: " Одномандатный округ", percent: "87,97" },
                    { text: "Территориальная группа", percent: "56,77" },
                ],
                photo: "/assets/img/secretaries/26/pryanikov_aleksandr_vladimirovich.jpg"
            },
            {
                fio: "Устинова Ирина Васильевна",
                name: [
                    { text: " Одномандатный округ", percent: "86,77" },
                    { text: "Территориальная группа", percent: "53,45" },
                ],
                photo: "/assets/img/secretaries/26/ustinova_irina_vasilevna.jpg"
            }
        ]
    },
    {
        id: "st1",
        name: "Южный одномандатный избирательный округ №27",
        info: "часть Анапского, часть Новороссийского",
        voterCount: 22.85,
        d: "M380,1073.8c-1.5-5.5,11.7-18.7,13.8-23.2c2.2-4.5,9-5.8,13.5-8s4.7-1.8,8.8-4.2c4.2-2.3,3.5-3,3.7-5c0.2-2,3.5-2.2,4.7-3.5c1.2-1.3,1.7-1.3,2.2-4.2c0.5-2.8-2.7-2.8-4.3-4.6c-1.7-1.8-0.2-3.7-5-4.9c-4.8-1.2-5.3,2.5-8.3,3.7c-3,1.2-3.2-1-5.3,0.3s-3.8,1.3-6-1s-0.7-2.5,0.8-5.3c1.5-2.8,5-2,4-3.7s-3.5-2-5.8-4.2c-2.3-2.2,0.5-2.8-2.2-5.5c-2.7-2.7-6.7-0.3-9.5-2c-2.8-1.7-2.3-5.5-3.3-7.9c-1-2.4-4-2.6-5.6-4.5c-1.6-1.8-1.4-5.2-2.2-7c-0.8-1.8,0-2.3,0.8-5.2c0.8-2.8,3-6,3.8-9.2c0.2-0.8,0-1.7-0.5-2.4c-1.2-0.2-2.1-0.2-2.4,0.2c-0.5,0.8-2.3-1.3-3.7-1.5c-1.3-0.2-5-0.8-6.2-0.8c-1.2,0-2.7,1.4-2.7,2.5s0.2,4.1-2.3,3.1s-2.8-3-7-4.7c-4.2-1.7-5.8,0.3-3.9,2.3s9.6,6,10.1,8.7c0.5,2.7-0.8,3.7,0.7,5c1.5,1.3,2.3,3.7-0.2,3.7s-9.3,1-13-5.3c-3.7-6.3-7.8-11-17.5-11.2c-9.7-0.2-8.8-2.2-20.5,2.2c-11.7,4.3-19.2,8-28.8,13.7c-5.6,3.3-12.2,7.4-16.7,10.3c3.4,5,5.3,9.3,5.2,12.5c-0.2,7.2-1.2,8.3-2.2,8.3s-1.5-1.8-2.8-1.5c-1.3,0.3-3.7,0.8-2.5,4.2s6.7,7.2,9.8,12.2c3.2,5,5,7,4.8,12.3c-0.2,5.3-1.7,3.2,1.7,8.7c3.3,5.5,10,11.3,11,17.7s-0.7,9,2,11.7c2.7,2.7,5.2,2,6.3,4.7c1.2,2.7,1.2,4.7,4,6.5c2.8,1.8,5.3,2.5,7,5.2c1.7,2.7,2.7,5.3,5.5,7.7c2.8,2.3,4.3-0.3,5.8,1.7s0.7,3.8,3.3,4.5c2.7,0.7,2-1.8,5,0c3,1.8,6,4.2,8.7,5.5c2.7,1.3,5.3,4,8.3,3.7s4-1.8,5.7,0s3,3.5,6.3,3.6c3.3,0.2,3.7-2,7,0c3.3,2,2.8,0.7,6.8,0c3.8-0.6,4.9-1.1,7.5-0.4c4.2-9.2,10.2-21.3,11-24.4C390.5,1090.5,381.5,1079.3,380,1073.8z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Верстунин Владимир Петрович", percent: "30,80" },
                    { text: "Енин Владимир Евгеньевич", percent: "3,79" },
                    { text: "Пархоменко Юлия Викторовна", percent: "45,13" },
                    { text: "Семенов Эдуард Ростиславович", percent: "6,28" },
                    { text: "Тюрин Виктор Иванович", percent: "7,96" },
                    { text: "Янин Сергей Николаевич", percent: "2,48" }
                ],
                photo: "/assets/img/nophoto.png",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "5,70" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "15,82" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» ", percent: "58,66" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "13,69" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "2,30" },
                ],
                photo: "/assets/img/nophoto.png"
            }
        ],
        secretaries: [
            {
                fio: "Баграмян Татьяна Васильевна",
                name: [
                    { text: "Территориальная группа", percent: "63" },
                ],
                photo: "/assets/img/secretaries/27/bagramyan_tatyana_vasilevna.JPG"
            },
            {
                fio: "Макеева Ирина Ивановна",
                name: [
                    { text: "Территориальная группа", percent: "62" },
                ],
                photo: "/assets/img/secretaries/27/makeeva_irina_alekseevna.jpg"
            },
            {
                fio: "Перекотий Игорь Васильевич",
                name: [
                    { text: "Территориальная группа", percent: "65" },
                ],
                photo: "/assets/img/secretaries/27/perekotij_igor_vasilevich.jpg"
            }
        ]
    },
    {
        id: "st2",
        name: "Новороссийский одномандатный избирательный округ №28",
        info: "часть Новороссийского",
        voterCount: 67.02,
        d: "M413,1064.2c-2,0.2-7,9.2-10.7,13.7c-2.4,3-8.5,10.5-13,15.5c0.1,0.6,0.1,1.1,0,1.6c-0.8,3.1-6.8,15.2-11,24.4c0.1,0,0.2,0.1,0.3,0.1c2.8,0.8,6.5,1.8,8.3,3.5c1.8,1.7,1.7,2.2,3.5,3.5c1.8,1.3,3.3,0,4.2,1s1.2-0.5,3,0s2.7,2.2,7.5,2c4.8-0.2,7.3-1.5,13.8-3.8s8.5-0.5,9.7-5.3c1.2-4.8,2.2-7,0-8.7s-4.7-4-4.5-7.3c0.2-3.3,1-7.7-1-8c-2-0.3-3.2-0.3-2.7-2c0.5-1.5,1.1-2.9,4.4-3.4c-2.2-4.5-4.9-10.1-5.6-12.1C418,1075.3,415,1064,413,1064.2z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Ярышев Сергей Николаевич", percent: "68,57", strong: "true" },
                    { text: "Белялов Альберт Борисович", percent: "1,61" },
                    { text: "Ерохин Михаил Викторович", percent: "17,03" },
                    { text: "Козенко Альбина Анатольевна", percent: "4,10" },
                    { text: "Тренин Алексей Николаевич", percent: "8,30" }
                ],
                photo: "/assets/img/candidates/28/YAryshev_Sergej_Nikolaevich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "2,72" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "7,31" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Алтухов Сергей Викторович  ", percent: "72,81", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "15,49" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "1,35" },
                ],
                photo: "/assets/img/candidates/28/Altuhov_Sergej_Viktorovich.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Анненкова Наталья Ивановна",
                name: [
                    { text: "Одномандатный округ", percent: "84,63" },
                    { text: "Территориальная группа", percent: "84,63" },
                ],
                photo: "/assets/img/secretaries/28/annenikova_natalia_ivanovna.jpg"
            },
            {
                fio: "Супрунова Екатерина Николаевна",
                name: [
                    { text: " Одномандатный округ", percent: "85,29" },
                    { text: "Территориальная группа", percent: "82,16" },
                ],
                photo: "/assets/img/secretaries/28/suprunova_ekaterina_nikolaevna.jpg"
            },
            {
                fio: "Безуглов Юрий Викторович",
                name: [
                    { text: " Одномандатный округ", percent: "86,6" },
                    { text: "Территориальная группа", percent: "85,95" },
                ],
                photo: "/assets/img/secretaries/28/bezuglov_yurij_viktorovich.jpg"
            }
        ]
    },
    {
        id: "st3",
        name: "Черноморский одномандатный избирательный округ №29",
        info: "часть Новороссийского, Геленджиксого",
        voterCount: 56.16,
        d: "M698,1270c1.5-2.7,2.7-0.7,5.2-1.7s1.7-4,2.5-5.3c0.8-1.3,1.5-1.8,1.5-1.8s-1.3-5,0.2-7.8c1.5-2.8,2.8-1.2,4.7-2c1.8-0.8,1-4.7,2.8-7c1.8-2.3,1.8-3.7,4-4.8c2.2-1.2,2.3-3.2,2.5-5.7c0.2-2.5,2.3-3.8,2.2-5.8c-0.2-2-0.3-3.8,0.7-6c1-2.2-0.5-2.2-2.7-3.7c-2.2-1.5-2.2-4.5-3.3-6.8c-1.2-2.3,1.2-2.7,0-4.5c-1.2-1.8,0.2-3-0.8-4.7c-1-1.7-2.5,0.5-5.3,0c-2.8-0.5-3.7-1-5.5-2.8c-1.8-1.8-4.5-8-6-9.5s-4.7-0.7-9.2-1.8s-7.2-6.3-9-8c-1.8-1.7-1.5,0-5.8,1.2c-4.3,1.2-4.3-0.8-6.2-2c-1.8-1.2-3.2,0.2-4-1.3c-0.8-1.5,1.7-2.3,2.7-4.8s0.7-4.2,2.7-5.8c2-1.7,0.7-3.8,1-6.3s-4-1.5-6.5-2.5s-2-3.5-1.5-5.7c0.5-2.2-0.8-2.3-2.2-4.2c-1.3-1.8,0.2-1.2-0.7-4.2c-0.8-3-2.7-2.3-4.5-2.8c-1.8-0.5-4,2.2-6.8,1.7c-2.8-0.5,0-2.3-1.3-3.8s-1.8,0.7-3.5,1.8c-1.7,1.2-3.2-1-4.2-1.3c-1-0.3-0.6,2.2-2.6,7c-2,4.8-1.8,2.3-1.7,5.2s2.2,2.3,3.7,4s0.2,2-2.7,5.5s-6.3,2.7-8.2,0.8c-1.8-1.8-2.3-1.2-4.3-2.5c-2-1.3-0.5-2.8-3.2-5.2c-2.7-2.3-5.5-1-9.2-3.5c-3.7-2.5-2.7-5.2-4.7-5.7s-3,2.2-3.7,6.3c-0.7,4.2-1.8,5.7-5.8,5.7s-9.7-3.7-13.3-6c-3.7-2.3-5.2-0.3-9-0.8c-3.8-0.5-6.2-1.2-7.5-2.9c-1.3-1.7-1.7-1.3-3.5-1.3c-1.8,0-1.2,2.8-5.7,0s-4.3-2.8-8.5-2.8s-1.3-0.7-2.8-1.8c-1.5-1.2-2.7,1.3-5.3,0c-2.7-1.3-2.2-3.7-3.8-4.8s2-2.7,1.7-4c-0.3-1.3-1.7-0.3-2.7-1.8s2.7-3.5,1.7-4.7s-1.7,1.3-3.2,0.3s0.2-2.7,0-3.7s-2-0.5-4.5,0s-2-1.7-3-2.4c-1-0.8-1.5,0.6-4.3,2.9c-2.8,2.3-8.3,6-10.5,5.7c-2.2-0.3-1-3.8-0.8-6.5c0.2-2.7-5-2.8-7.3-5.3s-6.5-3.3-10.7-3.3c-4.2,0-5-0.8-6.5-3.7s-2.3-2.3-2.3-4.2c0-1.8,1.3-4.5,5-4.7c3.7-0.2,7.8,1,8,0s-2.2-1.2-5.7-2.3c-3.5-1.2-4.5-1.5-4.7-4.2c-0.2-2.7,3.8-3.5,3.2-5.3c-0.7-1.8-5.5,0-9-1.5s-3.7-3.7-8.3-6c-4.7-2.3-6.2-0.8-7.7-2.7c-1.5-1.8,0.8-4,0-5.2c-0.8-1.2-6.7-3.7-9.7-6.8c-3-3.2-3.8-3.2-5-2c-1.2,1.2-1.5,6.3-3,6.3c-1.5,0-2-1-2.2-1.7c-0.2-0.7,1.8-4,0.7-6.3c-1.2-2.3,1.3-3.5,1.5-5c0.2-1.5-3-5-4-6.5s3.2-4.7,1.8-6.2s-3.7,2-5.2,2s-2.5-3.2-2.5-4.7s2.2-3-4.3-3.1s-4.8-0.4-7.5-0.7c-2.7-0.3-3-1.3-5-3.3c-0.8-0.8-2.4-1.1-4-1.3c-0.2,0.9-1,1.7-3.5,3.1c-4.2,2.3-4.3,2-8.8,4.2s-11.3,3.5-13.5,8c-2.2,4.5-15.3,17.7-13.8,23.2c1.3,4.9,8.7,14.4,9.4,19.5c4.4-5,10.5-12.6,13-15.5c3.7-4.5,8.7-13.5,10.7-13.7s5,11.2,6.3,14.7c0.8,2,3.4,7.6,5.6,12.1c0.3,0,0.6-0.1,0.9-0.1c4.2-0.3,4.3,2,6,2.5c1.7,0.5,3.3-0.5,6.7,3.2c3.3,3.7,4.7,2.7,5.2,4.5c0.5,1.8,0.3,2.5,3.2,5.2c2.8,2.7,6.3,6,7.3,7.7c1,1.7-0.3,1.2,1,2.5c1.3,1.3,3.2,0,5,1.8s2.2,2,4.2,3.3c2,1.3,3,0,3.8,2.5s0.8,2.8,2.5,4.8s3,3.5,0.7,4.7c-2.3,1.2-3.8,1.2-5.7,3c-1.8,1.8-2.7,2.7-0.3,6.7c2.3,4,7.3,8.2,11.3,12.7s7,8.3,8.8,9.5c1.8,1.2,2.7-0.3,3.5,0.8c0.8,1.2,0.5,3.8,1.5,3.8s0.7-2.3,1.7-1.5c1,0.8,2.8,1.8,5.7,2.3c2.8,0.5,4.2,0.3,5,1.5c0.8,1.2,2,0.3,2.3-1.5c0.3-1.8-5-6.3-2.7-8c2.3-1.7,6.3-2.2,9.5-1.5c3.2,0.7,8.7,7.3,8.5,10.2c-0.2,2.8-1,4.5-2.5,3.7s-2.7,0.1-4.2,0.2s-4.3,1.1-3.3,2.1s2.5,0.3,3.8,2c1.3,1.7,0,1.7,2,2.2s2.2,0.3,4.2,2.2c2,1.8,6,5.2,7.7,7.3s0.5,2.3,2,3.2c1.5,0.8,1.3-0.5,2.2,1.7c0.8,2.2,0.7,3.3,2,3.8c1.3,0.5,2.8,0.3,3.8,2.3s1.2,2.2,1.3,4.7c0.2,2.5,2,2.8,2.3,4.8c0.3,2-0.5,4.5,1.3,6s1.8,0.7,2.5,2.7s1.2,1,4.3,3.2c3.2,2.2,2.5,3.8,5,6c2.5,2.2,4,2.7,5.2,6.2s-0.3,3.8,3.5,5.7c3.8,1.8,7.2,3.5,10.3,2.5c3.2-1,3.5-1.7,9.2-1.2s9,0.5,12.5,3.7c3.5,3.2,5.5,6.2,7.8,7.2c2.3,1,3.2,0.8,3.2,0.8s2,4.5,5.8,6.2c3.8,1.7,8.7,3.8,12.5,2.8c3.8-1,4.5-2.8,7.5-2.8s3.7,1.7,11.7,3.1s5.3-0.8,11.2,1.9c5.8,2.7,7.5,4.2,13.3,4.5c5.8,0.3,3.5,0.5,7.5,1.3c4,0.8,6.3,0.7,9.8,2.3s4.3,1.2,7.8,4.3c3.1,2.8,3.8,3.5,5.1,3.6C698.4,1276.8,697.2,1271.5,698,1270z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Рой Татьяна Геннадьевна", percent: "80,49", strong: "true" },
                    { text: "Айтмуратов Рустам Викторович", percent: "1,58" },
                    { text: "Андрианова Маргарита Алексеевна", percent: "7,19" },
                    { text: "Бондарев Петр Алексеевич", percent: "3,45" },
                    { text: "Хот Валерий Владимирович", percent: "6,48" }
                ],
                photo: "/assets/img/candidates/29/Roj_Ttyana_Gennadevna.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "2,92" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "8,38" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Димитриев Константин Триондофилович  ", percent: "77,18", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "9,90" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "0,88" },
                ],
                photo: "/assets/img/candidates/29/Dimitriev_Konstantin_Triondofilovich.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Салахова Гузель Явдатовна",
                name: [
                    { text: "Одномандатный округ", percent: "91,14" },
                    { text: "Территориальная группа", percent: "89,95" },
                ],
                photo: "/assets/img/secretaries/29/salahova_guzel_yavdatovna.jpg"
            },
            {
                fio: "Хмелевский Павел Александрович",
                name: [
                    { text: " Одномандатный округ", percent: "87,88" },
                    { text: "Территориальная группа", percent: "80,38" },
                ],
                photo: "/assets/img/secretaries/29/hmelevskij_pavel_aleksandrovich.jpg"
            },
            {
                fio: "Задорожный Юрий Александрович",
                name: [
                    { text: " Одномандатный округ", percent: "79,22" },
                    { text: "Территориальная группа", percent: "67,24" },
                ],
                photo: "/assets/img/secretaries/29/zadorozhnyj_yurij_aleksandrovich.JPG"
            }
        ]
    },
    {
        id: "st4",
        name: "Горный одномандатный избирательный округ №32",
        info: "часть Апшеронского, Туапсинское",
        voterCount: 46.88,
        d: "M892.4,1415.5c1.5,1.5,3.7,0,4.8-1s2.7-1,7.2-3.8s0.8-4.7,8.3-6.5s7.7,0.8,11.5,2.7c3.8,1.8,1.5,5,5.3,7.3c3.8,2.3,9.3,1,15.5,1.2c6.2,0.2,8.8-1.8,11.2-3.7s2.2-5.5,3.2-10.3c1-4.8-0.5-8.2,1.2-10.2c1.7-2,8.2-0.8,10-0.7c1.8,0.2,3-4.3,4.5-6.7c1.5-2.3,0.2-6.8,0.2-6.8s3.5,2.8,5.5,4.7s-0.3,2,1.2,4.5s4,2.8,7.8,4.3s4.7,3.7,5.5,6c0.8,2.3,3.3,2.3,3.3,2.3s1,1.3,1.7,3.5c0.7,2.2,2,0.7,5.8,1.7c3.8,1,5.8,3,12.7,7.2c6.8,4.2,7.3,9.2,8.5,13.7s5.3,2.7,7.3,3c2,0.3,1.5,2.2,5.5,3.3s9,1.2,13.5,5.2s9.8,4.3,10.7,7c0.8,2.7-4.3,9-3.3,10.2c1,1.2,2.3,4.5,3.8,6.8c1.5,2.3,4.3,1.2,8.5,2c4.2,0.8,4.2,2.5,7.5,5.8s7,0.7,11.8-1.5c4-1.8,8-2.5,9.3-2.6c-0.7-1.1-1.4-2.4-2.3-3.9c-2.3-4.2-4.2-3.5-5-5.8c-0.8-2.3,3.3-3.5,5.8-5.5s3.8-3.3,3.7-5.5c-0.2-2.2-2.3-4.5-3.8-6.2s0-2,0.2-4.8c0.2-2.8-1.2-3.2-1.2-5.2s2.2-5,3.8-9.2c1.7-4.2,3.7-7.5,6.3-11.8c2.7-4.3,2.2-7.2,0.5-10.7c-1.7-3.5-5.3-8.2-7-10.3c-1.7-2.2-2.2-6.8-3.7-8.2c-1.5-1.3-3.8-0.8-6-1c-2.2-0.2-1.7-0.5-2.5-2.7c-0.8-2.2-1.3-1.3-2.2-2.8c-0.8-1.5,0.3-2.3,1-3.8c0.7-1.5,0.2-3.5-0.8-4.5s-0.2-1.5,0.8-3.2c1-1.7-0.2-2.8,0.8-3.7c1-0.8,1-2.7,1.2-4c0.2-1.3,1-1,1-1s26,0.5,27,0.5s3,0,3.2,2.2c0.2,2.2,0.7,5.8,2.2,7.2s1.3,1,0.8,4.3c-0.5,3.3,1.7,4.2,3.3,6.3c1.7,2.2,2.2,6.2,5.2,8.8s5.7,1.3,8.3,3c2.7,1.7,4.3,4.3,5.7,5.5s3.5-0.3,5.7,0.2c2.2,0.5,2.7,2.2,4,5.8c1.3,3.7,2.7,5,4.7,5.8c2,0.8,2.5-0.8,4.5-1.3s4.7-2.2,6.7-4.7s1-7.8,1.7-9.8c0.7-2,11-13.3,12.3-13s2.7,4.8,4,6.2c1.3,1.3,4.3,1.7,6.3,2.5c2,0.8,2-2.2,1.3-3.7c-0.7-1.5,1.3-3,0-4c-1.3-1-0.3-1.7-1-2.7c-0.7-1-3-1-4.7-2.3s-2.2-1.3-1.2-3s1.2-0.5-0.3-2.7c-1.5-2.2-1.2-1.2-1.2-3c0-1.8,1.3-3.7,2-4.8c0.7-1.2,3.2-1.3,3.7-2.7c0.5-1.3-0.3-3.5-2-6s-2-4.7-1.3-9.5c0.7-4.8,0.8-5.3,0.7-7.3c-0.2-2,0.3-2.2,1-2.3c0.7-0.2,1.3-2,1.3-3.7s2-3,2-3.8c0-0.8-4-1.3-6.2-3.5c-2.2-2.2-2.2-5.8-3.3-6.2c-1.2-0.3-3.7,0-6.5,0.8c-2.8,0.8-10.8,0.8-14.3,1.3s-5,3-6.7,1.7c-1.7-1.3-0.8-4.7-3.2-7c-2.3-2.3-0.5-4-1.7-9c-1.2-5-0.7-3.3-0.2-7.7c0.5-4.3,2-5.7,2.3-9.2s-1.7-5-2.8-5.5c-1.2-0.5-2.8-2.7-4.3-3.2s-3.3,1.3-4.3,2.7s-3,2.3-7,2.1c-4-0.3-1.3-1.1-2-2.7c-0.7-1.7-1-2.7-2.2-3.8c-1.2-1.2-2.8,0.2-4.7,0.7c-1.8,0.5-3.2,0.7-4.7,1c-1.5,0.3-1.8,3.8-3.8,4.7c-2,0.8-2.2-0.7-3.7-2.3s-3.3-3.2-4.3-4.3c-1-1.2-0.2-1.3,1-3.3c1.2-2,2.8-5,3.7-6.7c0.8-1.7,4.3-6.3,5.7-8.2c0.2-0.3,0.3-0.6,0.4-0.8h-12.4v-11h-11.7c0,0,1.2,12.5,0,13c-1.2,0.5-10.7-0.8-16.5-1.7c-5.8-0.8-15-4.8-18.5-6.8s-4.2-3.7-5.2-5.2s-2.8,0.7-5.8,0.7s-6-4.3-7-5.5c-1-1.2,1.2-2.8,2.8-4.3c1.7-1.5,2.7-1.8,4.5-0.7c1.8,1.2,2.5-1,3.8-2.2s2.3-1.7,4-0.8c1.7,0.8,2.5,3.7,5.2,2.8c2.7-0.8-0.8-5.2-2.3-6.5s-2.8-1-2.5-3.2c0.3-2.2,0.3-4.2,0.5-5.7c0.2-1.5,1.8-2.3,3.7-2.8s2.5-2,3.2-4.1c0.7-2.1,4,0.5,5.7,0c1.7-0.5,5.7-5.4,8-8c2.3-2.7,7-5.2,9.8-7.4c2.8-2.2,6.5-10.4,6.7-12.9c0.2-2.5-24.8-26.7-25.3-28.2s2-2.7,3.7-3.8c1.7-1.2,0.8-3-0.2-3.8s0.7-3.2,2.5-3.5s1.5-2.8,1.8-4.5c0.3-1.7-1.8-0.7-4.7-0.7c-2.8,0-2.5-1.3-4.7-1.8c-2.2-0.5-5.8,3.5-9.3,5.7c-3.5,2.2-9.2,0.2-11.8-1c-2.7-1.2-0.7-3.3-1.5-6.3c-0.8-3-3-4.8-4.8-4.8s-1.8,3.5-2.3,5.3c-0.5,1.8-0.5,3.5-2.7,4.2s-1.3,2.3-1.3,2.3s-0.8,1-2.5,2.7c-1.7,1.7,0.5,4.7-1.3,5c-1.8,0.3-3.2-3.3-5.2-3.5s-3.8,3-6.3,4.7c-2.5,1.7-4.3-1.3-7-3.5c-2.7-2.2-10.7-10.8-13.2-10.3s-6,4.7-10,6.5c-4,1.8-2,2-2.8,4.3c-0.8,2.3-3.3,4.2-8.7,7.2c-5.3,3-4.2,4-7.3,8c-3.2,4-8.2,5.2-11.7,6.8c-3.5,1.7-5.8,11.5-8.3,14.2c-2.5,2.7-14.5,7.8-15.3,9.7s9.8,5.2,15.7,7.7c5.8,2.5,12.2,3.5,12.8,5.8s1.8,2.8,3.3,4.2s-0.3,2.6-4,6c-3.7,3.3-3.2,5.8-5.3,8.5c-2.2,2.7-4.8,2.8-10.5,3.7c-5.7,0.8-2.8,2.8-5,3.1c-2.2,0.2-4.5-1.1-7-1.1s-5-3.2-7.2-3.8c-2.2-0.7-1.3,0.2-4.3,2.3c-3,2.2-1.5,4.5-5.8,5c-4.3,0.5-6-1.2-9.5-0.3s-1.3,3.3-4,3.8c-2.7,0.5-8.7-2.2-16.2-4.3s-9.3-1-14.2-2.7c-4.8-1.7-6.8-4.8-9.3-3.7c-2.5,1.2-4.5,3.3-6.5,2.5c-2-0.8-4.2,1.7-6.8,3.2c-2.7,1.5-2.8,2.7-4.2,6c-1.3,3.3-5.7,3.7-6.5,5.2s0.8,4.2,2,5.7s0.7,5.7,0,6c-0.7,0.3-7,5.5-8.8,5.3c-1.8-0.2-1-1.7,0.3-3.3c1.3-1.7,0.7-3.5-1.7-5.5c-2.3-2-4.2-4.7-5-5.2c-0.8-0.5-2.5,1-1.8,3s-2.8,2.3-4.2,2.8c-1.3,0.5-1.3,2-2.7,2.5c-1.3,0.5-6.2-2.5-9.8-4c-3.7-1.5-11-4.7-11.7-6.5c-0.7-1.8,7.5-1.7,10.7-1.7c3.2,0,4-2.2,4.2-3.7s4.3-1.3,4.8-2.8s-3.3-7-7.5-9.3c-4.2-2.3-7-12.3-9.3-15.5c-2.3-3.2-9.8-1-13.5-2.2s0-2.2-3.2-3.8c-3.2-1.7-5.8,0-8.5,0c-2.7,0-1.5-2-4.7-2.3c-3.2-0.3-4.3,2.5-7,2c-2.7-0.5-3.8-3-5.5-2.7c-1.7,0.3-1.2,2.7-2.5,3.7c-1.3,1-3.8-1.3-5.3-1.8s-3.3,0.7-9.5,1.5c-6.2,0.8-1.2-0.8-6.3,0c-5.2,0.8-2.8,4.3-5.8,4.5c-3,0.2-5.5-1.7-8.2,0c-2.7,1.7-2.7,1.5-4.8,1.6c-0.7,0.1-1.8,0.5-2.9,1c-0.3,0.8-1,1.5-0.2,3c1.2,2.3,1.2,5.3,3.3,6.8c2.2,1.5,3.7,1.5,2.7,3.7c-1,2.2-0.8,4-0.7,6c0.2,2-2,3.3-2.2,5.8c-0.2,2.5-0.3,4.5-2.5,5.7c-2.2,1.2-2.2,2.5-4,4.8c-1.8,2.3-1,6.2-2.8,7c-1.8,0.8-3.2-0.8-4.7,2c-1.5,2.8-0.2,7.8-0.2,7.8s-0.7,0.5-1.5,1.8c-0.8,1.3,0,4.3-2.5,5.3s-3.7-1-5.2,1.7c-0.9,1.5,0.3,6.8,0.9,11.6c0.2,0,0.4,0,0.6,0c1.7,0,2.2-1.2,4.5,1c2.3,2.2-0.5,3.5,3.7,4.3c4.2,0.8,7.3-0.7,8.2,0.8c0.8,1.5-1.3,1.2,3.3,2.8s5.8,2.3,7.8,2s0.2-1.2,2-0.3c1.8,0.8,2.2,3.2,4.2,3.8s2.5-0.2,7.5,0s5,0.3,6.8,1.7c1.8,1.3,1.2,2.3,4.8,3.5c3.7,1.2,8.5,3.5,11.3,8.2c2.8,4.7,5.8,8.5,6,10.5s-0.8,3.2,0.7,4.3c1.5,1.2,2.8-1.2,3.8,0c1,1.2,2.3,2.8,2.7,5.2c0.3,2.3,1.2,1.7,2,3.3c0.8,1.7,0.3,3.5,1.2,4.5c0.8,1,1.8,0.8,2.8,3.2c1,2.3,0.7,4.3,2.8,5.3s3.2-1,4.5,0.8s-1.3,2,3.5,3.5s6.3-1.2,10,0.8s7.2,6.7,10.7,7.5c3.5,0.8,5.7-1.3,10,0c4.3,1.3,10.2,7.5,12.2,11.5s3.8,7,4.2,11.2s-0.8,9.8,1.8,11.3c2.7,1.5,4-1.5,6-1.2c2,0.3,3.2,0.5,2.7,1.6c-0.5,1.1-1,1.9-1,1.9s2.3-2.7,4.3-1.7s0,2.2,1.8,4c1.8,1.8,3.2,0.8,5.5,4.3c2.3,3.5,6.3,7.2,10.2,12.3c3.2,4.3,4.3,8.3,7.9,12c2.6-4.2,5.9-9.5,7.3-11C889.7,1412.2,890.9,1414,892.4,1415.5z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Джеус Александр Васильевич", percent: "75,45", strong: "true" },
                    { text: "Аракелян Артур Артурович", percent: "8,30" },
                    { text: "Грицкевич Владислав Эдуардович", percent: "2,50" },
                    { text: "Жогалева Яна Николаевна", percent: "5,18" },
                    { text: "Поздняков Евгений Геннадьевич", percent: "6,56" }
                ],
                photo: "/assets/img/candidates/32/Dzheus_Aleksandr_Vasilevich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "2,58" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "15,16" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Булдин Андрей Владимирович  ", percent: "71,11", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "8,45" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "1,12" },
                ],
                photo: "/assets/img/candidates/32/Buldin_Andrej_Vladimirovich.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Ачох Рашид Колобатович",
                name: [
                    { text: "Одномандатный округ", percent: "75,29" },
                    { text: "Территориальная группа", percent: "82,18" },
                ],
                photo: "/assets/img/secretaries/32/achoh_rashid_kolobatovich.jpg"
            },
            {
                fio: "Саркисова Татьяна Савельевна",
                name: [
                    { text: " Одномандатный округ", percent: "85,23" },
                    { text: "Территориальная группа", percent: "82,34" },
                ],
                photo: "/assets/img/secretaries/32/sarkisova_tatyana_savelevna.jpg"
            }
        ]
    },
    {
        id: "st5",
        name: "Морской одномандатный избирательный округ №33",
        info: "часть Сочинского",
        voterCount: 40.99,
        d: "M1071.9,1583c10-5.3,23-1,35.3,1.3c12.3,2.3,23.7,10,27,10.7c3.3,0.7,11-0.7,17-3c6-2.3,6-10,18-29.7c12-19.7,16-31,24.3-45c2.6-4.3,4.2-7.9,5.1-10.7c-1.7-1.6-3.3-4.9-4.3-6.6c-1.5-2.5-3.2-4.2-6-6c-2.8-1.8-1.7-1.5-4.7-3.3s-6.5,0.8-9.5,0s-5-6.7-7.2-10.5c-2.2-3.8-4.3-4.8-8.7-8.7c-4.3-3.9-5.2-4.3-5.7-7.1c-0.5-2.8-1.2-3.5-2.7-5.2s-0.5-5.7-4.2-6.2c-3.7-0.5-5.7,2.8-5.7,2.8s-2.2-1-5.3,1.3c-3.2,2.3-2,3.3-3.7,7.2c-1.7,3.8-5.7,3.5-8.2,3.7c-2.5,0.2-2.5,1.8-4.5,3c-2,1.2-3.3-0.2-5.7-1c-2.3-0.8-4.8,0.2-7.2-1.5c-1.5-1.1-2.6-2.5-3.9-4.5c-1.2,0.2-5.2,0.8-9.3,2.6c-4.8,2.2-8.5,4.8-11.8,1.5s-3.3-5-7.5-5.8c-4.2-0.8-7,0.3-8.5-2c-1.5-2.3-2.8-5.7-3.8-6.8c-1-1.2,4.2-7.5,3.3-10.2c-0.8-2.7-6.2-3-10.7-7s-9.5-4-13.5-5.2s-3.5-3-5.5-3.3c-2-0.3-6.2,1.5-7.3-3s-1.7-9.5-8.5-13.7c-6.8-4.2-8.8-6.2-12.7-7.2c-3.8-1-5.2,0.5-5.8-1.7c-0.7-2.2-1.7-3.5-1.7-3.5s-2.5,0-3.3-2.3c-0.8-2.3-1.7-4.5-5.5-6s-6.3-1.8-7.8-4.3s0.8-2.7-1.2-4.5s-5.5-4.7-5.5-4.7s1.3,4.5-0.2,6.8c-1.5,2.3-2.7,6.8-4.5,6.7c-1.8-0.2-8.3-1.3-10,0.7c-1.7,2-0.2,5.3-1.2,10.2c-1,4.8-0.8,8.5-3.2,10.3s-5,3.8-11.2,3.7c-6.2-0.2-11.7,1.2-15.5-1.2c-3.8-2.3-1.5-5.5-5.3-7.3c-3.8-1.8-4-4.5-11.5-2.7s-3.8,3.7-8.3,6.5s-6,2.8-7.2,3.8s-3.3,2.5-4.8,1s-2.7-3.3-5.2-0.7c-1.4,1.5-4.7,6.8-7.3,11c0.8,0.8,1.6,1.6,2.6,2.3c5.8,4.3,7.2,4.3,8,6.2c0.8,1.8,0.2,1.8,4.5,3.7c4.3,1.8,6.3,4,8,5.5c1.7,1.5,2,3.3,4.5,4.3s2.3-0.3,4.3,1.5c2,1.8,6.5,9,9.3,10.3s4.7-0.8,8,3.8c3.3,4.7,7.8,13.5,10.2,17.2c2.3,3.7,1.8,3,4,4.3c2.2,1.3,1.5,0,4.8,2.7s16.3,15.2,18.2,19.2c1.8,4,1.8,5,4.7,7.8c2.8,2.8,5.7,4.8,8.7,10s4.3,9.7,8,13.7s9,6.7,11.5,10.2s3.8,2.2,7.3,6.5c3.5,4.3,7.5,8.7,11.5,12c4,3.3,7.5,5,10.5,10.2s5.7,14.3,8.5,15.8c2.8,1.5,4.3,1.3,5.7,2.8s2.8,0,5.8,1.8c2.3,1.4,2,1.6,3.6,2.7C1058.4,1593.1,1064.8,1586.8,1071.9,1583z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Руднев Алексей Валентинович", percent: "75,04", strong: "true" },
                    { text: "Губенко Владимир Ильич", percent: "3,71" },
                    { text: "Зозуля Денис Сергеевич", percent: "4,34" },
                    { text: "Оганян Ашот Исагакович", percent: "8,85" },
                    { text: "Шелякин Андрей Валерьевич ", percent: "5,97" }
                ],
                photo: "/assets/img/candidates/33/Rudnev_Aleksej_Valentinovich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "2,91" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "10,64" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Сафронов Алексей Иванович  ", percent: "75,08", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "7,94" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "1,69" },
                ],
                photo: "/assets/img/candidates/33/Safronov_Aleksej_Ivanovich.JPG"
            }
        ],
        secretaries: [
            {
                fio: "Окунева Ольга Васильевна",
                name: [
                    { text: "Одномандатный округ", percent: "79" },
                    { text: "Территориальная группа", percent: "43,5" },
                ],
                photo: "/assets/img/secretaries/33/okuneva_olga_vasilevna.jpg"
            },
            {
                fio: "Данелян Светлана Анатолиевна",
                name: [
                    { text: " Одномандатный округ", percent: "80,7" },
                    { text: "Территориальная группа", percent: "35,1" },
                ],
                photo: "/assets/img/secretaries/33/danelyan_svetlana_anatolievna.jpg"
            },
        ]
    },
    {
        id: "st6",
        name: "Сочинские одномандатный избирательный округ №34",
        info: "часть Сочинского",
        voterCount: 27.63,
        d: "M1131.1,1593.7c-5.1-2.4-14.1-7.6-23.9-9.4c-12.3-2.3-25.3-6.7-35.3-1.3c-7.1,3.8-13.5,10.1-19.7,17.4c0.5,0.3,1.2,0.7,2.2,1.3c4.3,2.3,9.5,5.3,12.7,11c3.2,5.7,3.8,16,6,18.2c2.2,2.2,4.5,3.7,5.2,5.7s1.3,2.7,5.2,3.7c3.1,0.8,5.3,2.1,6.4,3.4c8.3-11,25.6-28.3,29.9-33.8C1123.1,1605.4,1127.9,1598.4,1131.1,1593.7z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Базылева Людмила Александровна", percent: "11,66" },
                    { text: "Жиденко Анастасия Сергеевна", percent: "6,36" },
                    { text: "Тепляков Виктор Нодариевич", percent: "70,48" },
                    { text: "Щербаков Николай Иванович", percent: "8,43" }
                ],
                photo: "/assets/img/nophoto.png",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "3,63" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "13,55" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Лебедев Дмитрий Геннадьевич  ", percent: "68,06", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "10,53" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "1,86" },
                ],
                photo: "/assets/img/candidates/34/Lebedev_Dmitrij_Gennadevich.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Антропова Любовь Алексеевна",
                name: [
                    { text: "Территориальная группа", percent: "34,7" },
                ],
                photo: "/assets/img/secretaries/34/antropova_lyubov_alekseevna.jpg"
            }
        ]
    },
    {
        id: "st7",
        name: "Курортный одномандатный избирательный округ №35",
        info: "часть Сочинского",
        voterCount: 20.54,
        d: "M1387.2,1627.5c-3,0-2.8-2.3-6.5-1.8s-3,0.5-5.3-3.5s-1.3-2.5-6.5-4.8s0,0-1.8-1.8s-3-2.5-5.5-3.3s-2-1-3.8-3.5s-7.8-1.8-10-3s-3.3-3.8-6-5.6s-1.5-1.9-3.8-3.6s-2,2.5-4.8,2.5s-4.5-2-5.6-5.3s-3.6-5-5.4-6.5s0.3-3.8,1.5-5.8s-0.3-3.8,2.3-5.8s1.8-3.8,0-5s0-2.5-4.3-6.2s-4,0.5-9.5-1.5s-5-2.5-8.8-2.5s-2.3,1.8-4,1.8s-2.3,1.8-3.6,2.3c-1.3,0.5-2.2-3.8-1.9-6s3.3-4,5.3-4.5s2-2.5,1.3-3.5s0.8-3,1.5-6.3s-4.8-2.3-7-3.3c-0.6-0.3-1.2-0.9-1.8-1.7c-1.6,0.4-3.9,0-7-0.1c-5.3-0.2-6.5-1.8-9.7-3.5c-3.2-1.7-3.5,0.2-5.2,1.8c-1.7,1.7-1.5,2.3-5.2,3.3c-3.7,1-5.7,3.5-8.2,4.7c-2.5,1.2-3.7-1.2-6.3-3.5c-2.7-2.3-2.7-2.8-5.2-3.8s-2.2-1.5-3-4.2c-0.8-2.7-2.5-5.2-3.8-6.3c-1.3-1.2,1.7-5.8,1.8-8.3s-1.3-1.8-2.8-3.3s-1.5-3.2-2.8-5.7c-1.3-2.5-1.8-2-1.5-5c0.3-3,0.8-3.2,2-5.3c1.2-2.2-1.2-4.3-2.5-6.3c-1.3-2-2.7-0.8-5.3,0c-2.7,0.8-4,0-5,3.2s-1.2,3-3.7,3.3c-2.5,0.3-3.2-1.7-7.3-3c-4.2-1.3-5.8-1.7-7.8-1.3s0.3,2.7-1.7,5.5s0.5,3.8-2,5.5c-0.8,0.6-1.7,0.2-2.5-0.6c-1,2.9-2.5,6.4-5.1,10.7c-8.3,14-12.3,25.3-24.3,45c-12,19.7-12,27.3-18,29.7c-6,2.3-13.7,3.7-17,3c-0.7-0.1-1.8-0.6-3.1-1.3c-3.1,4.6-7.9,11.6-11.4,16c-4.3,5.5-21.6,22.9-29.9,33.8c0.3,0.3,0.6,0.6,0.7,0.9c0.8,1.5,1.2,2.5,6.3,4.5c5.2,2,12.2,5.8,15.3,7.2s1.8,2.5,3.2,3.3c1.3,0.8,2.3,0.8,3,2.5c0.7,1.7,1,3.3,2.7,3c1.7-0.3,1.2-2.7,2.5-1.3c1.3,1.3,1.7,2.7,3.7,4.3c2,1.7,2.8,0.3,4.2,4.8c1.3,4.5,5.8,20.7,8.2,26.7c2.3,6,3.8,8,6.5,9.8c2.7,1.8,3.8,2,5,3.8c1.2,1.8,2,5,4.3,5c2.3,0,1.3-1.5,3.8-1s1.2,3,6.3,4.7c5.2,1.7,9,1.3,9,1.3s0.5-5.6,1.3-7s2.3-7.3,1.9-8.6s-1.4-3.3-0.8-4.1s3.5-1.4,5.5-5.6s2.8-6.4,4.3-13.1s3.1-14.1,6.9-18.3s9.8-8.3,10.9-12.3s-2.4-5.1-2.1-7.5s-0.6-3.1,0.3-4.1s0.4-0.1,1.5-2.1s0-2.9,3.1-3.4s7.3,1.3,9.5,0.4s5.9-3.6,9.6-3.4s10.6,1.6,15.8-0.3s9.4-5.6,12.8-5.6s4.6,0.4,5.8,1.4s0.5,2.3,3,2.5s4.6-1.4,5.6-0.1s0.8,2.8,3,2.4s1.3-3,4-3s3.8,4.3,5.9,5.4s5,1.8,9.1,1.8s3.5,0.1,7.1,1.8s5.3,1,8.9,1.3s2.6,2.8,4.6,2.4s2.9-1.6,5.5-2.4s4.4-0.1,7.1,0.9s4,1.4,7.1,1.9s3.8,0.3,5.1,2.3s2.9,6,5,7.6s3.1,0.9,4.3,1s0.6,1.6,3.5,1.6s2.6,0,6.3,0.6s6.5,1.4,8.9-0.3s4.3-2.1,5.3-3.6s1.4,0.1,3.6-1.8s2.9-6.6,5.3-7.6s5.9,0.9,8.5-1.3s5.4-4.1,7.1-5c0.2-0.1,0.4-0.2,0.6-0.3c-0.6-3.7-0.3-7.4-0.9-8.2C1393,1628,1390.2,1627.5,1387.2,1627.5z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Звягин Александр Анатольевич", percent: "63,43", strong: "true" },
                    { text: "Васильев Игорь Васильевич", percent: "20,05" },
                    { text: "Напсо Мурат Романович", percent: "8,99" },
                    { text: "Щеглов Сергей Владимирович", percent: "3,30" }
                ],
                photo: "/assets/img/candidates/35/Zvyagin_Aleksandr_Anatolevich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "4,71" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "20,22" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» ", percent: "55,77" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "13,87" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "1,90" },
                ],
                photo: "/assets/img/nophoto.png"
            }
        ],
        secretaries: false
    },
    {
        id: "st8",
        name: "Линейный одномандатный избирательный округ №10",
        info: "Мостовское, Лабинское",
        voterCount: 47.70,
        d: "M1562.2,1362.8c3-0.8,4,1,6.5,2s2.3-1.8,2.3-3.5s-3-2-3-2.5s2.5-1.8,5.3-1.8s4.5-0.8,3.3-3.3s-1.3-1.8-3.5-3s-4-1-5.8,0s-2-0.8-4.8,2.8s-1,5.3-2.8,5.3s-1.5-2.3-2.3-3.8s-4-4-9-12.3s-2.5-11.5-7-19.5s-5.8-12.3-6-19.8s-1.3-6.5-3.8-8.8s-3.5-2.3-6.8-3.5s-6-5.8-4.8-10s5.5-5.3,10.3-8.3s10-7,12.8-7.5s6.5,5.3,8.5,4.8s4-3.3,4-7s6.5-13.8,7.5-16.5s-1.8-5-2.8-6.5s2-2.5,4.3-4.5s1-3.3,1-4.8s2.8-1,2.8-2.8s-9.8-14-10-16s7.3-2.5,7.3-3.5s-4-5.8-6.3-8s-1.3-7.3-0.8-9.3s12.5-10.8,12.3-12.5s-9.3-10.3-12.8-13.3s-14.3-12-15-13.3s16.8-17,16.5-18.5s-6.8-2.3-10.3-3.5s-5-2.5-6.8-3s-3.5-3-6.2-5.5c-2.7-2.5-0.5-2.8,0-5s-3.8-4-6.3-7s-3.3-5.8-6.8-8.5s-3.5,1.8-5.3,2.3s-2,0.3-2.5-2.3s-1-3-2.3-7.5s-3.5-9.3-6.5-11.7s-4.8-0.8-8.3,0s-6,4.7-8,3.7s-4.5-1.5-5.8-1.5s-4.8-11.5-7.3-13.5s-11.3,4.8-13.5,4.8s-6.8-15.5-8.5-16.8s-18,7-20.5,9.5s2.3,6,2.3,7.5s-19.3,11-25.8,12.8s-4.8-3.5-8.3-5s-6.3,5.8-8,12.3s-3.3,7.3-9,9c-1.6,0.5-3.1,0.7-4.4,0.8c0,0.1,0.1,0.3,0.1,0.4c1.3,4,4.3,4.7,6,7.5s1.3,4.2,3.8,6.2s1.8,4.3,1.8,7c0,2.7,5.3,5.3,9.7,9.3c4.3,4,3,3.8,3.7,6.2c0.7,2.3,1.3,2,3,4.8s1.5,4.8,0,6.8s-1.2,4-0.5,8.2s-1.8,7.8-0.2,11.8c1.7,4,6.2,5,7.3,7.3c1.2,2.3-1.2,4-0.8,5.3c0.3,1.3,1.2,3.8,1.7,7.2c0.5,3.3,1.7,2.7,2.8,3.8c1.2,1.2,0.7,2.5,0.7,3.8c0,1.3,0.7,1.3,2.2,2.3s0.3,4.7,0,6.8c-0.3,2.2-3.2,3.2-5.8,3.2c-2.7,0-12.5-0.3-18.3,0.3s-25.3,0.7-25.3,0.7l-0.2-9l13.5-0.2c0,0,0.2-14.2,0.2-16.5s-0.3-3.3-0.3-5.3s1.7-1.8,1.7-1.8v-11.2c0,0-6.2-9.5-7.7-12.5s0-22-1.3-24.3c-1.3-2.3-5.5,0.2-7.2-1.2c-1.7-1.3-0.7-5.8-2.2-7c-1.5-1.2-13.5,0-15.3-1.2s0.7-12,0-14s-0.7-2-1.3-4.7c-0.7-2.7,0.5-8.5,1.2-15c0.7-6.5-1-7.5-2.2-10.8s-10.7,0.5-12.5-0.8c-1.8-1.3-0.2-2.8,0-3.7s-31.3,0.5-31.3,0.5v12.2c0,0-8.2-0.3-9,1.2c-0.8,1.5-2.5-0.2-5,0.8s-0.8,4.7-1.8,6.5c-1,1.8-3.3-1.5-5.2,0c-1.8,1.5,0.3,4,0.8,6s-0.3,2.3-1.7,4.7c-1.3,2.3-1.3,2.3-0.3,3.3s2.7,0.5,3.5,2.2c0.8,1.7,3.8,2.3,4.5,3.8s-2.2,3.3-4.5,3.5c-2.3,0.2-4.3,2.7-6.8,5.8s-3.5,5.3-4.7,9.8s0.7,4.7,2.2,6.5c1.5,1.8,1.3,3,0.2,4.8c-1.2,1.8-1.3,2.2,0,3.7c1.3,1.5,2.3,2.7,1.7,4.7s-2.2,2.3-2.2,4s2.2,1.2,6.5,2.7c4.3,1.5,3.2,1.7,4,5.8c0.8,4.2,1.3,4,4.8,9.3c3.5,5.3,1.8,6.5,3.3,6.8c1.5,0.3,1.8-2.3,3-2.8s1.7,0.2,1,2.3c-0.7,2.2-0.3,1.7,1,2.7s1.8,2.7,1.8,4c0,1.3,2.7,0.2,3.2,1.3c0.5,1.2-4.7,4.3-6.8,6.2c-2.2,1.8-2.7,3.8-3.2,5.5c-0.5,1.7-4.5,1.5-5.5,3.8c-1,2.3,8,12.7,9.3,14.2c1.3,1.5,0,2.2-0.7,2.8c-0.7,0.7,0.2,1.5,1.5,4c1.3,2.5-1,4.5,0.7,6.3c1.7,1.8,4,0.7,6.7,0.8c2.7,0.2,2,3,3.2,7.6c1.2,4.6,4.8,17,7.3,24.7c2.5,7.7,7.7,14.3,7.7,16.8s-4.8,3-7.7,4.5s-3.7,6.3-6.3,10c-2.7,3.7-3.5,2.3-6.3,2.7c-2.8,0.3-5.2,3.2-8.5,6.5c-3.3,3.3-12,7.7-12,10.2s6,13,8.3,17c2.3,4,2.7,9,3.2,12.8c0.5,3.8,4.3,6.8,5.2,11c0.8,4.2-1,7.2-2,7.7s-1,4.2,1.2,4.7c2.2,0.5,3.5,1.7,4.8,3.7s3.8,2.3,4.5,3.8s-1.5,2.2-2.2,5.5c-0.7,3.3-1,4.2-1,6s0,3.8-1.5,6.8s-2.2,2.3-0.5,7c1.7,4.7,3.8,4.8,4.8,6.7s-1.2,1.8-1.5,3.5c-0.3,1.7,4.8,1.8,4.8,4.5s1.8,4.2,3.7,6.8c1.8,2.7,0.8,5.2,3.8,9c3,3.8,3,7.7,3.7,10.7c0.7,3,4,2,3.2,4.8c-0.8,2.8-6.3,1.7-7.7,1.8c-1.3,0.2-1.8,3-3,5.2c-1.2,2.2-8.8,1.5-11.2,2.3c-2.3,0.8-2.5,5.2-2.7,9c-0.2,3.8-2.2,8.2-1.2,12c1,3.8,4.7,4.8,5.7,7.5c1,2.7-2,4.3-4.7,7.5c-2.7,3.2-3.2,11.3-3.2,14c0,2.7-0.7,5.2-3.7,6.8s-2,3.8-2.8,7.3s0.2,10.5-1,13.5c-0.5,1.2-1.2,1.8-2.3,2.1c0.6,0.8,1.2,1.4,1.8,1.7c2.3,1,7.8,0,7,3.3s-2.3,5.3-1.5,6.3s0.8,3-1.3,3.5s-5,2.3-5.3,4.5s0.6,6.5,1.9,6c1.3-0.5,1.8-2.3,3.6-2.3s0.3-1.8,4-1.8s3.3,0.5,8.8,2.5s5.3-2.2,9.5,1.5s2.5,5,4.3,6.2s2.5,3,0,5s-1,3.8-2.3,5.8s-3.3,4.3-1.5,5.8s4.2,3.3,5.4,6.5s2.9,5.3,5.6,5.3s2.5-4.3,4.8-2.5s1,1.7,3.8,3.6s3.8,4.4,6,5.6s8.3,0.5,10,3s1.3,2.8,3.8,3.5s3.8,1.5,5.5,3.3s-3.5-0.5,1.8,1.8s4.3,0.8,6.5,4.8s1.5,4,5.3,3.5s3.5,1.8,6.5,1.8s5.8,0.5,6.8,1.8c0.6,0.8,0.4,4.5,0.9,8.2c1.2-0.8,1.3-1.7,1.3-1.7s1.9,0.6,3.1,2.3s1,3,3.1,3.6s3.9,0.3,3.9,1.5s-1,2.4-0.6,3.5s1.3,1.4,1.8,2s0.3,0.4,3,0.8s2.8,2.9,3.9,1.3s0.4-5,1.9-5.9s2.5-2.1,2.8-5.4s0.3-4.5,0.8-6.3s-1.9-3.5-1.6-4.6s1-3.3,3.3-4.3s3-1.4,2.3-2.8s-1.3-1.8-0.4-3.9s1.3-1.9-2-4.5s-4.6-4.5-4.9-6.3s-1.3-1.9-1.9-4.3s-0.5-5.5-1.5-6.3s-5.5-1.6-4.4-2.6s2.8-0.5,3-4.3s0.9-3.6,1.8-6.4s0.4-3.9-1.3-4.6s-5.5-2.1-5.4-4.3s0.9-5.8-1.1-6.9s-5.3-0.6-5.3-1.6s1-0.6,3.6-5.3s2.1-6.8,3.6-6.8s4.8,1.1,7.4,0.8s4.6-1.9,7.1-3.3s4.3-1.8,5.1-3.1s-0.9-1.6-1.9-4.6s-2.5-4.8-2.5-7.4s-1-3.4-3.4-4.9s-5.5-3.6-3.9-5.5s8.6-10.3,9.5-12.9s-0.4-6,0.4-7.9s0.6-1,0.9-3.9s1.4-4,2.6-5.5s2.4-1.8,1.8-3.5s-2.3-2.4-1-3.8s3.9,1.4,6-3s1.9-8.3,1.6-10.1s-1.1-4.8,0.2-5.6s5.2,0.6,7.7-0.4s4-1.8,6.1-2.4s2.8-2,2.6-4.3s1.9-4.9,3.5-5.9s2.6-3,4-2.3s2.9,1.5,3.4,0.9s1-1.6,2-0.9s2.8,1.6,3.1,0.6s-0.3-3.5,1.3-4.6s2.8-1.9,2.6-3.6s-2.3-2.6-1-4.3s5.5-5.4,5.4-8.3s0-1.6,1-3.9s-0.8-1,1.1-3.9s3.3-2.6,3.3-4.6s-4.1-2.6-4.1-4.3s1.5-1.1,1.8-3.3s-2.3-2.8-2.3-6.5s-0.8-5.1,0.4-5.5s1.8-1.4,1.9-4.4s-1-3.1-2.9-3.5s-3.9-2.1-3.1-3.9s6-2.3,6-3.4s-4.3-1.1-7-3.1s-5.8-2-6-5.1s-0.8-11.1,0.3-13.1s2.4-3.1,5.8-3.5s12.3-0.5,16.1,0.8s10.1,6,12.8,7s2.6,1.3,5.4,2.8s4.6,3.8,6.4,2.8s2.3-4.3,4.3-3.6s1.9,2.4,4.5,3s4,2.1,5.4,3.8s3.9,5.9,5.5,5.6s1-2.6,4.6-3.1s4.5-0.8,6-2.3s3-0.8,2.5-2.1s-2.4-0.9-1.5-2.9s0.6-4,2.1-3.8s3.3,1.5,5,1.8c0.9,0.1,1.9,0.4,2.5,1c0.7-2.7,1-5.2,1.2-6.3C1557.5,1364,1559.2,1363.5,1562.2,1362.8z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Артеменко Иван Петрович", percent: "76,33", strong: "true" },
                    { text: "Беляев Юрий Иванович", percent: "4,40" },
                    { text: "Осипов Григорий Рудольфович ", percent: "2,51" },
                    { text: "Сорокин Игорь Васильевич", percent: "4,55" },
                    { text: "Юрков Илья Сергеевич", percent: "10,22" }
                ],
                photo: "/assets/img/candidates/10/Artemenko_Ivan_Petrovich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "2,98" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "15,53" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Чепель Владимир Вячеславович  ", percent: "70,36", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "8,82" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "1,56" },
                ],
                photo: "/assets/img/candidates/10/CHepel_Vladimir_Vyacheslavovich.JPG"
            }
        ],
        secretaries: [
            {
                fio: "Брежнева Наталья Михайловна",
                name: [
                    { text: "Одномандатный округ", percent: "81,37" },
                    { text: "Территориальная группа", percent: "75,07" },
                ],
                photo: "/assets/img/secretaries/10/brezhneva_natalya_mihajlovna.JPG"
            },
            {
                fio: "Тараськова Ирина Владимировна",
                name: [
                    { text: " Одномандатный округ", percent: "85,06" },
                    { text: "Территориальная группа", percent: "85,82" },
                ],
                photo: "/assets/img/secretaries/10/taraskova_irina_vladimirovna.jpg"
            },
            {
                fio: "Кетов Юрий Васильевич",
                name: [
                    { text: " Одномандатный округ", percent: "88,45" },
                    { text: "Территориальная группа", percent: "76,04" },
                ],
                photo: "/assets/img/secretaries/10/ketov_yurij_vasilevich.jpg"
            }
        ]
    },
    {
        id: "st9",
        name: "Армавирский одномандатный избирательный округ №7",
        info: "Часть Армавирского",
        voterCount: 47.29,
        d: "M1508.5,980.8c2.5-0.3,3.8-4.8,8.3-3.3s7.5,5,6.8,6.8s-10.3,9-9,11s8,9.3,10.5,9s6.8-11.3,12-9.8s8.5,2.3,8.5,4.3s1.5,1.8,1,5.5c-0.5,3.7-1.8,7,0.1,7.5s3.9,1.3,2.9,3.3s-3.8,3.3-4.3,5.5s-0.3,4.8,1,5.3s1.5,0.5,1.5,3s3.5,3.8,2,5.3s-4.5,3.3-2.3,5.8s0,4,2.6,8.5s5.1,10.5,8.9,10.6c3.8,0.1,4.5,1.1,5.5,2.4s2.8,4,5.5,0s6.1-8.8,6.9-7.3s0.3,3.8,3.8,3.3s6.3-4.8,6.3-4.8l-14-14.5l10.5-11.8c0,0-4-4-4.3-6.5s-1.1-1.7-3.8-4.2c-2.7-2.5,0.2-1.5,0-6.5c-0.2-5-8.5-13-12.2-13.5s-2.3,2.3-5,0.8s-1.5-0.5-4.8,1s-6,0.3-4.5-3.8s-0.8-8,1-9.8s5.3-3.8,3.3-6.3s-1.8-3.3,0-6s-2-3.3-0.3-6s5.8-3.8,1.5-6.5s-7.3-2.3-5.8-6.5s-1.3-2.5-8-5.3s-9-2.5-9-7.8c0-4,0.4-6.3-3.2-9.7c-0.2,0.5-0.5,0.7-1.3,0.5c-1.8-0.5-6.5,1.5-8.8,0.2s-4.5,3-6.5,5s1.8,5.3-3.8,9s-7,2.5-8.5,2.3s-15,12-15.9,14.5c-0.8,2.2,4.4,5.4,6,7.3c2.4,0.4,4.7,1.1,5.9,2.2C1498.7,973.5,1506,981,1508.5,980.8z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Дорошенко Андрей Николаевич", percent: "74,00", strong: "true" },
                    { text: "Гостева Марина Сергеевна", percent: "7,51" },
                    { text: "Гринглаз Владимир Борисович", percent: "3,93" },
                    { text: "Дубенко Юрий Владимирович", percent: "8,71" },
                    { text: "Журавлев Сергей Васильевич", percent: "3,24" }
                ],
                photo: "/assets/img/candidates/7/doroshenko_andrej_nikolaevich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "3,04" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "9,94" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Титов Алексей Николаевич ", percent: "74,52", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "8,90" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "1,53" },
                ],
                photo: "/assets/img/candidates/7/titov_aleksej_nikolaevich.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Галстян Кима Ашотовна",
                name: [
                    { text: "Одномандатный округ", percent: "88,15" },
                    { text: "Территориальная группа", percent: "87,62" },
                ],
                photo: "/assets/img/secretaries/7/galstyan_kima_ashotovna.jpg"
            },
            {
                fio: "Данцев Андрей Валерьевич",
                name: [
                    { text: " Одномандатный округ", percent: "78,32" },
                    { text: "Территориальная группа", percent: "85,97" },
                ],
                photo: "/assets/img/secretaries/7/dancev_andrej_valerevich.jpg"
            },
            {
                fio: "Кудина Лидия Андреевна",
                name: [
                    { text: " Одномандатный округ", percent: "86,01" },
                    { text: "Территориальная группа", percent: "83,6" },
                ],
                photo: "/assets/img/secretaries/7/kudina_lidiya_andreevna.jpg"
            }
        ]
    },
    {
        id: "st10",
        name: "Восточный одномандатный избирательный округ №8",
        info: "Успенское, Отрадненское, часть Новокубанского",
        voterCount: 51.27,
        d: "M1753.3,1294.4c-1.4-3.4-4-5-4-5s0.9-2.5-1.1-4.4s-4.8-5.8-7.1-9.8s-5-8.9-10.6-11.5s-16.1-6.5-20.9-7.8s-7.5-2.8-7.3-5.3s2.4-3.5,4.1-3.6s7.9,0,9-1.3s0.4-4-1-7.6s-2-5,0.1-6.4s9.6-1.6,14.4-1.3s5.3,0.1,5.9-2s-0.3-6.3,1.3-10.9s1.1-6.6,2.8-8s5-0.8,5.9-2s1.3-2.1,2.4-2.1s3-0.1,2.1-4s0.8-5.6-0.6-7.1s-1.9-0.1-5.3-1s-5.3-0.4-6-3.4s-1.8-2.1-3.5-1.4s-3.6,1.9-5.3,1.5s-1.9-0.9-4,0.5s-3.9,2.8-5.4,0.4s-2-9-3.4-11.1s-2.3-3.5-5.6-2.5s-7.4,4.4-9.8,3.4s-2.6-0.9-4-5.9s-1.4-7.4-4-14.4s-4.9-11.8-5.9-16.6s-1.4-8.8-2.5-9.3s-2.4,0.3-4.1,0.5s-3.5-0.1-3.9,1.6s2,3.1,0.9,4.1s-3.6,0.5-5,1.3s-4,3.3-5.8,2.3s-3.4-4.5-4.5-11.1s-0.3-8.9-3.1-11.5s-6.9-2.1-9.8-5.9s-2.3-6.8-4-12.6s-5.8-9.1-2.8-11s4.8-1.6,14.5-4s17.3-2.8,17.6-4.5s-0.4-4.6,1.4-4.6s6.9,0,8.8-2.4s-1.6-3.9-0.3-5.3s3.1-0.4,3.9-2s0-3.4,1.5-3.3s1.8,1.9,2.9,0.6s0.8-4.3,2.3-4.3s3.1,1.5,3.1,1.5s-2.1-5.5-3-8.5s-1.4-4.3,0-5.4s7.4-0.1,8.1-1.9s-1.5-4.1-2.5-7.9s-1.5-3.9-0.5-5.1s2.4-0.6,1.8-2.1s-0.4-2.5,0.5-3.6s0.3-3.5,2.1-4s3.4,0.5,4.6-3.5s0.9-22.9,0.9-22.9h4.8v-39.5h-66.6c0,0-2.4,0.4-3.8-2s-3.1-7.9-5.9-12.5s-5.3-6.6-5.3-9.4s-1.5-6.6-5.1-9.8s-4.6-6.4-6.6-7.6s-3.4-2.8-5.3-2.8s-3.4,0.3-3.8-0.4s-0.1-1.4-0.6-2.5s-0.9-1.6-1.3-3.9s0-34.8,0-34.8h3.9v-5.5h-3.9l-1.6-16.8h-15.6c0,0-0.9,0.5-2.3-1.8s-2.3-7.9-3.9-10.9s-1.5-5.6-2.6-5.6s-1.8,0.9-3,1.3s-1.9,0.9-2.3,2.6s-0.5,2.5-0.6,6.1s-0.1,4.6-1,4.8s-7.1-0.8-7.6,0s0.6,3.3-0.3,4.1s-19.3-0.4-24.4-0.5c-3.5-0.1-7.8,0.1-11.2,0.3c-0.5,5.5-1.5,12.9-3.5,15.7c-3.4,4.8-10.3,2.8-11.6,3.3s-0.8,12,0.5,16.3s1,5.5-0.5,8s2.5,3.8,4,6s2.8,6.8,3,10.5s2.5,2.8,2.8,8s3,5,1.3,7c-0.9,1.1-1.2,2-1.4,2.6c3.6,3.4,3.2,5.7,3.2,9.7c0,5.3,2.3,5,9,7.8s9.5,1,8,5.3s1.5,3.8,5.8,6.5s0.3,3.8-1.5,6.5s2,3.3,0.3,6s-2,3.5,0,6s-1.5,4.5-3.3,6.3s0.5,5.8-1,9.8s1.3,5.3,4.5,3.8s2-2.5,4.8-1s1.3-1.3,5-0.8s12,8.5,12.2,13.5c0.2,5-2.7,4,0,6.5c2.7,2.5,3.5,1.7,3.8,4.2s4.3,6.5,4.3,6.5L1573,1038l14,14.5c0,0-2.8,4.3-6.3,4.8s-3-1.8-3.8-3.3s-4.2,3.3-6.9,7.3s-4.5,1.3-5.5,0s-1.8-2.3-5.5-2.4c-3.8-0.1-6.3-6.1-8.9-10.6s-0.4-6-2.6-8.5s0.8-4.3,2.3-5.8s-2-2.8-2-5.3s-0.3-2.5-1.5-3s-1.5-3-1-5.3s3.3-3.5,4.3-5.5s-1-2.8-2.9-3.3s-0.6-3.8-0.1-7.5c0.5-3.7-1-3.5-1-5.5s-3.3-2.8-8.5-4.3s-9.5,9.5-12,9.8s-9.3-7-10.5-9s8.3-9.3,9-11s-2.3-5.3-6.8-6.8s-5.8,3-8.3,3.3s-9.8-7.3-12.8-10c-1.2-1.1-3.6-1.8-5.9-2.2c0.2,0.3,0.4,0.5,0.4,0.7c0.3,1.5-1.5,0.5-6.4,2.5s-15.3,5.3-18.1,7.3s-1,6-2,12.8s-1.5,13.8,0,20.3s2.3,4,2.5,7.8s3.5,2.8,7.3,5s7.8,4,7.8,7.5s4,4.5,7.5,4s5.3,2.3,8.5,5s6.3,8.8,7.5,12.3s-5.8,5.3-11.8,8.5s-5.8,3.8-3.8,9s8,1.8,10.8,3.3s0,4-4.5,6c-1.9,0.9-3.7,3.2-5.1,5.6c0.1,0.1,0.3,0.1,0.4,0.2c2,1,4.5-2.9,8-3.7s5.3-2.4,8.3,0s5.3,7.2,6.5,11.7s1.8,5,2.3,7.5s0.8,2.8,2.5,2.3s1.8-5,5.3-2.3s4.3,5.5,6.8,8.5s6.8,4.8,6.3,7s-2.7,2.5,0,5c2.7,2.5,4.5,5,6.2,5.5s3.3,1.8,6.8,3s10,2,10.3,3.5s-17.3,17.3-16.5,18.5s11.5,10.3,15,13.3s12.5,11.5,12.8,13.3s-11.8,10.5-12.3,12.5s-1.5,7,0.8,9.3s6.3,7,6.3,8s-7.5,1.5-7.3,3.5s10,14.3,10,16s-2.8,1.3-2.8,2.8s1.3,2.8-1,4.8s-5.3,3-4.3,4.5s3.8,3.8,2.8,6.5s-7.5,12.8-7.5,16.5s-2,6.5-4,7s-5.8-5.3-8.5-4.8s-8,4.5-12.8,7.5s-9,4-10.3,8.3s1.5,8.8,4.8,10s4.3,1.3,6.8,3.5s3.5,1.3,3.8,8.8s1.5,11.8,6,19.8s2,11.3,7,19.5s8.3,10.8,9,12.3s0.5,3.8,2.3,3.8s0-1.8,2.8-5.3s3-1.8,4.8-2.8s3.5-1.3,5.8,0s2.3,0.5,3.5,3s-0.5,3.3-3.3,3.3s-5.3,1.3-5.3,1.8s3,0.8,3,2.5s0.3,4.5-2.3,3.5s-3.5-2.8-6.5-2s-4.8,1.3-5.3,4c-0.2,1.1-0.6,3.6-1.2,6.3c0.7,0.5,1,1.3,0.6,2.4c-0.9,2.1-1.8,3.6-0.9,5.1s3.1-0.4,4.5-0.6s3-0.5,3,0.6s-1.6,4,0.6,5.1s2.6,0.6,6.9,0.3s9.3,0.6,11.3-0.9s1.3-3.1,3.5-3.5s3.8,2.6,6,2s1.9-2.8,4.3-1.5s1.9,2.5,4.3,3.5s5.6,3.1,6.4,6.3s1.8,5.6,0.8,6.5s-3,1.5-4.1-1s-0.5-4.6-1.5-4.9s-2.1,0.9-2.3,2.3s-0.4,3.3,0.8,4.9s2.6,3,2.4,4.1s-1.9,1.3-2.1,2.1s0.9,2.6-1,3.1s-2.5,0.5-2.8,1.6s0.1,2.8-1,3.8s-2.3,1.5-2.5,3.6s-0.5,3.5,1.1,3.3s2.5-1.8,4.1-1.8s2.1-0.4,2.5,2s0.8,4.6,2,4.8s1.3-0.8,1.3-2.6s0.3-2.5,1-2.4s0.6,1.4,2,0.1s2-0.5,3.3-1.9s0.3-3,1.4-3.8s3.1-2.4,3.1-1.4s-1.5,3.4-1.8,4.6s-1.1,2.8-2.4,3.4s-4.8,3.3-3.9,3.5s2.4-1.4,3.3-0.5s0.5,3.3,1.6,4.3s1.9,1.9,2,3.9s1,2.8,3.9,2.6s3.8,0.4,6.5,0.4s4.3,0.5,4.3-0.8s-1.4-2.6-1.9-4.1s-2.5-2-1.1-2.9s2.8,0.4,3,1.3s0.4,1.9,1.5,1.6s1.8-2.1,2.6-1.5s-0.3,3.6,1.6,3.1s2.8-1.9,1.6-4.1s-2.6-1.3-5.9-3.9s-4.9-2.5-4.1-4s5.1-1.6,6.6-0.8s4.3,1.6,5.6,4.8s1.5,3.8,1.5,5.1s2,1.6,2,1.6s1.5,1.8,3.4,1.6s2.6-1.1,4.8-4.6s2.9-4,4.9-5.1s5.5-1.1,8.4-1s5.3,1.3,6,0.5s0.6-1.1,1.5-2.3s0-3.1-1.4-4.1s-2-1.1-1.3-2.4s1.1-1.6,1.5-4.3s-2.5-4.9-1.1-7.9s1.6-4,1.6-4s-0.5,4.1,1,5s3.6-0.1,4.9,0.4s4.4,0.4,5.1-0.1s2.6-2.4,4-1.3s2.3,1.1,3.1,0.9s2.9,1.5,3.4,1.4s-1.5-4,0-6.1s2.3,0,2.4-5.3s-1.6-6.3-0.8-7.8s2.1-2.6,1.8-3.5s-3.1-1-1.9-3.1s1.5-2.1,7.5-4.6s8.9-5,11.8-5.1s4.9,1.3,7.3-0.4s3.5-1.1,5.4-4.5s2-6,3.9-8.5s5.5-4.9,6.4-7.8s0.5-3.5,3.1-10s7.4-16.8,11.1-27S1754.7,1297.8,1753.3,1294.4z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Шатохин Сергей Викторович", percent: "70,54", strong: "true" },
                    { text: "Абгарян Тигран Юрикович", percent: "6,10" },
                    { text: "Вершанский Максим Александрович ", percent: "3,72" },
                    { text: "Мишков Дмитрий Вячеславович", percent: "17,68" }
                ],
                photo: "/assets/img/candidates/8/SHatohin_Sergej_Viktorovich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "2,79" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "13,11" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Поголов Александр Викторович ", percent: "73,21", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "7,56" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "1,59" },
                ],
                photo: "/assets/img/candidates/8/Pogolov_Aleksandr_Viktorovich.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Черевко Елена Ивановна",
                name: [
                    { text: "Одномандатный округ", percent: "82,24" },
                    { text: "Территориальная группа", percent: "81.88" },
                ],
                photo: "/assets/img/secretaries/8/cherevko_elena_ivanovna.jpg"
            },
            {
                fio: "Кузнецова Татьяна Яковлевна",
                name: [
                    { text: " Одномандатный округ", percent: "81,15" },
                    { text: "Территориальная группа", percent: "79.41" },
                ],
                photo: "/assets/img/secretaries/8/kuznecova_tatyana_yakovlevna.jpg"
            },
            {
                fio: "Панин Виктор Борисович",
                name: [
                    { text: " Одномандатный округ", percent: "81.25" },
                    { text: "Территориальная группа", percent: "65,64" },
                ],
                photo: "/assets/img/secretaries/8/panin_viktor_borisovich.jpg"
            }
        ]
    },
    {
        id: "st11",
        name: "Кубанский одномандатный избирательный округ №9",
        info: "Часть Армавирского, часть Гулькевичкого, часть Новокубанского",
        voterCount: 48.15,
        d: "M1475.7,761.5c-1.5-1.3-4.5,0-6-1.5s-4.3,1-6.9-1.8c-2.7-2.8,0.2-3.8-2.6-5.8s-2.8,5.8-4,8.3s-3.3-2-4.8-2.5c-1.5-0.5-3-1-4.5,2s-3.8,0-8.5-0.5s-3.5,0-4.8,2.8s-3.3,2.5-6,1.5s-2.3-3.5-4.8-2s-2.8,0.5-3.3-1.8s-2-0.5-3.5,1.5s-0.5,3-2.5-0.5s-1.3-3-2.8-3s-1,3.8-3.3,4.8s-2.3,2.8-4.5,3s-3.5-2.3-4-4.3s-2.3-2.8-5.1-1.9s-3.7,2.6-5.9,3.1s-1.5,2-1.8,3s-2.3-0.8-3.8-2s1.5-3.3,2.5-3.5s-2-1.3-4.5,0s-3.5,6-5,7.8s-4.3-2.3-6,0.5s3.5,3.3,3,5.3s-3.8,0.3-6-1s-3,1.8-4.3,0.3s1.5-2,1.8-3.3s0-1.8-0.8-2.5s-2.3,0-3.5,1.8s-1.5,3.8-2.5,3s-1.5-2.3-2,0s-0.8,3.8-2.8,5.8s-9,2.3-11.5,1.8s-2.8,1.8-4.5-0.5s2.5-3.3,3-4.5s-1.8-0.8-6-1.3s-5,5.8-6,5.8s-0.8,3.5-2.8,4s-4,0.3-5.5,2.8s-1,3.5,0,6.8s6.5,1.8,6.5,1.8v20h31.8c0,0,0.5,7.3,2.5,11.2s4.8,2.6,12,1.8s25.8-2.5,30-1.5s2.3,6.8,2.5,7.9s4,0.4,5.8,2.1s0.3,5.8-1.5,8.5s1.5,17.8,0,20s-8.3,2-10.3,3.5s1.5,25.5-0.5,29.8s-4.5-0.3-6.8,1.5s-6.3,4.8-2.5,9.5s7.8,3,10.3,3s6.8,7.3,9.8,10s-0.3,5,3.3,8.1s4.5-0.8,7.8,0s7.3,5.9,10.8,6.9s4.5,4,4.5,4L1409,967l22,22l14.3-15l5.3,5c0,0,8.3-10.5,11.3-10.5s4.8,3.5,2.5,7c-0.9,1.3-0.3,2.8,0.8,4.2c0.2-0.3,0.4-0.5,0.7-0.7c2.8-2,13.2-5.3,18.1-7.3s6.7-1,6.4-2.5s-7.3-5.5-6.4-8s14.4-14.8,15.9-14.5s3,1.5,8.5-2.3s1.8-7,3.8-9s4.3-6.3,6.5-5s7-0.7,8.8-0.2s1-1,2.8-3s-1-1.8-1.3-7s-2.5-4.3-2.8-8s-1.5-8.3-3-10.5s-5.5-3.5-4-6s1.8-3.8,0.5-8s-1.8-15.8-0.5-16.3s8.2,1.5,11.6-3.3c2-2.8,3-10.2,3.5-15.7c-1.6,0.1-2.9,0.2-4,0.3c-3.3,0.4-10.9,0.4-16,0.6s-7,0.4-8.1-0.9s-0.3-1.9-1.8-3.4s-3.4-3.8-2.9-4.8s3.5-2.3,3.3-4.1s-0.6-2.8-1.6-3.4s-2.4-1.3-2-2.5s-0.9-2.8,0.3-3.4s2-2,1.1-2.8s-2.8-0.4-2.9-2s-0.9-2.9,0.5-4.9s3-2.8,2.8-4.4s-1-2.4-2.3-3.4s-2.6-0.6-4.5-2.1s-2.4-2.4-2-3.3s0.5-2.1-0.5-2.8s1.1-2.4-0.3-2.9s-2.8,0.1-2.9-1.9s2-2.6,2-5.1s-1.9-4.3-1.4-6.8s2.6-6,1.8-6.6s-1.8-0.9-2.5-0.3s-1.6,2.6-2.1,1.4s-0.5-1.5-0.4-4.8s-0.6-5.8-1.8-9.1c-0.9-2.6-1.4-5.1-2-6.6c-2,1.1-3.9,2-5,2.3C1475.7,766,1477.2,762.8,1475.7,761.5z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Харламов Владимир Иванович", percent: "80,13", strong: "true" },
                    { text: "Богданов Андрей Викторович", percent: "4,08" },
                    { text: "Высич Александр Николаевич", percent: "5,94" },
                    { text: "Давтян Грачик Акопович", percent: "5,26" },
                    { text: "Дегтярев Николай Анатольевич	", percent: "3,29" }
                ],
                photo: "/assets/img/candidates/9/Harlamov_Vladimir_Ivanovich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "2,49" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "15,53" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Петропавловский Николай Николаевич", percent: "70,36", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "8,82" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "1,56" },
                ],
                photo: "/assets/img/candidates/9/Petropavlovskij_Nikolaj_Nikolaevich.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Щалободин Виктор Валерьевич",
                name: [
                    { text: "Одномандатный округ", percent: "72,27" },
                    { text: "Территориальная группа", percent: "63,82" },
                ],
                photo: "/assets/img/secretaries/9/shchalobodin_viktor_valerevich.jpg"
            },
            {
                fio: "Твердова Светлана Николаевна",
                name: [
                    { text: " Одномандатный округ", percent: "86,64" },
                    { text: "Территориальная группа", percent: "76,89" },
                ],
                photo: "/assets/img/secretaries/9/tverdova_svetlana_nikolaevna.jpg"
            },
            {
                fio: "Браткова Наталья Николаевна",
                name: [
                    { text: " Одномандатный округ", percent: "85,58" },
                    { text: "Территориальная группа", percent: "81,6" },
                ],
                photo: "/assets/img/secretaries/9/bratkova_natalia_nikolaevna.jpg"
            }
        ]
    },
    {
        id: "st12",
        name: "Междуреченский одномандатный избирательный округ №11",
        info: "Курганинское, Тбилисское",
        voterCount: 48.56,
        d: "M1362.5,907.3c0,0-13.3-4.8-16.5-9s2.5-6.5,2.3-10s-5.5-3.5-10-5s-10-4.5-12.5-4.3s-1.8,2-3.3,2s-2.3-4.3-6.5,1.8s-5,9.8-7.5,8.8s-6,4.5-8.3,3s-3.5-3.8-5-6.3s-9.8-4.3-11.5-6.5s0.5-4,0.3-6s-3.3-2.8-1-5.2s3.5,2.2,5.3,0s3,1.2,4.3,1.2s1.5-4,1-6.2c-0.5-2.2,0-4.3,0.8-8.8s-0.3-11-0.3-11h4v-10h-10.5v-15.5c0,0-8.8,0.5-12.5-0.5s-2.5-3.3-2.5-8.5s0-5.8-1.5-7.8s-7.3,3.5-11.5,6s-7-0.3-8.8-3s1.5-4.8,4.3-9s2.8-4,5.8-6.5s1.5-7.8-0.3-13.8s-0.8-22.3-1.3-26.8s-2.8-2.3-3.3-5s1.8-2.5,3.8-2.8s-0.5-6,1.5-9.3s6,0,9.5,0.3s2.5-6,2.8-9.5s6.8-1.3,6.8-1.3v-7.5h-49.5v-28.3h-35.3v10.5c0,0-16,0-24.3,0s-7.5-2-9-2.5s-3.8,2.8-1.8,4.5s1.5,3.5-1,6.3s-0.8,13.8-0.8,13.8h-28.5v18.5c0,0,17.5-1,20.3,0s0.5,8.3,2,11.3s8.8,0.8,12.5,1.5s4-1.3,6,0s2.3,8.8,2.3,13.5s3.3,6.3,6.3,10s-1,16.8,0,21.3s4,1.3,4.2,7.3s-0.8,10-1.8,11.8s0,3,1.3,4.8s-1,3.8-2,4s0.5,11.3-1.3,17.5s1.8,2,6,4.3s6.3-2.8,7.3-5.3s2.8-1,6-2.8s-0.3-4,1.8-4s0.8,1.5,0.8,7s-1.5,7.8,0.8,10.8s-3,8.3-7.2,14.6c-4.2,6.3-2,7.7,1,10.2s8.5,0.8,1.2,14.3s-1.7,12.5-0.2,14.3c0.9,1.1-2.3,6.9-4.9,11.1c1.7,0.1,3.4,0.3,4.9,0.5c2.8,0.3,1.7-1.8,6.5-2.5s4.3-0.2,5.7-1.8c1.3-1.7,3.3-1.5,6.3-1.2s3.8,4.5,5.5,4.3c1.7-0.2-0.5-2.2,1-2.8s3.8,1.5,5.2,1.3c1.3-0.2,5-0.7,7.5-0.3s2.2-1.5,4-1.7c1.8-0.2,4.3,1.5,5.2,4c0.8,2.5,1.5,1,3.2,1.7s2.7-1,3.7-0.8c1,0.2,5.2,8.2,7.8,11.8s-0.7,4,1,6.8c1.7,2.8,3.5,2.7,6.8,2.3c3.3-0.3,2-1.5,3.2,0s-1.7,2.5-1.7,3s2.2,1.3,3.5,0.1c1.3-1.2,0.8-1.6,1.8,0s1.5,4.1,2,6.4c0.5,2.3,3.7,0.5,5.3,1.2c1.7,0.7,1.3,4,2.5,4.8c1.2,0.8,1.5-1.8,3.3-2.2c1.8-0.3,3.8,1.8,5,3.3c1.2,1.5,1.8,4.5,2.8,6.2s1.8-1.7,3.3-1.3c1.5,0.3,4.5,4.5,6.3,6.2c1.8,1.7,1.3-1.2,3.5-0.3c2.2,0.8,8.7,12.2,13.2,16.5s16.8,12.5,18.8,14.3c2,1.8,1.3,5.8,2.2,11c0.8,5.2,3.8,11.7,6,12.5c2.2,0.8,3.2,4.2,4.2,5.8c1,1.7,3,1.3,5.3,1.8s2,2.2,1.3,9c-0.7,6.8,2.8,12.3,4.3,14c1.5,1.7,9.5,11,11.2,16.8c1.7,5.8,0.5,13.2,1,18.5s4.8,7.7,6.2,9.8c1.3,2.1-0.2,7.3,0.9,11.3c1.3-0.1,2.7-0.3,4.4-0.8c5.8-1.8,7.3-2.5,9-9s4.5-13.8,8-12.3s1.8,6.8,8.3,5s25.8-11.3,25.8-12.8s-4.8-5-2.3-7.5s18.8-10.8,20.5-9.5s6.3,16.8,8.5,16.8s11-6.8,13.5-4.8s6,13.5,7.3,13.5c1.2,0,3.4,0.4,5.4,1.3c1.4-2.4,3.2-4.7,5.1-5.6c4.5-2,7.3-4.5,4.5-6s-8.8,2-10.8-3.3s-2.3-5.8,3.8-9s13-5,11.8-8.5s-4.3-9.5-7.5-12.3s-5-5.5-8.5-5s-7.5-0.5-7.5-4s-4-5.3-7.8-7.5s-7-1.3-7.3-5s-1-1.3-2.5-7.8s-1-13.5,0-20.3c0.9-6-0.4-9.9,1.3-12.1c-1.1-1.4-1.6-2.9-0.8-4.2c2.3-3.5,0.5-7-2.5-7s-11.3,10.5-11.3,10.5l-5.3-5l-14.3,15l-22-22l26.3-26.3c0,0-1-3-4.5-4s-7.5-6.1-10.8-6.9s-4.3,3.1-7.8,0s-0.3-5.3-3.3-8.1s-7.3-10-9.8-10s-6.5,1.8-10.3-3c-2.1-2.7-1.8-4.8-0.6-6.5l-16.1-9.5L1362.5,907.3z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Галенко Александр Петрович", percent: "68,88", strong: "true" },
                    { text: "Нагнибеда Александр Иванович", percent: "16,40" },
                    { text: "Никитина Лариса Ивановна", percent: "9,75" },
                    { text: "Сагарьян Роман Иванович", percent: "2,90" }
                ],
                photo: "/assets/img/candidates/11/Galenko_Aleksandr_Petrovich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "3,67" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "9,88" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Савельев Пётр Александрович ", percent: "65,74", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "16,97" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "2,16" },
                ],
                photo: "/assets/img/candidates/11/Savelev_Petr_Aleksandrovich.png"
            }
        ],
        secretaries: [
            {
                fio: "Чекрышова Елена Владимировна",
                name: [
                    { text: "Одномандатный округ", percent: "82" },
                    { text: "Территориальная группа", percent: "77" },
                ],
                photo: "/assets/img/secretaries/11/chekryshova_elena_vladimirovna.jpg"
            },
            {
                fio: "Аникин Сергей Михайлович",
                name: [
                    { text: " Одномандатный округ", percent: "85,9" },
                    { text: "Территориальная группа", percent: "83,3" },
                ],
                photo: "/assets/img/secretaries/11/anikin_sergej_mihajlovich.jpg"
            },
            {
                fio: "Картовец Петр Владимирович",
                name: [
                    { text: " Одномандатный округ", percent: "70" },
                    { text: "Территориальная группа", percent: "46" },
                ],
                photo: "/assets/img/secretaries/11/kartovec_petr_vladimirovich.jpg"
            }
        ]
    },
    {
        id: "st13",
        name: "Кавказский одномандатный избирательный округ №12",
        info: "Кавказское, часть Гулькевичкского",
        voterCount: 50.28,
        d: "M1402.2,646.5h-33.1v12.4h-24.8V673h-30c0,0,0.4,9.5,0,11.9s-3.8,0.8-6,2.4s-10.6,1-15.1,2.6s-10.3,9.6-10.3,9.6s-9.9-10-12.5-13.6s-4.4-8.4-4.4-8.4h-34.8v8l-1.5,1.8h0.8v28.3h49.5v7.5c0,0-6.5-2.3-6.8,1.3s0.8,9.8-2.8,9.5s-7.5-3.5-9.5-0.3s0.5,9-1.5,9.3s-4.3,0-3.8,2.8s2.8,0.5,3.3,5s-0.5,20.8,1.3,26.8s3.3,11.3,0.3,13.8s-3,2.3-5.8,6.5s-6,6.3-4.3,9s4.5,5.5,8.8,3s10-8,11.5-6s1.5,2.5,1.5,7.8s-1.3,7.5,2.5,8.5s12.5,0.5,12.5,0.5v15.5h10.5v10h-4c0,0,1,6.5,0.3,11s-1.3,6.7-0.8,8.8c0.5,2.2,0.3,6.2-1,6.2s-2.5-3.3-4.3-1.2s-3-2.4-5.3,0s0.8,3.2,1,5.2s-2,3.8-0.3,6s10,4,11.5,6.5s2.8,4.8,5,6.3s5.8-4,8.3-3s3.3-2.8,7.5-8.8s5-1.8,6.5-1.8s0.8-1.8,3.3-2s8,2.8,12.5,4.3s9.8,1.5,10,5s-5.5,5.8-2.3,10s16.5,9,16.5,9l9.8-14.5l16.1,9.5c0.9-1.3,2.2-2.3,3.1-3c2.3-1.8,4.8,2.8,6.8-1.5s-1.5-28.3,0.5-29.8s8.8-1.3,10.3-3.5s-1.8-17.3,0-20s3.3-6.8,1.5-8.5s-5.5-1-5.8-2.1s1.8-6.9-2.5-7.9s-22.8,0.8-30,1.5s-10,2.1-12-1.8s-2.5-11.2-2.5-11.2H1326v-20c0,0-5.5,1.5-6.5-1.8s-1.5-4.3,0-6.8s3.5-2.3,5.5-2.8s1.8-4,2.8-4s1.8-6.3,6-5.8s6.5,0,6,1.3s-4.8,2.3-3,4.5s2,0,4.5,0.5s9.5,0.3,11.5-1.8s2.3-3.5,2.8-5.8s1-0.8,2,0s1.3-1.3,2.5-3s2.8-2.5,3.5-1.8s1,1.3,0.8,2.5s-3,1.8-1.8,3.3s2-1.5,4.3-0.3s5.5,3,6,1s-4.8-2.5-3-5.3s4.5,1.3,6-0.5s2.5-6.5,5-7.8s5.5-0.3,4.5,0s-4,2.3-2.5,3.5s3.5,3,3.8,2s-0.5-2.5,1.8-3s3.1-2.2,5.9-3.1s4.6-0.1,5.1,1.9s1.8,4.5,4,4.3s2.3-2,4.5-3s1.8-4.8,3.3-4.8s0.8-0.5,2.8,3s1,2.5,2.5,0.5s3-3.8,3.5-1.5s0.8,3.3,3.3,1.8s2,1,4.8,2s4.8,1.3,6-1.5s0-3.3,4.8-2.8s7,3.5,8.5,0.5s3-2.5,4.5-2c1.5,0.5,3.5,5,4.8,2.5s1.3-10.3,4-8.3s-0.1,3,2.6,5.8c2.7,2.8,5.4,0.3,6.9,1.8s4.5,0.3,6,1.5s0,4.5,3.3,3.8c1.1-0.2,3-1.2,5-2.3c-0.2-0.4-0.3-0.8-0.5-1.1c-0.8-1.3-2.4-1.5-5-2.3s-4.4-0.8-5.9-1.9s-1.6-2.5-3.9-4.4s-4.3-2.6-4.3-2.6l-0.3-32.3h-27v-43.1c0,0,1.6-2.8,2-4.6s0.4-6-0.9-7s-2.5-6-1.8-10.4c0.6-3.7,0.2-14.1,0-17.1h-34.4V646.5z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Красавцев Борис Евгеньевич", percent: "78,17", strong: "true" },
                    { text: "Ковалев Николай Анатольевич", percent: "9,97" },
                    { text: "Кожевников Юрий Васильевич", percent: "3,64" },
                    { text: "Кубрак Евгений Николаевич", percent: "1,25" },
                    { text: "Сватенко Дмитрий Сергеевич", percent: "6,68" }
                ],
                photo: "/assets/img/candidates/12/Krasavcev_Boris_Evgenevich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "1,56" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "10,06" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Караваева Ирина Владимировна  ", percent: "77,08", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "10,39" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "0,69" },
                ],
                photo: "/assets/img/candidates/12/Karavaeva_Irina_Vladmirovna.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Скопылатова Галина Александровна",
                name: [
                    { text: "Одномандатный округ", percent: "37" },
                    { text: "Территориальная группа", percent: "73,67" },
                ],
                photo: "/assets/img/secretaries/12/skopylatova_galina_aleksandrovna.jpg"
            },
            {
                fio: "Бурсова Рита Александровна",
                name: [
                    { text: " Одномандатный округ", percent: "51" },
                    { text: "Территориальная группа", percent: "74,17" },
                ],
                photo: "/assets/img/secretaries/12/bursova_rita_aleksandrovna.jpg"
            },
            {
                fio: "Яблонская Надежда Анатольевна",
                name: [
                    { text: " Одномандатный округ", percent: "50" },
                    { text: "Территориальная группа", percent: "77,21" },
                ],
                photo: "/assets/img/secretaries/12/yablonskaya_nadezhda_anatolevna.JPG"
            }
        ]
    },
    {
        id: "st14",
        name: "Челбасский одномандатный избирательный округ №13",
        info: "Тихорецкое, часть Выселковского",
        voterCount: 51.28,
        d: "M1335.5,627.5v-9.8h-16.9c0,0,0.6-56,0-70c-0.6-14,0.4-33-3.1-34.5s-3.8-1.8-5.3-3.3s-3.5-1.8-4,0s0,4.3-1.8,3.5s-3.8-4.7-6-4.7c-2.3,0-3.5,4-5,4.5s-4.3,2.5-11.8,0s-6-3.9-15.3-4.5s-34,0-34,0V454h-14v9.8H1196c0,0,0.3,4-3.8,4.3s-10.3-0.5-12.8,1s-0.3,6.3-2.5,6.3s-4.5-2.8-7.3-2s-3,3.3-3.3,11s-1.3,19.3,1.8,20.5s5.5,1.5,5,5.5s1.5,7.5,0.5,9s-5.5-1.3-7.6-1.8c-2.1-0.5-4.1,1.3-6.9,4.5s-4.3,3-6.5,0.8s-1.5-7.8-5.3-6.8s-6,8.3-8.3,9.8s-6.5-0.3-8.8-2.3s-4.8-4.5-7.3-4.3s-1.8,2.8-4.3,5.3s-5,4.5-6.5,3.3s-3.5-1.8-5,0.5s-11.3,23.5-11.3,23.5s-4.3-2.8-5.8-2.8s-1.5,2.8-3.3,2.8s-4.5-3-6.5-3s-0.5,3.5-5.8,3.8s-17.3,1.3-18.3-2s8.3-8,4-10s-29.8,0.8-31.8,0s-4,1.3-3.8,7s1.3,6.8-3.3,4.5s-4.8-1.3-8,0s-3.3,1-6.3,0.3s-0.8-3.5-3.5-3.8s-5.5,0.8-5.5,4.8s0,29.3,0,29.3h6.5v17c0,0,16.3,2,21-0.8s5.8-1.5,8.3-0.3s-1.3,1.5,2.5,1.3s3-1.8,5-0.8s28.5,12.8,28.5,12.8l-13.8,31.3l14,7.5c0,0-2.8,1.3-2,2.3s5.3,6.5,7.5,6.3s1.8-3,3.8-2s3,4,6.5,3.3s2.5-5,8.3-5.3s42.5-0.3,42.5-0.3v4l38.8-1l-0.3,16.5h-4.6V689h5.9c0,0,3.5-5.3,4.3-4s-1.3,6,0,6.5s4.8,0.3,4.8,1.8c0,0.6-0.1,2.4-0.2,4.5c5.4,0,9.7,0,9.7,0v-10.5h34.4l1.5-1.8v-8h34.8c0,0,1.8,4.8,4.4,8.4s12.5,13.6,12.5,13.6s5.8-8,10.3-9.6s12.9-1,15.1-2.6s5.6,0,6-2.4s0-11.9,0-11.9h29.1v-45.5H1335.5z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Лоцманов Дмитрий Николаевич", percent: "73,56", strong: "true" },
                    { text: "Батищев Леонид Анатольевич", percent: "3,06" },
                    { text: "Белобрицкий Артем Алексеевич", percent: "11,79" },
                    { text: "Калоша Олег Игоревич", percent: "9,15" },
                    { text: "Халин Илья Сергеевич", percent: "1,53" }
                ],
                photo: "/assets/img/candidates/13/Locmanov_Dmitrij_Nikolaevich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "2,90" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "10,51" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Усенко Сергей Павлович  ", percent: "70,28", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "10,64" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "0,84" },
                ],
                photo: "/assets/img/candidates/13/Usenko_Sergej_Pavlovich.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Артеменко Дмитрий Борисович",
                name: [
                    { text: "Одномандатный округ", percent: "77,09" },
                    { text: "Территориальная группа", percent: "76,82" },
                ],
                photo: "/assets/img/secretaries/13/artemenko_dmitrij_borisovich.jpg"
            },
            {
                fio: "Шимбарева Валентина Сергеевна",
                name: [
                    { text: " Одномандатный округ", percent: "78,52" },
                    { text: "Территориальная группа", percent: "78,27" },
                ],
                photo: "/assets/img/secretaries/13/shimbareva_valentina_sergeevna.jpg"
            },
            {
                fio: "Орищенко Татьяна Анатольевна",
                name: [
                    { text: " Одномандатный округ", percent: "75,5" },
                    { text: "Территориальная группа", percent: "77,48" },
                ],
                photo: "/assets/img/secretaries/13/orishchenko_tatyana_anatolevna.JPG"
            }
        ]
    },
    {
        id: "st15",
        name: "Бейсугский одномандатный избирательный округ №14",
        info: "Усть-Лабинское, часть Выселковского",
        voterCount: 51.26,
        d: "M1008.2,608.3c-2.3,4-6,6.3-6,8.7c0,2.3,0,56.3,0,56.3h16.7v4h4.7V724h6.3c0,0,3-1.7,7-1.7s12.7,0,12.7,0v17h-2.3c0,0,2.3,3.3,2.3,8s0,14,0,14h-15.3v31.3c0,0-3-2.7-6-2.3s-4,4-6,4s1.3,5,1.3,5h-22.7V820h-12v5h-34.3v7.7h-3.7v5.7h2.3v10c0,0,2,1,2.3,2c0.3,1-2,3.3,3.3,3.3c5.3,0,37.3,0,37.3,0s0.3,22.3,0.3,25.7s-2.7,5-2.3,8s2.7,5.7,0.7,7.7c-1.4,1.4-1,3.2-0.5,5.8c0.5,0,1.1-0.1,1.7-0.5c2.2-1.2,1-3.8,2.2-5.7c1.2-1.8,2.7-2.8,5.7-2.7c3,0.2,3.3,1.2,4.5,0.2c1.2-1,1.3-5.5,1.3-9.2c0-3.7,0-4.2,4.2-7.2c4.2-3,8.2-3,12.7-5.3c4.5-2.3,6.8-4.3,9.2-4.8s4.2,1.8,7.2,3.5c3,1.7,7,1.7,11.3,4.3c4.3,2.7,4.5,5.5,3.5,6.7c-1,1.2-1.2-0.3-3.2,0c-2,0.3,0.2,2-1.2,5c-1.3,3-0.7,3.8,0.5,3.8c1.2,0,2.2,1.5,3.5,3.2c1.3,1.7,4,2.2,8.7,3.3c4.7,1.2,6.8,2.2,7.3,4.5c0.5,2.3-1,3.5-1.3,4.7c-0.3,1.2,1.7,1.8,2.6,0.8s1.9,0.5,3.4,0.3s1.8-1.5,3.8-2.2c2-0.7,3.3,1.2,5.8,3.3s5.8,0.4,6.7,0c0.8-0.3,2.2,2,3.3,3.1c1.2,1.1,7.2,0.2,9.8,1.1c2.7,0.8,2.3,0.2,2,2.3c-0.3,2.2-0.7,1.3,0.5,2c1.2,0.7,1.8-1.2,1.8-2.3c0-1.2,0.7-1.8,2.8-0.7c2.2,1.2,0.8,4.2,1.5,5.7s3.7,0.5,6.5,0.3c2.8-0.2,1.3,4.5,2.8,5.7c1.5,1.2,3.7,0.7,5.3-0.5c1.7-1.2,1.8,0.7,3.2,0.7c1.3,0,1.5-1.2,2-2.8c0.5-1.7,7.2-0.7,9.5-0.3c2.3,0.3,1.7,1.7,1.5,2.7c-0.2,1-4,3.5-1.7,4.7c2.3,1.2,6-6.3,7.2-6.5c1.2-0.2,2,1.2,3.7,1.7s3.2-1,4.2-1s1.7,1.7,9,1.2c7.3-0.5,7.8-1.2,11-3.8c3.2-2.7,4.8-3.2,7.7-4.2c1.3-0.5,2.8-0.6,4.3-0.5c2.6-4.2,5.9-10,4.9-11.1c-1.5-1.8-7.2-0.8,0.2-14.3s1.8-11.8-1.2-14.3s-5.2-3.8-1-10.2c4.2-6.3,9.5-11.6,7.2-14.6s-0.8-5.3-0.8-10.8s1.3-7-0.8-7s1.5,2.3-1.8,4s-5,0.3-6,2.8s-3,7.5-7.3,5.3s-7.8,2-6-4.3s0.3-17.3,1.3-17.5s3.3-2.3,2-4s-2.3-3-1.3-4.8s2-5.8,1.8-11.8s-3.2-2.8-4.2-7.3s3-17.5,0-21.3s-6.3-5.3-6.3-10s-0.3-12.3-2.3-13.5s-2.3,0.8-6,0s-11,1.5-12.5-1.5s0.8-10.3-2-11.3s-20.3,0-20.3,0v-18.5h28.5c0,0-1.8-11,0.8-13.8s3-4.5,1-6.3s0.3-5,1.8-4.5s0.8,2.5,9,2.5c3.9,0,9.6,0,14.5,0c0.1-2.1,0.2-3.9,0.2-4.5c0-1.5-3.5-1.3-4.8-1.8s0.8-5.3,0-6.5s-4.3,4-4.3,4h-5.9v-14.8h4.6l0.3-16.5l-38.8,1v-4c0,0-36.8,0-42.5,0.3s-4.8,4.5-8.3,5.3s-4.5-2.3-6.5-3.3s-1.5,1.8-3.8,2s-6.8-5.3-7.5-6.3s2-2.3,2-2.3l-14-7.5l13.8-31.3c0,0-26.5-11.8-28.5-12.8s-1.3,0.5-5,0.8s0,0-2.5-1.3s-3.5-2.5-8.3,0.3c-3.3,1.9-12,1.5-17.1,1.1C1009.4,602.8,1009.4,606.3,1008.2,608.3z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Зюзин Владимир Александрович", percent: "74,39", strong: "true" },
                    { text: "Пронин Сергей Александрович", percent: "6,52" },
                    { text: "Проскурякова Анжела Михайловна", percent: "5,27" },
                    { text: "Тимошенко Виктор Николаевич", percent: "8,74" },
                    { text: "Фитисов Иван Сергеевич", percent: "3,48" }
                ],
                photo: "/assets/img/candidates/14/Zyuzin_Vladimir_Aleksandrovich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "3,68" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "10,97" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Шендрик Евгений Демьянович  ", percent: "71,08", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "11,45" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "1,58" },
                ],
                photo: "/assets/img/candidates/14/SHendrik_Evgenij_Demyanovich.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Островский Владимир Александрович",
                name: [
                    { text: "Одномандатный округ", percent: "70,22" },
                    { text: "Территориальная группа", percent: "92,64" },
                ],
                photo: "/assets/img/secretaries/14/ostrovskij_vladimir_aleksandrovich.jpg"
            },
            {
                fio: "Драгунова Ольга Анатольевна",
                name: [
                    { text: " Одномандатный округ", percent: "68,81" },
                    { text: "Территориальная группа", percent: "78,24" },
                ],
                photo: "/assets/img/secretaries/14/dragunova_olga_anatolevna.jpg"
            },
            {
                fio: "Писаренко Светлана Васильевна",
                name: [
                    { text: " Одномандатный округ", percent: "78,37" },
                    { text: "Территориальная группа", percent: "80,52" },
                ],
                photo: "/assets/img/secretaries/14/pisarenko_svetlana_vasilevna.jpg"
            }
        ]
    },
    {
        id: "st16",
        name: "Предгорный одномандатный избирательный округ №31",
        info: "Белореченское, часть Апшеронского",
        voterCount: 32.91,
        d: "M905.7,1088c2,4,6.5,5.5,6,12s-5.5,16.5-9.5,22s-7.5,3.8-20,2.7s-25.5-5.3-32,0s-7.5,10.3-10.5,10.8s-11.5-8.5-13-6s0,3-2.5,6s-2.5,2-7,8.5s-9,8-9.5,12.5s0,7.5,0,7.5s-5-4.5-6,0s2.5,6.5,4.5,9.5s3.5,10.5-1,10.5s-7,0-7.5,4.5s-2.5-2-4.5,0c-1,1-2.5,7-3.6,12.5c3.1,1.6-0.5,2.6,3.1,3.8c3.7,1.2,11.2-1,13.5,2.2c2.3,3.2,5.2,13.2,9.3,15.5c4.2,2.3,8,7.8,7.5,9.3s-4.7,1.3-4.8,2.8s-1,3.7-4.2,3.7c-3.2,0-11.3-0.2-10.7,1.7c0.7,1.8,8,5,11.7,6.5c3.7,1.5,8.5,4.5,9.8,4c1.3-0.5,1.3-2,2.7-2.5c1.3-0.5,4.8-0.8,4.2-2.8s1-3.5,1.8-3c0.8,0.5,2.7,3.2,5,5.2c2.3,2,3,3.8,1.7,5.5c-1.3,1.7-2.2,3.2-0.3,3.3c1.8,0.2,8.2-5,8.8-5.3c0.7-0.3,1.2-4.5,0-6s-2.8-4.2-2-5.7s5.2-1.8,6.5-5.2c1.3-3.3,1.5-4.5,4.2-6c2.7-1.5,4.8-4,6.8-3.2c2,0.8,4-1.3,6.5-2.5c2.5-1.2,4.5,2,9.3,3.7c4.8,1.7,6.7,0.5,14.2,2.7s13.5,4.8,16.2,4.3c2.7-0.5,0.5-3,4-3.8s5.2,0.8,9.5,0.3c4.3-0.5,2.8-2.8,5.8-5c3-2.2,2.2-3,4.3-2.3c2.2,0.7,4.7,3.8,7.2,3.8s4.8,1.3,7,1.1c2.2-0.2-0.7-2.2,5-3.1c5.7-0.8,8.3-1,10.5-3.7c2.2-2.7,1.7-5.2,5.3-8.5c3.7-3.3,5.5-4.6,4-6s-2.7-1.9-3.3-4.2s-7-3.3-12.8-5.8c-5.8-2.5-16.5-5.8-15.7-7.7s12.8-7,15.3-9.7c2.5-2.7,4.8-12.5,8.3-14.2c3.5-1.7,8.5-2.8,11.7-6.8c3.2-4,2-5,7.3-8c5.3-3,7.8-4.8,8.7-7.2c0.8-2.3-1.2-2.5,2.8-4.3c4-1.8,7.5-6,10-6.5s10.5,8.2,13.2,10.3c2.7,2.2,4.5,5.2,7,3.5c2.5-1.7,4.3-4.8,6.3-4.7s3.3,3.8,5.2,3.5c1.8-0.3-0.3-3.3,1.3-5c1.7-1.7,2.5-2.7,2.5-2.7s-0.8-1.7,1.3-2.3s2.2-2.3,2.7-4.2c0.5-1.8,0.5-5.3,2.3-5.3s4,1.8,4.8,4.8c0.8,3-1.2,5.2,1.5,6.3c2.7,1.2,8.3,3.2,11.8,1c3.5-2.2,7.1-6.2,9.3-5.7c2.2,0.5,1.9,1.8,4.7,1.8c2.8,0,5-1,4.7,0.7c-0.3,1.7,0,4.2-1.8,4.5s-3.5,2.7-2.5,3.5s1.8,2.7,0.2,3.8c-1.7,1.2-4.2,2.3-3.7,3.8s25.5,25.7,25.3,28.2c-0.2,2.5-3.8,10.7-6.7,12.9c-2.8,2.2-7.5,4.7-9.8,7.4c-2.3,2.7-6.3,7.6-8,8c-1.7,0.5-5-2.1-5.7,0c-0.7,2.1-1.3,3.6-3.2,4.1s-3.5,1.3-3.7,2.8c-0.2,1.5-0.2,3.5-0.5,5.7c-0.3,2.2,1,1.8,2.5,3.2s5,5.7,2.3,6.5c-2.7,0.8-3.5-2-5.2-2.8c-1.7-0.8-2.7-0.3-4,0.8s-2,3.3-3.8,2.2c-1.8-1.2-2.8-0.8-4.5,0.7c-1.7,1.5-3.8,3.2-2.8,4.3c1,1.2,4,5.5,7,5.5s4.8-2.2,5.8-0.7s1.7,3.2,5.2,5.2s12.7,6,18.5,6.8c5.8,0.8,15.3,2.2,16.5,1.7c1.2-0.5,0-13,0-13h11.7v11h12.4c0.2-1.5-1.7-2.7-2.9-3.8c-1.3-1.3-0.5-1.7-0.8-5c-0.3-3.3-0.2-5.3,1-6.8c1.2-1.5,3.8-1.3,3.8-1.3l0.7-57.7h-4.2v-16c0,0,15.8,0.7,17.5,0s0-2.5,0.7-4.2c0.7-1.7,0.8-2.8-0.7-4.7c-1.5-1.8-2.7-1.2-3.3-2.2c-0.7-1-1.2-1.8,0-4c1.2-2.2-0.3-4.5-1.3-5.3c-1-0.8-1.5-2-2-3.2s0.2-1.3,1.3-1.8c1.2-0.5,1.3-2.3,1.2-3.3c-0.2-1-1.7-1.5-3.7-2.3s-2.5-2.3-2.5-3.5s3.2-3.8,4-5.5c0.8-1.7,2.5,0.5,3.8,0s0.3-3.3,1-5.8s-3.3-5.2-4.5-6.3c-1.2-1.2,0.2-1.8,0.5-3c0.3-1.2-0.3-1-0.5-2.2c-0.2-1.2,0.8-2.2,0.8-2.2l9.5-9l5.5,5.2l2.5-2.8l6.8,6.7c0,0,7-6.7,11.3-11s2.2-3.3,2.2-4.5s-3.2-2.5-5.3-4.7c-2.2-2.2-2.3-5.2-3.2-8.2c-0.8-3-2.7-5.2-4.8-6.7c-2.2-1.5-1.5-4.3-3.2-4.8c-1.7-0.5-4.5,2.5-6.8,3.3c-2.3,0.8-2.3-2.8-3-6c-0.7-3.2-2-5.5-2.7-7.5c-0.7-2,0.8-3.3,1.8-3.2c1,0.2,1.5,3.5,2.8,3.8c1.3,0.3,2.2-0.3,4.7-1.8s3-2,4.5-2.8s-0.7-3.2-1.7-5.7s-2.3-1.2-3.7-0.5c-1.3,0.7-1.3,1.3-3.2,0.5c-1.8-0.8-3.3-7.8-4.8-12.7c-1.5-4.8-3.2-4.8-3.2-6.7c0-1.8,3.5-2.2,6.2-2.5c2.7-0.3,2.7,0.2,3.2-1.8s-5.3-10.8-6.5-13.7c-1.2-2.8-4.5-1.7-6-2c-1.5-0.3-0.8-1.8-1.5-6.3c-0.7-4.5-1.5-4.5-2.7-8.8c-1.2-4.3-2.8-17.8-4-19.5c-1.2-1.7-3.2,0.8-4-0.3c-0.8-1.2-1-5.2-1-7.7s-3-2-5.3-1.5c-2.3,0.5-3.8,2.5-4.7,4c-0.8,1.5-4.2,1.5-6,1.7c-1.8,0.2-6.7,3.2-13,5c-6.3,1.8-8,3.5-11.2,5.2s1.5,2.7,1.5,6.2s-1.3,2.2-2.8,2.8s-2.7,0.2-4.2,1.3c-1.5,1.2-2.5,1.3-7.2,2.8c-4.7,1.5-2.3,1.3-6.3,3.5c-4,2.2-4.5,1-5.3-0.5c-0.8-1.5,0.2-2.8-1.8-4.5c-2-1.7-1.2-2.7-0.3-4.5c0.8-1.8,2.2-1.7,2.2-3.2s-1.3-1.2-2.7-0.8c-1.3,0.3-1.3,1.3-2.8,1.3s-0.3-4.3-1.5-5.7c-1.2-1.3-5.7,1.3-7.7,2.8s-0.8,2.3,0.5,4.3s-1.2,2.2-3.8,3.8c-2.7,1.7-3.3,3.2-6.3,2c-3-1.2-3.7-3.7-5-6.5c-1.3-2.8-1-1.7,1-3.8s7.5-5.3,10-6.8s0.5-3.2,1.3-4.8c0.8-1.7,3-1,3.5-2.2c0.5-1.2-1.7-1.3-3.2-1c-1.5,0.3-2-0.7-1.2-1.7c0.8-1,3-0.3,4-3.8s-0.2-3.2-3.5-4.5c-3.3-1.3-3.2-3.3-5.2-4.2s-3.3,1.3-6.3,1.2c-3-0.2-6.2,0.8-7.3,0.5c-1.2-0.3,1.2-2,1-3.2s-1.3-1.3-2.8-1.2c-1.5,0.2-0.8,2.5-0.8,2.5s-2-0.7-3.5-0.5c-1.5,0.2-1.2,1-1.2,3s-1.5,0.7-4.5,0.8c-3,0.2-4.8-0.3-5.7-1c-0.8-0.7-1-1.7,0.7-3.5c1.7-1.8,3.2-0.2,3.2-1c0-0.8-2.5-1.8-3.5-2.3s-0.5,1.8-2.2,1.3c-1.7-0.5-2.3-0.2-1.7,1.3s-0.2,1.5-2.3,1.5c-2.2,0-1,2-1,2s-1.5-1-2.2,0.2c-0.7,1.2,2.7,1.7,2.3,2.8c-0.3,1.2-1.3,1.8-2.8,1.3s-1.7-2.3-2.3-4c-0.7-1.7-2.2,0.3-3.5,1.5c-1.3,1.2,0.7,3.2-1,3.8c-1.7,0.7-2.5-1.3-4-1c-1.5,0.3-0.3,7.5,0.7,11s0.5,4.7-0.5,7c-1,2.3,0,2.5,1.8,4.3c1.8,1.8,4.8,4.8,5.8,5.3s2-1.2,3.5-3.2s3-0.3,4.7,1.2c1.7,1.5-1.8,2-3.2,2.5s-1.3,2.2-0.7,3.7c0.7,1.5,3.5,0.7,5.5,1.5s3,0,3.5,1.5s1,2.7,3.3,3.3c2.3,0.7,0.3,1.8,1.5,3.3c1.2,1.5,2.7,0.3,3.7,1c1,0.7,0.2,2.3,0.5,3.7c0.3,1.3,2.3,0.2,3.7,1.7s-0.2,3,1,4.5s1.5-1.3,2.2-1.5c0.7-0.2,2.3,1.2,3.2,3.7c0.8,2.5,1.7,1.7,2.7,3.7s4.5,1,5.7,1.5c1.2,0.5,2,1.2,2.8,3.5c0.8,2.3,1.5,1.2,3.2,1.3c1.7,0.2,2.8,1.3,2.5,3.8c-0.3,2.5-1.3,1.8-1.7,4.2c-0.3,2.3,1.3,2.7,3.3,3.5c2,0.8,2,1,0,3s-6,2.7-8,2.8c-2,0.2-3.5,3-5.8,5.7c-2.3,2.7-5.2,2-9.8,4.3c-4.7,2.3-6.3,1.3-6.3,2.2c0,0.8,1.5,1.7,3.3,2c1.8,0.3,1.2,1.3-0.1,2.3s0.5,2.5,0,6s-3.2,2-8.7,0.5c-5.5-1.5-3.5-0.3-6.3-0.5c-2.8-0.2-5-1-8.3-2c-3.3-1-2.5-0.3-4.3,0.8c-1.8,1.2,1,3.7,0,4.2s-2.8-1.8-4-2c-1.2-0.2-2.5,1.8-3.8,1.2s-0.2-3-0.7-3.8s-3.5-0.2-7.7-0.2c-4.2,0-7.5,0.5-10,1.3c-2.5,0.8-5,0.2-8.5,0.5c-3.5,0.3-2.7,1-4.2,1.8s-2.7,0.2-4-2.2c-1.3-2.3-3.7-2.7-9.7-4.2s-15.7-1-20.2-0.7c-2.8,0.2-4.2,0.8-4.7,1.2c-0.5,6-1.3,12.5-2.9,16.6C907.2,1077,903.7,1084,905.7,1088z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Кузнецов Эдуард Анатольевич", percent: "60,02", strong: "true" },
                    { text: "Мельников Дмитрий Георгиевич", percent: "18,82" },
                    { text: "Паронян Арутюн Геворгович", percent: "8,21" },
                    { text: "Татьянченко Тимур Георгиевич	", percent: "4,48" },
                    { text: "Янко Елена Викторовна", percent: "4,79" }
                ],
                photo: "/assets/img/candidates/31/Kuznecov_EHduard_Anatolevich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "6,70" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "12,10" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» ", percent: "61,25" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "15,19" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "2,12" },
                ],
                photo: "/assets/img/nophoto.png"
            }
        ],
        secretaries: [
            {
                fio: "Козлова Елена Борисовна",
                name: [
                    { text: "Одномандатный округ", percent: "84,05" },
                    { text: "Территориальная группа", percent: "80,8" },
                ],
                photo: "/assets/img/secretaries/31/kozlova_elena_borisovna.JPG"
            },
            {
                fio: "Прийменко Анатолий Александрович",
                name: [
                    { text: " Одномандатный округ", percent: "82,19" },
                    { text: "Территориальная группа", percent: "82,27" },
                ],
                photo: "/assets/img/secretaries/31/prijmenko_anatolij_aleksandrovich.JPG"
            }
        ]
    },
    {
        id: "st17",
        name: "Лесистый одномандатный избирательный округ №30",
        info: "Северское, часть Горячеключевского",
        voterCount: 58.85,
        d: "M719.5,935.9c-2.8,0.9-6.3,4.1-8.5,4.2c-2.3,0.2-5.5-2.3-5.8-4.8s-1-7.5-3.5-6.5s-2.8,8.5-5.8,8.5s-4.3-1.3-4.8-0.5s0.8,5.3-1.3,5.5s-5-0.3-6,2.3s-1.3,6.5-4.5,6.5s-5.3-4.3-8.3-4.3s-6.3-2.5-8-1.8s-10.3-3-10.8-0.3s0,6.5,0,12s2.8,9-0.2,10s-4.5-0.5-6,3.5s2.8,6.8,0,7.5s-6-3.3-5,0s3.3,3.8,3.3,5.8s0.5,4.8,3,4.3s2,2.8,4.3,3s5.5-3,7.5-1.5s-1,3,1.3,4.3s4,0.5,3,4s0,8.8,0,8.8h-4.3v23h-11c0,0,2,5.5-1,8s-3.5,4.3-3,6.5s-2.9,7.5-3.2,11c-0.3,3.5,0.6,5.3,0,8c-0.6,2.8-1.6,1.5-2.8,7s0.3,8.8-1.8,11s-4.3,4.3-2,5.5s3-0.5,2.5,6.5s1,8.3-1.8,9.5s-9.8,1.5-10.8,3.5s1.5,5.5,1.8,8.3s-0.5,3,2,4.3s9.3-2,9.3,0s2.5,5.8,0,6.4s0,1.3-2.5,3.8s-5.5,4.3-3.8,7s4,2.8,6.5,2.3c1-0.2,2.2,0.9,3.4,2.3c0.1-0.1,0.3-0.1,0.4-0.1c1,0.3,2.5,2.5,4.2,1.3c1.7-1.2,2.2-3.3,3.5-1.8s-1.5,3.3,1.3,3.8c2.8,0.5,5-2.2,6.8-1.7c1.8,0.5,3.7-0.2,4.5,2.8c0.8,3-0.7,2.3,0.7,4.2c1.3,1.8,2.7,2,2.2,4.2c-0.5,2.2-1,4.7,1.5,5.7s6.8,0,6.5,2.5s1,4.7-1,6.3c-2,1.7-1.7,3.3-2.7,5.8s-3.5,3.3-2.7,4.8c0.8,1.5,2.2,0.2,4,1.3c1.8,1.2,1.8,3.2,6.2,2c4.3-1.2,4-2.8,5.8-1.2c1.8,1.7,4.5,6.8,9,8s7.7,0.3,9.2,1.8s4.2,7.7,6,9.5c1.8,1.8,2.7,2.3,5.5,2.8c2.8,0.5,4.3-1.7,5.3,0c1,1.7-0.3,2.8,0.8,4.7c0.4,0.7,0.4,1.1,0.2,1.5c1.2-0.6,2.3-1,2.9-1c2.2-0.2,2.2,0.1,4.8-1.6c2.7-1.7,5.2,0.2,8.2,0c3-0.2,0.7-3.7,5.8-4.5c5.2-0.8,0.2,0.8,6.3,0c6.2-0.8,8-2,9.5-1.5s4,2.8,5.3,1.8c1.3-1,0.8-3.3,2.5-3.7c1.7-0.3,2.8,2.2,5.5,2.7c2.7,0.5,3.8-2.3,7-2c3.2,0.3,2,2.3,4.7,2.3c2.7,0,5.3-1.7,8.5,0c0,0,0,0,0.1,0c1.1-5.5,2.6-11.5,3.6-12.5c2-2,4,4.5,4.5,0s3-4.5,7.5-4.5s3-7.5,1-10.5s-5.5-5-4.5-9.5s6,0,6,0s-0.5-3,0-7.5s5-6,9.5-12.5s4.5-5.5,7-8.5s1-3.5,2.5-6s10,6.5,13,6s4-5.5,10.5-10.8s19.5-1.2,32,0s16,2.8,20-2.7s9-15.5,9.5-22s-4-8-6-12s1.5-11,5-20c1.6-4.1,2.5-10.7,2.9-16.6c-0.3,0.2-0.4,0.4-0.4,0.4s-1.8-0.1-3.7-1.1c-1.8-1-3.5-0.3-7-0.7c-3.5-0.3-5.8-0.8-12-2.5c-6.2-1.7-11.2-2.5-15.5-0.8c-4.3,1.7-8.8,3.5-11.5,4.3c-2.7,0.8-2.5,1.2-3.5,0c-1-1.2,0.2-1-2.8-1s-4.3-0.2-8.8-2.7s-6-3.7-10.7-5.3c-4.7-1.7-9.5-1-10.8-1.7c-1.3-0.7-1.3-3.7-2.8-5c-1.5-1.3-2.3-0.7-7.2-2.2c-4.8-1.5-3.8-2.2-7.7-4.7s-1.5-2.3-8.7-4c-7.2-1.7-5.3-1.3-8.7-3.5c-3.3-2.2-6.5-2.8-8-3.7s0.3-3.7,0-5.2c-0.3-1.5-1.2-0.7-2.7-1.3s-1.8-1.3-3.2-2.8c-1.3-1.5,1.2-1.7,1.2-2.5c0-0.8-1.3-0.2-3.2-1.3c-1.8-1.2-2.5-4.3-4.5-6c-2-1.6-2.3-3.4-4.6-1.2s-2.8,0.8-4,0s-1.3-6-1.3-9.3s-2.8-4.3-4.5-4.5s-1.5,3.5-4.3,5s-5,2.8-5,2.8h-22.8c0,0,0-27.3,0-33.3s0.5-6.3,1.8-8.3s-0.4-4.9,0-8c0-0.2,0.1-0.3,0.1-0.5c-1-3.2-1.9-6.1-1.9-6.8C725.2,932.5,722.2,935,719.5,935.9z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Куемжиев Андрей Александрович", percent: "75,23", strong: "true" },
                    { text: "Гаврильцова Елена Валерьевна", percent: "5,50" },
                    { text: "Дейнега Людмила Александровна", percent: "7,02" },
                    { text: "Камаринский Сергей Петрович", percent: "6,81" },
                    { text: "Керимов Олег Юрьевич", percent: "3,67" }
                ],
                photo: "/assets/img/candidates/30/Kuemzhiev_Andrej_Aleksandrovich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "3,85" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "7,79" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Орленко Сергей Юрьевич  ", percent: "75,34", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "9,51" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "2,15" },
                ],
                photo: "/assets/img/candidates/30/Orlenko_Sergej_YUrevich.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Коломиец Наталья Михайловна",
                name: [
                    { text: "Одномандатный округ", percent: "79,30" },
                    { text: "Территориальная группа", percent: "55,8%" },
                ],
                photo: "/assets/img/secretaries/30/kolomiec_natalya_mihajlovna.jpg"
            },
            {
                fio: "Иванченко Гульфия Салиховна",
                name: [
                    { text: "Одномандатный округ", percent: "82,60" },
                    { text: "Территориальная группа", percent: "72,5%" },
                ],
                photo: "/assets/img/secretaries/30/ivanchenko_gulfiya_salihovna.jpg"
            }
        ]
    },
    {
        id: "st20",
        name: "Виноградный одномандатный избирательный округ №25",
        info: "Крымское, часть Темрюкского",
        voterCount: 53.29,
        d: "M494.9,1082.2c3.7-2.7,1.8-7,2.7-11.7c0.8-4.7,4.3-3.8,8-3.2c3.7,0.7,4.3,3.2,5,6c0.7,2.8,6,0.3,9.2-2c3.2-2.3,0.7-10.8,0.7-15.5c0-4.7,0-2,1.3-2.3c1.3-0.3,1.3-1.3,1.3-4c0-2.7,0.8-2.5,2.5-4.3c1.7-1.8-1.3-4-1.7-5.8c-0.3-1.8,2.3-2.2,3.3-3.9c1-1.8-1.7-2.4-3.2-4.1c-1.5-1.7-1.5-3.2-1.5-6.5c0-3.3,2-4,3.8-6.2c1.8-2.2,1.2-4.7,1.5-6.8c0.3-2.2,2.2-3.2,2.8-4.7s-2.3-4.2-1.5-5.2s11,0.8,13.5,0.8s5.2,1.8,6.7,1.5s1-14.8,1-17.5s1.2-3.5,3.2-3.7c2-0.2,0.2-5.3,0.3-8.5c0.2-3.2-3-1-7.5-2.3s-0.8-1.3-2.2-3.2c-1.3-1.8,0.7-2.8,3.2-4.8s5-0.8,9-1.5s5.7-3,7.8-5s2.2-0.7,3.3-2c1.2-1.3,0.7-4.7,0-6.3c-0.7-1.7,0.7-3.7,1.1-7.7s-0.4-28.2-0.4-32.8s1-24.6,0-25.6s-2.3,1.5-2,4.7c0.3,3.2-1.8,3.8-3.8,3.2s-2.5,0.2-5,1.7s-1-1.2-3.3-0.7c-2.3,0.5-2.8,3.8-6.2,5.7c-3.3,1.8-2.7,3.7-4.8,4.3c-2.2,0.7-1.8-4-1.8-6s-3-1.5-5.5-2s-1-2.2-1.5-3.3c-0.5-1.2-1.5-1.3-7.2,0.8c-5.7,2.2-3.2,0.2-5.3,0.3c-2.2,0.2-2,1.2-3.5,2.5c-1.5,1.3-2.2,0.3-3.7,2.2S512,896,510,895c-2-1-1,3.7-3.3,4.5c-2.3,0.8-1.7,2-3.2,3.7c-1.5,1.7-4.8-1.5-6.7-3.2c-1.8-1.7-2.7,0.2-5,1c-2.3,0.8-3.2-1.5-4.7-1.8c-1.5-0.3-1,3.2-2.8,3.5c-1.8,0.3-1.2-2.3-1.7-3.7c-0.5-1.3-0.5-1.3-4.2-0.3c-3.7,1-4,0.8-5.5,1.3s-1.2,2.2-2.7,2.5c-1.5,0.3-2.3-1-4-2c-1.7-1-1.3,1-4.3,0.5s-2.5,2.3-4.2,3.8c-1.7,1.5-2.3-0.3-3.7-1.5s-3.8-1.7-6-1.7s-1.5-3.2-3-3.2s-1.2,0.3-2.2,2.5c-1,2.2-2.3,2-3.7,2c-1.3,0-1.8,1-3,3c-1.2,2-4.7,3.3-7.2,3c-2.5-0.3-4.8-2.3-6.2-3.5c-1.3-1.2,1-2.3,1.8-4.8c0.8-2.5-1.3-2.5-2-3.7c-0.7-1.2,0.2-1.7,2.3-1.8c2.2-0.2,1.2-0.8,0-2.2c-1.2-1.3-3-1.7-6.2-2.2c-3.2-0.5-4.5-1.8-7.7-2.7c-3.2-0.8-4.3-1-6.5-0.8c-2.2,0.2-1.2,2.5-3.7-0.2c-2.5-2.7-3,0-6.8,1.2c-3.8,1.2-6.3,2-8,1.2c-1.7-0.8-1-1.5-1.2-3.5s-1.7-1-2.8-3.3c-1.1-2.3,2.9-2.5,5.3-2.5s2.5,0.5,3.5-2.2c1-2.7,0.3-3.3,2.7-4.3c2.3-1,0-6.7-0.7-14c-0.7-7.3,2-5.3,3-11c1-5.7-2.7-5-4-8.3s4.3-4.7,7.3-4.7s2.7-4,3-11.3c0.3-7.3-0.3-8.3-3.7-12c-3.3-3.7-5-5.3-7.7-7.7c-2.7-2.3-4.7-10.7-6.3-12c-1.7-1.3-3.7-1-6.5-3.3s-0.2-3.7-3.8-4.3c-1.1-0.2-2.4-0.8-3.7-1.5c-0.1,0.2-0.2,0.3-0.3,0.5c-1.3,2.2-7,6.2-11,11.2s-5.8,7.8-8.2,9.5c-2.3,1.7-6.5,4.8-9.3,8.2c-2.8,3.3-6.3,7.5-7.7,10.7c-1.3,3.2,2,14,3.3,17.7c1.3,3.7,3.2,8.2,2.3,11.7c-0.8,3.5-3.2,7.7-4.7,9.7s-2.3,4.2-1.3,5.3s2,3.3,0.3,3.3c-1.7,0-4.3-2.2-6-2.8c-1.7-0.7-2.7-3.7-4.3-3.3c-1.7,0.3-1.2,2.3-2.3,3.2c-1.2,0.8-2.7,1.8-2.7,3c0,1.2,6,2.5,5.7,4.7s-1.2,3.5-3,5s-3.5,3-4,6s0,3.2,2,3.7s6.2-1.3,7.8,0c1.7,1.3,5,2.8,6.7,3.2c1.7,0.3,2.8-0.3,3.5,2.8c0.7,3.2-0.5,3.7,0.8,7.2c1.3,3.5,2.3,9.3,1.3,9.5c-1,0.2-2,0.8-2.3,2c-0.3,1.2,1.2,4.3,3.7,8.3s4.8,7.5,4.8,10.2c0,2.7,0.5,4.7,4,6.7s6.3,1.8,8.5,4.3c2.2,2.5,2.8,3.8,5.3,4.5c2.5,0.7,3.3-1.3,4.2,0c0.8,1.3,1.7,4.5,2.8,5.5c1.2,1,5.5-2,6.5,0s0.7,2.3,2.2,3.7s4.7,4.5,1.7,4.5c-1.2,0-2.3-0.1-3.1-0.2c0.5,0.7,0.7,1.6,0.5,2.4c-0.8,3.2-3,6.3-3.8,9.2c-0.8,2.8-1.7,3.3-0.8,5.2c0.8,1.8,0.6,5.2,2.2,7c1.6,1.8,4.6,2.1,5.6,4.5c1,2.4,0.5,6.2,3.3,7.9c2.8,1.7,6.8-0.7,9.5,2c2.7,2.7-0.2,3.3,2.2,5.5c2.3,2.2,4.8,2.5,5.8,4.2s-2.5,0.8-4,3.7c-1.5,2.8-3,3-0.8,5.3s3.8,2.3,6,1s2.3,0.8,5.3-0.3c3-1.2,3.5-4.8,8.3-3.7c4.8,1.2,3.3,3.1,5,4.9c1.7,1.8,4.8,1.8,4.3,4.6c-0.5,2.8-1,2.8-2.2,4.2c-1.2,1.3-4.5,1.5-4.7,3.5c-0.1,0.8,0,1.4-0.2,1.9c1.6,0.1,3.2,0.5,4,1.3c2,2,2.3,3,5,3.3c2.7,0.3,1,0.6,7.5,0.7s4.3,1.6,4.3,3.1s1,4.7,2.5,4.7s3.8-3.5,5.2-2s-2.8,4.7-1.8,6.2s4.2,5,4,6.5c-0.2,1.5-2.7,2.7-1.5,5c1.2,2.3-0.8,5.7-0.7,6.3c0.2,0.7,0.7,1.7,2.2,1.7c1.5,0,1.8-5.2,3-6.3c1.2-1.2,2-1.2,5,2c3,3.2,8.8,5.7,9.7,6.8c0.8,1.2-1.5,3.3,0,5.2c1.5,1.8,3,0.3,7.7,2.7c4.7,2.3,4.8,4.5,8.3,6c1.2,0.5,2.5,0.6,3.7,0.6C489.9,1086.8,492.8,1083.7,494.9,1082.2z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Денисова Ольга Михайловна", percent: "4,72" },
                    { text: "Кетов Сергей Геннадьевич", percent: "2,36" },
                    { text: "Кравченко Николай Петрович", percent: "82,45" },
                    { text: "Сорокопуд Павел Андреевич", percent: "6,60" },
                    { text: "Черникова Любовь Ивановна", percent: "2,57" }
                ],
                photo: "/assets/img/nophoto.png",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "2,77" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "9,46" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Горбань Андрей Евгеньевич ", percent: "74,48", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "11" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "1,11" },
                ],
                photo: "/assets/img/candidates/25/Gorban_Andrej_Evgenevich.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Ярошук Нелли Юрьевна",
                name: [
                    { text: "Территориальная группа", percent: "74,54" },
                ],
                photo: "/assets/img/secretaries/25/yaroshuk_nelli_yurevna.jpg"
            },
            {
                fio: "Багмут Павел Дмитриевич",
                name: [
                    { text: "Территориальная группа", percent: "59,29" },
                ],
                photo: "/assets/img/secretaries/25/bagmut_pavel_dmitrievich.JPG"
            },
            {
                fio: "Терсенова Элина Владимировна",
                name: [
                    { text: "Территориальная группа", percent: "88,91" },
                ],
                photo: "/assets/img/secretaries/25/tersenova_ehlina_vladimirovna.jpg"
            }
        ]
    },
    {
        id: "st21",
        name: "Азовский одномандатный избирательный округ №22",
        info: "Славянское, часть Красноармейского",
        voterCount: 54.99,
        d: "M571.7,879c1.8-0.5,2.8,2.3,4.3,4.8s3.5-1.3,4.8-3s3,1.3,4.8,1.3s2.3,2,4.3,1.8s0-3-0.3-5.3s-3.5-1-5-1.8s-1.5-1.5-0.5-5.5s-0.8-5.5-2-11.5s-0.8-3,0.3-6s6.8,1,5.8-1.5s-2-2.5-0.5-5.3s-0.8-5-3.3-8.3s-3.3-3-5.5-4.8s-0.3-4,0.3-5.8s-0.8-2.8-0.8-2.8s5.5,0,7,0s4.8-1,6.8-2.9s5.5-0.1,14,0s5,0.7,5.3-5s-2.3-2.3-2.5-4s0-5.8,0-8.8s-4.5-1.3-9.8,0.5s-10.8-0.3-14.5-0.3s-1,8.5-3.8,10s-1.5-4-2.3-5.5s-1.8,5-2.8,6.5s-8.5,0.8-10.3-1.8s1.3-6,1.3-6l-21-8.3l-1.8,3.5l3,1.3c0,0-3.3,10-4.8,13.5s-3.3,4.5-5,2.8s-4.5,0.5-6.3,1.3s-4,0-7-3s-2.8-0.5-5.3-2s-2.5-3.5-4-5.3s-4,0.5-6.3-1.3s0.5-2.5,1.8-4.3s0.5-3-2.3-5s0,0,2-1.5s3-1,3-4s0.5-2.5,4-7.8s0.5-5,2.3-7.8s-0.8-6-2-9.5s-1.3-5.3-0.3-9s1.8-4.8,2-7s-2.8-2-3.8-4.5s0-4,2.8-6.8s4.3-6.5,6.5-9.5s1-6.5-1-12s-1.3-7.8-1-10.5s6-7.5,9-9.8s2.8-4,3.5-6.8s6-3.8,8.3-6.8s3.3,1.5,5.5,0s1.3-3,3.8-4s0.7-2.8-1-3.8s-2-2.3-2.5-4.5s0.8-4,2.8-5.8s-0.5-1.8-1.3-4.3s1.3-0.8,1.3-4s-2.3,0.3-5.8,0s-0.5-2.3-3-2.8s0,0-2.3,1s-3.3,0.5-4-1.1c-0.8-1.6-2.3-1.1-3.8-0.4s-3.3,0.5-4.3-1.5c-1.1-2-1.7-0.5-1.2-3.5s0,0,1-1.4s-2.5-2.3-4.3-2.3s0-7.8-1.5-9.8s-2.5,0.5-2.5,2.8s-1.8,3.3-2.3,1.8s-2-0.3-4.3-0.5c-2.3-0.3,0-4,0-6.3s-1.8-2.5-4.8-2.5s-3.3,3.8-2.5,7s0.5,5.3-4.3,7s-6.3,4-9.3,2.1s-6.5-3.8-10-3.8s-3.8-2-4-4.8s-3-3-5.3-3.5s-1.3,1.8-5.5,3s-2.5,3.8-4.3,5.5s-3.5-1.8-6.3-2.8s-3,0.8-6.3,1.3s-1,4.5-3.5,5s-1.5-2.8-1.5-5s-2.3,0.2-3.8-0.5s-5.5,1.5-8.5,0s-2.8-7.8-4.3-12c-1.6-4.3-1.4-3.3-2.7-5s3.5-8,5.3-10.8c0.4-0.7,0.4-1.6,0.2-2.6c-0.9,0.1-1.5,0.3-1.9,0.6c-1,0.9-1.3,2.8-3.1,4s-3.6,1.3-3.8,2.9s1,1.8-0.8,3.5s-3.4,4.3-7.8,5.5s-12.4,3.3-18.4,5.1s-13.4,5.3-18.9,11.3s-8.9,12-9.9,30s-0.3,28.4-0.1,38.4s2.4,18.1,2.4,20.5s-0.1,6.4-2.4,11.8s-1.9,5.8-2.5,7.6c-0.6,1.7-2.6,7-4.2,9.6c1.3,1.3,2.5,2.4,3.5,2.9c3.5,1.8,7.2,3,7,4.3c-0.2,1.3-3.3,3.3-2,5.3c1.2,1.8,1.9,2.6,1,4.3c1.3,0.7,2.7,1.3,3.7,1.5c3.7,0.7,1,2,3.8,4.3s4.8,2,6.5,3.3c1.7,1.3,3.7,9.7,6.3,12c2.7,2.3,4.3,4,7.7,7.7c3.3,3.7,4,4.7,3.7,12c-0.3,7.3,0,11.3-3,11.3s-8.7,1.3-7.3,4.7s5,2.7,4,8.3c-1,5.7-3.7,3.7-3,11c0.7,7.3,3,13,0.7,14c-2.3,1-1.7,1.7-2.7,4.3c-1,2.7-1.2,2.2-3.5,2.2s-6.3,0.2-5.3,2.5c1.1,2.3,2.6,1.3,2.8,3.3s-0.5,2.7,1.2,3.5c1.7,0.8,4.2,0,8-1.2c3.8-1.2,4.3-3.8,6.8-1.2c2.5,2.7,1.5,0.3,3.7,0.2c2.2-0.2,3.3,0,6.5,0.8c3.2,0.8,4.5,2.2,7.7,2.7c3.2,0.5,5,0.8,6.2,2.2c1.2,1.3,2.2,2,0,2.2c-2.2,0.2-3,0.7-2.3,1.8c0.7,1.2,2.8,1.2,2,3.7c-0.8,2.5-3.2,3.7-1.8,4.8c1.3,1.2,3.7,3.2,6.2,3.5c2.5,0.3,6-1,7.2-3c1.2-2,1.7-3,3-3c1.3,0,2.7,0.2,3.7-2c1-2.2,0.7-2.5,2.2-2.5s0.8,3.2,3,3.2s4.7,0.5,6,1.7s2,3,3.7,1.5c1.7-1.5,1.2-4.3,4.2-3.8s2.7-1.5,4.3-0.5c1.7,1,2.5,2.3,4,2c1.5-0.3,1.2-2,2.7-2.5s1.8-0.3,5.5-1.3c3.7-1,3.7-1,4.2,0.3c0.5,1.3-0.2,4,1.7,3.7c1.8-0.3,1.3-3.8,2.8-3.5c1.5,0.3,2.3,2.7,4.7,1.8c2.3-0.8,3.2-2.7,5-1c1.8,1.7,5.2,4.8,6.7,3.2c1.5-1.7,0.8-2.8,3.2-3.7c2.3-0.8,1.3-5.5,3.3-4.5c2,1,3,3.7,4.5,1.8s2.2-0.8,3.7-2.2c1.5-1.3,1.3-2.3,3.5-2.5c2.2-0.2-0.3,1.8,5.3-0.3c5.7-2.2,6.7-2,7.2-0.8c0.5,1.2-1,2.8,1.5,3.3s5.5,0,5.5,2s-0.3,6.7,1.8,6c2.2-0.7,1.5-2.5,4.8-4.3c3.3-1.8,3.8-5.2,6.2-5.7c2.3-0.5,0.8,2.2,3.3,0.7s3-2.3,5-1.7s4.2,0,3.8-3.2c-0.3-3.2,1-5.7,2-4.7c0,0,0.1,0.1,0.1,0.2C569.4,880.9,570.3,879.4,571.7,879z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Чернявский Виктор Васильевич", percent: "80,25", strong: "true" },
                    { text: "Задорожный Владимир Анатольевич", percent: "5,08" },
                    { text: "Кумпан Денис Александрович", percent: "9,79" },
                    { text: "Кушнарёв Игорь Викторович", percent: "2,11" },
                    { text: "Чуприна Александр Александрович", percent: "1,94" }
                ],
                photo: "/assets/img/candidates/22/CHernyavskij_Viktor_Vasilevich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "2,41" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "10,99" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Паранянц Роберт Васильевич   ", percent: "76,51", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "8,04" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "1,30" },
                ],
                photo: "/assets/img/candidates/22/Paranyanc_Robert_Vasilevich.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Слюсарева Елена Павловна",
                name: [
                    { text: " Одномандатный округ", percent: "83,71" },
                    { text: "Территориальная группа", percent: "88,9" },
                ],
                photo: "/assets/img/secretaries/22/slyusareva_elena_pavlovna.jpg"
            },
            {
                fio: "Головко Елена Николаевна",
                name: [
                    { text: " Одномандатный округ", percent: "89,6" },
                    { text: "Территориальная группа", percent: "86,6" },
                ],
                photo: "/assets/img/secretaries/22/golovko_elena_nikolavna.jpg"
            }
        ]
    },
    {
        id: "st22",
        name: "Водный одномандатный избирательный округ №24",
        info: "Абинское, часть Красноармейского",
        voterCount: 49.13,
        d: "M739,884.5c-2.3-1.5-2.5-2.8-4.5-4.5s-6.5-3.3-7-6s7-8.4,7-8.4l-38-39.6c0,0,13.3-12.8,13.5-15s-2.5-3.3-5-2.8s-6.3-3.3-8.3-5s-1-6.5-4.5-8s-8,6.5-9.3,7.5s-2-0.5-3.5-2.5s-1.8-3.5-1.5-4.5s-2.8-3.8-4.3-4.8s0.5-2.8,1.5-4s8.8-7,12-7.5s6.5-3.5,6.5-4.3s-16.5-16.5-16.5-16.5s-4.3,3.3-6.3,3.7s-0.5-6.2-4.3-8.2s-7-9.3-11-11.8s-2.8-1.5-3.8-3s-4-2.8-4.5-5s2.5-4,4.3-2s4.5,0,5-2s4.3-5.3,3-7.8s-3-4.3-4.8-5s-2.5-2.8-4.3-4s-2.3,0.3-4,3.5s-9.5,7.3-13,9.3s-11.3,1-12.8,2.5s-0.3,15.8,2,20.8s0,12.3-1,21.5s-1.3,1.8-0.8,8.3s3.3,2.5,3.3,7.5s-0.3,6.3-1.5,7.5s-1,4.8-2.3,8s-4.8,2.3-9,2c-1-0.1-2.1,0.1-3,0.5c0,3-0.2,6.8,0,8.5c0.3,1.8,2.8-1.8,2.5,4s3.3,5-5.3,5s-12-1.9-14,0s-5.3,2.9-6.8,2.9s-7,0-7,0s1.3,1,0.8,2.8s-2.5,4-0.3,5.8s3,1.5,5.5,4.8s4.8,5.5,3.3,8.3s-0.5,2.8,0.5,5.3s-4.8-1.5-5.8,1.5s-1.5,0-0.3,6s3,7.5,2,11.5s-1,4.8,0.5,5.5s4.8-0.5,5,1.8s2.3,5,0.3,5.3s-2.5-1.8-4.3-1.8s-3.5-3-4.8-1.3s-3.3,5.5-4.8,3s-2.5-5.3-4.3-4.8c-1.4,0.4-2.3,1.9-3.4,4.7c0.8,2.3-0.1,20.9-0.1,25.4c0,4.6,0.9,28.8,0.4,32.8s-1.8,6-1.1,7.7c0.7,1.7,1.2,5,0,6.3c-1.2,1.3-1.2,0-3.3,2s-3.8,4.3-7.8,5s-6.5-0.5-9,1.5s-4.5,3-3.2,4.8c1.3,1.8-2.3,1.8,2.2,3.2s7.7-0.8,7.5,2.3c-0.2,3.2,1.7,8.3-0.3,8.5c-2,0.2-3.2,1-3.2,3.7s0.5,17.2-1,17.5s-4.2-1.5-6.7-1.5s-12.7-1.8-13.5-0.8s2.2,3.7,1.5,5.2s-2.5,2.5-2.8,4.7c-0.3,2.2,0.3,4.7-1.5,6.8c-1.8,2.2-3.8,2.8-3.8,6.2c0,3.3,0,4.8,1.5,6.5c1.5,1.7,4.2,2.3,3.2,4.1c-1,1.8-3.7,2.1-3.3,3.9c0.3,1.8,3.3,4,1.7,5.8c-1.7,1.8-2.5,1.7-2.5,4.3c0,2.7,0,3.7-1.3,4c-1.3,0.3-1.3-2.3-1.3,2.3c0,4.7,2.5,13.2-0.7,15.5c-3.2,2.3-8.5,4.8-9.2,2c-0.7-2.8-1.3-5.3-5-6c-3.7-0.7-7.2-1.5-8,3.2c-0.8,4.7,1,9-2.7,11.7c-2.1,1.5-5,4.6-7.1,7c2.5,0,4.8-0.4,5.3,0.9c0.7,1.8-3.3,2.7-3.2,5.3c0.2,2.7,1.2,3,4.7,4.2c3.5,1.2,5.8,1.3,5.7,2.3s-4.3-0.2-8,0c-3.7,0.2-5,2.8-5,4.7c0,1.8,0.8,1.3,2.3,4.2s2.3,3.7,6.5,3.7c4.2,0,8.3,0.8,10.7,3.3s7.5,2.7,7.3,5.3c-0.2,2.7-1.3,6.2,0.8,6.5c2.2,0.3,7.7-3.3,10.5-5.7c2.8-2.3,3.3-3.7,4.3-2.9c1,0.8,0.5,2.9,3,2.4s4.3-1,4.5,0s-1.5,2.7,0,3.7s2.2-1.5,3.2-0.3s-2.7,3.2-1.7,4.7s2.3,0.5,2.7,1.8c0.3,1.3-3.3,2.8-1.7,4s1.2,3.5,3.8,4.8c2.7,1.3,3.8-1.2,5.3,0c1.5,1.2-1.3,1.8,2.8,1.8s4,0,8.5,2.8s3.8,0,5.7,0c1.8,0,2.2-0.5,3.5,1.3c1.3,1.7,3.7,2.4,7.5,2.9c3.8,0.5,5.3-1.5,9,0.8c3.7,2.3,9.3,6,13.3,6s5.2-1.5,5.8-5.7c0.7-4.2,1.7-6.8,3.7-6.3s1,3.2,4.7,5.7c3.7,2.5,6.5,1.2,9.2,3.5c2.7,2.3,1.2,3.8,3.2,5.2c2,1.3,2.5,0.7,4.3,2.5c1.8,1.8,5.3,2.7,8.2-0.8s4.2-3.8,2.7-5.5s-3.5-1.2-3.7-4s-0.3-0.3,1.7-5.2c1.6-4,1.7-6.4,2.2-6.9c-1.1-1.5-2.3-2.5-3.4-2.3c-2.5,0.5-4.8,0.5-6.5-2.3s1.3-4.5,3.8-7s0-3.3,2.5-3.8s0-4.4,0-6.4s-6.8,1.3-9.3,0s-1.8-1.5-2-4.3s-2.8-6.3-1.8-8.3s8-2.3,10.8-3.5s1.3-2.5,1.8-9.5s-0.3-5.3-2.5-6.5s0-3.3,2-5.5s0.5-5.5,1.8-11s2.3-4.3,2.8-7c0.6-2.8-0.3-4.5,0-8c0.3-3.5,3.7-8.8,3.2-11s0-4,3-6.5s1-8,1-8h11v-23h4.3c0,0-1-5.3,0-8.8s-0.8-2.8-3-4s0.8-2.8-1.3-4.3s-5.3,1.8-7.5,1.5s-1.8-3.5-4.3-3s-3-2.3-3-4.3s-2.3-2.5-3.3-5.8s2.3,0.8,5,0s-1.5-3.5,0-7.5s3-2.5,6-3.5s0.2-4.5,0.2-10s-0.5-9.3,0-12s9,1,10.8,0.3s5,1.8,8,1.8s5,4.3,8.3,4.3s3.5-4,4.5-6.5s4-2,6-2.3s0.8-4.8,1.3-5.5s1.8,0.5,4.8,0.5s3.3-7.5,5.8-8.5s3.3,4,3.5,6.5s3.5,5,5.8,4.8c2.3-0.2,5.8-3.3,8.5-4.2s5.8-3.4,5.8-1.6c0,0.7,0.8,3.5,1.9,6.8c0.4-1.2,1.5-2.2,3.2-2.5l0-0.3c0,0,5-3.5,5.3-6.3s-3.3-8,0-10.5s5.3-0.8,6.8,1.3s2,7,10.3-2.5s14-12.5,10.8-18.3c-2.5-4.3-9.6-9.7-12.5-13.2c-1.8-0.8-3.3-2-4.2-2.8C744.5,884.3,741.2,886,739,884.5z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Кизинёк Сергей Владимирович", percent: "74,13", strong: "true" },
                    { text: "Василенко Константин Васильевич", percent: "7,01" },
                    { text: "Кольниченко Сергей Викторович", percent: "7,46" },
                    { text: "Миргородский Юрий Владимирович", percent: "3,92" },
                    { text: "Пилько Федор Александрович", percent: "5,38" }
                ],
                photo: "/assets/img/candidates/24/Kizinek_Sergej_Vladimirovich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "3,54" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "10,63" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Шумейко Евгения Владимировна ", percent: "72,42", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "10,59" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "1,56" },
                ],
                photo: "/assets/img/candidates/24/SHumejko_Evgeniya_Vladimirovna.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Генералов Алексей Викторович ",
                name: [
                    { text: "Одномандатный округ", percent: "60,98" },
                    { text: "Территориальная группа", percent: "81,17" },
                ],
                photo: "/assets/img/secretaries/24/generalov_aleksej_viktorovich.JPG"
            },
            {
                fio: "Биушкин Илья Валентинович",
                name: [
                    { text: " Одномандатный округ", percent: "73,80" },
                    { text: "Территориальная группа", percent: "80,12" },
                ],
                photo: "/assets/img/secretaries/24/biushkin_ilya_valentinovich.JPG"
            }
        ]
    },
    {
        id: "st24",
        name: "Лиманный одномандатный избирательный округ №23",
        info: "Калининское, Приморско-Ахтарское, часть Красноармейского",
        voterCount: 50.98,
        d: "M742,808.5l9,7.8c0,0-1,1.8-3.8,5s3.5,3.8,6.5,5.8s2-3,2.8-4.8s2.5-0.8,4.5-2.3s6-8.3,14.3-18.8s9-10.8,9-12.3s-7-6.8-7-6.8l4.5-6.5l-9.3-8l13-17.8l-29.8-24l-7.3,8.3l-48-38.5c0,0,10.3-10.3,14.5-16.5s3.8-5.8,2.8-7.5s1.3-3.5,3.5-6.8s-0.5-6-3.5-7.8s0-3.8,0-5.5s-4.3-3.3-6-4.8s-0.5-2.8-0.8-3.8s-3-2-5.3-4.3s-6.3-0.5-8.2-1.3s-0.8-4.8-1.8-7.3s-1.5-3.5-4.3-7.5s-4.8-4.8-3.8-6s15.3-1.1,15.3-1.1s1.5-29.9,1.3-35.4s2.8-4.3,3.8-6s-2-2.3-5.8-6s-5-4.8-2.8-6.3s3.8,1.8,6,0s0.3-7,1.3-10.3s1.8-5.3,4.5-4.3s4.3-1.5,5.5-3s2.5-1.5,9-2.3s8.8,0.5,11,0s1.3-4.8,0.5-8.3s-1-4,1-7.3s-0.3-3.8-2.3-6s-1.5-5.5-3.8-8s-7.3-4.8-11-5.5s-4-4.3-7.5-10.8s-2.2-7.8-2-10.5s-3.3-1.3-3.8-2.5s1.8-2,4.5-3.8s0-1,0-3.4s-2-2.1-4.8-2.6s-4.8,2.5-7.8,4.8c-0.8,0.6-1.7,0.5-2.6,0.2c-0.7,3.4-4.7,2.8-7.7,2.1c-3.3-0.8-11.2-5.8-14.2-7.2s-4.7,3.5-8.8,4s-3,2.5-8,2.5s-6.7-3.2-10.2-5.8c-3.5-2.7-7.8-4.8-12-6.8c-4.2-2-6.3-7.2-8-9.3c-1.7-2.2-3.3-1.7-6.3-3.5s-6.8-8.5-9.5-12.8c-2.7-4.3-8-6.7-10.7-8.8c-2.7-2.2-3-3.3-4.2-5c-1.2-1.7-1.5,1.8-2.8,1.2c-1.3-0.7-0.8-1.8-1-3.5c-0.2-1.7-1.5-1-3.5-0.5s-1.8,0.8-3.9,0s2.4-1.7,3.4-3s-2.3-3.3-2.5-5c-0.2-1.7,2.3-2.2,3-4c0.7-1.8-0.3-3.2-0.3-4.8c0-1.7-2.3-0.7-3.2-1.2c-0.8-0.5,0-1.5,0-4.3c0-2.8,0.5-2.7,1.8-4.3c1.3-1.7-0.2-4.2,1.5-6.2c1.7-2,1-0.3,3.1-0.7s0.6-2.7,0.1-4s1.7-2.3,2.7-2.5c1-0.2,0.2-1.8,0-2.7c-0.2-0.8-2.5-0.8-2.6-2.3c-0.2-1.5,2.2-1.3,4.3-2.2c0.4-0.2,0.7-0.3,0.8-0.5V377c-0.3-0.3-0.8-0.5-0.8-0.5c-0.2-1.2,0.3-1.6,0.8-1.6v0l-1.9-1.6c0,0.2-0.1,0.4-0.2,0.5c-1.1,1.1-2.6,2.6-5.1,4.5s-5.1,4.5-6.1,8.6s-1.9,7.3-2,17.4s1.1,19.1-2.1,22.5s-10.6,8-13.5,10.6s-5.6,6.3-5.8,10s0.3,11.6-1.5,16.8s-5.6,11-7.4,14.5s-1,6.9-0.5,9.1s1.3,9.1-0.9,11.1s-5.8,2.5-7,4s-0.9,1.8-1.9,5.9s-0.5,4.6-2.5,6.9s-4.9,8.6-6.4,6.5s-0.9-2.3-1.9-5.6s-2.4-3.5-4-3.3s-5.3,1.5-5.3-0.4s3.1-1.5,4-3s2.5-0.6,3.9-2.6s-0.6-3.9-2.5-5s-2.4-2.6-4.3-3s-3.6,2.1-4.9,0.4s-2.5-3.5-0.1-5.1s5.5-2,6.4,0.1s1.8,2.3,2.4,1.1s-0.8-1,0-3.3s1.6-2.3,1.5-5.4s0.5-1,1.5-3.1s-2.3-3-0.9-4.3s0.3,1,3.3-0.4s2.1-3.4,3.9-2.1s3.4,3.6,4.3,2.1s0.6-5.6-0.1-6.6s-3.5-3.8-7.8-3.3s-7.1,1.8-11.6,3s-8.4,0-12,1.6c-3.6,1.6-6.6,3.4-10.3,5s-5.1,2-7.9,5.4s-12.9,23.3-16.4,35.9s-4.4,15.1-8.5,31.8s-8,32.5-13.3,44.3s-8,18.3-13.8,18.9c-3.5,0.4-5.7,0.4-7.1,0.6c0.2,1,0.3,2-0.2,2.6c-1.8,2.8-6.5,9-5.3,10.8s1.1,0.8,2.7,5c1.6,4.3,1.3,10.5,4.3,12s7-0.8,8.5,0s3.8-1.7,3.8,0.5s-1,5.5,1.5,5s0.3-4.5,3.5-5s3.5-2.3,6.3-1.3s4.5,4.5,6.3,2.8s0-4.3,4.3-5.5s3.3-3.5,5.5-3s5,0.8,5.3,3.5s0.5,4.8,4,4.8s7,1.9,10,3.8s4.5-0.3,9.3-2.1s5-3.8,4.3-7s-0.5-7,2.5-7s4.8,0.3,4.8,2.5s-2.3,6,0,6.3c2.3,0.3,3.8-1,4.3,0.5s2.3,0.5,2.3-1.8s1-4.8,2.5-2.8s-0.3,9.8,1.5,9.8s5.3,0.9,4.3,2.3s-0.5-1.6-1,1.4s0.1,1.5,1.2,3.5c1.1,2,2.8,2.3,4.3,1.5s3-1.2,3.8,0.4c0.8,1.6,1.8,2.1,4,1.1s-0.3-1.5,2.3-1s-0.5,2.5,3,2.8s5.8-3.3,5.8,0s-2,1.5-1.3,4s3.3,2.5,1.3,4.3s-3.3,3.5-2.8,5.8s0.8,3.5,2.5,4.5s3.5,2.8,1,3.8s-1.5,2.5-3.8,4s-3.3-3-5.5,0s-7.5,4-8.3,6.8s-0.5,4.5-3.5,6.8s-8.8,7-9,9.8s-1,5,1,10.5s3.3,9,1,12s-3.8,6.8-6.5,9.5s-3.8,4.3-2.8,6.8s4,2.3,3.8,4.5s-1,3.3-2,7s-1,5.5,0.3,9s3.8,6.8,2,9.5s1.3,2.5-2.3,7.8s-4,4.8-4,7.8s-1,2.5-3,4s-4.8-0.5-2,1.5s3.5,3.3,2.3,5s-4,2.5-1.8,4.3s4.8-0.5,6.3,1.3s1.5,3.8,4,5.3s2.3-1,5.3,2s5.3,3.8,7,3s4.5-3,6.3-1.3s3.5,0.8,5-2.8s4.8-13.5,4.8-13.5l-3-1.3l1.8-3.5l21,8.3c0,0-3,3.5-1.3,6s9.3,3.3,10.3,1.8s2-8,2.8-6.5s-0.5,7,2.3,5.5s0-10,3.8-10s9.3,2,14.5,0.3s9.8-3.5,9.8-0.5c0,0.1,0,0.1,0,0.2c0.9-0.3,2-0.5,3-0.5c4.2,0.3,7.7,1.3,9-2s1-6.8,2.3-8s1.5-2.5,1.5-7.5s-2.8-1-3.3-7.5s-0.3,1,0.8-8.3s3.3-16.5,1-21.5s-3.5-19.3-2-20.8s9.3-0.5,12.8-2.5s11.3-6,13-9.3s2.3-4.8,4-3.5s2.5,3.3,4.3,4s3.5,2.5,4.8,5s-2.5,5.8-3,7.8s-3.3,4-5,2s-4.8-0.3-4.3,2s3.5,3.5,4.5,5s-0.3,0.5,3.8,3s7.3,9.8,11,11.8s2.3,8.7,4.3,8.2s6.3-3.7,6.3-3.7s16.5,15.8,16.5,16.5s-3.3,3.8-6.5,4.3s-11,6.3-12,7.5s-3,3-1.5,4s4.5,3.8,4.3,4.8s0,2.5,1.5,4.5s2.3,3.5,3.5,2.5s5.8-9,9.3-7.5s2.5,6.3,4.5,8s5.8,5.5,8.3,5s5.3,0.5,5,2.8s-13.5,15-13.5,15l14.2,14.8l0,0L742,808.5z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Сидюков Алексей Алексеевич", percent: "76,61", strong: "true" },
                    { text: "Апанасов Дмитрий Михайлович", percent: "2,89" },
                    { text: "Сергеев Андрей Борисович", percent: "11,10" },
                    { text: "Чуб Валерий Николаевич", percent: "8,15" }
                ],
                photo: "/assets/img/candidates/23/Sidyukov_Aleksej_Alekseevich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "2,82" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "10,61" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Агафонов Владимир Александрович ", percent: "72,86", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "11,52" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "1,07" },
                ],
                photo: "/assets/img/candidates/23/Agafonov_Vladimir_Aleksandrovich.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Сухенко Анна Анатольевна",
                name: [
                    { text: "Одномандатный округ", percent: "92,92" },
                    { text: "Территориальная группа", percent: "89,06" },
                ],
                photo: "/assets/img/secretaries/23/suhenko_anna_anatolevna.jpg"
            },
            {
                fio: "Косенков Анатолий Валерьевич",
                name: [
                    { text: " Одномандатный округ", percent: "84,65" },
                    { text: "Территориальная группа", percent: "73,03" },
                ],
                photo: "/assets/img/secretaries/23/kosenkov_anatolij_valerevich.jpg"
            },
            {
                fio: "Чаиркина Надежда Алексеевна",
                name: [
                    { text: " Одномандатный округ", percent: "79,11" },
                    { text: "Территориальная группа", percent: "70,25" },
                ],
                photo: "/assets/img/secretaries/23/chairikina_nadeshdna_alekseevna.jpg"
            }
        ]
    },
    {
        id: "st25",
        name: "Атаманский одномандатный избирательный округ №20",
        info: "Динское, часть Тимашевского",
        voterCount: 47.48,
        d: "M911.5,812.7v-16.8l-17,1.3v-11.5H877V737h-8.5c0,0,0.2-5.7,0-6.7c-0.2-1-5.7-3.2-7.5-4.2c-1.8-1-4-3.8-5.8-4c-1.8-0.2-2.3,1.7-3.7,1.8c-1.3,0.2-10.5-0.2-12,1c-1.5,1.2-0.8,12.5-1,15.7c-0.2,3.2-2.3,1.3-5.5,1.3c-3.2,0-1.8,1-3.5,1c-1.7,0-1.5-2-3-3.2s-2.2,1.2-3.3,0.7s-0.7-4.2-0.7-4.2l-11.7,12.8l-15.3-11.7L785.5,750l-13,17.8l9.3,8l-4.5,6.5c0,0,7,5.3,7,6.8s-0.8,1.8-9,12.3S763,818.5,761,820s-3.8,0.5-4.5,2.3s0.3,6.8-2.8,4.8s-9.3-2.5-6.5-5.8s3.8-5,3.8-5l-9-7.8l-31.3,32.3l23.8,24.8c0,0-7.5,5.7-7,8.4s5,4.3,7,6s2.3,3,4.5,4.5s5.5-0.3,7.5,1.5c0.9,0.8,2.4,2,4.2,2.8c-1-1.1-1.5-2.1-1.2-2.8c1-2.8,2-4,2-4s-5.3,0.5-2.3-3s13.5-13.4,13.5-13.4s15.8,13.4,15.5,14.7s-2.7,3,0,4.8c2.7,1.8,4.5,1.5,6,1s2.5-3.3,3.5,0s0.8,3.5,17,3.8s25.5,0.3,25.5,0.3s-0.5,12.3,2,13.8s10,3.5,12-0.3s1.3-7.5,1.5-10.5s-1.3-3.8-3.8-5.3s-2.5-5-2.5-5l-6.8-0.8l1.3-10.8l17.8-0.3l13,6.3l-2.3,10.5l31.8,9.3l-4.3,9.5c0,0,2.3,1,2.3,2.5s-0.3,12-0.3,12h24.8v-10.5L933,910v-5.3l21.8,1c0,0,2.8,5.5,0,7.5s-4.9,3.5-3.8,5.5c0.6,1.1,4.8,8,8.3,13.6c0.2-0.1,0.5-0.2,0.7-0.3c2-0.8,3.2-1.3,4.3-2.7s-1.3-1.8-1-3.8s1.8-1.7,4.2-1.2c2.3,0.5,2.3,1.5,4.8-1s1.8-5.3,2.8-6.2c1-0.8,2.3,0.3,3.5,1.7c1.2,1.3,5,1.8,6.5,0s-1-4-2.5-5.5s-0.3-2.8,1.5-2.5c1.8,0.3,2.5-0.2,2.7-3.8c0.2-3.7,0.5-2.5,3-4.8c1.8-1.7,3.2-1.3,4.7-1.4c-0.5-2.6-0.9-4.4,0.5-5.8c2-2-0.3-4.7-0.7-7.7s2.3-4.7,2.3-8s-0.3-25.7-0.3-25.7s-32,0-37.3,0c-5.3,0-3-2.3-3.3-3.3c-0.3-1-2.3-2-2.3-2v-10h-2.3v-5.7h3.7V825h13.8v-12.3H911.5z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Жиленко Сергей Викторович", percent: "77,82", strong: "true" },
                    { text: "Белов Виктор Александрович", percent: "3,55" },
                    { text: "Сандаков Андрей Владимирович", percent: "8,02" },
                    { text: "Ситников Иван Иванович", percent: "2,16" },
                    { text: "Сюсюкин Анатолий Анатольевич", percent: "6,73" }
                ],
                photo: "/assets/img/candidates/20/ZHilenko_Sergej_Viktorovich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "2,47" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "8,92" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Орлов Сергей Иванович ", percent: "76,54", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "9,55" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "1,27" },
                ],
                photo: "/assets/img/candidates/20/Orlov_Sergej_Ivanovich.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Купранова Валентина Александровна",
                name: [
                    { text: "Одномандатный округ", percent: "87,6" },
                    { text: "Территориальная группа", percent: "87" },
                ],
                photo: "/assets/img/secretaries/20/kupranova_valentina_aleksandorvna.JPG"
            },
            {
                fio: "Вахнов Алексей Евгеньевич",
                name: [
                    { text: " Одномандатный округ", percent: "55,1" },
                    { text: "Территориальная группа", percent: "55,67" },
                ],
                photo: "/assets/img/secretaries/20/vahnov_aleksey_evgenievich.JPG"
            },
            {
                fio: "Гриднев Андрей Валерьевич",
                name: [
                    { text: " Одномандатный округ", percent: "91,2" },
                    { text: "Территориальная группа", percent: "82,5" },
                ],
                photo: "/assets/img/secretaries/20/gridnev_andrey_valerievich.jpg"
            }
        ]
    },
    {
        id: "st26",
        name: "Кирпильский одномандатный избирательный округ №21",
        info: "Кореновское, часть Тимашевского",
        voterCount: 39.47,
        d: "M1000.2,598.8c-1.5,0.5-3.8,1-5.8,0s-0.5-0.1-2-1s-0.9-2.6-2.8-2.1s-2.5,1.3-4.5-0.4s-2.4-2.8-3.9-1.9s-2.3,1-2.5,2.1s0,2.1-0.8,2.5s-2.3,0.5-2.3,3.1s0,8.5,0,8.5h-41.3v13.1h-25.3V618h-29.1c0,0,0.1-3.5-1-4.1s-8-1.3-9-0.3s-1.6,3.4,0,3.6s4.8,2.8,4.3,3.6s-1.3,2.3,0.3,3.5s1.9,3,0.8,3.3s-17.3,8.5-17.3,9.1s1.4,3.6,2.5,6.1s2.5,3.9,1.8,4.3s-3.5,0.5-4.3,2.1s-0.3,6.9-1,8.3s-2,0.4-2,4.4s0,15.6,0,15.6h-14.8c0,0-0.8-4.5-2.4-4.6s-5.4,0.6-7.1-1.4s-1.5-2.4-2.9-1.5s-4.6,1.4-6.3-0.1s-4.1-3.4-2.4-8.1s0.1-11.4,1.5-15.8s1.8-14.4,1.8-14.4l-21.3,0.3v-7.8H794v13.4h7.6v23.8c0,0-1.1-2.8-4-2.9s-5.4,0.8-6.4-0.6s-3,1-2,1.9s1.6,1.4,2,2.4s1.5,3.5,3.3,3.6s2.1-0.9,3,1.9s0,3,1.8,4.1s4.8,2.1,4.3,3s-0.5,0.6-4.9,4.4s-10.4,8.4-10.3,10.5s0.1,1.8,2.5,3s7,4.1,7.4,5.1s0.6,2.5-0.5,2.6s-1.5-2.3-2.5-0.9s-2.8,3-1.4,4.6s2.3,3.4,3.6,3.3s1.1-2.4,2.8-1.8s1,3,3.5,4.5s2.4,1.9,7.4,0s4.3-3,8.5-0.8s5.1,4.3,4.3,6.8s-4.5,6.5-3.8,10.4c0.4,2.1,1.2,6.7,1.4,11.1l1.1-1.2c0,0-0.5,3.7,0.7,4.2s1.8-1.8,3.3-0.7s1.3,3.2,3,3.2c1.7,0,0.3-1,3.5-1c3.2,0,5.3,1.8,5.5-1.3c0.2-3.2-0.5-14.5,1-15.7c1.5-1.2,10.7-0.8,12-1c1.3-0.2,1.8-2,3.7-1.8c1.8,0.2,4,3,5.8,4c1.8,1,7.3,3.2,7.5,4.2c0.2,1,0,6.7,0,6.7h8.5v48.7h17.5v11.5l17-1.3v16.8h56.8V825h20.5v-5h12v-20.7h22.7c0,0-3.3-5-1.3-5s3-3.7,6-4s6,2.3,6,2.3v-31.3h15.3c0,0,0-9.3,0-14s-2.3-8-2.3-8h2.3v-17c0,0-8.7,0-12.7,0s-7,1.7-7,1.7h-6.3v-46.7h-4.7v-4h-16.7c0,0,0-54,0-56.3c0-2.3,3.7-4.7,6-8.7c1.2-2,1.2-5.5,0.9-8.5c-2.3-0.2-3.9-0.4-3.9-0.4v-17h-4.2c-0.5,1.2-0.8,2.3-0.8,3.3C1000.2,589.8,1001.7,598.3,1000.2,598.8z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Сбитнев Вячеслав Леонидович", percent: "72,41", strong: "true" },
                    { text: "Бондаренко Юрий Леонидович", percent: "6,15" },
                    { text: "Жаботинский Александр Иванович", percent: "4,72" },
                    { text: "Леоненко Анжела Даниэловна", percent: "7,12" },
                    { text: "Швец Евгений Николаевич", percent: "7,82" }
                ],
                photo: "/assets/img/candidates/21/Sbitnev_Vyacheslav_Leonidovich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "3,67" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "9,52" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Ященко Владимир Иванович ", percent: "74,48", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "9,48" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "1,44" },
                ],
                photo: "/assets/img/candidates/21/YAshchenko_Vladimir_Ivanovich.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Васильев Андрей Андреевич",
                name: [
                    { text: "Одномандатный округ", percent: "77,13" },
                    { text: "Территориальная группа", percent: "80,17" },
                ],
                photo: "/assets/img/secretaries/21/vasilev_andrej_vasilevich.jpg"
            },
            {
                fio: "Гнедыш Александр Владимирович",
                name: [
                    { text: " Одномандатный округ", percent: "64,27" },
                    { text: "Территориальная группа", percent: "75,3" },
                ],
                photo: "/assets/img/secretaries/21/gnedysh_aleksandr_vladimirovich.jpg"
            },
            {
                fio: "Смагин Юрий Михайлович",
                name: [
                    { text: " Одномандатный округ", percent: "76,41" },
                    { text: "Территориальная группа", percent: "75,12" },
                ],
                photo: "/assets/img/secretaries/21/smagin_yurij_mihajlovich.JPG"
            }
        ]
    },
    {
        id: "st27",
        name: "Кошевой одномандатный избирательный округ №19",
        info: "Брюховецкое, часть Каневского, часть Тимашевского",
        voterCount: 59.89,
        d: "M1002.2,507.4v-7h-7.4v-20.9c0,0-55.1-1.4-57.3,0s1.2,6.8,0,9.4s-8.5,0.5-10.6,0.5s-1.9,1.4-2.1,3.1s1.4,2.3,5.3,3.1s8.1,3.4,7.4,6.1s-6.1,0.5-9.5-0.8s-5.5-3.6-7.8-2.8s0,1.8-1.1,3.1s-5.1-1.4-6.9-2.1s-6.1-1.4-9.6-2.5s-3.4-2.5-5-4s-9-2-10.1-3s1.8-6.4,3-8.3s1.9-4.6,1.3-6.4s2-3.1,2-3.1v-17.1h-23.4c0,0,0.3-3.6,0-5s-0.3-2.1-1.6-1s-2.5-0.1-5,0.4s-2.8,2.8-5,1.9c-2.2-0.9-1.2-1.4-0.3-3.5s-0.4-2.1-1.1-3.6s-2.3-1.4-3.1-0.1s-1.4,0.8-2.5,2.3s0.6,1.6,0.9,3.3s-1.3,1.4-3,1.8s-1.3,1.1-2,3.4s-3,4-5,6.4s-3.5,1.6-4.6,0s1.4-3.1,1.9-4.5s-0.5-1.8-2.8-1.3s-3.6-0.5-4.9-1.4s-0.1-3-1.9-4.1s-4.8-0.9-6.3-1s-0.3,2-1.6,1.9s-1-1-1.9-2.1s-2.3-0.1-3-1.1s-1.3-1.5-1-3.3s-1.1-1.8-2.1-3s0.6-4.8-2.9-8.4s-3.5-4.4-6.3-4.4s-1.6,1.6-2.3,4s-1.3,3.4-2.6,1.6s-0.5-0.9-3.3-4.3s-1.5-2.6-2.8-3.5s-1.6,1.4-4.9,1.4s-2.1-1.5-3.5-1.5s-1.5,1.5-2.9,3s-6.4,1.4-9.4,1.8s-3.4,1.6-6.4,3.8s-5,0.6-6.9-0.9s-0.8-2.5-0.8-5.4s-0.5-3.2-1.7-4.2c-1.2-1-0.7-1.5-0.2-2.6s0.1-3.8-1.3-4.9s0.6-2.6,0-3.6s-2.6-3.3-4.1-4.3s-0.4-2.4-1.5-3.4s-5.8-0.3-7-0.8s-1.3-1.9-2.4-2.3s-2.5,4.4-3.6,6.1s-8,4.5-9.5,4.5s-2.3-3.1-2.6-5s1-3.5,0-4.6s-2.9,0.1-4.9-1.8s-5.3-5.6-6.5-6.3s-2.3,0.4-4.5,2s-3.1,1-4.6,0.4s-2.1-1.4-3.6-1.1s-2.8-0.9-4.4-2.1s-1.3-3.3-3.3-3.3s-1.3,3.4-2.8,6.5s-4.1,2.5-6.8,3s-4.1,7.5-6.1,10.9s-2.5,2.8-2.8,5.4s-0.4,5.3-3.4,6.5s-2.1,4.4-0.9,6.2c0.4,0.6,0.4,1.7,0.2,2.9c0.6-0.1,1.2-0.1,1.7,0.3c2.3,1.7,4,6,8,9s6.7,3.2,9.5,5.5c2.8,2.3,2.7,10.2,2.8,14.5s3.8,11,3.8,15.8c0,0.5-0.1,0.9-0.1,1.3c0.9,0.4,1.8,0.4,2.6-0.2c3-2.3,5-5.3,7.8-4.8s4.8,0.1,4.8,2.6s2.8,1.7,0,3.4s-5,2.5-4.5,3.8s4-0.3,3.8,2.5s-1.6,4,2,10.5s3.8,10,7.5,10.8s8.8,3,11,5.5s1.8,5.8,3.8,8s4.3,2.8,2.3,6s-1.8,3.8-1,7.3s1.8,7.8-0.5,8.3s-4.5-0.8-11,0s-7.8,0.8-9,2.3s-2.8,4-5.5,3s-3.5,1-4.5,4.3s1,8.5-1.3,10.3s-3.8-1.5-6,0s-1,2.5,2.8,6.3s6.8,4.3,5.8,6s-4,0.5-3.8,6s-1.3,35.4-1.3,35.4s-14.3-0.1-15.3,1.1s1,2,3.8,6s3.3,5,4.3,7.5s-0.1,6.5,1.8,7.3s5.9-1,8.2,1.3s5,3.3,5.3,4.3s-1,2.3,0.8,3.8s6,3,6,4.8s-3,3.8,0,5.5s5.8,4.5,3.5,7.8s-4.5,5-3.5,6.8s1.5,1.3-2.8,7.5s-14.5,16.5-14.5,16.5l48,38.5l7.3-8.3l29.8,24l10.1-12.5l15.3,11.7l10.6-11.7c-0.2-4.4-1-9.1-1.4-11.1c-0.8-3.9,2.9-7.9,3.8-10.4s0-4.5-4.3-6.8s-3.5-1.1-8.5,0.8s-4.9,1.5-7.4,0s-1.9-3.9-3.5-4.5s-1.4,1.6-2.8,1.8s-2.3-1.6-3.6-3.3s0.4-3.3,1.4-4.6s1.4,1,2.5,0.9s0.9-1.6,0.5-2.6s-5-3.9-7.4-5.1s-2.4-0.9-2.5-3s5.9-6.8,10.3-10.5s4.4-3.5,4.9-4.4s-2.5-1.9-4.3-3s-0.9-1.4-1.8-4.1s-1.3-1.8-3-1.9s-2.9-2.6-3.3-3.6s-1-1.5-2-2.4s1-3.3,2-1.9s3.5,0.5,6.4,0.6s4,2.9,4,2.9v-23.8H794v-13.4h7.5v7.8l21.3-0.3c0,0-0.4,10-1.8,14.4s0.3,11-1.5,15.8s0.8,6.6,2.4,8.1s4.9,1,6.3,0.1s1.1-0.5,2.9,1.5s5.5,1.3,7.1,1.4s2.4,4.6,2.4,4.6h14.8c0,0,0-11.6,0-15.6s1.3-3,2-4.4s0.3-6.6,1-8.3s3.5-1.8,4.3-2.1s-0.6-1.8-1.8-4.3s-2.5-5.5-2.5-6.1s16.1-8.9,17.3-9.1s0.8-2-0.8-3.3s-0.8-2.6-0.3-3.5s-2.6-3.4-4.3-3.6s-1-2.6,0-3.6s7.9-0.4,9,0.3s1,4.1,1,4.1h29.1v4.8h25.3v-13.1h41.3c0,0,0-5.9,0-8.5s1.5-2.8,2.3-3.1s0.5-1.4,0.8-2.5s1-1.3,2.5-2.1s1.9,0.3,3.9,1.9s2.6,0.9,4.5,0.4s1.3,1.3,2.8,2.1s0,0,2,1s4.3,0.5,5.8,0s0-9,0-13c0-0.9,0.3-2,0.8-3.3h-2.3c0,0,0-25.3,0-29.3c0-1,0.2-1.9,0.5-2.5v-43.4H1002.2z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Лыбанев Владимир Викторович", percent: "83,77", strong: "true" },
                    { text: "Бухинник Андрей Николаевич", percent: "3,10" },
                    { text: "Кузнецов Виктор Алексеевич", percent: "9,35" },
                    { text: "Пузан Борис Андреевич", percent: "2,48" }
                ],
                photo: "/assets/img/candidates/19/Lybanev_Vladimir_Viktrovich.JPG",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "2,23" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "7,80" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Гриценко Николай Павлович ", percent: "76,02", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "12,31" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "0,65" },
                ],
                photo: "/assets/img/candidates/19/Gricenko_Nikolaj_Pavlovich.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Чумаков Александр Владимирович",
                name: [
                    { text: "Одномандатный округ", percent: "86,01" },
                    { text: "Территориальная группа", percent: "88,1" },
                ],
                photo: "/assets/img/secretaries/19/chumakov_aleksandr_vladimirovich.jpg"
            },
            {
                fio: "Вельян Галина Богдановна",
                name: [
                    { text: " Одномандатный округ", percent: "91,66" },
                    { text: "Территориальная группа", percent: "74,62" },
                ],
                photo: "/assets/img/secretaries/19/velian_galina_bogdanovna.jpg"
            },
            {
                fio: "Асланян Алексей Леонтьевич ",
                name: [
                    { text: " Одномандатный округ", percent: "89,01" },
                    { text: "Территориальная группа", percent: "76,82" },
                ],
                photo: "/assets/img/secretaries/19/aslanyan_aleksej_leontevich.JPG"
            }
        ]
    },
    {
        id: "st28",
        name: "Ейский одномандатный избирательный округ №16",
        info: "Ейское",
        voterCount: 28.10,
        d: "M693.2,381.3c1.8-3,1.3-3.3,1.3-4.2s1-3.5,2.9-5s-2.9-6-2.9-6v-43.7c0,0-0.8-0.6-5.3-0.1s-4.3-1.8-6-3.5s-3.5,1.5-5.5,1.3s-2.3-5.8-4-7.3s-4.3-0.5-6.8-1.5s-1.8-4.3-2-6s-3.5,0-3.5,0v-41.8h16.3V255H665v-25.3h4.3V213h-7.8v-7h-5.3v-9.2c-0.2-0.1-0.3-0.1-0.5-0.2c-4.1-1.6-6.5-5.1-12.5-5.3s-5.5,0.3-11.1-1.4s-8.4-0.1-14.8-2.3s-11-5.1-13.9-12.8s-5-14-3.6-18.3s3.1-6.8,2.1-6.9s-0.8,0.4-3,1.9s-4.1,1.8-5,1.8s-2.6,0.4-1.8,2.4s2.9,2,0.9,4s-7.8,9.5-15.3,10.5s-21.6-0.9-27.9,3.1s-18,17.6-23.9,20.4s-17.5,5.9-37,5.3s-38.4-2.6-49-10.4s-19-13.4-22.4-16s-7.5-5.6-8.3-5.5s1.1,2.4,3.9,4.6s10.1,5.9,12.4,10.9s9.9,27.6,13.8,41.3s7.9,25.4,12.1,34.5s13.6,29.4,17.8,36s8.6,11.5,14.5,17s10.5,13.8,15.1,15s5.8-0.3,8-1.1s2.3-3.3,0.4-4.9s-4.3-0.8-5.3-3.5s-0.4-5.3-1.9-5.6s-2.4-1.3-3.1,1.9s0.5,4.5-1.3,4.6s-1.6-4.3-0.5-6.4s2.3-1.4,3.5-3s2.8-4.1,5.9-3.4s2.4,1.8,5.3,2c2.9,0.3,2.9,2.3,5.1,2.4s10.4-1.8,19,1.6s10.8,5.1,18.8,12.3s24.3,23.3,33.3,35.1c7.9,10.4,10.9,13.4,10.7,14.8l1.9,1.6v0c0.6,0,1.3,0.6,1.3,1.6c0,1.8-0.3,2.7-0.5,5.3c-0.2,2.7,2.3,4,6.7,6.8c4.3,2.8,7.8,8.8,13.2,14c5.3,5.2,11.3,6.8,18,10.2c6.7,3.3,14.3,10.7,22.7,17.2c6.4,5,9.5,3,11.6,2.6c0.2-1.2,0.2-2.3-0.2-2.9c-1.3-1.9-2.1-5,0.9-6.2s3.1-3.9,3.4-6.5s0.8-2,2.8-5.4s3.5-10.4,6.1-10.9s5.3,0.1,6.8-3c1.2-2.5,1-5.1,1.8-6.1c-0.8-2.2-1.8-3.8-2.4-4.5C689.2,385.3,691.5,384.3,693.2,381.3z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Белан Сергей Алексеевич", percent: "59,76", strong: "true" },
                    { text: "Абдулин Анатолий Наильевич", percent: "9,18" },
                    { text: "Бронников Дмитрий Александрович", percent: "8,69" },
                    { text: "Заикин Владимир Николаевич", percent: "10,46" },
                    { text: "Тихонов Александр Юрьевич", percent: "5,90" }
                ],
                photo: "/assets/img/candidates/16/Belan_Sergej_Alekseevich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "6,31" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "18,55" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» ", percent: "51,53" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "15,45" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "3,12" },
                ],
                photo: "/assets/img/nophoto.png"
            }
        ],
        secretaries: [
            {
                fio: "Диденко Иван Николавевич",
                name: [
                    { text: "Одномандатный округ", percent: "83,9" },
                    { text: "Территориальная группа", percent: "73,7" },
                ],
                photo: "/assets/img/secretaries/16/didenko_ivan_nikolaevich.jpg"
            },
            {
                fio: "Бурнаев Александр Александрович",
                name: [
                    { text: " Одномандатный округ", percent: "81" },
                    { text: "Территориальная группа", percent: "71,96" },
                ],
                photo: "/assets/img/secretaries/16/burnaev_aleksandr_aleksandrovich.jpg"
            },
            {
                fio: "Галиаскаров Кирилл Игоревич",
                name: [
                    { text: " Одномандатный округ", percent: "72,5" },
                    { text: "Территориальная группа", percent: "72,01" },
                ],
                photo: "/assets/img/secretaries/16/galiaskarov_kirill_igorevich.jpg"
            }
        ]
    },
    {
        id: "st29",
        name: "Дальний одномандатный избирательный округ №15",
        info: "Белоглинское, Новопокровское, Павловское",
        voterCount: 46.49,
        d: "M1574.8,584.8c-0.9-0.8-3.4-0.6-3.8-1.9s0.3-5.4-1.1-7.9s-4.4-1.6-5.6-3.5s-1.1-2.9,0.4-5.9s3.6-7.3,4.6-9.6s0.8-4.8-0.3-5s-2.4-1.1-2.4-2.4s0-3.5,0-3.5h-29.4v-45.5h-8.5v-12.3h-5.5v-25h-5.9v-8.8h-12v-14.3c0,0,0.1-3.6-1.9-4.3s-2.9-0.6-6.3,0s-11,1.5-11.8,1s-2.5-0.8-3.1-0.4s-0.9,1.6-1.9,1.8s-4.1,2-4.9,0.6s-1-32.1-1-32.1s-5.3-1.8-4.8-3.3s1.8-0.5,2.3-2.6s-1.1-6.3,0.6-6.5s5.1,0,5.1,0s0.5-21.8-0.3-25.5s-1.9-10.9-1.6-13s-0.4-3.3-2-3.1s-3,0.4-4.1,1.1s-1.6,1.8-3.6,1.6s-4.4-2.8-6.4-2.8s-3-1.1-3.9,0c-0.9,1.1,0,32.3,0,32.3l-59.9,1.6v-25.1h-55.5c0,0-1,1.8-4,2.9s-6.4,2.4-17.3,2.5c-7.8,0.1-19.1-0.1-28.4-0.2c-0.1,1.7,0.2,3.3,1.5,4.1c3.3,2,5,3.7,2.3,4.3c-2.7,0.7-30.7,0-30.7,0v5.3h-26v-9.8h-15c0,0,3-3.5,2-5.1c-1-1.7-2.3-2.7-4.7-1.3c-2.3,1.3-3.7,0.7-4.3,2.7s2,0.3,1.3,3.8c-0.7,3.5,0,30.5,0,30.5h-22.3c0,0,0-2-2-2.3c-2-0.3-4.7,2-9.7,2.3s-9.9-3-12.5-3.7c-2.5-0.7-6.5,1-6.2-1.7c0.3-2.7,2-0.8-1.7-3.9s-5.7-2.1-6.7-2.1s-4-4.7-5.3-4.3c-1.3,0.3-1,7.6-5.3,6.5c-4.3-1.1-14.3,2.8-16,0c-1.7-2.8-12.7-1.8-20-1.8c-7.3,0-13.7,1.7-19.3-1c-5.7-2.7-5.3-4.3-8.7-4c-3.3,0.3-1.7,1.7-10,2c-8.3,0.3-10.7,0-10.7,0v-6.2h-11.7V394h-16c0,0,2.3,3.3,0,3.3c-2.3,0-3,0-5,3s-7.7,4.6-7.7,10.6s0,33,0,33s0,3.3-2,2.7c-2-0.7-3-2.8-4.7,0.1c-1.7,2.9-2,1.6-4,3.9c-2,2.3,2.3,2,0,3.3c-2.3,1.3-4.7-2.3-8,1.7s-3.3,5.3-3.5,11.7s0,11.7,0,11.7l-3.9,2.3v19.1h7.4v7h-3v43.4c0.9-1.9,3-2.4,5-2.2c2.8,0.3,0.5,3,3.5,3.8s3,1,6.3-0.3s3.5-2.3,8,0s3.5,1.3,3.3-4.5s1.8-7.8,3.8-7s27.5-2,31.8,0s-5,6.8-4,10s13,2.3,18.3,2s3.8-3.8,5.8-3.8s4.8,3,6.5,3s1.8-2.8,3.3-2.8s5.8,2.8,5.8,2.8s9.8-21.3,11.3-23.5s3.5-1.8,5-0.5s4-0.8,6.5-3.3s1.8-5,4.3-5.3s5,2.3,7.3,4.3s6.5,3.8,8.8,2.3s4.5-8.8,8.3-9.8s3,4.5,5.3,6.8s3.8,2.5,6.5-0.8s4.8-5,6.9-4.5c2.1,0.5,6.6,3.3,7.6,1.8s-1-5-0.5-9s-2-4.3-5-5.5s-2-12.8-1.8-20.5s0.5-10.3,3.3-11s5,2,7.3,2s0-4.8,2.5-6.3s8.8-0.8,12.8-1s3.8-4.3,3.8-4.3h22.5V454h14v54.8c0,0,24.8-0.5,34,0s7.8,2,15.3,4.5s10.3,0.5,11.8,0s2.8-4.5,5-4.5c2.3,0,4.3,4,6,4.7s1.3-1.8,1.8-3.5s2.5-1.5,4,0s1.8,1.8,5.3,3.3s2.5,20.5,3.1,34.5c0.6,14,0,70,0,70h16.9v9.8h8V673h0.9v-14.1h24.8v-12.4h33.1v-10.3h34.4c0-0.6,0-0.9,0-0.9h36.4c0,0,2.5-0.8,2.5-2.5s1-3.9,2.1-4.6s5.9-1.9,8.5-1.5s1.4,2.8,4.8,3.4s5.3,0.1,6.4,2s1.1,2.6,2.8,2.6s4.3-1.6,5,0.8s-1.5,5.6,1,6.9s37.5,0,37.5,0v-40.1h31.9v-15.1C1575.3,587.1,1575.7,585.5,1574.8,584.8z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Шустенков Александр Иванович", percent: "72,51", strong: "true" },
                    { text: "Горшалев Максимилиан Валерьевич", percent: "9,87" },
                    { text: "Мартынов Игорь Александрович", percent: "7,49" },
                    { text: "Попов Вадим Владимирович", percent: "3,89" },
                    { text: "Спесивцев Сергей Константинович", percent: "4,61" }
                ],
                photo: "/assets/img/candidates/15/SHustenkov_Aleksandr_Ivanovich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "2,84" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "10,88" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Беловол Жанна Викторовна ", percent: "71,75", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "11,32" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "1,88" },
                ],
                photo: "/assets/img/candidates/15/Belovol_ZHanna_Viktorovna.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Варава Наталья Николаевна",
                name: [
                    { text: "Одномандатный округ", percent: "78,53" },
                    { text: "Территориальная группа", percent: "76,33" },
                ],
                photo: "/assets/img/secretaries/15/varava_natalya_nikolaevna.jpg"
            },
            {
                fio: "Ковалькова Татьяна Ивановна",
                name: [
                    { text: " Одномандатный округ", percent: "79,78" },
                    { text: "Территориальная группа", percent: "79,34" },
                ],
                photo: "/assets/img/secretaries/15/kovalkova_tatyana_ivanovna.jpg"
            },
            {
                fio: "Сиваторова Лидия Георгиевна",
                name: [
                    { text: " Одномандатный округ", percent: "86,5" },
                    { text: "Территориальная группа", percent: "83,93" },
                ],
                photo: "/assets/img/secretaries/15/sivaratorova_lidia_georgievna.jpg"
            }
        ]
    },
    {
        id: "st30",
        name: "Степной одномандатный избирательный округ №18",
        info: "Кущевское, Староминское, Щербиновское",
        voterCount: 37.32,
        d: "M695,313.3h131.5l16,9.5l-3,5.3l44.8,21.5c0,0,0.5-12.5,0-15.8s2.5-6.8,5.5-10.8s2-6.5,3.5-6.5s4,3,6.8,3s4.3-3.8,6-6s5.5-2.3,7.5-4.5s-1-6-1.5-7.5s3.3-0.8,5.8,1s4.5-1.8,8-3s6,1.8,8.3,2s1.8-3,4.3-2.8s13.8-0.8,16-0.3s0.8-2.5,3.5-2.3s5.3,1,6.9,1.3c1.7,0.3,6.1,2,6.1,2v-16.3H987v47.3h36.5v22c0,0,18.8-0.3,23.5,0s6.8,0.8,13.8,1.8s5.8-3,8.8-5.3s10.8-12.5,18-20s7.5-8,9.8-9.5s5,1.8,7.8,3.8s2.3-5.8,4.8-7.3s2.8,0.5,4.5,1.5s6-14.8,4.5-17s-5.3-1.5-5.8-4s-4.5-1.5-6.5-1.8s-4,0.6-8.3,0s-5.3-2.7-7.3-4.7s-7.3-3.5-10-3s-4-4-6-4s-4.5-2.8-5.5-4.3s-6-1.3-6-1.3v-35.4h27V253h34.8v11.3c0,0,7.5,0.8,12,0s2.5-2.3,2.5-5.3s1.8-2.5,3.8-2.8s1-6.3,1.3-17.8s-0.5-16,0-17.5s11.3-0.8,19.3-1.3c2.8-0.2,5.6-0.2,8.2-0.2c-0.2-0.5-0.2-0.8,0-0.9c0.9-0.5,2.4,2,3-1.9s-0.9-15,0.6-15.9s4.9,0.1,6.4-0.8s1.6,0.8,3.1,0s-0.8-4.9,1-5.5s3.5,1,4.3-1.3s-1.5-21.5-1.1-26.4s-0.9-6.1,0.6-7.3s2.1-1.8,2.1-3.3s2-1.5,3.1-1.6s4.5-0.8,3.8-2.1s-1.4-2-5.4-1.6s-6.6-1.6-7.6-0.1s-0.3,3.2-2.6,3.6s-4.9,1.1-4.6-0.8s0.5-4.1-0.8-4.4s-4.5,1.3-4.5-0.6s1.9-13.4-0.8-14s-7.5,0.4-14,0.6s-17.1,2.4-22.4,0.8s-10-1.7-12.5-1.6s-8.5,1.1-12.5,1.6s-9.1,2.8-9.4,0.8s0-8.5,0-8.5s-16.3,1.1-21.4,0s-8.5-2.8-13.4-2.3s-6.4,1.8-13.3,2s-20.8,0.3-22,0.5s-0.9,1.5-2.8,1.8s-1.9-1-4.8-1s-13.3,0.4-13.5-0.8s2.3-6.3-0.5-6.5s-9.1,0.9-11.9,0s-2.5-1.8-6.1-1.8s-5,0-5,0v-5.9h-15.1v7.5c0,0-1.9,1.6-4.5,1.5s-13.1-1.1-15.8-1.1s-5.8,1.4-8.8,2.3s-2.8,2.1-9.5,2.5s-19.6,0-19.6,0v39.5h-10.6c0,0,0.6,4.5-0.3,5.8s-1.1,3-1.1,4s-0.4,3.1-0.4,3.1h-4.1v25.8c0,0,0.3,2.6-0.6,2.9s-1.3,0.1-2,1.5s1.1,2.4-0.4,3.4s-0.4,0-2.3-1.4s-3.4-1-5-2.4s-1.5-2.3-2.9-1.6s0.1,1.1-0.6,2.4s-1.5,0.4-2.3,1.1s-1.8,3.8-2.5,3s0.3-4.6-0.5-5.5s-2.3,0.1-3.3,0s-2.1,0.9-1.8,2.3s1.4,3.4-0.9,4.3s-2.9,1.9-8,1.9s-4.9-0.1-7.6,1s-4.9,1.4-6.3-1.6s-1.4-8-3.6-9.1s-5.8,0.5-7.1-1s-3-4-4.8-3.6s-1.4,2.3-4,3s-3.9,2.5-5.6,1.5s0.1-2-1.6-2.3s-2.4,0.1-3.5-1.6s-4.4-2.4-6.3-1.3s-2.6,0.5-3.1,0.6s0.3,2.4-2.1,3s-7.6-3.5-8.8-3.5s-2.4,0.9-2.5,2s0,30.5,0,30.5s-2.1-0.6-5.1-1.9s-4.3-2.3-3.6-3.4s0.8-1.6,0.8-3s-2.3,1.5-2.3-3.4s0-34,0-34s-2.3-2-2.4-4.8s2.8-5,2.6-6.3s-1.4-2-0.1-2.9s1.3-18.8,1.3-18.8h7.5c0,0-1-3.5,0.1-5.5s1.3-5.8,1-7s-2.9-2-2.6-3.8s2.4-2.8,2.8-5s-0.1-4.8-1-7.5s0-16.3,0-16.3h11.5v-5.8h-20v6h-59.6V90.6c0,0-5.9,0.3-10.1,0s-5.6-1.3-9.8,0s-6.4,3.3-8.9,4.4s-6,2.6-10.9,2.8s-8-2.4-11.4-5.3s-7.3-6.4-8.9-6.3s-1.6,2.3-5.6,5s-8.5,3-13.1,9.9s-8.1,10.9-9.9,18.8s-2.6,15-4.4,20.4s-3.3,12.8-2.9,16.4s4.9,6.8,4.9,6.8s0.8-1.8-0.4-3.3s-2.6-5.8-1.9-8.6s1.1-5.8,3.9-6.3s3.8,1.4,6.5,0.6s3-2.8,6-2.4s4.9,4.3,9.1,4.4s6.4-2.6,9.9-1.5s5.6,6.8,11.6,8.4s9.5,2.1,10.8,4s3.9,4,5,8.1s2,5.5,2.5,8.3s0.8,6.6-1.1,9.6s-2.8,1.6-4.6,2.9s-1.9,3-5.3,1.8s-4.3-1.8-5.8-0.8s-1.9,1.5-3.9,1.8s-2.5,0.5-4.5,2.4s-2.8,3.6-6.3,4.3c-3.4,0.6-9.3,1.2-13.4-0.2v9.2h5.3v7h7.8v16.8H665V255h12.8v8.5h-16.3v41.8c0,0,3.3-1.8,3.5,0s-0.5,5,2,6s5,0,6.8,1.5s2,7,4,7.3s3.8-3,5.5-1.3s1.5,4,6,3.5s5.3,0.1,5.3,0.1v7.3l0.5-0.4V313.3z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Хараман Александр Юрьевич", percent: "67,95", strong: "true" },
                    { text: "Кодола Максим Владимирович", percent: "4,27" },
                    { text: "Кунда Олег Викторович", percent: "10,86" },
                    { text: "Федорченко Александр Григорьевич", percent: "5,97" },
                    { text: "Чернышов Александр Илларионович", percent: "7,79" }
                ],
                photo: "/assets/img/candidates/18/Haraman_Aleksandr_YUrevich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "4,55" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "14,25" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» ", percent: "59,53" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "16,24" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "2,54" },
                ],
                photo: "/assets/img/nophoto.png"
            }
        ],
        secretaries: [
            {
                fio: "Коробской Александр Васильевич",
                name: [
                    { text: "Одномандатный округ", percent: "78,33" },
                    { text: "Территориальная группа", percent: "76,54" },
                ],
                photo: "/assets/img/secretaries/18/korbskoi_alexandr_vasilievich.jpg"
            },
            {
                fio: "Борисенко Елена Анатольевна",
                name: [
                    { text: " Одномандатный округ", percent: "86,51" },
                    { text: "Территориальная группа", percent: "64,71" },
                ],
                photo: "/assets/img/secretaries/18/brisenko_elena_anatolevna.jpg"
            },
            {
                fio: "Ильенко Алексей Александрович",
                name: [
                    { text: " Одномандатный округ", percent: "74,56" },
                    { text: "Территориальная группа", percent: "64,87" },
                ],
                photo: "/assets/img/secretaries/18/ilenko_aleksej_aleksandrovich.jpg"
            }
        ]
    },
    {
        id: "st31",
        name: "Казачий одномандатный избирательный округ №17",
        info: "Крыловское, Ленинградское, часть Каневского",
        voterCount: 47.14,
        d: "M1292.5,370c-1.3-0.8-1.6-2.4-1.5-4.1c-3.6-0.1-6.9-0.1-9.5-0.1c-9.5-0.1-21.8,0-21.8,0v-18.4h-16.4v-12.1c0,0-7.9-0.1-8.4-4s-0.4-6.9,1.6-7.6s1.3-1,1.8-2.6s2.9-1.8,5.4-1.8s3.6,0,3.6,0l-0.6-33.9h-16.6v-16c0,0-1.1-1.4-0.9-2.4s1.3,0.5,2-0.8s-0.8-2.4-1.3-4.1s-0.8-1.5-2.4-2.1s-2.1-1.3-2.1-6.3s1-8.3-0.4-9s-8.1,0.5-9.4,0s-2,2-3.4,1.6s-2.1-2-5-1.9s-2.1,0.7-8.8,1.2s-12.1,0-14,0s-10,2.6-10.3,0.4s-0.1-17.3-0.3-20.6c-0.1-2.5-1.6-4.7-2-6c-2.6,0-5.4,0-8.2,0.2c-8,0.5-18.8-0.3-19.3,1.3s0.3,6,0,17.5s0.8,17.5-1.3,17.8s-3.8-0.3-3.8,2.8s2,4.5-2.5,5.3s-12,0-12,0V253h-34.8v-10.9h-27v35.4c0,0,5-0.3,6,1.3s3.5,4.3,5.5,4.3s3.3,4.5,6,4s8,1,10,3s3,4.1,7.3,4.7s6.3-0.3,8.3,0s6-0.7,6.5,1.8s4.3,1.8,5.8,4s-2.8,18-4.5,17s-2-3-4.5-1.5s-2,9.3-4.8,7.3s-5.5-5.3-7.8-3.8s-2.5,2-9.8,9.5s-15,17.8-18,20s-1.8,6.3-8.8,5.3s-9-1.5-13.8-1.8s-23.5,0-23.5,0v-22H987v-47.3h-16.3v16.3c0,0-4.4-1.8-6.1-2c-1.7-0.3-4.2-1-6.9-1.3s-1.3,2.8-3.5,2.3s-13.5,0.5-16,0.3s-2,3-4.3,2.8s-4.8-3.3-8.3-2s-5.5,4.8-8,3s-6.3-2.5-5.8-1s3.5,5.3,1.5,7.5s-5.8,2.3-7.5,4.5s-3.3,6-6,6s-5.3-3-6.8-3s-0.5,2.5-3.5,6.5s-6,7.5-5.5,10.8s0,15.8,0,15.8L839.5,328l3-5.3l-16-9.5H695v16l-0.5,0.4V366c0,0,4.9,4.5,2.9,6s-2.9,4.1-2.9,5s0.5,1.2-1.3,4.2s-4,4-2.5,5.8c0.7,0.8,1.6,2.3,2.4,4.5c0.2-0.3,0.5-0.4,0.9-0.4c2,0,1.6,2,3.3,3.3s2.9,2.4,4.4,2.1s2.1,0.5,3.6,1.1s2.4,1.3,4.6-0.4s3.3-2.6,4.5-2s4.5,4.4,6.5,6.3s3.9,0.6,4.9,1.8s-0.4,2.8,0,4.6s1.1,5,2.6,5s8.4-2.8,9.5-4.5s2.5-6.5,3.6-6.1s1.1,1.8,2.4,2.3s5.9-0.3,7,0.8s0,2.4,1.5,3.4s3.5,3.3,4.1,4.3s-1.4,2.5,0,3.6s1.8,3.8,1.3,4.9s-1,1.6,0.2,2.6c1.2,1,1.7,1.3,1.7,4.2s-1.1,3.9,0.8,5.4s3.9,3,6.9,0.9s3.4-3.4,6.4-3.8s8-0.3,9.4-1.8s1.5-3,2.9-3s0.3,1.5,3.5,1.5s3.6-2.3,4.9-1.4s0,0.1,2.8,3.5s1.9,2.5,3.3,4.3s2,0.8,2.6-1.6s-0.5-4,2.3-4s2.8,0.8,6.3,4.4s1.9,7.1,2.9,8.4s2.4,1.3,2.1,3s0.3,2.3,1,3.3s2.1,0,3,1.1s0.5,2,1.9,2.1s0.1-2,1.6-1.9s4.5-0.1,6.3,1s0.6,3.3,1.9,4.1s2.6,1.9,4.9,1.4s3.3-0.1,2.8,1.3s-3,2.9-1.9,4.5s2.6,2.4,4.6,0s4.3-4.1,5-6.4s0.3-3,2-3.4s3.3-0.1,3-1.8s-2-1.8-0.9-3.3s1.6-1,2.5-2.3s2.4-1.4,3.1,0.1s2,1.5,1.1,3.6s-1.9,2.6,0.3,3.5c2.2,0.9,2.5-1.4,5-1.9s3.6,0.8,5-0.4s1.4-0.4,1.6,1s0,5,0,5h23.4V472c0,0-2.6,1.4-2,3.1s0,4.5-1.3,6.4s-4.1,7.3-3,8.3s8.5,1.5,10.1,3s1.5,2.9,5,4s7.9,1.8,9.6,2.5s5.8,3.5,6.9,2.1s-1.1-2.3,1.1-3.1s4.4,1.5,7.8,2.8s8.8,3.5,9.5,0.8s-3.5-5.3-7.4-6.1s-5.5-1.4-5.3-3.1s0-3.1,2.1-3.1s9.4,2.1,10.6-0.5s-2.2-8,0-9.4s57.3,0,57.3,0v1.8l3.9-2.3c0,0-0.2-5.3,0-11.7s0.2-7.7,3.5-11.7s5.7-0.3,8-1.7c2.3-1.3-2-1,0-3.3c2-2.3,2.3-1,4-3.9c1.7-2.9,2.7-0.8,4.7-0.1c2,0.7,2-2.7,2-2.7s0-27,0-33s5.7-7.7,7.7-10.6s2.7-3,5-3c2.3,0,0-3.3,0-3.3h16v-13.8h11.7v6.2c0,0,2.3,0.3,10.7,0c8.3-0.3,6.7-1.7,10-2c3.3-0.3,3,1.3,8.7,4c5.7,2.7,12,1,19.3,1c7.3,0,18.3-1,20,1.8c1.7,2.8,11.7-1.1,16,0c4.3,1.1,4-6.1,5.3-6.5c1.3-0.3,4.3,4.3,5.3,4.3s3-1,6.7,2.1s2,1.2,1.7,3.9c-0.3,2.7,3.7,1,6.2,1.7c2.5,0.7,7.5,4,12.5,3.7s7.7-2.7,9.7-2.3c2,0.3,2,2.3,2,2.3h22.3c0,0-0.7-27,0-30.5c0.7-3.5-2-1.8-1.3-3.8s2-1.3,4.3-2.7c2.3-1.3,3.7-0.3,4.7,1.3c1,1.7-2,5.1-2,5.1h15v9.8h26v-5.3c0,0,28,0.7,30.7,0C1297.5,373.7,1295.9,372,1292.5,370z",
        candidates: [
            {
                area: "Одномандатный округ",
                name: [
                    { text: "Чабанец Сергей Григорьевич", percent: "64,12", strong: "true" },
                    { text: "Бондаренко Игорь Валерьевич", percent: "7,62" },
                    { text: "Кулаков Владимир Иванович", percent: "7,97" },
                    { text: "Миляков Андрей Андреевич", percent: "4,15" },
                    { text: "Проценко Сергей Иванович", percent: "13,67" }
                ],
                photo: "/assets/img/candidates/17/CHabanec_Sergej_Grigorevich.jpg",
            },
            {
                area: "Территориальная группа",
                name: [
                    { text: "Политическая партия СПРАВЕДЛИВАЯ РОССИЯ", percent: "3,89" },
                    { text: "Политическая партия ЛДПР – Либерально-демократическая партия России", percent: "11,54" },
                    { text: "Всероссийская политическая партия «ЕДИНАЯ РОССИЯ» Юнанов Борис Геннадьевич ", percent: "64,88", strong: "true" },
                    { text: "Политическая партия «КОММУНИСТИЧЕСКАЯ ПАРТИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ»", percent: "15,65" },
                    { text: "Политическая партия КОММУНИСТИЧЕСКАЯ ПАРТИЯ КОММУНИСТЫ РОССИИ", percent: "1,80" },
                ],
                photo: "/assets/img/candidates/17/YUnanov_Boris_Gennadevich.jpg"
            }
        ],
        secretaries: [
            {
                fio: "Соколова Светлана Владимировна",
                name: [
                    { text: "Одномандатный округ", percent: "89,44" },
                    { text: "Территориальная группа", percent: "76,74" },
                ],
                photo: "/assets/img/secretaries/17/sokolova_svetlana_vladimirovna.JPG"
            },
            {
                fio: "Скороход Юрий Григорьевич",
                name: [
                    { text: " Одномандатный округ", percent: "89,33" },
                    { text: "Территориальная группа", percent: "75,04" },
                ],
                photo: "/assets/img/secretaries/17/skorohod_yurij_grigorevich.jpg"
            }
        ]
    },
];
//# sourceMappingURL=mock-mapData.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map