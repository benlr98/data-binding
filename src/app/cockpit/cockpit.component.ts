import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated: EventEmitter<{svrName: string, svrContent: string}> = new EventEmitter();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{bptName: string, bptContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({
      svrName: this.newServerName, 
      svrContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      bptName: this.newServerName, 
      bptContent: this.newServerContent
    });
  }

}
