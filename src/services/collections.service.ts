import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CollectionsService {
  apiUrl: string = 'http://safnari.herokuapp.com/api';

  constructor(private httpClient: HttpClient) {}

  getCollections() {
    return this.httpClient.get(`${this.apiUrl}/collections`);
  }

  getCollectionItems(collectionId: string) {
    return this.httpClient.get(`${this.apiUrl}/items?collection=${collectionId}`);
  }
}