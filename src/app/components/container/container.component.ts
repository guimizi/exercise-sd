import {Component, Input, OnInit} from '@angular/core';
import {ContainerData} from '../../services/mock-data.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  @Input() data: ContainerData;

  constructor() { }

  ngOnInit() {
  }

  onclick() {
    alert(this.data.name);
  }

}
