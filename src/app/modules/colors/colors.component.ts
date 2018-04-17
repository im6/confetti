import { Component } from '@angular/core';
import { ColorService } from '../../service/color.service';

@Component({
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent {
  title = 'colors list';
  colors = [];
  constructor(private colorService: ColorService) {
    // should do nothing
  }
  ngOnInit() {
    this.colorService.getList()
      .subscribe(data => {
        this.colors = data;
      });
  }
}
