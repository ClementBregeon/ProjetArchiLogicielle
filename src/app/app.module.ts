import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './atomes/button/button.component';
import { LabelComponent } from './atomes/label/label.component';
import { FieldComponent } from './atomes/field/field.component';
import { ImageComponent } from './atomes/image/image.component';
import { LogoComponent } from './atomes/logo/logo.component';
import { NavLinkComponent } from './atomes/nav-link/nav-link.component';
import { CartIconComponent } from './atomes/cart-icon/cart-icon.component';
import { MenuItemComponent } from './molecules/menu-item/menu-item.component';
import { NavbarComponent } from './organisms/navbar/navbar.component';
import { FlowerTypeComponent } from './atomes/flower-type/flower-type.component';
import { FlowerTypeListComponent } from './molecules/flower-type-list/flower-type-list.component';
import { FlowerTypesComponent } from './modeles/flower-types/flower-types.component';
import { PageProduitsComponent } from './pages/page-produits/page-produits.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PagePanierComponent } from './pages/page-panier/page-panier.component';
import { PageGestionProduitsComponent } from './pages/page-gestion-produits/page-gestion-produits.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LabelComponent,
    FieldComponent,
    ImageComponent,
    LogoComponent,
    NavLinkComponent,
    CartIconComponent,
    MenuItemComponent,
    NavbarComponent,
    FlowerTypeComponent,
    FlowerTypeListComponent,
    FlowerTypesComponent,
    PageProduitsComponent,
    PageAccueilComponent,
    PagePanierComponent,
    PageGestionProduitsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
