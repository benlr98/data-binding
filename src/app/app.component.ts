import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type: 'server', name: 'Test Server', content: 'This is a test server'}
  ];
  oddNumbers: number[] = [];
  evenNumbers: number [] = [];

  onServerAdded(serverData: {svrName: string, svrContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.svrName,
      content: serverData.svrContent
    });
  }

  onBlueprintAdded(blueprintData: {bptName: string, bptContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.bptName,
      content: blueprintData.bptContent
    });
  }

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }

}
