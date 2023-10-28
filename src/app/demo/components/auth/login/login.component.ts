import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { hostApi } from 'src/app/constantes/baseurl';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
        `,
    ],
})
export class LoginComponent {
    public loginForm!: FormGroup;

    constructor(
        private formbuilder: FormBuilder,
        private http: HttpClient,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.loginForm = this.formbuilder.group({
            email: [''],
            password: ['', Validators.required],
        });
    }
    login() {
        const payload = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password,
        };
        this.router.navigateByUrl('/home/dashboard');

        // this.http.post<any>(hostApi + 'authenticar', payload).subscribe(
        //   (res) => {
        //     if (!res.token) {
        //       alert('Error credenciales no validas');
        //       return;
        //     }
        //     localStorage.setItem('idUsuario', res.id_usuario);
        //     localStorage.setItem('nombre', res.nombre);
        //     localStorage.setItem('apellido', res.apellido);
        //     localStorage.setItem('email', res.email);
        //     localStorage.setItem('contrasenia', res.password);
        //     localStorage.setItem('rol', res.id_rol);
        //   },
        //   (err) => {
        //     alert('Error credenciales no validas' + err.error ?? '');
        //   }
        // );
    }
}
