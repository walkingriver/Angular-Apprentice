import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatCardModule,
  MatDividerModule,
  MatChipsModule,
  MatListModule,
  MatExpansionModule,
  MatInputModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatSelectModule,
  MatFormFieldModule
];

@NgModule({
  imports: [CommonModule, ...MATERIAL_MODULES],
  exports: MATERIAL_MODULES
})
export class MaterialModule { }
