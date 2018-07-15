import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private quiz: QuizService) {
    this.quiz = quiz;

    console.log(this.quiz.question[this.quiz.currentQuestion - 1 ].choices[1].answer);
   }

  ngOnInit() {
  }

}
