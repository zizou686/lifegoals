import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Meta {
  id?: string;
  meta: string;
}

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  constructor(private firestore: AngularFirestore) {}

  // Obtener todas las metas
  obtenerMetas(): Observable<any[]> {
    return this.firestore.collection('metas').valueChanges({ idField: 'id' });
  }

  // Agregar una meta
  agregarMeta(meta: string): Promise<any> {
    return this.firestore.collection('metas').add({ meta });
  }

  // Eliminar una meta
  eliminarMeta(id: string): Promise<any> {
    return this.firestore.collection('metas').doc(id).delete();
  }
}
