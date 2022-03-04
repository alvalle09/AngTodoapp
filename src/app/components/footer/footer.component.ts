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
  showAboutLink: boolean;

  subscription: Subscription;
  subjAbout: Subscription;

  constructor(private uiService: UiService,
              private router: Router) { 
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));

  }

  ngOnInit(): void {
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

}
