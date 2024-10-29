import { Component } from '@angular/core';

@Component({
  selector: 'app-workout-management',
  templateUrl: './workout-management.component.html',
  styleUrls: ['./workout-management.component.css']
})
export class WorkoutManagementComponent {
  workouts = [
    { name: 'Yoga Suave', cyclePhase: 'Fase Folicular', duration: 30 },
    { name: 'Treino Funcional', cyclePhase: 'Fase Luteal', duration: 45 },
    { name: 'Pilates', cyclePhase: 'Fase Ovulatória', duration: 40 },
  ];

  addWorkout() {
    console.log('Adicionar novo treino');
    // Lógica para adicionar um novo treino
  }

  editWorkout(workout: any) {
    console.log('Editar treino:', workout);
    // Lógica para editar um treino
  }

  deleteWorkout(workout: any) {
    console.log('Excluir treino:', workout);
    this.workouts = this.workouts.filter(w => w !== workout);
  }
}
