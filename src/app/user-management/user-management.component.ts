import { Component } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  users = [
    { name: 'Alice Souza', email: 'alice@example.com', status: 'Ativo' },
    { name: 'Bruno Mendes', email: 'bruno@example.com', status: 'Inativo' },
    { name: 'Carla Oliveira', email: 'carla@example.com', status: 'Ativo' },
    { name: 'Daniel Silva', email: 'daniel@example.com', status: 'Ativo' }
  ];

  editUser(user: any) {
    console.log('Editar usuário:', user);
    // Lógica de edição do usuário pode ser adicionada aqui
  }

  deleteUser(user: any) {
    console.log('Excluir usuário:', user);
    // Lógica de exclusão do usuário pode ser adicionada aqui
    this.users = this.users.filter(u => u !== user);
  }
}
