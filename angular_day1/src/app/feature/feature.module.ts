import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { AboutComponent } from './about/about.component';
import { SocialMediaComponent } from './social-media/social-media.component';

@NgModule({
  declarations: [HeroComponent, ProfileInformationComponent, AboutComponent, SocialMediaComponent],
  imports: [CommonModule],
  exports: [HeroComponent, ProfileInformationComponent, AboutComponent, SocialMediaComponent],
})
export class FeatureModule {}
