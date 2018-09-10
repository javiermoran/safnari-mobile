import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CollectionsService } from '../../services/collections.service';
import { ItemsPage } from '../items/items';

@Component({
  selector: 'page-collections',
  templateUrl: 'collections.html',
})
export class CollectionsPage {
  itemsPage = ItemsPage;
  collections: any[] = [];
  collectionIcons = {
    "record": "disc",
    "cbook": "book",
    "toy": "trophy",
    "movie": "film",
    "bgame": "cube"
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private cService: CollectionsService
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectionsPage');
    this.getCollections();
  }

  getCollections() {
    this.cService.getCollections()
      .subscribe((collections) => {
        this.collections = collections['data'].map((collection) => {
          collection.icon = this.collectionIcons[collection.type.name];
          return collection;
        });
        console.log(this.collections)
      }, (error) => {
        console.log(error);
      })
  }

}
