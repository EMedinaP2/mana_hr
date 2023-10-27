import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { CollectionReference, collection, query, where } from 'firebase/firestore';
import { Observable } from 'rxjs';
import Catalog from 'src/interfaces/catalog.interface';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private firestore: Firestore){ }

  getCatalogByName(catalogName:String):Observable<Catalog[]>{
      const catalogRef = collection(this.firestore, 'catalogs')
      const catalogQuery = query(catalogRef,where('catalog','==', catalogName))
      return collectionData(catalogQuery, {idField:'id'}) as Observable<Catalog[]>
  }
}
