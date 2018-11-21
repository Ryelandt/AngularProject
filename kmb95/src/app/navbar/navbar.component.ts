import { Component, OnInit } from '@angular/core';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'; 



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  
  email: String;
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faAt = faAt;
  title = 'KMB95';
  
  constructor( private authService:AuthService, private router: Router) { 
  
    
    }
  

  ngOnInit() {
    
  }
  logout():void {
    
    this.authService.logout();
      this.router.navigate(['/'])
      
     

    
  }
}
