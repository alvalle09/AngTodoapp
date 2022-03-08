import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  showAddTask: boolean;
  subscription: Subscription;
  
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

}
