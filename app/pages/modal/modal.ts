import {Page,NavController,ViewController} from 'ionic-angular';

@Page({
    template:`
        <ion-content padding>
            <button (click)="close()">Close</button>
        </ion-content>
    `
})

export class ModalPage {
    
    constructor( private _nav:NavController,
        private _view:ViewController
    ){
        
    }
    
    close(){
        this._view.dismiss();
        //this._nav.popToRoot();
    }
    
}