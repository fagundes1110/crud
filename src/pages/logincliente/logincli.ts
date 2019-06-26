import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-logincli',
  templateUrl: 'logincli.html'
})
export class logincliPage {
   
 p
  
  constructor( public navCtrl: NavController,private toast: ToastController) {
    
  }

  logincli(){

this.navCtrl.push(HomePage);

  }



}