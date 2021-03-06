import { Input, Component } from '@angular/core';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'warning',
    message: 'Atenção!',
  }
];

@Component({
  selector: 'Componente02_Atencao',
  templateUrl: './alertwarning.component.html'
})
export class AlertWarning02 {

  alerts: Alert[];

  constructor() {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }
}
