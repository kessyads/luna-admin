import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-management',
  templateUrl: './alert-management.component.html',
  styleUrls: ['./alert-management.component.css']
})
export class AlertManagementComponent {
  alerts = [
    { title: 'Lembrete de Treino', description: 'Não esqueça de fazer seu treino diário!', sendDate: new Date('2024-10-30') },
    { title: 'Dia Fértil', description: 'Seu dia fértil começa amanhã.', sendDate: new Date('2024-11-01') },
    { title: 'Nova Recomendação de Treino', description: 'Temos uma nova recomendação de treino para você.', sendDate: new Date('2024-11-02') }
  ];

  addAlert() {
    console.log('Adicionar novo alerta');
    // Lógica para adicionar um novo alerta
  }

  editAlert(alert: any) {
    console.log('Editar alerta:', alert);
    // Lógica para editar o alerta
  }

  deleteAlert(alert: any) {
    console.log('Excluir alerta:', alert);
    this.alerts = this.alerts.filter(a => a !== alert);
  }
}
