import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../service/dictionary.service";
import {ActivatedRoute} from "@angular/router";
import {IWord} from "../model/iword";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  dictionary: IWord;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
    const word = this.activatedRoute.snapshot.params.word;
    this.dictionary = this.dictionaryService.translate(word);
  }

  ngOnInit(): void {
  }

}
