import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shorten-pipe-demo',
  templateUrl: './shorten-pipe-demo.component.html',
  styleUrls: ['./shorten-pipe-demo.component.css']
})
export class ShortenPipeDemoComponent implements OnInit {

  loremIpsum: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
    ' Sed sed efficitur libero. Nunc efficitur bibendum nisi, nec porttitor ipsum scelerisque sed. Aliquam ac diam ' +
    'tempus, euismod lectus at, faucibus mi. Nulla dui lacus, condimentum in erat ac, fermentum cursus lectus. Vivamus ' +
    'pellentesque ante sed lacus porta mollis. Aenean at viverra lacus. Nunc auctor, sem in rhoncus tristique, tellus ' +
    'tellus sodales tellus, at commodo ex lorem et sem. Nulla a purus vehicula, accumsan risus vel, suscipit felis. ' +
    'Fusce nisl ante, dignissim sed fermentum a, tristique non lectus.\n';

  constructor() { }

  ngOnInit() {
  }

}
