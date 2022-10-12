import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { UsersService } from 'src/app/_auth/users.service';
import { PeriodicElement } from '../student-note/student-note.component';
import { CertificatesService } from './certificates.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

 
  headers = ["semester", "module", "localDate", "localDateTime",'local'];
  heads = ['Nom', 'Prenom','CIN', 'CNE'];
  pvheads = ['Semestere', 'Module', 'Date', 'Horaire', 'Local'];
  dataSource: any[]=[];
  username="prof";
  user:any={};
  @ViewChild('invoice', {static:false}) invoiceElement!: ElementRef;

  constructor(private sertificatesService: CertificatesService,
    private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUserByUsername(this.username);
  }

  getsurveillantPvs(id: any){
    this.sertificatesService.getsurveillantPvs(id)
    .subscribe(reslt=>{
      this.dataSource =reslt;
    })
  }

  getUserByUsername(username: string){
    this.usersService.getUserByUsername(username)
    .subscribe(reslt=>{
      this.user = reslt
      console.log("user "+this.user.id);
      this.getsurveillantPvs(this.user.id);

    })
  }

generatePDF(){

    console.log("pdf gn");
    

    html2canvas(this.invoiceElement.nativeElement, { scale: 3 }).then(canvas => {
      // Few necessary setting options
       
      const contentDataURL = canvas.toDataURL('image/png')
  

     
      let PDF = new jsPDF('p', 'mm', 'a4',);
      var width = PDF.internal.pageSize.getWidth();
      var height = canvas.height * width / canvas.width;
      
      PDF.addImage(contentDataURL, 'PNG', 0, 0, width, height)
      PDF.html(this.invoiceElement.nativeElement.innerHTML)
     
      var file = new Blob([PDF.output('blob')], { type: 'application/pdf' })
      var fileURL = URL.createObjectURL(file);
      console.log("sign :"+fileURL);
      
      // open PDF in new tab
      window.open(fileURL); 
      var a         = document.createElement('a');
      a.href        = fileURL; 
      a.target      = '_blank';
      a.download    = this.user.nom+"_"+this.user.prenom+'_Convocation.pdf';
      document.body.appendChild(a);
      a.click();
      });
    
       
  }


}

