import React,{useState} from 'react'
import { useDrinks } from '../../context/DrinkContext';
import Acordeon from '../Acordeon/Acordeon';

function Filter() {
    const [Selected, setSelected] = useState(false);


    const {  onChangeFilterSearch,alcoholic,categories,ingredients,glasses } = useDrinks();
    const [eventInput, setEventInput] = useState({
        target: {
          name: "sname",
          id: "search",
          value: "",
        },
      });
      const handleChange = (event) => {
        const name = event.target.name;
        const id = event.target.id;
        const value = event.target.value;
        setEventInput({
          target: {
            name,
            id,
            value,
          },
        });
      };
      const onSubmit = (event) => {
        event.preventDefault();
        onChangeFilterSearch(eventInput);
      };
  return (
    <div className='w-2/3'>
       <form onSubmit={onSubmit} className="w-full max-w-md mx-auto p-4">
  <div className="flex items-center  border-b-2 border-teal-500 py-2">
    <input
      type="text"
      name="sname"
      id="search"
      placeholder="Search by name of cocktail"
      value={eventInput.target.value}
      onChange={(event) => handleChange(event)}
      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
    />
    <button
      type="submit"
      className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
    >
      Search
    </button>
  </div>
</form>
      <div className="container mx-auto mt-8 p-4">
        <Acordeon title="Alcoholic" value="1" Selected={Selected} setSelected={setSelected}>   
            {
                alcoholic.map((al,index)=>(
                    <button value={al.strAlcoholic} key={index} name='alcoholic' id="filter" onClick={onChangeFilterSearch}           className=" bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-white font-bold mx-1 px-2 rounded"
                    >{al.strAlcoholic}</button>
                ))
            }
        </Acordeon>
     
        <Acordeon title="Categories"  value="2" Selected={Selected} setSelected={setSelected}>

        {
            categories && categories.map((al,index)=>(
                <button value={al.strCategory} key={index} name='category' id="filter" onClick={onChangeFilterSearch} className=" bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm text-white font-bold mx-1 px-2 my-1 rounded">{al.strCategory}</button>
            ))
        }
        </Acordeon>
<Acordeon title="Glasses"  value="3" Selected={Selected} setSelected={setSelected}>
    <div className='w-full'>
        {
            glasses && glasses.map((al,index)=>(
                <button value={al.strGlass} key={index} name='glasses' id="filter" onClick={onChangeFilterSearch} className=" bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm text-white font-bold mx-1 px-2 my-1 rounded">{al.strGlass}</button>
            ))
        }
    </div>
</Acordeon>
        <Acordeon title="Ingredients"  value="4" Selected={Selected} setSelected={setSelected}>
            <div>

        {
            ingredients && ingredients.map((al,index)=>(
                <button value={al.strIngredient1} key={index} name='ingredient' id="filter" onClick={onChangeFilterSearch} className=" bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm text-white font-bold mx-1 px-2 my-1 rounded">{al.strIngredient1}</button>
            ))
        }
            </div>
        </Acordeon>
      </div>
    </div>
  )
}

export default Filter