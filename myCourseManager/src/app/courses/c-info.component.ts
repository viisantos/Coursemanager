import { CService } from './c.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './model/course';


@Component({
  selector: 'app-c-info',
  templateUrl: './c-info.component.html',
  styleUrls: ['./c-info.component.css']
})
export class CInfoComponent implements OnInit {

  course: any;

  constructor(private activatedRoute:ActivatedRoute, private courseService: CService) { }

  ngOnInit(): void {
    this.courseService.retornaPorId(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe({
      next: course => this.course = course,
      error: err => console.log('Error', err)
    });
  }

  save(): void {
    this.courseService.salvar(this.course).subscribe({
      next: course => console.log('salvo com sucesso : ', course),
      error: err => console.log('Erro : ', err )
    });
  }

}
