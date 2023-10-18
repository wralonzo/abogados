import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { LoginComponent } from './demo/components/auth/login/login.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: LoginComponent,
                },
                {
                    path: 'home',
                    component: AppLayoutComponent,
                    children: [
                        {
                            path: 'dashboard',
                            loadChildren: () =>
                                import(
                                    './demo/components/dashboard/dashboard.module'
                                ).then((m) => m.DashboardModule),
                        },
                        {
                            path: 'uikit',
                            loadChildren: () =>
                                import(
                                    './demo/components/uikit/uikit.module'
                                ).then((m) => m.UIkitModule),
                        },
                        {
                            path: 'cliente',
                            loadChildren: () =>
                                import('./demo/cliente/module.module').then(
                                    (m) => m.ClienteModule
                                ),
                        },
                        {
                            path: 'caso',
                            loadChildren: () =>
                                import('./demo/caso/module.module').then(
                                    (m) => m.CasoModule
                                ),
                        },
                    ],
                },
                {
                    path: 'auth',
                    loadChildren: () =>
                        import('./demo/components/auth/auth.module').then(
                            (m) => m.AuthModule
                        ),
                },
                {
                    path: 'landing',
                    loadChildren: () =>
                        import('./demo/components/landing/landing.module').then(
                            (m) => m.LandingModule
                        ),
                },
                { path: 'notfound', component: NotfoundComponent },
                { path: '**', redirectTo: '/notfound' },
                {
                    path: 'login',
                    loadChildren: () =>
                        import(
                            './demo/components/auth/login/login.module'
                        ).then((m) => m.LoginModule),
                },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
