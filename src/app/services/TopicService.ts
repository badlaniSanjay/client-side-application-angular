import {Injectable} from '@angular/core';

@Injectable()
export default class TopicService {

  server = 'http://localhost:8080';

  findAllTopicsForLesson = lessonId =>
    fetch(this.server + '/api/lessons/' + lessonId + '/topics')
      .then(response => response.json());

  findAllTopics = () =>
    fetch(this.server + '/api/topics')
      .then(response => response.json());

  findTopicById = (topicId) =>  fetch(this.server + '/api/topics/' + topicId)
    .then(response => response.json());
}
