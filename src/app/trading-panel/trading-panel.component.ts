import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trading-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="w-80 bg-trading-panel h-full flex flex-col">
      <div class="flex border-b border-trading-border">
        <button *ngFor="let tab of tabs" 
                [class.bg-trading-border]="activeTab === tab"
                class="flex-1 py-3 hover:bg-trading-border transition-colors"
                (click)="activeTab = tab">
          {{tab}}
        </button>
      </div>
      
      <div class="p-4 flex-1" *ngIf="activeTab === 'Trade'">
        <div class="flex gap-2 mb-4">
          <button [class.bg-trading-green]="orderType === 'buy'"
                  [class.bg-trading-panel]="orderType !== 'buy'"
                  class="flex-1 py-2 rounded transition-colors"
                  (click)="orderType = 'buy'">
            Buy
          </button>
          <button [class.bg-trading-red]="orderType === 'sell'"
                  [class.bg-trading-panel]="orderType !== 'sell'"
                  class="flex-1 py-2 rounded transition-colors"
                  (click)="orderType = 'sell'">
            Sell
          </button>
        </div>
        
        <div class="space-y-4">
          <div>
            <label class="block text-sm text-gray-400 mb-1">Volume</label>
            <input type="number" [value]="0.01" step="0.01"
                   class="w-full bg-trading-dark border border-trading-border rounded px-3 py-2">
          </div>
          
          <div>
            <label class="block text-sm text-gray-400 mb-1">Stop Loss</label>
            <input type="number"
                   class="w-full bg-trading-dark border border-trading-border rounded px-3 py-2">
          </div>
          
          <div>
            <label class="block text-sm text-gray-400 mb-1">Take Profit</label>
            <input type="number"
                   class="w-full bg-trading-dark border border-trading-border rounded px-3 py-2">
          </div>
        </div>
        
        <button [class]="orderType === 'buy' ? 'bg-trading-green' : 'bg-trading-red'"
                class="w-full py-3 rounded mt-6 font-semibold">
          {{orderType === 'buy' ? 'Buy' : 'Sell'}} EUR/USD
        </button>
      </div>
    </div>
  `
})
export class TradingPanelComponent {
  tabs = ['Trade', 'Orders', 'Positions'];
  activeTab = 'Trade';
  orderType = 'buy';
}
