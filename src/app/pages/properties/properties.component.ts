import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../property.service';
import { Store } from '@ngrx/store';
import { Property, PropertyState } from '../../store/app.reducer';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  properties:Property[]=[];
  constructor(
    private property: PropertyService,
    private store: Store
  ) {
    this.property.init();
   }

  ngOnInit(): void {
    this.store.select((state:any) => state.properties)
      .subscribe((data: PropertyState) => {
        this.properties = data.records;
      });
  }

}
