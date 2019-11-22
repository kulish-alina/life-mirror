import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.less']
})
export class PatternComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  paternTypes = ["Creational", "Structural", "Behavioral"];

}
