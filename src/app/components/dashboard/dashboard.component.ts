import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryResponseDataModel } from 'src/app/models/api-responseModels';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  currentLocality: string = '';
  categoriesArray: CategoryResponseDataModel[] = [
    {
      cid: '1',
      categoryName: 'Pharmacy',
      image:
        'https://cdn3d.iconscout.com/3d/premium/thumb/pharmacy-6102918-5272666.png',
      status: 'Active',
    },
    {
      cid: '2',
      categoryName: 'Groceries',
      image:
        'https://thumbs.dreamstime.com/b/grocery-store-line-icon-trendy-colors-small-cute-shop-front-symbol-showcase-street-background-food-market-vector-94913200.jpg',
      status: 'Active',
    },
    {
      cid: '3',
      categoryName: 'Restaurant',
      image:
        'https://icon-library.com/images/food-and-drink-icon/food-and-drink-icon-12.jpg',
      status: 'Not Active',
    },
    {
      cid: '4',
      categoryName: 'Salon',
      image:
        'https://media.istockphoto.com/id/1081123462/vector/hair-salon-with-scissors-and-comb-icon.jpg?s=1024x1024&w=is&k=20&c=sD-D-rSVR34BjGav6lnBEHNBZzL9RxdVQ9DXbQKwZVo=',

      status: 'Active',
    },
    {
      cid: '5',
      categoryName: 'Clothing',
      image:
        'https://www.clipartmax.com/png/small/212-2122762_possible-reward-shirt-clothing-icon.png',
      status: 'Active',
    },
    {
      cid: '6',
      categoryName: 'Fitness',
      image:
        'https://cdn3.iconfinder.com/data/icons/bold-outline-dotted-v10/512/fitness_workout_kettlebell_gym_exercise_fit_sport_health_bodybuilding-512.png',
      status: 'Not Active',
    },
    {
      cid: '7',
      categoryName: 'Groceries',
      image:
        'https://thumbs.dreamstime.com/b/grocery-store-line-icon-trendy-colors-small-cute-shop-front-symbol-showcase-street-background-food-market-vector-94913200.jpg',
      status: 'Active',
    },
    {
      cid: '8',
      categoryName: 'Pharmacy',
      image:
        'https://cdn3d.iconscout.com/3d/premium/thumb/pharmacy-6102918-5272666.png',
      status: 'Active',
    },
    {
      cid: '9',
      categoryName: 'Salon',
      image:
        'https://media.istockphoto.com/id/1081123462/vector/hair-salon-with-scissors-and-comb-icon.jpg?s=1024x1024&w=is&k=20&c=sD-D-rSVR34BjGav6lnBEHNBZzL9RxdVQ9DXbQKwZVo=',
      status: 'Not Active',
    },
    {
      cid: '10',
      categoryName: 'Restaurant',
      image:
        'https://icon-library.com/images/food-and-drink-icon/food-and-drink-icon-12.jpg',
      status: 'Active',
    },
    {
      cid: '11',
      categoryName: 'Clothing',
      image:
        'https://www.clipartmax.com/png/small/212-2122762_possible-reward-shirt-clothing-icon.png',
      status: 'Active',
    },
    {
      cid: '12',
      categoryName: 'Fitness',
      image:
        'https://cdn3.iconfinder.com/data/icons/bold-outline-dotted-v10/512/fitness_workout_kettlebell_gym_exercise_fit_sport_health_bodybuilding-512.png',
      status: 'Not Active',
    },
  ];
  constructor(
    private router: Router,
    // private apiService: ApiService,
    // private cartService: CartService
  ) {}
  selectCard(element: any) {
    this.router.navigate(['pages/stores']);
  }
}
