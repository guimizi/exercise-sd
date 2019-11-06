import { Component, OnInit } from '@angular/core';
import {ContainerData, MockDataService} from '../../services/mock-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  containers: ContainerData[];

  constructor(private dataService: MockDataService) { }

  ngOnInit() {
    this.dataService.retrieveData().subscribe((response) => {
      this.containers = response;
    });
  }

}
