import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '../../utils.service';

@Component({
  selector: 'app-click-route',
  templateUrl: './click-route.component.html',
  styleUrls: ['./click-route.component.scss']
})
export class ClickRouteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private utils: UtilsService) { }

  sessionID: number;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {

      this.sessionID = params['sessionID'];
    })
  }

  nextSlide() {
    this.utils.goNext(this.sessionID)
      .subscribe((response) => {
        console.log(response);
      }, (error) => {
        this.utils.checkCodes(error.error.code)
      })
  }

  previousSlide() {
    this.utils.goBack(this.sessionID)
    .subscribe((response) => {
      console.log(response);
    }, (error) => {
      this.utils.checkCodes(error.error.code)
    })
  }

}
