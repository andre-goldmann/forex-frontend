import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradingService } from '../services/trading.service';
import { Symbol } from '../models';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="h-full bg-trading-dark flex flex-col">
      <div class="border-b border-trading-border p-4 flex flex-col md:flex-row justify-between items-center">
        <div class="flex items-center gap-4">
          <span class="text-xl font-bold">{{tradingService.selectedSymbolSignal().name}}</span>
          <span class="text-lg">{{tradingService.selectedSymbolSignal().price}}</span>
          <span [class]="tradingService.selectedSymbolSignal().change && tradingService.selectedSymbolSignal().change >= 0 ? 'text-trading-green' : 'text-trading-red'">
            {{tradingService.selectedSymbolSignal().change}}%
          </span>
        </div>

        <div class="flex gap-2 mt-4 md:mt-0">
          <button *ngFor="let period of periods"
                  [class.bg-trading-panel]="activePeriod === period"
                  class="px-3 py-1 rounded hover:bg-trading-panel transition-colors"
                  (click)="activePeriod = period">
            {{period}}
          </button>
        </div>
      </div>

      <div class="flex-1 flex items-center justify-center text-gray-500">
        Chart Area - {{tradingService.selectedSymbolSignal().name}} - Will integrate real charting library later
      </div>
    </div>
  `
})
export class ChartComponent implements OnInit {
  periods = ['15M', '30M', '1H', '4H', '1D', '1W', '1M'];
  activePeriod = '1D';

  constructor(public tradingService: TradingService) {}

  ngOnInit() {

  }
}
