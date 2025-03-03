import { Component, OnInit } from '@angular/core';
import { AddressService } from '../services/address.service';


@Component({
  selector: 'app-address',
  imports: [],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent implements OnInit {
  str: String = '';


constructor(private addressService: AddressService) {}

ngOnInit() {
  this.addressService.callLocalApi().subscribe(data=>{
    console.log(data);
    this.str=data;
  });

}

}
