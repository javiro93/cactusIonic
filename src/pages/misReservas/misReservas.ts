import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

interface Reserva {
  estado: string,
  fecha: string,
  mesa: number,
  nomReserva: string
}

@Component({
  selector: 'page-misReservas',
  templateUrl: 'misReservas.html'
})
export class MisReservasPage {

  reservasCollection: AngularFirestoreCollection<Reserva>;
  reservas: Reserva[];
  canReorder: boolean = false;

  constructor(public navCtrl: NavController, alertCtrl: AlertController, private db: AngularFirestore) {

  }
  ionViewDidEnter() {
    this.reservasCollection = this.db.collection('reservas', ref => ref.orderBy('mesa'));
    this.reservasCollection.snapshotChanges().subscribe(reservasList => {
      this.reservas = reservasList.map(reserva => {

        return {
          mesa: reserva.payload.doc.data().mesa,
          nomReserva: reserva.payload.doc.data().nomReserva,
          estado: reserva.payload.doc.data().estado,
          fecha: reserva.payload.doc.data().fecha,
          hora: reserva.payload.doc.data().hora,
          id: reserva.payload.doc.id
        }
      })
    })
  }
  eliminarReserva() {
    let alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
    //this.db.doc(`reservas/${reserva.id}`).delete();
  }
  cancelarReserva(reserva: Reserva) {
    this.db.doc(`reservas/${reserva.id}`).delete();
  }
  /*  reorderItem(indexes: any) {
     if (this.canReorder) {
       let batch = this.db.firestore.batch();
       let element = this.reservas[indexes.from];
       this.reservas.splice(indexes.from,1);
       this.reservas.splice(indexes.to,0,element);
 
       this.reservas.forEach((item:Reserva, index:number) => {
         if(item.mesa!==index){
           let ref = this.db.doc(`reservas/${item.id}`).ref;
           batch.update(ref, {mesa:index});
         }
       });
       batch.commit().then(()=>{
         console.log('lista de tareas reordenada....');
       }).catch(err =>{
         console.error(err);
       })
     } 
   }*/

}
