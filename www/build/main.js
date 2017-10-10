webpackJsonp([12],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listshop_listshop__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = (function () {
    function AccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = JSON.parse(window.localStorage.getItem('jjuserbuyer'));
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    AccountPage.prototype.logout = function () {
        window.localStorage.removeItem('jjuserbuyer');
        this.user = JSON.parse(window.localStorage.getItem('jjuserbuyer'));
    };
    AccountPage.prototype.createshop = function (e) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__listshop_listshop__["a" /* ListshopPage */]);
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-biz\src\pages\account\account.html"*/'<!--\n\n  Generated template for the AccountPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Profile</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle icon-only>\n\n        <ion-icon name="md-list"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n  <ion-form-profile [item]="user" (itemClicked)="logout($event)" (settingClicked)="createshop($event)"></ion-form-profile>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-biz\src\pages\account\account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListshopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createshop_createshop__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngcommerce_core__ = __webpack_require__(18);
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
 * Generated class for the ListshopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListshopPage = (function () {
    function ListshopPage(navCtrl, navParams, shopService, modalControl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shopService = shopService;
        this.modalControl = modalControl;
        this.loadingCtrl = loadingCtrl;
        this.shop = {};
    }
    ListshopPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad ListshopPage');
        this.getShop();
    };
    ListshopPage.prototype.getShop = function () {
        var _this = this;
        this.shopService.getShopListByUser().then(function (data) {
            _this.shop.items = data;
        });
    };
    ListshopPage.prototype.createShopModal = function () {
        var _this = this;
        var shopModal = this.modalControl.create(__WEBPACK_IMPORTED_MODULE_0__createshop_createshop__["a" /* CreateshopPage */]);
        shopModal.onDidDismiss(function (data) {
            if (data && data.name) {
                var loading_1 = _this.loadingCtrl.create();
                loading_1.present();
                _this.shopService.createShop(data)
                    .then(function (resp) {
                    loading_1.dismiss();
                    _this.getShop();
                }, function (err) {
                    loading_1.dismiss();
                    alert(err);
                });
            }
        });
        shopModal.present();
    };
    return ListshopPage;
}());
ListshopPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-listshop',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-biz\src\pages\listshop\listshop.html"*/'<!--\n\n  Generated template for the ListshopPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Listshop</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n<ion-list-shop [items]="shop.items"></ion-list-shop>\n\n<ion-fab bottom right>\n\n  <button ion-fab (click)="createShopModal()"><ion-icon name="add"></ion-icon></button>\n\n</ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-biz\src\pages\listshop\listshop.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ngcommerce_core__["r" /* ShopService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
], ListshopPage);

//# sourceMappingURL=listshop.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngcommerce_core__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the CreatProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreatProductPage = (function () {
    function CreatProductPage(navCtrl, navParams, shopService, categoryService, shippingService, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shopService = shopService;
        this.categoryService = categoryService;
        this.shippingService = shippingService;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.shops = [];
    }
    CreatProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreatProductPage');
        this.loadShops();
    };
    CreatProductPage.prototype.loadShops = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.shopService.getShopListByUser().then(function (data) {
            _this.shops = data;
            loading.dismiss();
            _this.loadCate();
        }, function (err) {
            loading.dismiss();
            alert(err);
        });
    };
    CreatProductPage.prototype.loadCate = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.categoryService.getCategoryList().then(function (data) {
            _this.categories = data;
            loading.dismiss();
            _this.loadShipping();
        }, function (err) {
            loading.dismiss();
            alert(err);
        });
    };
    CreatProductPage.prototype.loadShipping = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.shippingService.getShippingList().then(function (data) {
            _this.shippings = data;
            loading.dismiss();
        }, function (err) {
            loading.dismiss();
            alert(err);
        });
    };
    CreatProductPage.prototype.createProduct = function (e) {
        // if(e.image && e.image !== undefined){
        //   e = e ? e : {};
        //   e.images = e.images ? e.images : [];
        //   e.images.push(e.image);
        // }
        this.viewCtrl.dismiss(e);
        // console.log(e);
    };
    return CreatProductPage;
}());
CreatProductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-creat-product',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-biz\src\pages\creat-product\creat-product.html"*/'<!--\n\n  Generated template for the CreatProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Create Product</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-form-product *ngIf="categories && categories.length > 0 && shippings && shippings.length > 0 && shops && shops.length > 0"\n\n    [categories]="categories" [shippings]="shippings" [shops]="shops" (itemClicked)="createProduct($event)"></ion-form-product>\n\n</ion-content>'/*ion-inline-end:"D:\mosthamapp\thamturakit-biz\src\pages\creat-product\creat-product.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__ngcommerce_core__["r" /* ShopService */],
        __WEBPACK_IMPORTED_MODULE_0__ngcommerce_core__["b" /* CategoryService */],
        __WEBPACK_IMPORTED_MODULE_0__ngcommerce_core__["q" /* ShippingService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ViewController */]])
], CreatProductPage);

