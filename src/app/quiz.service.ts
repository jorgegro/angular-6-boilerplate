import { Injectable } from '@angular/core';
import { Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private router: Router) { }
  
  goBackQuestion(){
    if(this.question.length < 0){
      this.currentQuestion--;
      this.router.navigate([`/question/${this.currentQuestion}`]);
    } else {
      this.router.navigate([`/`]);
    }
  }
  
  goNextQuestion(){
    if(this.question.length > this.currentQuestion){
      this.currentQuestion++;
      this.router.navigate([`/question/${this.currentQuestion}`]);
    } else {
      this.calculateResult();
      this.router.navigate([`/result`]);
    }
  }
  
  calculateResult(){

  }
  currentQuestion = 1;

  question = [
    {
      name: "How many people are they in your group?",
      selectedAnswer: '',
      choices: [
        {
          answer: 'Me, Myself, and I',
          value: -5
        },
        {
          answer: 'Just my close friends and I!',
          value: 0
        },
        {
          answer: '10 people, we need the numbers',
          value: -10
        },
        {
          answer: 'I love my community',
          value: -15
        }
      ]
    },
    {
      name: 'Choose your weapon',
      selectedAnswer: '',
      choices: [
        {
          answer: 'My body',
          value: -15
        },
        {
          answer: 'flyswatter',
          value: -10
        },
        {
          answer: 'Pistol with 2 cartidges',
          value: -5
        },
        {
          answer: 'baseball bat',
          value: 0
        }
      ]
    },
    {
      name: 'Would you help others?',
      selectedAnswer: '',
      choices: [
        {
          answer: 'Not at all',
          value: 0
        },
        {
          answer: 'yes',
          value: -5
        }
      ]
    },
    {
      name: 'Where would you survive the most?',
      selectedAnswer: '',
      choices: [
        {
          answer: 'A dumpster',
          value: -5
        },
        {
          answer: 'Abandonded building',
          value: 0
        },
        {
          answer: 'A treehouse',
          value: -10
        },
        {
          answer: 'A playground',
          value: -15
        }
      ]
    },
    {
      name: 'How would you move around?',
      selectedAnswer: '',
      choices: [
        {
          answer: 'Horse',
          value: 0
        },
        {
          answer: 'Hoverboard',
          value: -10
        },
        {
          answer: 'Motocycle',
          value: -15
        },
        {
          answer: 'Kombi',
          value: -5
        }
      ]
    }
  ]
}
