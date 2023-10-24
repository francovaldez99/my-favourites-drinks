import { createContext, useContext, useEffect, useState } from "react";
import {
  GetCategories,
  GetGlasses,
  GetListOfIngredients,
  ListDrinksOption,
} from "../api/drinks";
import { getAllFav } from "../api/list";
import { useAuth } from "./AuthContext";
const context = createContext();

export const DrinksProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [categories, setCategories] = useState([]);
  const [glasses, setGlasses] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [drinkDetail, setDrinkDetail] = useState({});
  const alcoholic = [
    { strAlcoholic: "Alcoholic" },
    { strAlcoholic: "Non alcoholic" },
    { strAlcoholic: "Optional alcohol" },
  ];

  const [drinks, setDrinks] = useState([]);
const [favlist,setFavList]=useState([])
  const [options, setOptions] = useState({
    filter: {
      category: "",
      alcoholic: "Alcoholic",
      ingredient: "",
      glasses: "",
    },
    search: {
      sname: "",
      firtsletter: "",
    },
  });

  const onChangeFilterSearch = (event) => {
    const name = event.target.name;
    const id = event.target.id;
    const value = event.target.value;
    if (value === "") {
      return setOptions({
        filter: {
          category: "",
          alcoholic: "Alcoholic",
          ingredient: "",
          glasses: "",
        },
        search: {
          sname: "",
          firtsletter: "",
        },
      });
    }
    let newOptions = {
      filter: {
        category: "",
        alcoholic: "",
        ingredient: "",
        glasses: "",
      },
      search: {
        sname: "",
        firtsletter: "",
      },
    };
    newOptions[id][name] = value;
    setOptions(newOptions);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const {isAuthenticated}=useAuth()

  useEffect(() => {
    async function fetchDrinks() {
      try {
        const filtercondition = Object.keys(options);
        // Obtiene las claves (propiedades) del objeto 'options' como un array.
        const option = filtercondition.find((el) =>
          Object.values(options[el]).find((value) => value !== "")
        );
        // Busca la primera clave (propiedad) en 'filtercondition' que tiene al menos un valor diferente de una cadena vacía.
        const condition = Object.keys(options[option]).find(
          (el) => options[option][el] !== ""
        );

        // Obtiene la primera clave (propiedad) en el objeto 'options[option]' que tiene un valor diferente de una cadena vacía.
        
        const data = await ListDrinksOption(
          option,
          condition[0],
          options[option][condition]
        );

        if (data.data.drinks.length) {
          let result=data.data.drinks
          setDrinks(result)

          if(isAuthenticated){
            const myFav = await getAllFav()
            setFavList(myFav.data[0].list)
           
          }else{
            setFavList([])
          }

        } else {
          setDrinks([]);
        }
      } catch (error) {
        setDrinks([]);
      }
    }
    fetchDrinks();
    setIsLoading(false)
  }, [options,isAuthenticated]);

  useEffect(() => {
    Promise.all([GetGlasses(), GetCategories(), GetListOfIngredients()])
      .then((data) => {
        setGlasses(data[0].data.drinks);
        setCategories(data[1].data.drinks);
        setIngredients(data[2].data.drinks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <context.Provider
      value={{
        drinks,
        onChangeFilterSearch,
        alcoholic,
        categories,
        ingredients,
        glasses,
        drinkDetail,
        setDrinkDetail,
        isLoading,
        setDrinks,
        favlist,
        setFavList
      }}
    >
      {children}
    </context.Provider>
  );
};
export const useDrinks = () => useContext(context);
