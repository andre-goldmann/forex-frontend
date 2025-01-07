import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="bg-trading-panel h-14 px-4 flex items-center justify-between">
      <div class="text-2xl font-bold">TradePro</div>
      
      <nav class="flex gap-6">
        <span class="cursor-pointer hover:text-trading-green transition-colors">Charts</span>
        <span class="cursor-pointer hover:text-trading-green transition-colors">Markets</span>
        <span class="cursor-pointer hover:text-trading-green transition-colors">Trading</span>
        <span class="cursor-pointer hover:text-trading-green transition-colors">Analysis</span>
        <span class="cursor-pointer hover:text-trading-green transition-colors">News</span>
      </nav>
      
      <div class="flex gap-4">
        <span class="text-gray-300">Demo Account</span>
        <span class="text-trading-green">$100,000.00</span>
      </div>
    </header>
  `
})
export class HeaderComponent {}
