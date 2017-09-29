import { Component } from '@angular/core';

import { SettingsPage } from './../settings/settings';
import { ShortTermPage } from './../short-term/short-term';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ShortTermPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
