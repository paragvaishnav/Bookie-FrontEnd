import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddCategoryFormComponent } from '../add-category-form/add-category-form.component';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent {

  constructor(public dialog: MatDialog, private router: Router) { }

  openCategoryForm(){
    const dialogRef = this.dialog.open(AddCategoryFormComponent, {
      width: '25vw',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
