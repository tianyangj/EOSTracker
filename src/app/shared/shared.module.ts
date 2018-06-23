import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PrettyJsonModule } from 'angular2-prettyjson';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MasterpageComponent } from './masterpage/masterpage.component';
import { HeaderComponent } from './masterpage/header/header.component';
import { SidenavComponent } from './masterpage/sidenav/sidenav.component';
import { PageComponent } from './page/page.component';
import { LoadingComponent } from './page/loading/loading.component';
import { NavbarComponent } from './page/navbar/navbar.component';
import { SidebarComponent } from './page/sidebar/sidebar.component';
import { TableComponent } from './table/table.component';

import { ToKbPipes } from './pipes/tokb.pipes';

const sharedModules = [
  CommonModule,
  FormsModule,
  RouterModule,
  TranslateModule,
  PrettyJsonModule
];

const sharedMaterialModules = [
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatProgressSpinnerModule
];

const sharedComponents = [
  MasterpageComponent,
  HeaderComponent,
  SidenavComponent,
  PageComponent,
  LoadingComponent,
  NavbarComponent,
  SidebarComponent,
  TableComponent
];

const sharedPipes = [
  ToKbPipes
];

@NgModule({
  imports: [
    ...sharedModules,
    ...sharedMaterialModules
  ],
  declarations: [
    ...sharedComponents,
    ...sharedPipes
  ],
  exports: [
    ...sharedModules,
    ...sharedMaterialModules,
    ...sharedComponents,
    ...sharedPipes
  ]
})
export class SharedModule { }
