import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPageRoutingModule } from './account-routing.module';

import { AccountPage } from './account.page';

import { OrderCardComponent } from '../../components/order-card/order-card.component'; // Importa el componente 

import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AccountPage, OrderCardComponent, EditProductComponent] // Agrega el componente al módulo
})
export class AccountPageModule {}