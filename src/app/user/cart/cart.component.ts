import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmPopupComponent } from '../confirm-popup/confirm-popup.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  selectedValue: any[] = [];
  cartItem: any[] = [];
  cartItems: any[] = [];
  quantites: string[] = Array.from({ length: 5 }, (_, i) => i + 1 + "") /**1 to 5 */
  userId: number = 0;
  isCartEmpty: boolean = false;

  formOrder = new FormGroup({
    qunatity: new FormControl("", Validators.required),
    totalPrice: new FormControl("", Validators.required)
  })

  constructor(public dialog: MatDialog,) {

  }
  // openDialog(data: number) {
  //   const dialogRef = this.dialog.open(DeleteAlertComponent, {
  //     width: '300px'
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log("closed", result);

  //     if (result) {
  //       console.log("id", result);
  //       this.deleteCartItem(data);
  //       location.reload();
  //     }
  //   });
  // }

  // deleteCartItem(id: number) {
  //   this.service.deleteCartByCartId(id).subscribe(
  //     (res) => console.log(res),
  //     (err) => console.log(err)
  //   )
  // }

  // deleteCartByUser(id: number) {
  //   this.service.deleteAllCartItemByUserId(id).subscribe(
  //     (res) => {
  //       console.log(res);
  //     },
  //     (err) => {
  //       console.log(err);

  //     }
  //   )
  // }
  functionToChangeValue(event: any) {
    this.selectedValue = event;
  }
  submitOrder() {
    console.log("value ", this.formOrder.value);
    if (this.formOrder.valid) {
      this.cartItems.push(this.selectedValue.values)
      console.log("value ", this.formOrder.value);
    } else {
      console.log("error");

    }
  }
  ngOnInit(): void {
  }

  confirm() {
    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      width: '18vw ',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
  }
}
