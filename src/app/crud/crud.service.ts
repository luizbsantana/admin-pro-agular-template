import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { first } from "rxjs";
import { CrudModel } from "../models/crud.model";

@Injectable({
    providedIn: 'root'
})
export class CrudService {
    private URL = `${environment.apiUrl}/api/crud`;
    data: CrudModel[] = [
        { id: '1', name: 'Pix', icon: 'fal fa-money-bill' },
        { id: '2', name: 'Dinheiro', icon: 'fal fa-money-bill' }
    ];

    constructor(private http: HttpClient) { }

    get(): Promise<CrudModel[]> {
        return new Promise<CrudModel[]>((resolve, reject) => {
            resolve(this.data)
        });
        // return this.http.get(`${this.URL}`).pipe(first()).toPromise() as Promise<CrudModel[]>;
    }

    getById(id: string): Promise<CrudModel> {
        return new Promise<CrudModel>((resolve, reject) => {
            resolve(this.data.find(c => c.id == id))
        });
        // return this.http.get(`${this.URL}/${id}`).pipe(first()).toPromise() as Promise<CrudModel>;
    }

    add(request: CrudModel) {
        return new Promise<void>((resolve, reject) => {
            resolve()
        });
        // return this.http.post(`${this.URL}`, request).pipe(first()).toPromise() as Promise<any>;
    }

    edit(request: CrudModel) {
        return new Promise<void>((resolve, reject) => {
            resolve()
        });
        // return this.http.post(`${this.URL}/${request.id}`, request).pipe(first()).toPromise() as Promise<any>;
    }

    delete(id: string) {
        return new Promise<void>((resolve, reject) => {
            resolve()
        });
        // return this.http.delete(`${this.URL}/${id}`).pipe(first()).toPromise() as Promise<void>;
    }
}