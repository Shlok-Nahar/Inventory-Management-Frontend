import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,  // Mark this as a standalone component
  imports: [CommonModule, RouterModule],  // Import CommonModule and RouterModule
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  // Array to hold the products
  products: any[] = [];

  // Inject HttpClient into the component and mark it as readonly
  constructor(private readonly http: HttpClient) {}

  // OnInit lifecycle hook to fetch data when the component initializes
  ngOnInit(): void {
    // Fetch the list of products from the backend API
    this.http.get<any[]>('http://localhost:5000/api/products') // Replace with your backend API URL
      .subscribe({
        next: (data) => {
          // Set the response data to the products array
          this.products = data;
        },
        error: (err) => {
          // Handle errors if the API call fails
          console.error('Error fetching products', err);
        }
      });
  }
}
