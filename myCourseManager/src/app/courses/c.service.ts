import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../courses/model/course';
@Injectable({
  providedIn: 'root'
})
export class CService {

    private readonly courseUrl: string = 'http://localhost:3100/api/courses'; //url da API. 'readonly' pois seu valor não deve ser alterado.

  constructor(private httpClient: HttpClient) { } //HttpClient é uma classe de serviço que permite a execução de métodos http.

  retornaTodos(): Observable<Course[]>{
    // criamos um model "Course",
    //para termos um tipo, uma classe,
    //que nos permita declarar um tipo para o retorno do Observable.

    return this.httpClient.get<Course[]>(this.courseUrl); //retorna um observable do array de cursos do url da API.
  }

  retornaPorId(i: number): Observable<Course>{
    return this.httpClient.get<Course>(`${this.courseUrl}/${i}`);
  }

  salvar(c: Course): Observable<Course>{ //Este metodo serve para inserção(post) e atualização de dados(put)
    if(c.id){
      return this.httpClient.put<Course>(`${this.courseUrl}/${c.id}`, c); //Atualiza valor
    }
    else{
      return this.httpClient.post<Course>(`${this.courseUrl}`,c); //insere novo valor
    }
 }

 excluiPorId(i: number): Observable<any>{
   return this.httpClient.delete<any>(`${this.courseUrl}/${i}`);
 }



}

var COURSES: any[] = [
  {
      id: 1,
      name: 'Angular: CLI',
      releaseDate: 'November 2, 2019',
      description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
      duration: 120,
      code: 'XLF-1212',
      rating: 3,
      price: 12.99,
      imageUrl: '/assets/images/cli.png',
  },
  {
      id: 2,
      name: 'Angular: Forms',
      releaseDate: 'November 4, 2019',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
      duration: 80,
      code: 'DWQ-3412',
      rating: 3.5,
      price: 24.99,
      imageUrl: '/assets/images/forms.png',
  },
  {
      id: 3,
      name: 'Angular: HTTP',
      releaseDate: 'November 8, 2019',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
      duration: 80,
      code: 'QPL-0913',
      rating: 4.0,
      price: 36.99,
      imageUrl: '/assets/images/http.png',
  },
  {
      id: 4,
      name: 'Angular: Router',
      releaseDate: 'November 16, 2019',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
      duration: 80,
      code: 'OHP-1095',
      rating: 4.5,
      price: 46.99,
      imageUrl: '/assets/images/router.png',
  },
  {
      id: 5,
      name: 'Angular: Animations',
      releaseDate: 'November 25, 2019',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
      duration: 80,
      code: 'PWY-9381',
      rating: 5,
      price: 56.99,
      imageUrl: '/assets/images/animations.png',
  }
];
