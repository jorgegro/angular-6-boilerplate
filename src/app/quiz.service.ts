import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  description = "I am a string inside of the servie!";

  constructor() { }
}
