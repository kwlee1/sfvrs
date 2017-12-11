import { Component, OnInit } from '@angular/core';
import { CharserviceService } from '../charservice.service'
import { ChangeDetectorRef } from '@angular/core'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

    char1 = ''
    char2 = ''
    charArray = []

    constructor(private _charService:CharserviceService, private _cd:ChangeDetectorRef){}

    ngOnInit() {
        this.initSelect()
    }

    initSelect(){
        this.char1 = this._charService.getSelects()[0]
        this.char2 = this._charService.getSelects()[1]
        this.charArray = this._charService.getSelects()[2]
    }

    reselect(){
        this._charService.randomize(this.charArray)
    }

}
