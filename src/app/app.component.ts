import { AfterViewInit, ViewChildren } from '@angular/core';
import { Component, ElementRef, ViewChild ,QueryList} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { After } from 'node:v8';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'view-child';
  @ViewChild('para') paragraph :ElementRef;
  ngAfterViewInit()
  {
    if(this.paragraph)
    {
      this.paragraph.nativeElement.textContent='New Text after view init()'
    }
  }
  // @ViewChild('childTemp') childTemp?:ChildComponent;
  // ngAfterViewInit()
  // {
  //   if(this.childTemp)
  //   {
  //      this.childTemp.startTimer();
  //   }
  // }
  @ViewChild('name') inputElements:ElementRef;
  @ViewChildren ('name') inputElements1:QueryList<ElementRef>;
fullName:string='';
  showFullName()
  {
  let name='';
  this.inputElements1.forEach((el)=>
  {
    name +=el.nativeElement.value + ' ';
  })
  name.trim();
  this.fullName=name;
    
  }

}
