import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  products: any[] = [];

  productService = inject(ProductsService);

  ngOnInit() {
    this.productService.getAll().subscribe((products) => {
      this.products = products
    });
  }
}
