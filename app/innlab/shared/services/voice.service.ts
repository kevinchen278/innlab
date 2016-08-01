import { Injectable }     from '@angular/core';
import {EmitterService} from "./emitterservice";

export interface IWindow extends Window {
  webkitSpeechRecognition: any;
}
const {webkitSpeechRecognition} : IWindow = <IWindow>window;


@Injectable()
export class VoiceService {
    
    private recognition:any;

    
   constructor(private emitter: EmitterService){
    //    this.recognition = new webkitSpeechRecognition();
   }
   
    startRecognition() {
        this.recognition = new webkitSpeechRecognition();
        
        this.recognition.onstart = (event:any) => { 
            this.emitter.next({type:"updateRec", value: this.recognition ? "Stop" : "Speak"});
        };
        
        this.recognition.onresult = (event:any) => {
            let text = "";
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                text += event.results[i][0].transcript;
            }
            this.emitter.next({type:"speakScript", value: text}); 
            this.stopRecognition();
        };
        this.recognition.onend = ()=> {
            this.stopRecognition();
        };
        this.recognition.lang = "en-US";
        this.recognition.start();
    }

    stopRecognition() {
        if (this.recognition) {
            this.recognition.stop();
            this.recognition = null;
        }
        this.emitter.next({type: "updateRec", value: this.recognition ? "Stop" : "Speak"});
    }
    
    switchRecognition() {
        if (this.recognition) {
            this.stopRecognition();
        } else {
            this.startRecognition();
        }
    }    
        
}