import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  constructor() { }

  public ngOnInit(): void {
  }
}
