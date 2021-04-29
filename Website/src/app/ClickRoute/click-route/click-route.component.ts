import { Component, OnInit, HostListener } from '@angular/core';
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
    
    this.utils.notifySession(true, this.sessionID)
    .subscribe((resp) => {
      console.info(resp)
    },
    (error) => {
      console.error(error)
    })
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    this.utils.notifySession(false, this.sessionID)
    .subscribe((resp) => {
      alert(resp);
      console.info(resp)
    },
    (error) => {
      alert(error);
      console.error(error)
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
