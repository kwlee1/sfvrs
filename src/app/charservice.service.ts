import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable()
export class CharserviceService {

    choiceArray = []
    select1
    select2

    constructor(private _router:Router){}

    getSelects(){
        return [this.select1,this.select2,this.choiceArray]
    }

    makeChoiceArray(characters){
        console.log(Object.keys(characters))
        for(let char in characters){
            if(characters[char] == 'on'){
                this.choiceArray.push(char)
            }
        }
        this.randomize(this.choiceArray)
    }

    randomize(array){
        // for(let char of characters){
        //     if(characters[char] == 'on'){
        //         this.choiceArray.push(char)
        //     }
        // }
        let index1 = Math.floor(Math.random()*array.length)
        let index2 = Math.floor(Math.random()*array.length)
        this.select1 = array[index1]
        this.select2 = array[index2]
        this._router.navigateByUrl('result')
    }

}
