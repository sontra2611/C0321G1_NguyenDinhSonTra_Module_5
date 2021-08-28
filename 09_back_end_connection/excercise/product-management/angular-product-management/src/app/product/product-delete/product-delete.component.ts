import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.productService.deleteProduct(id).subscribe(() => {
      this.router.navigateByUrl('product/list');
    });
  }


  ngOnInit(): void {

  }
}
