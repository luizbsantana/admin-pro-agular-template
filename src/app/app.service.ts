import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {

    constructor() { }

    showLoading = new BehaviorSubject<boolean>(null);
}