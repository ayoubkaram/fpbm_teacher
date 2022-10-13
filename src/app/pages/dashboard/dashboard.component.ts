import { Component, OnInit, ElementRef } from '@angular/core';
import { StudentNote } from '../student-note/student-note';
import { StudentNotesService } from '../student-note/student-notes.service';
import { DashboardsService } from './dashboards.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  modules: any=[];
  students: StudentNote[]=[];
  count: number=0;
  moduleCount: number=0;

  constructor(private elementRef: ElementRef,
    private dashboardsService: DashboardsService,
    private studentNotesService: StudentNotesService) { }

  ngOnInit(): void {
    this.getProfModule();

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

  getProfModule(){
    this.dashboardsService.fetchAllStudent()
    .subscribe(result=>{
        this.modules = result;
        //console.log("prof Modeles "+this.modules.length);
        this.countProfEtudiant(this.modules);
        this.moduleCount = this.modules.length;
    })
    
  }

  countProfEtudiant(module :any){
    console.log("lent "+module.length);
    for(let i=0;i<module.length;i++){
      console.log("hii "+module[i].name);
      this.studentNotesService.fetchAllStudent(module[i].name)
    .subscribe(result=>{
        this.students = result;
        this.count = this.count+this.students.length
        console.log("std 0 id"+this.count);

    })
    
  }
}

}

