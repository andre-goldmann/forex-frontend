import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Symbol {
  name: string;
  price: string;
  change: number;
  spread: string;
}

@Injectable({
  providedIn: 'root'
})
export class TradingService {
  private selectedSymbolSubject = new BehaviorSubject<Symbol>({
    name: 'EUR/USD',
    price: '1.2345',
    change: 0.19,
    spread: '0.2'
  });

  selectedSymbol$ = this.selectedSymbolSubject.asObservable();

  setSelectedSymbol(symbol: Symbol) {
    this.selectedSymbolSubject.next(symbol);
  }
}
