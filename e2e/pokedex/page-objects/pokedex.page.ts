import { promise, ElementFinder, browser, element, by, ExpectedConditions, ElementArrayFinder } from "protractor"

/**
 * Page Object com métodos relacionados a Pokedex.
 *
 * @export
 * @class Pokedex
 */
export class Pokedex {

    public EC = ExpectedConditions

    private pokemonList:ElementArrayFinder = element.all(by.repeater('item in PokemonsController.pokemons|filter: PokemonsController.filtro'))
    private searchElm:ElementFinder = element(by.model('PokemonsController.filtro'))
    private addButton:ElementFinder = element(by.css('a.btn'))
    private labelElm:ElementFinder = element(by.id('myModalLabel'))
    private numElm:ElementFinder = element(by.model('PokemonsController.pokemon.id'));
    private nomElm:ElementFinder = element(by.model('PokemonsController.pokemon.name'));
    private tipo1Elm:ElementFinder = element(by.model('PokemonsController.pokemon.type1'));    

    public numero:ElementFinder = element(by.model('PokemonsController.pokemon.id'));    
    public name:ElementFinder = element(by.model('PokemonsController.pokemon.name'));    
    public type1:ElementFinder = element(by.model('PokemonsController.pokemon.type1'));    
    public type2:ElementFinder = element(by.model('PokemonsController.pokemon.type2'));    
    public attack:ElementFinder = element(by.model('PokemonsController.pokemon.attack'));
    public defense:ElementFinder = element(by.model('PokemonsController.pokemon.defense'));    
    public hp:ElementFinder = element(by.model('PokemonsController.pokemon.hp'));    


    // public saveButton:ElementFinder = element(by.buttonText('Salvar'));    
    public saveButton:ElementFinder = element(by.css('button[type = \'submit\']'));    
    
    
    

    


    /**
     * Acessa a página principal da Pokedex
     *
     * @memberof Pokedex
     */
    public navigateTo(): void {
        browser.get(browser.baseUrl)
    }

    /**
     * Retorna a URL da página atual
     *
     * @memberof Pokedex
     * @returns {Promise<string>} Promise com a url da pagina atual
     */
    public currentUrl(): promise.Promise<string> {
        return browser.getCurrentUrl()
    }

    /**
     * Pesquisa por um Pokémon no cadastro
     * @param pokemon Nome do Pokémon que será pesquisado
     * @memberof Pokedex
     */
    public search(pokemon: string): void {
        this.searchElm.clear()
        this.searchElm.sendKeys(pokemon)
    }

    /**
    * Objeto criado para clicar no botão 'Adicionar' e esperar que a tela de cadastro apareça
    * @memberof Pokedex
    */
    public add = {
        /**
        * Realiza o clique no botão 'Adicionar'
        * @memberof Pokedex.add
        */
        open: (): void => {
            this.addButton.click().then(() => {
                console.log('Cliquei no botão Adicionar')
            })
        },
        /**
        * Aguarda pela label da tela de cadastro de Pokémon
        * @memberof Pokedex.add
        */
        wait: (): void => {
            browser.wait(this.EC.visibilityOf(this.labelElm), 5000, 'Label não apareceu na tela')
        }
    }

    /**
     * Lista todos os Pokémons cadastrados
     * @memberof Pokedex
     * @returns {ElementArrayFinder} Lista dos respectivos elementos dos Pokémons cadastrados
     */
    public listPokemons(): ElementArrayFinder {
        return this.pokemonList
    }

    /**
     * Busca por um Pokémon e retorna o elemento <tr> da tabela.
     * @memberof Pokedex
     * @param {string} pokemonNumber Código do Pokémon que será procurado. Ex.: "#1".
     * @returns {ElementFinder} Elemento da tabela que se refere ao Pokémon desejado.
     */
    public findPokemon(pokemonNumber: string): ElementFinder {
        let pokemons: ElementArrayFinder = this.listPokemons()
        pokemons.filter((pokemon) => {
            return pokemon.element(by.tagName('strong')).getText().then((number) => {
                return pokemonNumber === number;
            });
        });
        return pokemons.first();
    }

    /**
     * Exibe no console o nome do Pokémon cadastrado.
     * @memberof Pokedex
     * @param {string} pokemonNumber Posição na lista do Pokémon que será procurado. Ex.: Posição 0 seria o Charizard, pois é o primeiro da lista.
     */
    public showPokemonName(index: number): void {
        let pokemons: ElementArrayFinder = this.listPokemons()
        pokemons.count().then((quant) => {
            if (index < quant) {
                pokemons.get(index).element(by.binding('item.name')).getText().then((name) => {
                    console.log("O nome do Pokémon é " + name)
                })
            } else {
                console.log("Não há Pokémon cadastrado.")
            }
        })
    }

    /**
     * Exibe no console o nome do último Pokémon da lista.
     * @memberof Pokedex
     */
    public showLastPokemonName(): void {
        let pokemons = element.all(by.repeater('item in PokemonsController.pokemons|filter: PokemonsController.filtro'))
        pokemons.last().element(by.binding('item.name')).getText().then((name) => {
            console.log("O nome do último Pokémon é " + name)
        })
    }

    /**
     * Gera um número aleatório e exibe no console.
     * @memberof Pokedex
     * @returns {number} número gerado.
     */
    public geraNumeroAleatorio(): number {
        const num: number = Math.random() * (50 - 1) + 1;
        console.log(num)
        return num
    }

    public get getPokemonList(): ElementArrayFinder  {
		return this.pokemonList;
    }

    public get getSearchElm(): ElementFinder  {
		return this.searchElm;
    }

    public get getNumElm(): ElementFinder  {
		return this.numElm;
    }

    public get getNomElm(): ElementFinder  {
		return this.nomElm;
    }

    public get getTipo1Elm(): ElementFinder  {
		return this.tipo1Elm;
    }

}
