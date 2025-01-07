import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-market-watch',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-64 bg-trading-panel h-full flex flex-col">
      <div class="p-4 border-b border-trading-border">
        <h3 class="text-lg font-semibold">Market Watch</h3>
      </div>
      
      <div class="flex-1 overflow-y-auto">
        <div *ngFor="let symbol of symbols" 
             class="px-4 py-2 border-b border-trading-border hover:bg-opacity-50 hover:bg-trading-border cursor-pointer">
          <div class="flex justify-between items-center">
            <span class="font-medium">{{symbol.name}}</span>
            <span>{{symbol.price}}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-400">Spread {{symbol.spread}}</span>
            <span [class]="symbol.change >= 0 ? 'text-trading-green' : 'text-trading-red'">
              {{symbol.change}}%
            </span>
          </div>
        </div>
      </div>
    </div>
  `
})
export class MarketWatchComponent {
  symbols = [
    { name: 'EUR/USD', price: '1.2345', change: 0.19, spread: '0.2' },
    { name: 'GBP/USD', price: '1.3456', change: -0.25, spread: '0.3' },
    { name: 'USD/JPY', price: '110.45', change: 0.32, spread: '0.1' },
    { name: 'BTC/USD', price: '45678', change: -1.25, spread: '1.0' },
    { name: 'ETH/USD', price: '3456', change: 2.34, spread: '0.5' },
    { name: 'XAU/USD', price: '1890.5', change: 0.45, spread: '0.4' },
    { name: 'EUR/GBP', price: '0.8678', change: -0.12, spread: '0.3' },
    { name: 'AUD/USD', price: '0.7456', change: 0.28, spread: '0.2' },
  ];
}