//# sourceMappingURL=creat-product.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_register__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngcommerce_core__ = __webpack_require__(18);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, fb, authenService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.authenService = authenService;
        this.loadingCtrl = loadingCtrl;
        this.user = {};
        this.credential = {};
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.authenService.signIn(this.credential).then(function (data) {
            window.localStorage.setItem('jjuserbuyer', JSON.stringify(data));
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
            loading.dismiss();
            // alert(JSON.stringify(data));
        }).catch(function (e) {
            loading.dismiss();
            alert(JSON.stringify(e));
        });
    };
    LoginPage.prototype.loginfb = function () {
        var _this = this;
        this.fb.login(['public_profile', 'email'])
            .then(function (res) {
            return _this.fb.api('me?fields=email,id,first_name,last_name', null).then(function (res) {
                return _this.registerFb(res);
            })
                .catch(function (e) {
                alert(JSON.stringify(e));
            });
        })
            .catch(function (e) {
            alert(JSON.stringify(e));
        });
    };
    LoginPage.prototype.registerFb = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__register_register__["a" /* RegisterPage */], data);
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__register_register__["a" /* RegisterPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-biz\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<ion-item>\n\n  <ion-label floating >Username</ion-label>\n\n  <ion-input type="text" [(ngModel)]="credential.username"></ion-input>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label floating >Password</ion-label>\n\n  <ion-input type="password" [(ngModel)]="credential.password"></ion-input>\n\n</ion-item>\n\n\n\n<button ion-button (click)="login()" block >Login</button>\n\n<button ion-button (click)="register()" block >Register</button>\n\n<button ion-button (click)="loginfb()" block >login with Facebook</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-biz\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_5__ngcommerce_core__["a" /* AuthenService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = (function () {
    function NotificationPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.notifications = [];
    }
    NotificationPage.prototype.ionViewWillEnter = function () {
        var loading = this.loadingCtrl.create();
        loading.present();
        this.notifications = JSON.parse(window.localStorage.getItem('sellerNotification'));
        loading.dismiss();
        // alert(this.notifications);
    };
    return NotificationPage;
}());
NotificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notification',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-biz\src\pages\notification\notification.html"*/'<!--\n\n  Generated template for the NotificationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Notification</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle icon-only>\n\n        <ion-icon name="md-list"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let noti of notifications">\n\n      <h3>{{ noti.message }}</h3>\n\n      <p>{{ noti.date | date: \'dd MMMM yyyy HH:mm:ss a\'}}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-biz\src\pages\notification\notification.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], NotificationPage);

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creat_product_creat_product__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_detail_product_detail__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngcommerce_core__ = __webpack_require__(18);
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
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductPage = (function () {
    function ProductPage(navCtrl, navParams, productService, menuController, alertCtrl, modalCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.menuController = menuController;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.product = {};
        this.loadData = false;
        this.shopSelected = JSON.stringify(JSON.parse(window.localStorage.getItem('shop')));
        this.shop = {};
    }
    ProductPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad ProductPage');
        this.shop = JSON.parse(window.localStorage.getItem('shop'));
        if (this.shop && this.shop._id) {
            this.getProduct(this.shop);
        }
        this.workaroundSideMenu();
    };
    ProductPage.prototype.workaroundSideMenu = function () {
        var _this = this;
        var leftMenu = this.menuController.get('left');
        if (leftMenu) {
            leftMenu.ionClose.subscribe(function () {
                _this.shop = JSON.parse(window.localStorage.getItem('shop'));
                var shopSelected = JSON.parse(_this.shopSelected);
                if (shopSelected) {
                    if (_this.shop._id === shopSelected._id) {
                        return;
                    }
                }
                _this.getProduct(_this.shop);
                _this.shopSelected = JSON.stringify(_this.shop);
            });
        }
    };
    ProductPage.prototype.getProduct = function (shop) {
        var _this = this;
        this.product = {};
        var loading = this.loadingCtrl.create();
        loading.present();
        this.productService.getProductListByShop(shop._id).then(function (data) {
            console.log(data);
            _this.product = data;
            loading.dismiss();
        }).catch(function (e) {
            loading.dismiss();
            alert(e);
        });
    };
    ProductPage.prototype.selected = function (items) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__product_detail_product_detail__["a" /* ProductDetailPage */], items);
    };
    ProductPage.prototype.addProductModal = function () {
        var _this = this;
        var productModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__creat_product_creat_product__["a" /* CreatProductPage */]);
        productModal.onDidDismiss(function (data) {
            if (data && data.name && data.name !== undefined) {
                var loading_1 = _this.loadingCtrl.create();
                loading_1.present();
                _this.productService.createProduct(data).then(function (resq) {
                    loading_1.dismiss();
                    _this.getProduct(_this.shop);
                }, function (err) {
                    loading_1.dismiss();
                    alert(err);
                });
            }
        });
        productModal.present();
    };
    return ProductPage;
}());
ProductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-product',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-biz\src\pages\product\product.html"*/'<!--\n\n  Generated template for the ProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Product</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle icon-only>\n\n        <ion-icon name="md-list"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list-product [items]="product.items" (selectedProduct)="selected($event)"></ion-list-product>\n\n\n\n  <ion-fab bottom right>\n\n    <button ion-fab (click)="addProductModal()"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-biz\src\pages\product\product.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__ngcommerce_core__["p" /* ProductService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */]])
], ProductPage);

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__ = __webpack_require__(18);
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
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductDetailPage = (function () {
    function ProductDetailPage(navCtrl, navParams, productService, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.loadingCtrl = loadingCtrl;
        this.items = {};
        {
            var loading_1 = this.loadingCtrl.create();
            loading_1.present();
            this.productService.getProductByID(this.navParams.data._id).then(function (data) {
                console.log(data);
                _this.items = data;
                loading_1.dismiss();
            }).catch(function (e) {
                loading_1.dismiss();
                alert(e);
            });
        }
    }
    ProductDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductDetailPage');
    };
    return ProductDetailPage;
}());
ProductDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-product-detail',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-biz\src\pages\product-detail\product-detail.html"*/'<!--\n\n  Generated template for the ProductDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>productDetail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-detail-product [item]="items" [isReview]="false"></ion-detail-product>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-biz\src\pages\product-detail\product-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__["p" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], ProductDetailPage);

