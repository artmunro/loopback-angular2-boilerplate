import {Component, Inject} from 'angular2/core';
import {User} from '../../services/user';
import {UserApi, AccessTokenApi} from '../../lib/lb-services';

@Component({
    selector: 'login',
    templateUrl: 'src/components/login/login.html',
    styleUrls: ['src/components/login/login.css']
})
export class Login {
    private email: string;
    private password: string;

    constructor(@Inject(User) public user: User, @Inject(UserApi) public userApi: UserApi, @Inject(AccessTokenApi) public accessTokenApi: AccessTokenApi) {
    }

    public login() {
        console.log('Login');
        this.userApi.login({email: this.email, password: this.password}).subscribe(
            (response: any) => { this.user.user = response.user; },
            (error: any) => { this.user.clearUser(); console.error('login KO', error); },
            () => { console.log('Login COMPLETE', this.user); }
        );
    }

    public logout() {
        console.log('Logout');
        this.userApi.logout().subscribe(
            (response: any) => { this.user.clearUser(); },
            (error: any) => { this.user.clearUser(); console.log('Logout KO'); },
            () => { console.log('Logout COMPLETE'); }
        );
    }
}
