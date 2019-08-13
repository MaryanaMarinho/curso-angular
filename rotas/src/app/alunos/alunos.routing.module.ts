import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';

const alunsoRoutes = [
  {path: '', component: AlunosComponent,
  canActivateChild: [AlunosGuard],
  children : [
    {path: 'novo', component: AlunoFormComponent},
    {path: ':id', component: AlunoDetalheComponent},
    {path: ':id/editar', component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard]}

  ]}

];

@NgModule({
	imports: [RouterModule.forChild(alunsoRoutes)],
	exports: [RouterModule]
})

export class AlunosRoutingModule {}