//# sourceMappingURL=product-detail.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_detail_order_detail__ = __webpack_require__(124);
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
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderPage = (function () {
    function OrderPage(navCtrl, navParams, orderService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderService = orderService;
        this.loadingCtrl = loadingCtrl;
        this.order = {};
        this.steps = [
            {
                value: 1,
                title: "New Order"
            },
            {
                value: 2,
                title: "Accept"
            },
            {
                value: 3,
                title: "Sent"
            },
            {
                value: 4,
                title: "Return"
            }
        ];
        this.channel = 1;
    }
    OrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderPage');
    };
    OrderPage.prototype.ionViewWillEnter = function () {
        this.getOrder();
    };
    OrderPage.prototype.getOrder = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.orderService.getOrderByShop().then(function (data) {
            console.log(data);
            _this.order = data;
            loading.dismiss();
        }, function (err) {
            loading.dismiss();
            alert(err);
        });
    };
    OrderPage.prototype.selectedItem = function (e) {
        console.log(e);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__order_detail_order_detail__["a" /* OrderDetailPage */], e);
        // alert(e);
    };
    return OrderPage;
}());
OrderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-biz\src\pages\order\order.html"*/'<!--\n\n  Generated template for the OrderPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Order</ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle icon-only>\n\n        <ion-icon name="md-list"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-orders [steps]="steps" [channel]="channel">\n\n    <ion-segment-order *ngIf="order && order.waiting" [items]="order" (SelectedOrder)="selectedItem($event)"></ion-segment-order>\n\n  </ion-orders>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-biz\src\pages\order\order.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__["o" /* OrderService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], OrderPage);

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__ = __webpack_require__(18);
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
 * Generated class for the OrderDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderDetailPage = (function () {
    function OrderDetailPage(navCtrl, navParams, orderService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderService = orderService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.items = this.navParams.data;
        loading.dismiss();
        console.log(this.items);
    }
    OrderDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderDetailPage');
    };
    OrderDetailPage.prototype.showPrompt = function (order_id, item_id) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Ref. ID',
            message: "Please Enter Your Ref. ID",
            inputs: [
                {
                    name: 'refid',
                    placeholder: 'Ref. ID'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Submit',
                    handler: function (data) {
                        var loading = _this.loadingCtrl.create();
                        loading.present();
                        _this.orderService.updateItemToSent(order_id, item_id).then(function (data) {
                            loading.dismiss();
                            _this.navCtrl.pop();
                        }, function (err) {
                            loading.dismiss();
                            alert(err);
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    OrderDetailPage.prototype.updateStatus = function (item) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        if (item.status == "waiting") {
            this.orderService.updateItemToAccept(item.order_id, item.item_id).then(function (data) {
                loading.dismiss();
                _this.navCtrl.pop();
            }, function (err) {
                loading.dismiss();
                alert(err);
            });
        }
        else if (item.status == "accept") {
            loading.dismiss();
            this.showPrompt(item.order_id, item.item_id);
        }
        else if (item.status == "sent") {
            this.orderService.updateItemToComplete(item.order_id, item.item_id).then(function (data) {
                loading.dismiss();
                _this.navCtrl.pop();
            }, function (err) {
                loading.dismiss();
                alert(err);
            });
        }
        else if (item.status == "return") {
        }
    };
    OrderDetailPage.prototype.updateStatusReject = function (item) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.orderService.updateItemToReject(item.order_id, item.item_id).then(function (data) {
            loading.dismiss();
            _this.navCtrl.pop();
        }, function (err) {
            loading.dismiss();
            alert(err);
        });
    };
    return OrderDetailPage;
}());
OrderDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order-detail',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-biz\src\pages\order-detail\order-detail.html"*/'<!--\n\n  Generated template for the OrderDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>orderDetail</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-detail-order [item]="items"></ion-detail-order>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <button ion-button block id="btnStatus" *ngIf="items.status !== \'return\'" (click)="updateStatus(items)">{{items.status === \'waiting\' ? \'Accept\' : items.status === \'accept\' ? \'Sent\': items.status === \'sent\' ? \'Complete\':\'Return\'}}</button>\n\n  <button ion-button block id="btnReject" *ngIf="items.status === \'waiting\'" (click)="updateStatusReject(items)">Reject</button>\n\n</ion-footer>'/*ion-inline-end:"D:\mosthamapp\thamturakit-biz\src\pages\order-detail\order-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__["o" /* OrderService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], OrderDetailPage);

//# sourceMappingURL=order-detail.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__ = __webpack_require__(18);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, service, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.user = {};
        this.user = this.navParams.data;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        var newUser = this.user;
        newUser.firstName = this.user.first_name;
        newUser.lastName = this.user.last_name;
        // alert(JSON.stringify(newUser));
        var loading = this.loadingCtrl.create();
        loading.present();
        this.service.signUp(newUser).then(function (data) {
            // alert(JSON.stringify(data));
            loading.dismiss();
            _this.navCtrl.pop();
        }).catch(function (e) {
            loading.dismiss();
            alert("<pre>" + JSON.stringify(e));
        });
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-biz\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label floating>Username</ion-label>\n\n    <ion-input type="text" [(ngModel)]="user.username"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Password</ion-label>\n\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Email</ion-label>\n\n    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>First name</ion-label>\n\n    <ion-input type="" [(ngModel)]="user.first_name"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Last names</ion-label>\n\n    <ion-input type="" [(ngModel)]="user.last_name"></ion-input>\n\n  </ion-item>\n\n  <button ion-button (click)="register()">Submit</button>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\mosthamapp\thamturakit-biz\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__["a" /* AuthenService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 134:
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
webpackEmptyAsyncContext.id = 134;

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		508,
		11
	],
	"../pages/creat-product/creat-product.module": [
		509,
		10
	],
	"../pages/createshop/createshop.module": [
		510,
		9
	],
	"../pages/listshop/listshop.module": [
		511,
		8
	],
	"../pages/login/login.module": [
		512,
		7
	],
	"../pages/notification/notification.module": [
		513,
		6
	],
	"../pages/order-detail/order-detail.module": [
		514,
		5
	],
	"../pages/order/order.module": [
		515,
		4
	],
	"../pages/product-detail/product-detail.module": [
		516,
		3
	],
	"../pages/product/product.module": [
		517,
		2
	],
	"../pages/register/register.module": [
		518,
		1
	],
	"../pages/tabs/tabs.module": [
		519,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 176;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, orderService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.orderService = orderService;
        this.loadingCtrl = loadingCtrl;
        this.homeData = {};
        this.waiting = 0;
        this.accept = 0;
        this.sent = 0;
        this.return = 0;
        this.total = 0;
        this.percentWaiting = 0;
        this.percentAccept = 0;
        this.percentSent = 0;
        this.percentReturn = 0;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // console.log(this.shop);
        // this.shop
        console.log('ionViewDidLoad HomePage');
        var loading = this.loadingCtrl.create();
        loading.present();
        this.orderService.getOrderByShop().then(function (data) {
            // this.homeData = data;
            _this.waiting = data.waiting.length;
            _this.accept = data.accept.length;
            _this.sent = data.sent.length;
            _this.return = data.return.length;
            _this.total = (_this.waiting + _this.accept + _this.sent + _this.return);
            _this.percentWaiting = (_this.waiting / _this.total) * 100;
            _this.percentAccept = (_this.accept / _this.total) * 100;
            _this.percentSent = (_this.sent / _this.total) * 100;
            _this.percentReturn = (_this.return / _this.total) * 100;
            _this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](_this.doughnutCanvas.nativeElement, {
                type: 'doughnut',
                data: {
                    labels: ["waiting", "accept", "sent", "return"],
                    datasets: [{
                            label: '# of Votes',
                            data: [_this.percentWaiting, _this.percentAccept, _this.percentSent, _this.percentReturn],
                            // data: [this.percentWaiting, this.percentAccept, this.percentSent, this.percentReturn],
                            backgroundColor: [
                                "#D8625D",
                                "#5C926E",
                                "#FFCE56",
                                "#36A2EB"
                            ]
                        }]
                }, legend: {
                    align: "right",
                    layout: "vertical",
                    // verticalAlign: 'top',
                    x: 40,
                    y: 0
                }
            });
            _this.lineChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](_this.lineCanvas.nativeElement, {
                type: 'line',
                data: {
                    labels: ["waiting", "accept", "sent", "return"],
                    datasets: [
                        {
                            label: "My Orders",
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: "#bc8856",
                            borderColor: "#7f3f00",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "#7f3f00",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: "#7f3f00",
                            pointHoverBorderColor: "#7f3f00",
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: [_this.waiting, _this.accept, _this.sent, _this.return],
                            spanGaps: false,
                        }
                    ]
                }
            });
            loading.dismiss();
        }, function (err) {
            loading.dismiss();
            alert(err);
        });
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('doughnutCanvas'),
    __metadata("design:type", Object)
], HomePage.prototype, "doughnutCanvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('lineCanvas'),
    __metadata("design:type", Object)
], HomePage.prototype, "lineCanvas", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-biz\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Home\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Line Chart\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #lineCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Doughnut Chart\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #doughnutCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\mosthamapp\thamturakit-biz\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__["o" /* OrderService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(378);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_createshop_createshop__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_notification_notification__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_product_product__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_order_order__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_account__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_register_register__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_about__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_facebook__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ngcommerce_core__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic2_rating__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_order_detail_order_detail__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_product_detail_product_detail__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_creat_product_creat_product__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_listshop_listshop__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_image_picker__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_base64__ = __webpack_require__(193);
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
    Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_order_order__["a" /* OrderPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_product_product__["a" /* ProductPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_order_detail_order_detail__["a" /* OrderDetailPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_product_detail_product_detail__["a" /* ProductDetailPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_notification_notification__["a" /* NotificationPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_creat_product_creat_product__["a" /* CreatProductPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_listshop_listshop__["a" /* ListshopPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_createshop_createshop__["a" /* CreateshopPage */],
            __WEBPACK_IMPORTED_MODULE_20__ngcommerce_core__["i" /* IonListOrderComponent */],
            __WEBPACK_IMPORTED_MODULE_20__ngcommerce_core__["m" /* IonSegmentOrderComponent */],
            __WEBPACK_IMPORTED_MODULE_20__ngcommerce_core__["l" /* IonOrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_20__ngcommerce_core__["g" /* IonFormProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_20__ngcommerce_core__["d" /* IonDetailOrderComponent */],
            __WEBPACK_IMPORTED_MODULE_20__ngcommerce_core__["j" /* IonListProductComponent */],
            __WEBPACK_IMPORTED_MODULE_20__ngcommerce_core__["e" /* IonDetailProductComponent */],
            __WEBPACK_IMPORTED_MODULE_20__ngcommerce_core__["f" /* IonFormProductComponent */],
            __WEBPACK_IMPORTED_MODULE_20__ngcommerce_core__["k" /* IonListShopComponent */],
            __WEBPACK_IMPORTED_MODULE_20__ngcommerce_core__["h" /* IonFormShopComponent */],
            __WEBPACK_IMPORTED_MODULE_20__ngcommerce_core__["n" /* IonUploadImageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_21_ionic2_rating__["a" /* Ionic2RatingModule */],
            __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/creat-product/creat-product.module#CreatProductPageModule', name: 'CreatProductPage', segment: 'creat-product', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/createshop/createshop.module#CreateshopPageModule', name: 'CreateshopPage', segment: 'createshop', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/listshop/listshop.module#ListshopPageModule', name: 'ListshopPage', segment: 'listshop', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/order-detail/order-detail.module#OrderDetailPageModule', name: 'OrderDetailPage', segment: 'order-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/order/order.module#OrderPageModule', name: 'OrderPage', segment: 'order', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/product-detail/product-detail.module#ProductDetailPageModule', name: 'ProductDetailPage', segment: 'product-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'product', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_20__ngcommerce_core__["c" /* EcommerceCoreModule */].forRoot('https://thamturakit.herokuapp.com/api/')
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_order_order__["a" /* OrderPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_product_product__["a" /* ProductPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_notification_notification__["a" /* NotificationPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_order_detail_order_detail__["a" /* OrderDetailPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_product_detail_product_detail__["a" /* ProductDetailPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_creat_product_creat_product__["a" /* CreatProductPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_listshop_listshop__["a" /* ListshopPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_createshop_createshop__["a" /* CreateshopPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_base64__["a" /* Base64 */],
            { provide: __WEBPACK_IMPORTED_MODULE_9__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 200,
	"./af.js": 200,
	"./ar": 201,
	"./ar-dz": 202,
	"./ar-dz.js": 202,
	"./ar-kw": 203,
	"./ar-kw.js": 203,
	"./ar-ly": 204,
	"./ar-ly.js": 204,
	"./ar-ma": 205,
	"./ar-ma.js": 205,
	"./ar-sa": 206,
	"./ar-sa.js": 206,
	"./ar-tn": 207,
	"./ar-tn.js": 207,
	"./ar.js": 201,
	"./az": 208,
	"./az.js": 208,
	"./be": 209,
	"./be.js": 209,
	"./bg": 210,
	"./bg.js": 210,
	"./bn": 211,
	"./bn.js": 211,
	"./bo": 212,
	"./bo.js": 212,
	"./br": 213,
	"./br.js": 213,
	"./bs": 214,
	"./bs.js": 214,
	"./ca": 215,
	"./ca.js": 215,
	"./cs": 216,
	"./cs.js": 216,
	"./cv": 217,
	"./cv.js": 217,
	"./cy": 218,
	"./cy.js": 218,
	"./da": 219,
	"./da.js": 219,
	"./de": 220,
	"./de-at": 221,
	"./de-at.js": 221,
	"./de-ch": 222,
	"./de-ch.js": 222,
	"./de.js": 220,
	"./dv": 223,
	"./dv.js": 223,
	"./el": 224,
	"./el.js": 224,
	"./en-au": 225,
	"./en-au.js": 225,
	"./en-ca": 226,
	"./en-ca.js": 226,
	"./en-gb": 227,
	"./en-gb.js": 227,
	"./en-ie": 228,
	"./en-ie.js": 228,
	"./en-nz": 229,
	"./en-nz.js": 229,
	"./eo": 230,
	"./eo.js": 230,
	"./es": 231,
	"./es-do": 232,
	"./es-do.js": 232,
	"./es.js": 231,
	"./et": 233,
	"./et.js": 233,
	"./eu": 234,
	"./eu.js": 234,
	"./fa": 235,
	"./fa.js": 235,
	"./fi": 236,
	"./fi.js": 236,
	"./fo": 237,
	"./fo.js": 237,
	"./fr": 238,
	"./fr-ca": 239,
	"./fr-ca.js": 239,
	"./fr-ch": 240,
	"./fr-ch.js": 240,
	"./fr.js": 238,
	"./fy": 241,
	"./fy.js": 241,
	"./gd": 242,
	"./gd.js": 242,
	"./gl": 243,
	"./gl.js": 243,
	"./gom-latn": 244,
	"./gom-latn.js": 244,
	"./he": 245,
	"./he.js": 245,
	"./hi": 246,
	"./hi.js": 246,
	"./hr": 247,
	"./hr.js": 247,
	"./hu": 248,
	"./hu.js": 248,
	"./hy-am": 249,
	"./hy-am.js": 249,
	"./id": 250,
	"./id.js": 250,
	"./is": 251,
	"./is.js": 251,
	"./it": 252,
	"./it.js": 252,
	"./ja": 253,
	"./ja.js": 253,
	"./jv": 254,
	"./jv.js": 254,
	"./ka": 255,
	"./ka.js": 255,
	"./kk": 256,
	"./kk.js": 256,
	"./km": 257,
	"./km.js": 257,
	"./kn": 258,
	"./kn.js": 258,
	"./ko": 259,
	"./ko.js": 259,
	"./ky": 260,
	"./ky.js": 260,
	"./lb": 261,
	"./lb.js": 261,
	"./lo": 262,
	"./lo.js": 262,
	"./lt": 263,
	"./lt.js": 263,
	"./lv": 264,
	"./lv.js": 264,
	"./me": 265,
	"./me.js": 265,
	"./mi": 266,
	"./mi.js": 266,
	"./mk": 267,
	"./mk.js": 267,
	"./ml": 268,
	"./ml.js": 268,
	"./mr": 269,
	"./mr.js": 269,
	"./ms": 270,
	"./ms-my": 271,
	"./ms-my.js": 271,
	"./ms.js": 270,
	"./my": 272,
	"./my.js": 272,
	"./nb": 273,
	"./nb.js": 273,
	"./ne": 274,
	"./ne.js": 274,
	"./nl": 275,
	"./nl-be": 276,
	"./nl-be.js": 276,
	"./nl.js": 275,
	"./nn": 277,
	"./nn.js": 277,
	"./pa-in": 278,
	"./pa-in.js": 278,
	"./pl": 279,
	"./pl.js": 279,
	"./pt": 280,
	"./pt-br": 281,
	"./pt-br.js": 281,
	"./pt.js": 280,
	"./ro": 282,
	"./ro.js": 282,
	"./ru": 283,
	"./ru.js": 283,
	"./sd": 284,
	"./sd.js": 284,
	"./se": 285,
	"./se.js": 285,
	"./si": 286,
	"./si.js": 286,
	"./sk": 287,
	"./sk.js": 287,
	"./sl": 288,
	"./sl.js": 288,
	"./sq": 289,
	"./sq.js": 289,
	"./sr": 290,
	"./sr-cyrl": 291,
	"./sr-cyrl.js": 291,
	"./sr.js": 290,
	"./ss": 292,
	"./ss.js": 292,
	"./sv": 293,
	"./sv.js": 293,
	"./sw": 294,
	"./sw.js": 294,
	"./ta": 295,
	"./ta.js": 295,
	"./te": 296,
	"./te.js": 296,
	"./tet": 297,
	"./tet.js": 297,
	"./th": 298,
	"./th.js": 298,
	"./tl-ph": 299,
	"./tl-ph.js": 299,
	"./tlh": 300,
	"./tlh.js": 300,
	"./tr": 301,
	"./tr.js": 301,
	"./tzl": 302,
	"./tzl.js": 302,
	"./tzm": 303,
	"./tzm-latn": 304,
	"./tzm-latn.js": 304,
	"./tzm.js": 303,
	"./uk": 305,
	"./uk.js": 305,
	"./ur": 306,
	"./ur.js": 306,
	"./uz": 307,
	"./uz-latn": 308,
	"./uz-latn.js": 308,
	"./uz.js": 307,
	"./vi": 309,
	"./vi.js": 309,
	"./x-pseudo": 310,
	"./x-pseudo.js": 310,
	"./yo": 311,
	"./yo.js": 311,
	"./zh-cn": 312,
	"./zh-cn.js": 312,
	"./zh-hk": 313,
	"./zh-hk.js": 313,
	"./zh-tw": 314,
	"./zh-tw.js": 314
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 468;

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_onesignal__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngcommerce_core__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(shopService, platform, statusBar, splashScreen, menuController, loadingCtrl, oneSignal) {
        var _this = this;
        this.shopService = shopService;
        this.menuController = menuController;
        this.loadingCtrl = loadingCtrl;
        this.oneSignal = oneSignal;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */];
        this.shopList = [];
        this.user = {};
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.initOnesignal();
        });
        this.user = JSON.parse(window.localStorage.getItem('jjuserbuyer'));
        if (this.user) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */];
        }
        this.workaroundSideMenu();
    }
    MyApp.prototype.initOnesignal = function () {
        this.oneSignal.startInit('fdfae3dc-e634-47f4-b959-f04e60f4613b', '464766391164');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        this.oneSignal.handleNotificationReceived().subscribe(function (onReceived) {
            // do something when notification is received
            var notifications = window.localStorage.getItem('sellerNotification') ? JSON.parse(window.localStorage.getItem('sellerNotification')) : [];
            notifications.unshift({
                date: new Date(),
                message: onReceived.payload.body
            });
            window.localStorage.setItem('sellerNotification', JSON.stringify(notifications));
        });
        this.oneSignal.handleNotificationOpened().subscribe(function () {
            // do something when a notification is opened
        });
        this.oneSignal.endInit();
    };
    MyApp.prototype.initLoadStoreList = function () {
        var _this = this;
        this.user = JSON.parse(window.localStorage.getItem('jjuserbuyer'));
        if (this.user) {
            var loading_1 = this.loadingCtrl.create();
            loading_1.present();
            this.shopService.getShopListByUser().then(function (data) {
                _this.shopList = data;
                loading_1.dismiss();
            }).catch(function (err) {
                window.localStorage.removeItem('jjuserbuyer');
                window.localStorage.removeItem('shop');
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */];
                loading_1.dismiss();
            });
        }
    };
    MyApp.prototype.selectShop = function (item) {
        window.localStorage.setItem('shop', JSON.stringify(item));
        var shop = window.localStorage.getItem('shop');
        console.log(shop);
    };
    MyApp.prototype.workaroundSideMenu = function () {
        var _this = this;
        setTimeout(function () {
            var leftMenu = _this.menuController.get('left');
            if (leftMenu) {
                leftMenu.ionOpen.subscribe(function () {
                    _this.initLoadStoreList();
                });
            }
        }, 1000);
    };
    MyApp.prototype.isShow = function (id) {
        var shopId = window.localStorage.getItem('shop') ? JSON.parse(window.localStorage.getItem('shop'))._id : null;
        return shopId === id;
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\mosthamapp\thamturakit-biz\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>ร้านค้าของคุณ</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <div *ngIf="shopList && shopList.length > 0">\n\n      <ion-item *ngFor="let item of shopList" (click)="selectShop(item)" menuClose>\n\n        <ion-avatar item-left>\n\n          <img [src]="item.image">\n\n        </ion-avatar>\n\n        <h2>{{item.name}}</h2>\n\n        <ion-icon item-end name="md-checkmark" *ngIf="isShow(item._id)"></ion-icon>\n\n      </ion-item>\n\n    </div>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-biz\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ngcommerce_core__["r" /* ShopService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_onesignal__["a" /* OneSignal */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-biz\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-biz\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-biz\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle icon-only>\n\n        <ion-icon name="md-list"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-left></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-biz\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateshopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the CreateshopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateshopPage = (function () {
    function CreateshopPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    CreateshopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateshopPage');
    };
    CreateshopPage.prototype.createShop = function (data) {
        this.viewCtrl.dismiss(data);
    };
    return CreateshopPage;
}());
CreateshopPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-createshop',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-biz\src\pages\createshop\createshop.html"*/'<!--\n\n  Generated template for the CreateshopPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>createshop</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n<ion-form-shop (createShop)="createShop($event)"></ion-form-shop>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-biz\src\pages\createshop\createshop.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], CreateshopPage);

