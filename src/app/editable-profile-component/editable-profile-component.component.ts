import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ToastService } from '../../services/toast.service';
import { User } from '../../models/user.interface';
import {TELEPHONE_MASK} from "../shared/constants/tel-mask";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  user: User;
  mask = TELEPHONE_MASK;

  constructor(
    private userService: UserService,
    private toastService: ToastService,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    this.initializeForm();
    this.fillForm();
  }

  private fillForm() {
    this.userService.user.subscribe(
      (user: User) => {
        this.user = user;
        this.patchForm(user);
      },
      (error) => {
        this.toastService.error(error);
      }
    );
  }

  patchForm(data) {
    this.profileForm.patchValue(data, { onlySelf: true });
  }

  initializeForm() {
    this.profileForm = this.fb.group({
      name: [''],
      avatar: [''],
    });
  }

  onSubmit({ value }) {
    this.userService.updateProfile(value).subscribe(
      () => {
        this.toastService.success('Profile was updated!');
      },
      (error) => {
        this.toastService.error(error);
      }
    );
  }

}
