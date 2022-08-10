import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email:any = null;

  constructor(
    private auth: AuthService, 
    private router: Router, 
    private toastr: ToastrService) {
      auth.getUser().subscribe((user) => {
        //this.email = user?.email;
        this.email = user?.email;
      });
     }

  ngOnInit(): void {
  }

  async handlesignout(){
    try{
      const res = await this.auth.signout();
      this.router.navigateByUrl('/signin');
      this.toastr.info('Login Again to continue');
      this.email = null;
    }catch(error){
      this.toastr.error('Error');
    }
  }

}