//# sourceMappingURL=createshop.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createshop_createshop__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_order__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_account__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TabsPage = (function () {
    function TabsPage(shopService, modalControl, loadingCtrl) {
        this.shopService = shopService;
        this.modalControl = modalControl;
        this.loadingCtrl = loadingCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__order_order__["a" /* OrderPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__product_product__["a" /* ProductPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__notification_notification__["a" /* NotificationPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__account_account__["a" /* AccountPage */];
    }
    TabsPage.prototype.ionViewWillEnter = function () {
        this.getShop();
    };
    TabsPage.prototype.getShop = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.shopService.getShopListByUser().then(function (data) {
            console.log(data);
            loading.dismiss();
            if (data && data.length === 0) {
                _this.createShopModal();
            }
        }, function (err) {
            loading.dismiss();
            alert(err);
        });
    };
    TabsPage.prototype.createShopModal = function () {
        var _this = this;
        var shopModal = this.modalControl.create(__WEBPACK_IMPORTED_MODULE_0__createshop_createshop__["a" /* CreateshopPage */]);
        shopModal.onDidDismiss(function (data) {
            if (data && data.name) {
                var loading_1 = _this.loadingCtrl.create();
                loading_1.present();
                _this.shopService.createShop(data)
                    .then(function (resp) {
                    loading_1.dismiss();
                }, function (err) {
                    loading_1.dismiss();
                    alert(err);
                });
            }
        });
        shopModal.present();
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["n" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"D:\mosthamapp\thamturakit-biz\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Orders" tabIcon="md-list-box"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Products" tabIcon="md-cube"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Notifications" tabIcon="md-notifications-outline"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="Profile" tabIcon="person"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\mosthamapp\thamturakit-biz\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngcommerce_core__["r" /* ShopService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

},[359]);
//# sourceMappingURL=main.js.map