import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
      <div class="preloader-wrapper big active"> 
        <div class="spinner-layer spinner-blue"> 
          <div class="circle-clipper left"> 
          <div class="circle"></div> 
          </div><div class="gap-patch"> 
          <div class="circle"></div> 
          </div><div class="circle-clipper right"> 
          <div class="circle"></div> 
          </div> 
        </div> 
      </div> 
  `
})
export class LoaderComponent {}
