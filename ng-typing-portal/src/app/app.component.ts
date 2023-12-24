import { Component, OnInit ,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-typing-portal';
  @ViewChild('typingPortalForm', { static: false }) typingPortalForm: NgForm  ;

  @ViewChild('typingTargetForm', { static: false }) typingTargetForm: NgForm  ;
  


  loadTypingSpace = true
  loadTargetContent = true
  targetTimer = 0
  targetWordCount=0
  achievedWordCount=0
  controlErrorMessage=''
  remainingTime=0
  interval;


  SetTarget(_formData:any) {
    this.controlErrorMessage=''
    
    let isValid=true

    
      if(isNaN(_formData.wordTimer))
      {
        this.controlErrorMessage = "Entered timer is not a number. Kindly enter numbers only. "
        isValid=false
      }

      if(isNaN(_formData.wordCount))
      {
        this.controlErrorMessage =    this.controlErrorMessage  + "Entered target word count is not a number. Kindly enter numbers only. "
        isValid=false
      }
 
 
      if(isValid){
      this.targetTimer=_formData.wordTimer
      this.targetWordCount=_formData.wordCount
      this.loadTargetContent=true

      }

  }

  constructor(){

 
  }


  

  BeginTyping(){
    this.remainingTime = this.targetTimer
    this.loadTypingSpace=true;

     this.interval = setInterval(() => {
        this.remainingTime--

        if(this.remainingTime == 0){
          clearInterval(this.interval)
          this.EvaluateSubmission(this.typingPortalForm.value)
        }


    },1000)

  }


  
  EvaluateSubmission(_formData:any) {
    console.log(_formData.typingTextArea)
    alert("Form has been evaluated")
  }
}



