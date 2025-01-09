import { Injectable, signal } from '@angular/core';
import { Symbol } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TradingService {
  selectedSymbolSignal = signal<Symbol>({
    name: 'EUR/USD',
    price: '1.2345',
    change: 0.19,
    spread: '0.2'
  });

  setSelectedSymbol(symbol: Symbol) {
    this.selectedSymbolSignal.set(symbol);
  }
}
