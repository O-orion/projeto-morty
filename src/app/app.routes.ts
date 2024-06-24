import { Routes } from '@angular/router';
import { HomeComponent } from './pages/general/home/home.component';
import { DetailsComponent } from './pages/general/details/details.component';
import { GeneralComponent } from './pages/general/general.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { AuthGuard } from './core/guards/auth.guard';
import { MeuPerfilComponent } from './pages/general/meu-perfil/meu-perfil.component';

export const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Home',
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Detalhes'
      },
      {
        path:'perfil',
        component: MeuPerfilComponent,
        title: 'Meu Perfil'
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
    title: 'Cadastro'
  }

];
