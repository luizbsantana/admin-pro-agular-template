import { Component, OnInit } from '@angular/core';
import { PaymentTypeService } from './payment-type.service';
import { ToastrService } from 'ngx-toastr';
import { PaymentTypeModel } from '../models/payment-type.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, FormsModule } from '@angular/forms';
import { StringHelper } from '../helpers/string.helper';
import { HttpErrorHelper } from '../helpers/http-error.helper';

@Component({
  selector: 'app-payment-type',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './payment-type.component.html',
  styleUrl: './payment-type.component.scss'
})
export class PaymentTypeComponent implements OnInit {
  data: PaymentTypeModel[] = [];
  filterValue: string = '';
  itemToDelete: PaymentTypeModel;
  deleteMessage: string;
  routeLink: string = '/payment-types';

  constructor(private service: PaymentTypeService, private toastr: ToastrService) { }

  async ngOnInit(): Promise<void> {
    this.data = await this.get();
  }

  private async get(): Promise<PaymentTypeModel[]> {
    return await this.service.get();
  }

  filter(filterValue: string): PaymentTypeModel[] {
    return this.data.slice().filter(c => StringHelper.removeAccent(c.name.toLowerCase()).includes(StringHelper.removeAccent(filterValue.toLowerCase())));
  }

  delete(item: PaymentTypeModel): void {
    this.itemToDelete = item;
    this.deleteMessage = `Tem certeza que deseja excluir a forma de pagamento '${item.name}'?`;
  }

  async confirmDelete(): Promise<void> {
    await this.service.delete(this.itemToDelete.id).then(response => {
      this.toastr.success('Forma de pagamento excluída com sucesso!');
      document.getElementById('closeDeleteModal').click();
    }).catch(error => {
      var errorMessage = HttpErrorHelper.getErrorMessage(error);
      this.toastr.error(errorMessage);
    });
  }
}
