import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { StoresResponseDataModel } from 'src/app/models/api-responseModels';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent {
  currentLocality: string = 'Sec 168, Noida';
  storesArray: StoresResponseDataModel[] = [
    {
      storeName: 'Apollo Pharmacy',
      name: 'Ram Singh',
      address: 'Noida',
      gstNumber: '1234rfgt56',
      company: 'xyz company',
      cid: '',
      sellerId: '',
      storeId: 1,
      image:
        'https://www.financialexpress.com/wp-content/uploads/2022/09/apollo1.jpg',
    },
    {
      storeName: 'Patanjali Store',
      name: 'Ram Singh',
      address: 'Noida',
      gstNumber: '1234rfgt56',
      company: 'xyz company',
      cid: '',
      sellerId: '',
      storeId: 2,
      image:
        'https://ayurmade.com/wp-content/uploads/2021/05/Patanjali-Mega-Store-in-Sonipat-1.jpg',
    },
    {
      storeName: 'R K Medical',
      name: 'Shyam Singh',
      address: 'Noida',
      gstNumber: '1234rfgt56',
      company: 'xyz company',
      cid: '',
      sellerId: '',
      storeId: 3,
      image:
        'https://5.imimg.com/data5/RI/WM/MY-65610076/pharmacy-rack-1000x1000.jpg',
    },
    {
      storeName: 'PharmEasy',
      name: 'Mohan Singh',
      address: 'Noida',
      gstNumber: '1234rfgt56',
      company: 'xyz company',
      cid: '',
      sellerId: '',
      storeId: 4,
      image:
        'https://medicaldialogues.in/h-upload/2022/07/01/179817-pharmeasy.webp',
    },
    {
      storeName: 'Evergreen Medical',
      name: 'Rohit Singh',
      address: 'Noida',
      gstNumber: '1234rfgt56',
      company: 'xyz company',
      cid: '',
      sellerId: '',
      storeId: 5,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZs1eaPX6qEa41jh9WEcQf_4ZdH_9XClD8Q&usqp=CAU',
    },
    {
      storeName: 'Dayal Drugs',
      name: 'Sohan Singh',
      address: 'Noida',
      gstNumber: '1234rfgt56',
      company: 'xyz company',
      cid: '',
      sellerId: '',
      storeId: 6,
      image:
        'https://www.shutterstock.com/image-photo/pharmacy-entrance-during-covid19-pandemic-260nw-1710391807.jpg',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {
    //@ts-ignore
    console.log(<AppState>Store,"Sss")
    // this.currentLocality = this.cartService.locate();
  }

  selectCard(element: any) {
    this.router.navigate(['pages/products']);
  }
}
