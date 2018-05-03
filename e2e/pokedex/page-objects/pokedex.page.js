"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Pokedex {
    constructor() {
        this.EC = protractor_1.ExpectedConditions;
        this.pokemonList = protractor_1.element.all(protractor_1.by.repeater('item in PokemonsController.pokemons|filter: PokemonsController.filtro'));
        this.searchElm = protractor_1.element(protractor_1.by.model('PokemonsController.filtro'));
        this.addButton = protractor_1.element(protractor_1.by.css('a.btn'));
        this.labelElm = protractor_1.element(protractor_1.by.id('myModalLabel'));
        this.numElm = protractor_1.element(protractor_1.by.model('PokemonsController.pokemon.id'));
        this.nomElm = protractor_1.element(protractor_1.by.model('PokemonsController.pokemon.name'));
        this.tipo1Elm = protractor_1.element(protractor_1.by.model('PokemonsController.pokemon.type1'));
        this.numero = protractor_1.element(protractor_1.by.model('PokemonsController.pokemon.id'));
        this.name = protractor_1.element(protractor_1.by.model('PokemonsController.pokemon.name'));
        this.type1 = protractor_1.element(protractor_1.by.model('PokemonsController.pokemon.type1'));
        this.type2 = protractor_1.element(protractor_1.by.model('PokemonsController.pokemon.type2'));
        this.attack = protractor_1.element(protractor_1.by.model('PokemonsController.pokemon.attack'));
        this.defense = protractor_1.element(protractor_1.by.model('PokemonsController.pokemon.defense'));
        this.hp = protractor_1.element(protractor_1.by.model('PokemonsController.pokemon.hp'));
        this.saveButton = protractor_1.element(protractor_1.by.css('button[type = \'submit\']'));
        this.add = {
            open: () => {
                this.addButton.click().then(() => {
                    console.log('Cliquei no botão Adicionar');
                });
            },
            wait: () => {
                protractor_1.browser.wait(this.EC.visibilityOf(this.labelElm), 5000, 'Label não apareceu na tela');
            }
        };
    }
    navigateTo() {
        protractor_1.browser.get(protractor_1.browser.baseUrl);
    }
    currentUrl() {
        return protractor_1.browser.getCurrentUrl();
    }
    search(pokemon) {
        this.searchElm.clear();
        this.searchElm.sendKeys(pokemon);
    }
    listPokemons() {
        return this.pokemonList;
    }
    findPokemon(pokemonNumber) {
        let pokemons = this.listPokemons();
        pokemons.filter((pokemon) => {
            return pokemon.element(protractor_1.by.tagName('strong')).getText().then((number) => {
                return pokemonNumber === number;
            });
        });
        return pokemons.first();
    }
    showPokemonName(index) {
        let pokemons = this.listPokemons();
        pokemons.count().then((quant) => {
            if (index < quant) {
                pokemons.get(index).element(protractor_1.by.binding('item.name')).getText().then((name) => {
                    console.log("O nome do Pokémon é " + name);
                });
            }
            else {
                console.log("Não há Pokémon cadastrado.");
            }
        });
    }
    showLastPokemonName() {
        let pokemons = protractor_1.element.all(protractor_1.by.repeater('item in PokemonsController.pokemons|filter: PokemonsController.filtro'));
        pokemons.last().element(protractor_1.by.binding('item.name')).getText().then((name) => {
            console.log("O nome do último Pokémon é " + name);
        });
    }
    geraNumeroAleatorio() {
        const num = Math.random() * (50 - 1) + 1;
        console.log(num);
        return num;
    }
    get getPokemonList() {
        return this.pokemonList;
    }
    get getSearchElm() {
        return this.searchElm;
    }
    get getNumElm() {
        return this.numElm;
    }
    get getNomElm() {
        return this.nomElm;
    }
    get getTipo1Elm() {
        return this.tipo1Elm;
    }
}
exports.Pokedex = Pokedex;
