import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrls: ['./add-category-form.component.css']
})
export class AddCategoryFormComponent {

  constructor(private service: AdminService) { }

  searchForm = new FormGroup({
    categoryName: new FormControl('', Validators.required)
  })
  addNewCategory() {
    if (this.searchForm.valid) {
        this.service.saveCategory(this.searchForm.value).subscribe(
          (response) => {
            console.log(response);
          },
          (err)=>{
            console.log(err);
          }
        )
    }
  }
}
