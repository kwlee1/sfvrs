import { Component, OnInit } from '@angular/core';
import { CharserviceService } from '../charservice.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

    char1
    char2

    constructor(private _charService:CharserviceService){}

    ngOnInit() {
        this.initSelect()
    }

    initSelect(){
        this.char1 = this._charService.getSelects()[0]
        this.char2 = this._charService.getSelects()[1]
    }

    reselect(){
        this._charService.randomize()
    }

}
