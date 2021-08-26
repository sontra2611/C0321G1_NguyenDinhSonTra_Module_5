import {Injectable} from '@angular/core';
import {IWord} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionarys: IWord[] = [
    {word: 'book', mean: 'sách'},
    {word: 'dog', mean: 'con chó'},
    {word: 'cat', mean: 'con mèo'},
  ]

  constructor() {
  }

  getAll() {
    return this.dictionarys
  }

  translate(word: string): IWord {
    const dictionarys = this.getAll();
    return dictionarys.find(iWord => iWord.word === word);
  }
}
