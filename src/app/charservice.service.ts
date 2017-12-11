import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable()
export class CharserviceService {

    choiceArray
    select1
    select2

    constructor(private _router:Router){}

    getSelects(){
        return [this.select1,this.select2]
    }

    makeChoiceArray(characters){
        for(let char of characters){
            if(characters[char] == 'on'){
                this.choiceArray.push(char)
            }
        }
        this.randomize()
    }

    randomize(){
        // for(let char of characters){
        //     if(characters[char] == 'on'){
        //         this.choiceArray.push(char)
        //     }
        // }
        let index1 = Math.floor(Math.random()*this.choiceArray.length)
        let index2 = Math.floor(Math.random()*this.choiceArray.length)
        this.select1 = this.choiceArray[index1]
        this.select2 = this.choiceArray[index2]
        this._router.navigate(['/result'])
    }

}
