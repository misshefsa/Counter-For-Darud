import { Component,input } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 count:number=0;
 
  increament(){
    this.count++
    console.log("Count after increment:", this.count);
 }

   decreament(){
    this.count--
    console.log("Count after dencrement:", this.count);
 }
   balance(){
    this.count=0
    console.log("Count after balance:", this.count);
 }

 
}
