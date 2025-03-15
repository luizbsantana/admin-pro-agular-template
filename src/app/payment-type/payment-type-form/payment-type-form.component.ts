import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { PaymentTypeModel } from '../../models/payment-type.model';
import { PaymentTypeService } from '../payment-type.service';
import { CommonModule } from '@angular/common';
import { SelectIconComponent } from '../../shared/select-icon/select-icon.component';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorHelper } from '../../helpers/http-error.helper';

@Component({
  selector: 'app-payment-type-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, SelectIconComponent],
  templateUrl: './payment-type-form.component.html',
  styleUrl: './payment-type-form.component.scss'
})
export class PaymentTypeFormComponent {
  routeLink: string = '/payment-types';
  form: FormGroup = this.formBuilder.group({
    id: [''],
    name: ['', Validators.required],
    icon: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service: PaymentTypeService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    var id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      var item = await this.getById(id);
      this.form.setValue({
        id: item.id,
        name: item.name,
        icon: item.icon
      });
    }
  }

  async getById(id: string): Promise<PaymentTypeModel> {
    return await this.service.getById(id);
  }

  iconSelected(icon: string): void {
    this.form.controls['icon'].setValue(icon);
  }

  async save(): Promise<void> {
    var request = this.form.getRawValue() as PaymentTypeModel;

    if (request.id) {
      this.edit(request);
      return;
    }

    this.add(request);
  }

  async add(request: PaymentTypeModel): Promise<void> {
    await this.service.add(request).then(response => {
      this.router.navigate([this.routeLink]);
      this.toastr.success('Forma de pagamento adicionada com sucesso!');
    }).catch(error => {
      var errorMessage = HttpErrorHelper.getErrorMessage(error);
      this.toastr.error(errorMessage);
    });
  }

  async edit(request: PaymentTypeModel): Promise<void> {
    await this.service.edit(request).then(response => {
      this.router.navigate([this.routeLink]);
      this.toastr.success('Forma de pagamento editada com sucesso!');
    }).catch(error => {
      var errorMessage = HttpErrorHelper.getErrorMessage(error);
      this.toastr.error(errorMessage);
    });
  }
}
