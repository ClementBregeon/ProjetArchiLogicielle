import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './atomes/button/button.component';
import { LabelComponent } from './atomes/label/label.component';
import { ImageComponent } from './atomes/image/image.component';
import { FieldComponent } from './atomes/field/field.component';
import { NavbarComponent } from './organisms/navbar/navbar.component';
import { FlowerTypesComponent } from './modeles/flower-types/flower-types.component';
import { PageProduitsComponent } from './pages/page-produits/page-produits.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PagePanierComponent } from './pages/page-panier/page-panier.component';
import { PageGestionProduitsComponent } from './pages/page-gestion-produits/page-gestion-produits.component';

const routes: Routes = [ 
  { path: 'button', component: ButtonComponent},
  { path: 'label', component: LabelComponent},
  { path: 'field', component: FieldComponent},
  { path: 'image', component: ImageComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'fleurs', component: FlowerTypesComponent},
  { path: 'produits', component: PageProduitsComponent},
  { path: 'accueil', component: PageAccueilComponent},
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'panier', component: PagePanierComponent},
  { path: 'gestion', component: PageGestionProduitsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
