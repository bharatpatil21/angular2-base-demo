import { Component,  OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: `../../templates/app.dashboard.html`,
  styleUrls: [],
  providers: [ ]
})

export class DashboardComponent implements OnInit {

  constructor(fb: FormBuilder,private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
  }
}
