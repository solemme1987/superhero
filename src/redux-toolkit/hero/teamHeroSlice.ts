import { createSlice } from '@reduxjs/toolkit'
import { Superhero } from '../../shared/types';
import { SuperHeroes } from '../../heroes/data/heroes';


interface TeamHeroState {
  alignment: string,
  superHeroes: Superhero []
  team: Superhero[],
  search:Superhero[],
}

const teamHeroStored = localStorage.getItem('teamHeroState')

const initialState: TeamHeroState = teamHeroStored
  ? JSON.parse(teamHeroStored)
  : {
    alignment: '',
    team: [],
  }

  initialState.search = [];
  initialState.superHeroes = SuperHeroes;

export const teamHeroSlice = createSlice({
  name: 'teamHero',
  initialState,
  reducers: {
    addHero: (state, action) => {
      state.alignment = action.payload.alignmentHero
      state.team = [...state.team, action.payload.hero]
    },
    removeHero: (state, action) => {
      state.team = state.team.filter(hero => hero.id !== action.payload);
      if (state.team.length == 0) state.alignment = '';
    },
    cleanTeam:(state) =>{
      state.alignment =  '',
      state.team = []
    },
    addHerosFound: (state, action) => {
      state.search = [...action.payload]
    },
    cleanSearch:(state) =>{
      state.search = []
    },
  },
})

// Action creators are generated for each case reducer function

export const { addHero, removeHero, cleanTeam, cleanSearch, addHerosFound } = teamHeroSlice.actions

export default teamHeroSlice.reducer