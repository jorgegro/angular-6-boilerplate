import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  

   questions = [
      {
       id: 1, 
       name:'How many people are they in your group?',
       selectedAnswer: '',
       choice: [

         {
           name: 'Me, Mysel, and I',
           value: -5,
         },

         {
          name: 'Close friends and I',
          value:  0,
         },

         {
           name: '10 people, we need the numbers',
           value: -10,
         },

         {
           name: 'I stay whit my city (community)',
           value: -15,
         },
       ]
       
      },

      {
        id: 2, 
        name:'Chose your weapon',
        selectedAnswer: '',
        choice: [
 
          {
            name: 'My body',
            value: -15,
          },
 
          {
           name: 'Flyswatter',
           value: -10,
          },
 
          {
            name: 'Pistol whit two full cartidges',
            value: -5,
          },
 
          {
            name: 'Baseball bat',
            value: 0,
          },
        ]
       },

       {
        id: 3, 
        name:'Would you help others?',
        selectedAnswer: '',
        choice: [

          {
           name: 'Not at all',
           value: '',
          },
 
          {
            name: 'Yes',
            value:'',
          },
        ]
       },

       {
        id: 4, 
        name:'Where would you problaby survive the most?',
        selectedAnswer: '',
        choice: [
 
          {
            name: 'A dumpster',
            value: '',
          },

          {
            name: 'Abandoned bulding',
            value: '',
          },
 
          {
           name: 'A treehouse',
           value: '',
          },
 
          {
            name: 'A playground',
            value:'',
          },
        ]
       },

       {
        id: 5, 
        name:'How would you move around?',
        selectedAnswer: '',
        choice: [
 
          {
            name: 'Horse',
            value: '',
          },
 
          {
           name: 'Hoverboard',
           value: '',
          },
 
          {
            name: 'Motorcycle',
            value:'',
          },
 
          {
            name: 'Kombi (Hippie van)',
            value: '',
          },
        ]
       },
   ]


  constructor() { }
}
