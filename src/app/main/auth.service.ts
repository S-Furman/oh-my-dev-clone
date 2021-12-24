import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './User.model';

interface SignUpResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}
interface SignInResponseData extends SignUpResponseData{
  registered: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public user: BehaviorSubject<User | null> = new BehaviorSubject<User|null>(null);
  constructor(private http: HttpClient) {}

  private static errorHandler(errorRes: HttpErrorResponse) {
    switch(errorRes.error.error.message) {
      case 'INVALID_EMAIL':
        return throwError('Wpisz prawidłowy adres');
      case 'INVALID_PASSWORD':
        return throwError('Wpisz prawidłowe hasło');
      case 'EMAIL_NOT_FOUND':
        return throwError('Wpisz prawidłowe hasło');
      case 'USER_DISABLED':
        return throwError('Twoje konto zostało zablokowane');
      default:
        return throwError('Unkown error');
    }
  }
  public authUser(reqType: string, user: { email: string; password: string }) {
    if (reqType === 'signIn') {
      return this.logIn(user);
    } else {
      return this.singUp(user);
    }
  }

  private singUp(user: { email: string; password: string }): Observable<SignUpResponseData> {
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCPtXoJmAK7IU3oSg8m75ftk7VxUTfQ3I8';
    return this.http.post<SignUpResponseData>(url, {
      email: user.email,
      password: user.password,
      returnSecureToken: true,
    }).pipe(
      catchError((errorRes: HttpErrorResponse) => AuthService.errorHandler(errorRes)),
      tap(resData => this.handleAuth(resData.email, resData.localId, resData.idToken, resData.expiresIn))
    );
  }

  private logIn(user: { email: string; password: string }): Observable<SignInResponseData> {
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCPtXoJmAK7IU3oSg8m75ftk7VxUTfQ3I8';
    return this.http.post<SignInResponseData>(url, {
      email: user.email,
      password: user.password,
      returnSecureToken: true,
    }).pipe(
      catchError((errorRes: HttpErrorResponse) => AuthService.errorHandler(errorRes)),
      tap(resData => this.handleAuth(resData.email, resData.localId, resData.idToken, resData.expiresIn))
    );
  }
  private handleAuth(email: string, id: string, tokenId: string, expiresIn: string) {
    const expirationDate = new Date(new Date().getTime() + parseInt(expiresIn, 10)) ;
    const newUser = new User(email, id, tokenId, expirationDate);
    this.user.next(newUser);
  }
}
