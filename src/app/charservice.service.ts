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
        this.choiceArray = []
        for(let char in characters){
            if(characters[char] === true){
                this.choiceArray.push(char)
            }
        }
        this.randomize(this.choiceArray,mirror)
    }

    randomize(array,mirrorMatch){
        let index1 = Math.floor(Math.random()*array.length)
        this.select1.next(array[index1])
        if(mirrorMatch){
            let index2 = Math.floor(Math.random()*array.length)
            this.select2.next(array[index2])
        }else{
            let arrayCopy = array.slice()
            arrayCopy.splice(index1,1)
            let index2 = Math.floor(Math.random()*arrayCopy.length)
            this.select2.next(arrayCopy[index2])
        }
        this.choiceArray = array
        this._router.navigateByUrl('result')
    }

}
