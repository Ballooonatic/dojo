import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon()
  }


  checkPkmnTypes(pkmn, type) {
    for (const i in pkmn.types) {
      if (pkmn.types[i].type.name === type) {
        let firstType = pkmn.types[0].type.name
        let secondType = pkmn.types[1].type.name
        console.log(`This pokemon also shares the types ${firstType}/${secondType}: ${pkmn.name}!`)
      }
    }
  }


  logDiffPkmnTypes(pkmn, type) {
    for (const i in pkmn.types) {
      if (pkmn.types[i].type.name !== type) {
        console.log(`${pkmn.name} also has a different type: ${pkmn.types[i].type.name}!`);
      }
    }
  }



  logPokemonOfType(pkmnOfType_1, pkmnOfType_2?) {

    if (!pkmnOfType_2) {

      console.log(`${pkmnOfType_1.pokemon.length} pokemon share your pokemon's ${pkmnOfType_1.name} type!`)
      console.log("Let's list them. >:)")
      
      for (const i in pkmnOfType_1.pokemon) {
        console.log(pkmnOfType_1.pokemon[i].pokemon.name)
        // console.log(pkmnOfType_1.pokemon[i])
        let newPkmn = this._http.get(`${pkmnOfType_1.pokemon[i].pokemon.url}`)
        newPkmn.subscribe(pkmn => {
          this.logDiffPkmnTypes(pkmn, pkmnOfType_1.name)
        })
      }

    }

    else if (pkmnOfType_2) {
      for (const i in pkmnOfType_1.pokemon) {
        let newPkmn = this._http.get(`${pkmnOfType_1.pokemon[i].pokemon.url}`)
        newPkmn.subscribe(pkmn => {
          this.checkPkmnTypes(pkmn, pkmnOfType_2.name)
        })
      }
      // for (const i in pkmnOfType_2.pokemon) {
      //   let newPkmn = this._http.get(`${pkmnOfType_2.pokemon[i].pokemon.url}`)
      //   newPkmn.subscribe(pkmn => {
      //     this.checkPkmnTypes(pkmn, pkmnOfType_1.name)
      //   })
      // }
    }

  }



  makeSecondApiCall(pkmnOfType_1, type_2) {
    var types_2 = this._http.get(`https://pokeapi.co/api/v2/type/${type_2}/`)
    types_2.subscribe(data => {
      var pkmnOfType_2 = data
      this.logPokemonOfType(pkmnOfType_1, pkmnOfType_2)
    })
  }



  getPokemonOfType(type_1, type_2?){
    var types_1 = this._http.get(`https://pokeapi.co/api/v2/type/${type_1}/`);
    types_1.subscribe(data => {
      var pkmnOfType_1 = data

      if (!type_2) {
        this.logPokemonOfType(pkmnOfType_1)
      }

      else if (type_2) {
        this.makeSecondApiCall(pkmnOfType_1, type_2)
      }
    })
  }



  // I was just gonna put this logic in the subscribe method but TS had a hissy fit over object typing and couldn't deal with
  // pkmn.types or pkmn.name or anything that wasn't just pkmn.
  logPokemonType(pkmn){

    if (pkmn.types.length === 1) {
      var type_1 = pkmn.types[0].type.name
      var str = `${pkmn.name}'s type is ${type_1}`
      this.getPokemonOfType(type_1)
    }

    else if (pkmn.types.length === 2) {
      var type_1 = pkmn.types[0].type.name
      var type_2 = pkmn.types[1].type.name
      var str = `${pkmn.name}'s type is ${type_1}/${type_2}`
      this.getPokemonOfType(type_1, type_2)
    }

    console.log(str)

  }



  getPokemon(){
  
      let pokemon = this._http.get(`https://pokeapi.co/api/v2/pokemon/charizard/`);
      
      pokemon.subscribe(pkmn => {
        this.logPokemonType(pkmn) // I don't know how else to make sure these methods run in order X:
      })

  }

}