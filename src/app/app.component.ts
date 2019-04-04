import { Component } from '@angular/core';
import { ProductDetailOutlets} from '@spartacus/storefront';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  samtest1 = ProductDetailOutlets;

  detailImage;
}
