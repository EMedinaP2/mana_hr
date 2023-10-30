import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Catalog from 'src/interfaces/catalog.interface';
import Puesto from 'src/interfaces/position.interface';

@Injectable({
  providedIn: 'root'
})

export class PuestoService {

  constructor(private firestore:Firestore) {
   }

   addPosition(position:Puesto){
      const positionRef = collection(this.firestore, 'positions')
      return addDoc(positionRef, position)
   }

   getPositions():Observable<Puesto[]>{
    const catalogRef = collection(this.firestore, 'catalogs')
      return collectionData(catalogRef, {idField:'id'}) as Observable<Puesto[]>
   }

   

}
