import {Page,Modal,NavController} from 'ionic-angular';
import {ModalPage} from '../modal/modal';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
  
  hometabs:string="seg1";
  
  constructor(private _nav:NavController) {

  }
  
  openModal(){
    let modal=Modal.create(ModalPage);
    this._nav.present(modal);
  }
  
}
