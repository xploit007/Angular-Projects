import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  form = this.formBuilder.group({
    name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      country: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  submit() {
    if (this.form.valid) {
      this.userService.addUser(this.form.value).subscribe(() => {
        alert('User added successfully.');
        this.form.reset();
        // Call getUsers() method of UserListComponent to update the user list
        this.userService.getUsers().subscribe((data) => {
          const userListComponent = document.querySelector(
            'app-user-list'
          ) as any;
          userListComponent.users = data;
        });
      });
    }
  }
}
