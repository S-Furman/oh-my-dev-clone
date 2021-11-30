import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  constructor(private http: HttpClient) {
  }

  public authUser(reqType: string, user: { email: string; password: string }) {
    if (reqType === 'signIn') {
      // eslint-disable-next-line no-console
      this.logIn(user).subscribe(data => console.log(data));
    } else {
      // eslint-disable-next-line no-console
      this.singUp(user).subscribe(data => console.log(data));
    }
  }

  private singUp(user: { email: string; password: string }): Observable<SignUpResponseData> {
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCPtXoJmAK7IU3oSg8m75ftk7VxUTfQ3I8';
    return this.http.post<SignUpResponseData>(url, {
      email: user.email,
      password: user.password,
      returnSecureToken: true,
    });
  }

  private logIn(user: { email: string; password: string }): Observable<SignInResponseData> {
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCPtXoJmAK7IU3oSg8m75ftk7VxUTfQ3I8';
    return this.http.post<SignInResponseData>(url, {
      email: user.email,
      password: user.password,
      returnSecureToken: true,
    });
  }
}
