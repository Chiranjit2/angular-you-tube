import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Router} from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router:Router) {}

  myimg:string="assets/images/download.png";

  values = [
    {name:'All'},
    {name:'Angular'},
    {name:'News'},
    {name:'Cricket'},
    {name:'Education'},
    {name:'Movie'},
    {name:'Wild Life'},
    {name:'Web Series'},
    {name:'Education'},
    {name:'Conversation'},
    {name:'Recruitment'},
    {name:'Entertainment'}
  ];
  searchText:any;
   cardvalues= [
    {source:'assets/images/nature1.jpg',title:'Visit some beautiful natural place'},
    {source:'assets/images/cricket1.jpg',title:'India vs England 4th test match highlight'},
    {source:'assets/images/movie1.jpg',title:'Vijay South-Indian movie teaser hindi dubbed'},
    {source:'assets/images/news1.png',title:'Watch News India for latest news in hindi'},
    {source:'assets/images/speech1.jpg',title:'Motivational speech by Sandip Maheswari in Delhi'},
    {source:'assets/images/movie3.jpg',title:'Operation Jackpot south indian movie'},
    {source:'assets/images/nature4.jpg',title:'Official Animal Plannet channel'},
    {source:'assets/images/cricket2.jpg',title:'Rahul played wanderfull ennings against England'}
  ];

  back(){
    Swal.fire({title:'Successfully Logged Out',icon:'success'})
    this.router.navigate(['/login']);
  }

}
