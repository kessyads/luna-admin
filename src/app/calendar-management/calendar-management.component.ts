import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-management',
  templateUrl: './calendar-management.component.html',
  styleUrls: ['./calendar-management.component.css']
})
export class CalendarManagementComponent {
  users = [
    { name: 'Alice Souza', cycleStart: new Date('2024-10-01'), cycleLength: 28 },
    { name: 'Bruna Mendes', cycleStart: new Date('2024-10-05'), cycleLength: 30 },
    { name: 'Carla Oliveira', cycleStart: new Date('2024-10-10'), cycleLength: 25 },
    { name: 'Lara Silva', cycleStart: new Date('2024-10-15'), cycleLength: 26 }
  ];

  getNextCycle(user: any): Date {
    const nextCycle = new Date(user.cycleStart);
    nextCycle.setDate(nextCycle.getDate() + user.cycleLength);
    return nextCycle;
  }

  editCycle(user: any) {
    console.log('Editar ciclo do usuário:', user);
    // Implementar a lógica de edição do ciclo
  }
}
