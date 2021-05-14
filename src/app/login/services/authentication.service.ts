import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject$: BehaviorSubject<User>;
  public currentUser$: Observable<User>;
  constructor(
    private http: HttpClient
  ) { 
    this.currentUserSubject$ = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser$ = this.currentUserSubject$.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject$.value;
  }

  public login(username: string, password: string): Observable<User> {
    return this.http.post<any>(`${environment.authUrlApi}users/authenticate`, {username, password}).pipe(
      map((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject$.next(user);
        return new User(user);
      })
    )
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject$.next(new User());
  }
}
