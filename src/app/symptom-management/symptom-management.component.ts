import { Component } from '@angular/core';

@Component({
  selector: 'app-symptom-management',
  templateUrl: './symptom-management.component.html',
  styleUrls: ['./symptom-management.component.css']
})
export class SymptomManagementComponent {
  symptoms = [
    { name: 'Cólica', frequency: 'Frequente', lastOccurrence: new Date('2024-10-25') },
    { name: 'Dor de Cabeça', frequency: 'Ocasional', lastOccurrence: new Date('2024-10-18') },
    { name: 'Inchaço', frequency: 'Frequente', lastOccurrence: new Date('2024-10-22') }
  ];

  editSymptom(symptom: any) {
    console.log('Editar sintoma:', symptom);
    // Implementar a lógica de edição de sintomas
  }

  deleteSymptom(symptom: any) {
    console.log('Excluir sintoma:', symptom);
    this.symptoms = this.symptoms.filter(s => s !== symptom);
  }
}
