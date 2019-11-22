import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  patternList = [
    { 
      title: "Factory Method",
      description: "is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created"
	 },
	 { 
      title: "Factory Method",
      description: "is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created"
	 },
	 { 
      title: "Factory Method",
      description: "is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created"
	 },
	 { 
      title: "Factory Method",
      description: "is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created"
	 },
	 { 
      title: "Factory Method",
      description: "is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created"
	 }, 
	 { 
      title: "Factory Method",
      description: "is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created"
	 },
	 { 
      title: "Factory Method",
      description: "is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created"
	 },
	 { 
      title: "Factory Method",
      description: "is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created"
    }
  ];

}
