import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardProductComponent } from './components/card-product-list/card-product/card-product.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MenubarModule } from 'primeng/menubar';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { FirestoreModule, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { AuthComponent } from './shared/auth/auth.component';
import { PrimeIcons } from 'primeng/api';
import { StyleClassModule } from 'primeng/styleclass';
import { CardProductListComponent } from './components/card-product-list/card-product-list.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.prod';
import { CardRoutingModule } from './components/card-product-list/card-routing.module';
import { UpdateProductsComponent } from './pages/update-products/update-products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardProductComponent,
    AppComponent,
    AuthComponent,
    MainpageComponent,
    CardProductListComponent,
    UpdateProductsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CardRoutingModule,
    FirestoreModule,
    provideFirebaseApp(() => initializeApp({"projectId":"viajesdya-a3c84","appId":"1:407741751811:web:56b6fa326c34e8f0d0a436","storageBucket":"viajesdya-a3c84.appspot.com","apiKey":"AIzaSyBea_J3OLe4H7c8eSouwS0LxKQc0Ft00HY","authDomain":"viajesdya-a3c84.firebaseapp.com","messagingSenderId":"407741751811","measurementId":"G-SQZES81P5E"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    provideRemoteConfig(() => getRemoteConfig()),

    AngularFireModule.initializeApp({"projectId":"viajesdya-a3c84","appId":"1:407741751811:web:56b6fa326c34e8f0d0a436","storageBucket":"viajesdya-a3c84.appspot.com","apiKey":"AIzaSyBea_J3OLe4H7c8eSouwS0LxKQc0Ft00HY","authDomain":"viajesdya-a3c84.firebaseapp.com","messagingSenderId":"407741751811","measurementId":"G-SQZES81P5E"}),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    MenubarModule,
    StyleClassModule,
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
