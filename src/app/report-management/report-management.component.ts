import { Component } from '@angular/core';

@Component({
  selector: 'app-report-management',
  templateUrl: './report-management.component.html',
  styleUrls: ['./report-management.component.css']
})
export class ReportManagementComponent {
  totalSymptoms: number = 34;  // Número fictício de sintomas monitorados
  totalWorkoutTime: number = 1200;  // Tempo total de treino em minutos

  generateReport() {
    console.log('Relatório Detalhado Gerado');
    // Lógica para gerar um relatório detalhado
  }
}
