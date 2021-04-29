import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient, private toastrService: NbToastrService) { }

  readonly URL = "https://clicker.jnsaph.com/"

  checkCodes(code: any) {    
    switch (code) {
      case 200:
        break;
      case 400:
        this.showToast("Invalid Session ID", "Please Check in with your Host to see if the Session ID is still Valid.", "danger");
        break;
      case 500:
        this.showToast("Internal Server Error", "Check the Console for more Information.", "danger");
        break;
    }
  }

  showToast(head, description, type) {
    this.toastrService.show(
      description,
      head,
      { status: type, duration: 5000 });
  }

  notifySession(type: boolean, ID: number){
    return this.http.get(this.URL + "notify/" + type + "/" + ID);
  }

  authenticate(ID: number) {
    return this.http.get(this.URL + "authenticate/" + ID, {});
  }

  goNext(ID: number) {
    return this.http.get(this.URL + "next/" + ID, {});
  }

  goBack(ID: number) {
    return this.http.get(this.URL + "previous/" + ID, {});
  }
}
