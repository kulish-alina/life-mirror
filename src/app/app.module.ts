import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PatternComponent } from './pattern/pattern.component';
import { PatternService } from './services/pattern.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PatternComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [
    PatternService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
