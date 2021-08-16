import { Component, OnInit, Input, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { Property } from '../../store/app.reducer';


declare const maplibregl: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit {
  @Input()
  properties:Property[]=[];

  map:any;
  constructor() { }

  ngOnInit(): void {
    
    this.map = new maplibregl.Map({
        container: 'map', // container id
        style: 'https://api.maptiler.com/maps/eef16200-c4cc-4285-9370-c71ca24bb42d/style.json?key=CH1cYDfxBV9ZBu1lHGqh', // style URL
        center: [12.550343, 55.665957], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

    var marker = new maplibregl.Marker()
            .setLngLat([12.550343, 55.665957])
            .addTo(this.map); 
      
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes.properties){
      console.log(this.properties);
      this.properties
      .filter(({geocode}) => {
        return geocode.IsValid;
      })
      .forEach(({geocode}) => {
        console.log('inside forEach');          
          new maplibregl.Marker()
                  .setLngLat([geocode.Latitude, geocode.Longitude])
                  .addTo(this.map); 
        
      });      
    }
  }

}
