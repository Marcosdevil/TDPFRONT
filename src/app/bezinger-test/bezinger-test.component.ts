import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bezinger-test',
  templateUrl: './bezinger-test.component.html',
  styleUrls: ['./bezinger-test.component.css']
})
export class BezingerTestComponent implements OnInit {

  bezingerForm = new FormGroup({
    parteA : new FormControl(''),
    frase1 : new FormControl(false),
    frase2 : new FormControl(false),
    frase3 : new FormControl(false),
    frase4 : new FormControl(false),
    frase5 : new FormControl(false),
    frase6 : new FormControl(false),
    frase7 : new FormControl(false),
    frase8 : new FormControl(false),
    frase9 : new FormControl(false),
    frase10 : new FormControl(false),
    frase11 : new FormControl(false),
    frase12 : new FormControl(false),
    frase13 : new FormControl(false),
    frase14 : new FormControl(false),
    frase15 : new FormControl(false),
    parteB : new FormControl(''),
    total: new FormControl(''),
  })
  constructor() { }

  ngOnInit(): void {
  }

}
