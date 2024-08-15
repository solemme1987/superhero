import { Superhero } from "../../shared/types"
import { SuperHeroes } from "../data/heroes";

type Filter = {
  keyword?: string;
  gender?: string;
  alignment?: string;
  intelligenceMin?: string
  intelligenceMax?: string
  combatMin?: string
  combatMax?: string
  speedMin?: string
  speedMax?: string
  strengthMin?: string
  strengthMax?: string
  durabilityMin?: string
  durabilityMax?: string
  powerMin?: string
  powerMax?: string
}

export const getHeroByFilters = ({ keyword, gender, alignment,
  intelligenceMin,
  intelligenceMax,
  combatMin,
  combatMax,
  speedMin,
  speedMax,
  strengthMin,
  strengthMax,
  durabilityMin,
  durabilityMax,
  powerMin,
  powerMax, }: Filter): Superhero[] => {

  return SuperHeroes.filter(hero => {
    const matchesGender = !gender || hero.appearance.gender === gender;
    const matchesAlignment = !alignment || hero.biography.alignment === alignment;

    const matchesKeyword = !keyword || (
      hero.name.toLowerCase().includes(keyword.toLowerCase()) ||
      hero.biography.fullName.toLowerCase().includes(keyword.toLowerCase()) ||
      hero.biography.alterEgos.toLowerCase().includes(keyword.toLowerCase()) ||
      (hero.biography.aliases?.some(alias => alias.toLowerCase().includes(keyword.toLowerCase())) ?? false) ||
      hero.biography.placeOffBirth?.toLowerCase().includes(keyword.toLowerCase()) ||
      hero.biography.firstAppearance.toLowerCase().includes(keyword.toLowerCase()) ||
      hero.biography.publisher.toLowerCase().includes(keyword.toLowerCase())
    );

    const matchesIntelligence =
      (!intelligenceMin ||
        parseInt(hero.powerstats.intelligence) >= parseInt(intelligenceMin)) &&
      (!intelligenceMax ||
        parseInt(hero.powerstats.intelligence) <= parseInt(intelligenceMax));

    const matchesCombat =
      (!combatMin ||
        parseInt(hero.powerstats.combat) >= parseInt(combatMin)) &&
      (!combatMax ||
        parseInt(hero.powerstats.combat) <= parseInt(combatMax));

    const matchesSpeed =
      (!speedMin || parseInt(hero.powerstats.speed) >= parseInt(speedMin)) &&
      (!speedMax || parseInt(hero.powerstats.speed) <= parseInt(speedMax));

    const matchesStrength =
      (!strengthMin ||
        parseInt(hero.powerstats.strength) >= parseInt(strengthMin)) &&
      (!strengthMax ||
        parseInt(hero.powerstats.strength) <= parseInt(strengthMax));

    const matchesDurability =
      (!durabilityMin ||
        parseInt(hero.powerstats.durability) >= parseInt(durabilityMin)) &&
      (!durabilityMax ||
        parseInt(hero.powerstats.durability) <= parseInt(durabilityMax));

    const matchesPower =
      (!powerMin || parseInt(hero.powerstats.power) >= parseInt(powerMin)) &&
      (!powerMax || parseInt(hero.powerstats.power) <= parseInt(powerMax));

    return matchesGender && matchesAlignment && matchesKeyword &&
      matchesIntelligence && matchesCombat && matchesSpeed &&
      matchesStrength && matchesDurability && matchesPower;
  });
}