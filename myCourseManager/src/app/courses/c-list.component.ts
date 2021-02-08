import { Component, OnInit } from '@angular/core';
import { CService } from './c.service';
import { Course } from './model/course';

@Component({
  selector: 'app-c-list',
  templateUrl: './c-list.component.html',
  styleUrls: ['./c-list.component.css']
})
//Esta classe consome o serviço "CourseService".
export class CListComponent implements OnInit {

  filteredCourses: Course[] = []; //este array armazenará uma lista de cursos filtrados.
  _courses:  Course[] = []; //este array armazenará uma lista de cursos
  _filterBy: string = "";

  constructor(private cService: CService)
   //Injeção de dependencia. Aqui é feita a instancia dos serviços que esta classe vai consumir.
   //Essa instancia é imutável para quaisquer classes que a venham consumir.

   /**
    * CourseService conversa com uma APIrest para retornar os dados a partir da mesma. A api é a do banco de dados.
   */
    {

    }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.cService.retornaTodos().subscribe({
        next: courses => {
            this._courses = courses;
            this.filteredCourses = this._courses;
        },
        error: err => console.log('Error', err)
      })
}

  deleteById(courseId ?: any): void{
    this.cService.excluiPorId(courseId).subscribe({ //o subscribe é necessário para que obtenhamos o observable, pois ele é 'lazy'. Precisamos escutar o retorno do observable para que possamos obter nossos dados.
        next: () => { //Entender o que faz o next().
          console.log('excluído com sucesso');
          this.retrieveAll(); //exibir a listagem das informações atualizada.
        },
        error: err => console.log('Error', err)
    })
  }

  set filter(value: string){
    this._filterBy = value;
    this.filteredCourses = this._courses.filter((course: any) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterBy;
  }

}


