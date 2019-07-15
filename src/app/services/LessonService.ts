import {Injectable} from '@angular/core';

@Injectable()
export default class LessonService {

  server = 'http://localhost:8080';

  findAllLessonsForModule = moduleId =>
    fetch(this.server + '/api/modules/' + moduleId + '/lessons')
      .then(response => response.json());

  findAllLessons = () => fetch(this.server + '/api/lessons')
    .then(response => response.json());



  findLessonById = (lessonId) => fetch(this.server + '/api/lessons/' + lessonId)
    .then(response => response.json());

}
