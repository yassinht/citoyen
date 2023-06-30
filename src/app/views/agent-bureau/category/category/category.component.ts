import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  catForm: FormGroup;
  cats: any;
  idCat:any
  constructor(private formBuilder: FormBuilder,private categoryService:CategoryService,) { }

  ngOnInit(): void {
    this.catForm = this.formBuilder.group({
      name: ['', Validators.required],
    });

    this.categoryService.getAllcat().subscribe((data)=>{
      this.cats=data
    })
  }

  onSubmit(): void {
    console.log(this.catForm.value)
    this.categoryService.Addcat(this.catForm.value).subscribe((data)=>{
      console.log(data)
      this.catForm.reset()
      window.location.reload();

    })
  }


  onDelete(id): void {
    this.categoryService.Deletecat(id).subscribe((data)=>{
      console.log(data)

    })
    window.location.reload();

  }

  editRow(cat,idCat) {
    this.idCat=idCat
    this.catForm.setValue({
      name: cat.name
     
    });
 

  }

  update(){
    this.categoryService.Updatecat(this.idCat,this.catForm.value).subscribe((data)=>{
      console.log(data)
      window.location.reload();

    })
  }
  
}
