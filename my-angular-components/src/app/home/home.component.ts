import { Component, OnInit } from '@angular/core';
import { SnackBarService } from "../shared/snackbar/snack-bar.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private snackBarService: SnackBarService) { }

  ngOnInit() {
    // this.snackBarService.snackBarSuccess('Main component displayed').subscribe();
    // this.snackBarService.snackBarError('Main component displayed','Close').subscribe();
    // this.snackBarService.snackBarWarning('Main component displayed').subscribe();
    this.snackBarService.snackBarAction('Main component displayed', 'Do it !').subscribe();
  }

}
