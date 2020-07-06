import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-all-packages',
  templateUrl: './all-packages.component.html',
  styleUrls: ['./all-packages.component.scss']
})
export class AllPackagesComponent implements OnInit {

  auth: any;

  constructor(fireAuth: AngularFireAuth) { 
    this.auth = fireAuth;
  }

  ngOnInit(): void {

  }

}
