import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bt-modo4',
  templateUrl: './bt-modo4.component.html',
  styleUrls: ['./bt-modo4.component.css']
})
export class BtModo4Component implements OnInit {

  bezingerForm = new FormGroup({
    parteA : new FormControl(''),
    frase1 : new FormControl(''),
    frase2 : new FormControl(''),
    frase3 : new FormControl(''),
    frase4 : new FormControl(''),
    frase5 : new FormControl(''),
    frase6 : new FormControl(''),
    frase7 : new FormControl(''),
    frase8 : new FormControl(''),
    frase9 : new FormControl(''),
    frase10 : new FormControl(''),
    frase11 : new FormControl(''),
    frase12 : new FormControl(''),
    frase13 : new FormControl(''),
    frase14 : new FormControl(''),
    frase15 : new FormControl(''),
    parteB : new FormControl(''),
    Total: new FormControl(''),
  })
  
  constructor() { }

  ngOnInit(): void {
  }

}
