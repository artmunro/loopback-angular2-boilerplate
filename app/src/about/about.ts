import {Component} from 'angular2/core';

@Component({
  selector: 'about',
  templateUrl: 'src/about/about.html'
})
export class About {
  clickMessage = '';
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}
