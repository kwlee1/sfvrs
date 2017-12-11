import { Component, OnInit } from '@angular/core';
import { CharserviceService } from '../charservice.service'

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

    allchars = ['abigail','akuma','alex','balrog','birdie','cammy','chunli','dhalsim',
    'ed','fang','guile','ibuki','juri','karin','ken','kolin','laura','mbison','menat','nash',
    'necalli','r-mika','rashid','ryu','urien','vega','zangief','zeku']

    character = {}

    constructor(private _charService: CharserviceService) { }

    ngOnInit() {
        this.initCharacter()
    }

    initCharacter(){
        for(let char of this.allchars){
            this.character[char] = 'on'
        }
    }

    randomizeChars(){
        this._charService.randomize(this.character)
    }

}
