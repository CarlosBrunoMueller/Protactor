import { browser, by, element } from "protractor";

import { Pokedex } from '../page-objects/pokedex.page'


describe('Cadastro de Pokémon', () => {

    const pokedex: Pokedex = new Pokedex();

    beforeAll(() => {
        pokedex.navigateTo()
    })

    xit('Pesquisa por pokemon', () => {
        pokedex.search('Charizard')
        browser.sleep(3000)
    })

    fit('Adiciona um Pokémon', () => {
        // Alguns testes...
        
        pokedex.add.open()
        pokedex.add.wait()
        
        browser.wait(pokedex.EC.visibilityOf(pokedex.numero), 5000, 'Número nao apareceu na tela')
        pokedex.numero.sendKeys('121')
        pokedex.name.sendKeys('rubinho')
        pokedex.type1.sendKeys('Veneno')
        pokedex.type2.sendKeys('Grama')
        pokedex.attack.sendKeys('1000')
        pokedex.defense.sendKeys('1200')
        pokedex.hp.sendKeys('35000')

        pokedex.saveButton.click()
        browser.sleep(5000)
        
    })

    xit('Busca por um Pokémon na tela principal', () => {
        const pokemon = pokedex.findPokemon('#1')
        expect(pokemon).toContain('Bulbasaur')
    })

    xit('Exemplo do Fluxo de controle do Protractor', () => {
        browser.call(pokedex.showLastPokemonName)
        browser.call(pokedex.geraNumeroAleatorio)
        pokedex.add.open()
        browser.call(() => { console.log("Eu deveria ser o último.") })
    })

});

/*fit('Exemplo do Fluxo de controle do Protractor', () => {
    pokedex.showLastPokemonName()
    pokedex.geraNumeroAleatorio()
    pokedex.add.open()
    console.log("Eu deveria ser o último.")
})*/
