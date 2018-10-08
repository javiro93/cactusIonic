import { Component } from '@angular/core';

import { MisReservasPage } from '../misReservas/misReservas';
import { AddReservasPage } from '../addReservas/addReservas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MisReservasPage;
  tab2Root = AddReservasPage;

  constructor() {

  }
}
