import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationRequest, AuthenticationResponse, ChangePasswordRequest } from '../models/Authentication';
import { RestApiService } from './rest-api.service';

@Injectable({
    providedIn: 'root',
})

export class AuthenticationService {
    constructor(private readonly rest: RestApiService) { }

    public signup(req: AuthenticationRequest): Observable<AuthenticationResponse> {
        return this.rest.post<AuthenticationResponse>("/signup", req);
    }

    public login(req: AuthenticationRequest): Observable<AuthenticationResponse> {
        return this.rest.post<AuthenticationResponse>("/login", req);
    }

    public refreshAccessToken(): Observable<any> {
        return this.rest.post<AuthenticationResponse>("/refreshAccessToken", {});
    }

    public changePassword(req: ChangePasswordRequest) : Observable<unknown>{
        return this.rest.post("/changepw", req);
    }
}