import {Injectable} from '@angular/core';



@Injectable()
export default class CourseService {

  server = 'http://localhost:8080';

  findAllCourses = () =>
    fetch(this.server + '/api/courses')
      .then(response => response.json());

  findCourseById = (cid) => fetch(this.server + '/api/courses/' + cid)
    .then(response => response.json());
}
