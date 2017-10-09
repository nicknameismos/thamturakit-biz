import { CreatProductPage } from '../creat-product/creat-product';
import { ProductDetailPage } from './../product-detail/product-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, LoadingController, ModalController } from 'ionic-angular';
import { CorService, ProductListModel, ProductService, ShopModel } from "@ngcommerce/core";

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  product = {} as ProductListModel;
  loadData: Boolean = false;
  shopSelected = JSON.stringify(JSON.parse(window.localStorage.getItem('shop')));
  shop = {} as ShopModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public productService: ProductService,
    public menuController: MenuController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad ProductPage');

    this.shop = JSON.parse(window.localStorage.getItem('shop'));
    if (this.shop && this.shop._id) {
      this.getProduct(this.shop);
    }
    this.workaroundSideMenu();
  }

  private workaroundSideMenu() {
    let leftMenu = this.menuController.get('left');

    if (leftMenu) {
      leftMenu.ionClose.subscribe(() => {
        this.shop = JSON.parse(window.localStorage.getItem('shop'));
        let shopSelected = JSON.parse(this.shopSelected);
        if (shopSelected) {
          if (this.shop._id === shopSelected._id) {
            return;
          }
        }
        this.getProduct(this.shop);
        this.shopSelected = JSON.stringify(this.shop);
      });
    }
  }

  getProduct(shop) {
    this.product = {} as ProductListModel;
    let loading = this.loadingCtrl.create();
    loading.present();
    this.productService.getProductListByShop(shop._id).then(data => {
      console.log(data);
      this.product = data;
      loading.dismiss();
    }).catch(e => {
      loading.dismiss();
      alert(e);
    })
  }

  selected(items) {
    this.navCtrl.push(ProductDetailPage, items);
  }
  addProductModal() {
    let productModal = this.modalCtrl.create(CreatProductPage);
    productModal.onDidDismiss(data => {
      if (data && data.name && data.name !== undefined) {
        let loading = this.loadingCtrl.create();
        loading.present();
        this.productService.createProduct(data).then((resq) => {
          loading.dismiss();          
          this.getProduct(this.shop);
        }, (err) => {
          loading.dismiss();
          alert(err);
        });
      }
    });
    productModal.present();
  }

}
