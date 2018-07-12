import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { QuizService } from '../quiz.service';

=======
>>>>>>> 37f6b8c1345871b98717235ae8efee7b2c9b6867

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

<<<<<<< HEAD
  constructor(private quiz: QuizService) {
    this.quiz = quiz;

    console.log(this.quiz.description);
   }
=======
  constructor() { }
>>>>>>> 37f6b8c1345871b98717235ae8efee7b2c9b6867

  ngOnInit() {
  }

}
