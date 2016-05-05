import {Page,Modal,NavController} from 'ionic-angular';
import {Page1} from '../page1/page1';
import {Page2} from '../page2/page2';
import {Page3} from '../page3/page3';
import {ModalPage} from '../modal/modal';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Page1;
  tab2Root: any = Page2;
  tab3Root: any = Page3;
  
  constructor(private _nav:NavController){}
  
  openModal(){
    let modal=Modal.create(ModalPage);
    this._nav.present(modal);
  }
  
}