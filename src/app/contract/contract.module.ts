import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContractRoutingModule } from './contract-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ContractsComponent } from './contracts/contracts.component';
import { ContractComponent } from './contract/contract.component';
import { Contracts1Component } from './contracts1/contracts1.component';

@NgModule({
  imports: [
    SharedModule,
    ContractRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [
    ContractsComponent,
    ContractComponent,
    Contracts1Component
  ]
})
export class ContractModule { }
