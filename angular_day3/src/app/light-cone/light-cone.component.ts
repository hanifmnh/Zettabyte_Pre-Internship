import { Component } from '@angular/core';
import { LightCone } from './light-cone.model';

@Component({
  selector: 'app-light-cone',
  templateUrl: './light-cone.component.html',
  styleUrl: './light-cone.component.css',
})
export class LightConeComponent {
  lightCones: LightCone[] = [
    {
      name: 'An Instant Before A Gaze',
      rarity: '5-star',
      path: 'Erudition',
      imageUrl:
        'https://static.wikia.nocookie.net/houkai-star-rail/images/2/24/Light_Cone_An_Instant_Before_A_Gaze.png',
      description:
        "Increases the wearer's CRIT DMG by 36~60%. When the wearer uses Ultimate, increases the wearer's Ultimate DMG based on their max energy. Each point of Energy increases the Ultimate DMG by 0.36~0.60%, up to 180 points of Energy.",
    },
    {
      name: 'Baptism of Pure Thought',
      rarity: '5-star',
      path: 'The Hunt',
      imageUrl:
        'https://static.wikia.nocookie.net/houkai-star-rail/images/5/5a/Light_Cone_Baptism_of_Pure_Thought.png',
      description:
        "Increases the wearer's CRIT DMG by 20~32%. For every debuff on the enemy target, the wearer's CRIT DMG dealt against this target increases by 8~12%, stacking up to 3 times. When using their Ultimate to attack the enemy target, the wearer receives the Disputation effect, which increases DMG dealt by 36~60% and enables their follow-up attacks to ignore 24~40% of the target's DEF. This effect lasts for 2 turns.",
    },
    {
      name: 'Brighter Than the Sun',
      rarity: '5-star',
      path: 'Destruction',
      imageUrl:
        'https://static.wikia.nocookie.net/houkai-star-rail/images/d/d0/Light_Cone_Brighter_Than_the_Sun.png',
      description:
        "Increases the wearer's CRIT Rate by 18~30%. When the wearer uses their Basic ATK, they will gain 1 stack of Dragon's Call, lasting for 2 turns. Each Stack of Dragon's Call increases the wearer's ATK by 18~30% and Energy Regeneration Rate by 6.0~10.0%. Dragon's Call may be stacked up to 2 times.",
    },
    {
      name: 'Past Self in Mirror',
      rarity: '5-star',
      path: 'Harmony',
      imageUrl:
        'https://static.wikia.nocookie.net/houkai-star-rail/images/a/a4/Light_Cone_Past_Self_in_Mirror.png',
      description:
        "Increases the wearer's Break Effect by 60~100%. When the wearer uses their Ultimate, increases all allies' DMG by 24~40%, lasting for 3 turn(s). Should the wearer's Break Effect exceed or equal 150%, 1 Skill Point will be recovered. At the start of each wave, all allies regenerate 10~20 Energy immediately. Effects of the same type cannot stack.",
    },
    {
      name: 'Patience Is All You Need',
      rarity: '5-star',
      path: 'Nihility',
      imageUrl:
        'https://static.wikia.nocookie.net/houkai-star-rail/images/8/87/Light_Cone_Patience_Is_All_You_Need.png',
      description:
        "Increases DMG dealt by the wearer by 24~40%. After every attack launched by the wearer, their SPD increases by 4.8~8.0%, stacking up to 3 times. If the wearer hits an enemy target that is not affected by Erode, there is a 100% base chance to inflict Erode to the target. Enemies afflicted with Erode are also considered to be Shocked and will receive Lightning DoT at the start of each turn equal to 60~100% of the wearer's ATK, lasting for 1 turn.",
    },
    {
      name: 'I Shall Be My Own Sword',
      rarity: '5-star',
      path: 'Destruction',
      imageUrl:
        'https://static.wikia.nocookie.net/houkai-star-rail/images/c/c7/Light_Cone_I_Shall_Be_My_Own_Sword.png',
      description:
        "Increases the wearer's CRIT DMG by 20~32%. When an ally (excluding the wearer) gets attacked or loses HP, the wearer gains 1 stack of Eclipse, up to a max of 3 stack(s). Each stack of Eclipse increases the DMG of the wearer's next attack by 14.0~24.0%. When 3 stacks are reached, additionally enables the attack to ignore 12~20% of the enemy's DEF. This effect will be removed after the wearer uses an attack.",
    },
    {
      name: 'Reforged Remembrance',
      rarity: '5-star',
      path: 'Nihility',
      imageUrl:
        'https://static.wikia.nocookie.net/houkai-star-rail/images/f/f7/Light_Cone_Reforged_Remembrance.png',
      description:
        "Increases the wearer's Effect Hit Rate by 40~60%. When the wearer deals DMG to an enemy inflicted with Wind Shear, Burn, Shock, or Bleed, each respectively grants 1 stack of Prophet, stacking up to 4 time(s). In a single battle, only 1 stack of Prophet can be granted for each type of DoT. Every stack of Prophet increases wearer's ATK by 5~9% and enables the DoT dealt to ignore 7.2~10.0% of the target's DEF.",
    },
    {
      name: 'Worrisome, Blissful',
      rarity: '5-star',
      path: 'The Hunt',
      imageUrl:
        'https://static.wikia.nocookie.net/houkai-star-rail/images/3/37/Light_Cone_Worrisome%2C_Blissful.png',
      description:
        "Increase the wearer's CRIT Rate by 18~30% and their follow-up attacks' DMG by 30~50%. After the wearer uses a follow-up attack, apply the Tame state to the target, stacking up to 2 stacks. When allies hit enemy targets under the Tame state, every Tame stack increases the CRIT DMG dealt by 12~20%.",
    },
    {
      name: 'Night of Fright',
      rarity: '5-star',
      path: 'Abundance',
      imageUrl:
        'https://static.wikia.nocookie.net/houkai-star-rail/images/d/df/Light_Cone_Night_of_Fright.png',
      description:
        "Increases the wearer's Energy Regeneration Rate by 12~20%. When any ally uses their Ultimate, the wearer restores HP for the ally currently with the lowest HP percentage by an amount equal to 10~14% of the healed ally's Max HP. When the wearer provides healing for an ally, increases the healed ally's ATK by 2.4~4.0%. This effect can stack up to 5 times and lasts for 2 turn(s).",
    },
  ];

  filteredLightCones: LightCone[] = [];

  constructor() {
    this.filteredLightCones = this.lightCones;
  }

  updateFilteredLightCones(cones: LightCone[]) {
    this.filteredLightCones = cones;
  }
}
