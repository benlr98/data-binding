import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated: EventEmitter<{svrName: string, svrContent: string}> = new EventEmitter();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{bptName: string, bptContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef; 

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    // console.log(svrName.value)
    this.serverCreated.emit({
      svrName: nameInput.value, 
      svrContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(svrName) {
    this.blueprintCreated.emit({
      bptName: svrName.value, 
      bptContent: this.serverContentInput.nativeElement.value
    });
  }

}
