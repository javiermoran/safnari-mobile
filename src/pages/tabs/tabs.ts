import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CollectionsPage } from '../collections/collections';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  collectionPage = CollectionsPage;
  dashboardPage = DashboardPage;
}
