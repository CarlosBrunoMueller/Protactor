"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const pokedex_page_1 = require("../page-objects/pokedex.page");
describe('Cadastro de Pokémon', () => {
    const pokedex = new pokedex_page_1.Pokedex();
    beforeAll(() => {
        pokedex.navigateTo();
    });
    xit('Pesquisa por pokemon', () => {
        pokedex.search('Charizard');
        protractor_1.browser.sleep(3000);
    });
    fit('Adiciona um Pokémon', () => {
        pokedex.add.open();
        pokedex.add.wait();
        protractor_1.browser.wait(pokedex.EC.visibilityOf(pokedex.numero), 5000, 'Número nao apareceu na tela');
        pokedex.numero.sendKeys('121');
        pokedex.name.sendKeys('rubinho');
        pokedex.type1.sendKeys('Veneno');
        pokedex.type2.sendKeys('Grama');
        pokedex.attack.sendKeys('1000');
        pokedex.defense.sendKeys('1200');
        pokedex.hp.sendKeys('35000');
        pokedex.saveButton.click();
        protractor_1.browser.sleep(5000);
    });
    xit('Busca por um Pokémon na tela principal', () => {
        const pokemon = pokedex.findPokemon('#1');
        expect(pokemon).toContain('Bulbasaur');
    });
    xit('Exemplo do Fluxo de controle do Protractor', () => {
        protractor_1.browser.call(pokedex.showLastPokemonName);
        protractor_1.browser.call(pokedex.geraNumeroAleatorio);
        pokedex.add.open();
        protractor_1.browser.call(() => { console.log("Eu deveria ser o último."); });
    });
});
