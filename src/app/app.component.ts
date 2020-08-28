import { Component } from '@angular/core';
import { SpaceXServiceService } from './space-xservice.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  spaceItems: any;
  launchItems: any;
  distinctYear: any;
  
  constructor(private spaceXService: SpaceXServiceService){}
  ngOnInit() {
    this.spaceXService.getSpaceX()
      .subscribe((spaceItems) => {
        this.spaceItems = spaceItems;
        console.log(this.spaceItems);
    });
    this.spaceXService.getLaunchDetails()
      .subscribe((launchItems) => {
        this.launchItems = launchItems;
        console.log(this.launchItems);
  });
  function getDistinctArray(){
      this.distinctYear = this.launchItems.launch_year;
      console.log('Distinct' + this.distinctYear);
    }
   }
 


}
