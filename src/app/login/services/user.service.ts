import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  public getAll() {
    return this.http.get<User[]>(`${environment.authUrlApi}users`);
  }

  public register(user: User) {
    return this.http.post<User>(`${environment.authUrlApi}users/register`, user);
  }
}
