import { Routes } from '@angular/router';
import { ProductTableComponent } from './components/views/products-table.component';
import { HomeComponent } from './components/views/home.component';
import { SupplierTableComponent } from './components/views/suppliers-table.component';
import { CustomerTableComponent } from './components/views/customers-table.component';
import { TransactionTableComponent } from './components/views/transactions-table.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'products', component: ProductTableComponent, title: 'Products' },
  { path: 'suppliers', component: SupplierTableComponent, title: 'Suppliers' },
  { path: 'customers', component: CustomerTableComponent, title: 'Customers' },
  { path: 'transactions', component: TransactionTableComponent, title: 'Transactions' }
];