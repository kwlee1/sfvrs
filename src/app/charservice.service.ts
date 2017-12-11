import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class CharserviceService {

    choiceArray = []
    select1 = new BehaviorSubject('')
    select2 = new BehaviorSubject('')

    constructor(private _router:Router){}

    getSelects(){
        return this.choiceArray
    }

    makeChoiceArray(characters,mirror){
        for(let char in characters){
            if(characters[char] == 'on'){
                this.choiceArray.push(char)
            }
        }
        this.randomize(this.choiceArray,mirror)
    }

    randomize(array,mirrorMatch){
        // for(let char of characters){
        //     if(characters[char] == 'on'){
        //         this.choiceArray.push(char)
        //     }
        // }
        let index1 = Math.floor(Math.random()*array.length)
        let index2 = Math.floor(Math.random()*array.length)
        this.select1.next(array[index1])
        this.select2.next(array[index2])
        this._router.navigateByUrl('result')
    }

}
