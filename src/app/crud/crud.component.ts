import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, FormsModule } from '@angular/forms';
import { StringHelper } from '../helpers/string.helper';
import { HttpErrorHelper } from '../helpers/http-error.helper';
import { CrudModel } from '../models/crud.model';

@Component({
  selector: 'app-crud',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent implements OnInit {
  data: CrudModel[] = [];
  filterValue: string = '';
  itemToDelete: CrudModel;
  deleteMessage: string;
  routeLink: string = '/crud';

  constructor(private service: CrudService, private toastr: ToastrService) { }

  async ngOnInit(): Promise<void> {
    this.data = await this.get();
  }

  private async get(): Promise<CrudModel[]> {
    return await this.service.get();
  }

  filter(filterValue: string): CrudModel[] {
    return this.data.slice().filter(c => StringHelper.removeAccent(c.name.toLowerCase()).includes(StringHelper.removeAccent(filterValue.toLowerCase())));
  }

  delete(item: CrudModel): void {
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
