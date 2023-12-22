import { Component} from '@angular/core';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashbord-matiere',
  templateUrl: './dashbord-matiere.component.html',
  styleUrls: ['./dashbord-matiere.component.css']
})
export class DashbordMatiereComponent {

  // Declaration Variable
  public storeMatiere: any;
  public usersMatiere: any;

  MatiereRegister = {
    matiere: '',
  }

   ngOnInit(): void{
     this.storeMatiere = localStorage.getItem('Matiere');
      if(this.storeMatiere) {
        this.usersMatiere = JSON.parse(this.storeMatiere);
      }else{
        localStorage.setItem('Matiere', JSON.stringify(this.usersMatiere));
      }
  }

  RegisterMatiere(event: Event) {
    event.preventDefault();
    if(this.MatiereRegister.matiere !== '') {
      let matiereE = this.MatiereRegister.matiere;
      this.usersMatiere.push({
        id: this.usersMatiere.length + 1,
        matiere: matiereE,
      });
      localStorage.setItem('Matiere', JSON.stringify(this.usersMatiere));
    }




  }




  verifierChamps(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }
     
  //     supprimerMatiere(paramContact:any){
  //   Swal.fire({
  //     title: "Etes-vous sur???",
  //     text: "Vous allez supprimer le contact",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Oui, je supprime!"
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       paramContact.etatContact = 0;
  //       // On met à jour le tableau qui est stocké dans le localStorage 
  //       localStorage.setItem('Matiere', JSON.stringify(this.usersMatiere));
  //       this.verifierChamps("Contact supprimer!", "", "success");     
        
  //     }
  //   });
  //       alert(paramContact.etatContact);
  //       console.log("paramContact")
    
  // }
  
  
  
  
  }





