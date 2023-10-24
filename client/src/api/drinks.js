import axios from "axios"
export const ListDrinksOption=(filterOrSearch,option,condition)=>axios.get(`https://www.thecocktaildb.com/api/json/v1/1/${filterOrSearch}.php?${option}=${condition}`)

//details
export const getDetailDrinkById=(id)=>axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
//List all cocktails by first letter
export const SearchDrinksByFirtsLetter=(firtsletter)=>axios.get(`www.thecocktaildb.com/api/json/v1/1/search.php?f=${firtsletter}`)
//seach by Name of drink 
export const SearchDrinkByName=(name)=>axios.get(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)

//Filter by Category
export const ListByCategory=(category)=>axios.get(`www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)

//Filter by ingredient
export const ListByIngredient=(ingredient)=>axios.get(`www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
//Filter by Glass
export const ListByGlass=(glass)=>axios.get(`www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass}`)

//Filter by alcoholic
export const ListByAlcohol=(alcohol)=>axios.get(`www.thecocktaildb.com/api/json/v1/1/filter.php?a=${alcohol}`)
//List the categories, glasses, ingredients or alcoholic filters


export const  GetCategories=()=>axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)

export const GetGlasses=()=>axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`)

export const GetListOfIngredients=()=>axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)

export const listOfAlcoholicFilters=()=>[
    {
    "strAlcoholic": "Alcoholic"
    },
    {
    "strAlcoholic": "Non alcoholic"
    },
    {
    "strAlcoholic": "Optional alcohol"
    }
    ]

