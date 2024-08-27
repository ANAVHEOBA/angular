import { Component, OnInit, DoCheck } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {

  logged_in: boolean = false;
  language: string = 'English';
  user_role: string;

  constructor(private translate: TranslateService, private router: Router) { }

  ngOnInit() {
    // Initialization logic, if any
  }

  ngDoCheck() {
    this.user_role = sessionStorage.getItem("role");
    const user_session_id = sessionStorage.getItem("user_session_id");
    if (user_session_id) {
      this.logged_in = true;
    }
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    if (language === 'en') {
      this.language = 'English';
    } else if (language === 'fr') {
      this.language = 'French';
    }
  }

  logOut() {
    sessionStorage.removeItem("user_session_id");
    sessionStorage.removeItem("role");
    this.router.navigateByUrl('/sign-in');
    location.reload();
  }
}
