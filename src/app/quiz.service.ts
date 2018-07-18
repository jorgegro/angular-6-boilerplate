import { Injectable } from '@angular/core';
import { Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private router: Router) { }
  
  goBackQuestion(){
     if(this.currentQuestion > 1){
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
  total = 0;
  
  calculateResult(){
    for(let i = 0; i < this.question.length; i++){
      this.total = this.total + this.question[i].selectedAnswer;
    }
    console.log(this.total);
  }
  currentQuestion = 1 ;

  reset(){
    for(let i = 0; i < this.question.length; i++){
      this.question[i].selectedAnswer = null;
    }
    this.currentQuestion = 1;
    this.total = 0;
  }

  question = [
    {
      name: "What type of zombies are going to be in your apocalypse?",
      selectedAnswer: null,
      choices: [
        {
          answer: "Resident Evil Zombies",
          value: 3
        },
        {
          answer: "Walking Dead Zombies",
          value: 12.5
        },
        {
          answer: "World War Z Zombies",
          value: 6
        },
        {
          answer: "Zombieland Zombies",
          value: 9
        }
      ]
    },
    {
      name: "How many people are there in your group?",
      selectedAnswer: null,
      choices: [
        {
          answer: 'Me, Myself, and I',
          value: 9
        },
        {
          answer: 'Just my close friends and I!',
          value: 12.5
        },
        {
          answer: '10 people, we need the numbers',
          value: 6
        },
        {
          answer: 'I love my community',
          value: 3
        }
      ]
    },
    {
      name: 'Choose your weapon!!!',
      selectedAnswer: null,
      choices: [
        {
          answer: 'My body',
          value: 3
        },
        {
          answer: 'flyswatter',
          value: 6
        },
        {
          answer: 'Pistol with 2 cartidges',
          value: 9
        },
        {
          answer: 'baseball bat',
          value: 12.5
        }
      ]
    },
    {
      name: 'Would you help others?',
      selectedAnswer: null,
      choices: [
        {
          answer: 'Not at all',
          value: 12.5
        },
        {
          answer: 'yes',
          value: 6.25
        }
      ]
    },
    {
      name: 'Where would you make your homebase',
      selectedAnswer: null,
      choices: [
        {
          answer: 'A dumpster',
          value: 9
        },
        {
          answer: 'Abandonded building',
          value: 12.5
        },
        {
          answer: 'A treehouse',
          value: 6
        },
        {
          answer: 'A playground',
          value: 3
        }
      ]
    },
    {
      name: 'How would you move around?',
      selectedAnswer: null,
      choices: [
        {
          answer: 'Horse',
          value: 12.5
        },
        {
          answer: 'Hoverboard',
          value: 6
        },
        {
          answer: 'Motocycle',
          value: 3
        },
        {
          answer: 'Kombi',
          value: 9
        }
      ]
    },
    {
      name: 'If you get bitten would you amputate your limb?',
      selectedAnswer: null,
      choices: [
        {
          answer: 'Yes, I need to survive no matter what!',
          value: 12.5
        },
        {
          answer: "No, I don't want to suffer",
          value: 6.25
        }
      ]
    },
    { 
      name: 'Would you kill your dog if it turns into a zombie?',
      selectedAnswer: null,
      choices: [
        {
          answer: 'Yes, you gotta survive!',
          value: 12.5
        },
        {
          answer: "I can't do that to my loving dog",
          value: 6.25
        }
      ]
    }
  ]
}
