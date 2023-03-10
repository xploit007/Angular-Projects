import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HttpClientModule } from '@angular/common/http';
import { TabComponent } from './tab/tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [AppComponent, UserListComponent, UserFormComponent, TabComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
