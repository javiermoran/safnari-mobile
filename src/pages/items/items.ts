import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { CollectionsService } from '../../services/collections.service';

@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage implements OnInit {
  collection: any;
  items: any[];
  loading: any;
  filteredItems: any[];
  searchValue: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private cService: CollectionsService,
    private loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsPage');
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: ''
    });
    this.loading.present();  
  }

  dismissLoading() {
    this.loading.dismiss();
  }

  onInput() {
    this.filter(this.searchValue);
  }

  onCancel() {
    this.searchValue = "";
    this.filter("");
  }

  filter(searchValue: string) {
    this.filteredItems = this.items.filter((item) => {
      const search = searchValue.toLowerCase();
      return item.title.toLowerCase().indexOf(search) !== -1
             || item.publisher.toLowerCase().indexOf(search) !== -1;
    });
  }

  ngOnInit() {
    this.showLoading();

    this.collection = this.navParams.data;
    this.cService.getCollectionItems(this.collection._id)
      .subscribe((items) => {
        this.items = items['data'];
        this.filteredItems = this.items.slice();
        this.dismissLoading();
      }, (error) => {
        console.log(error);
      })
  }
}
