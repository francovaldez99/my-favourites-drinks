import React, { useState } from "react";
import { newList } from "../../api/list";
import { useDrinks } from "../../context/DrinkContext";
import { ImSpinner2 } from "react-icons/im";

function CreateList({}) {
  const {setAllList}=useDrinks()
  const [clicked,setClicked]=useState(false)
  const [form, SetForm] = useState({
    name: "",
  });
  const onSubmit = (event) => {
    event.preventDefault();
    if (!form.name) {
      
      return
    }
    setClicked(true)
    newList(form)
      .then((res) => {
        setAllList(res.data)
      })
      .catch((err) => {
        console.log(err);
      });

      setTimeout(() => {
        setClicked(false)
        SetForm({
          name:""
        })
      }, 1500);    };
  const handleChange = (event) => {
    const { name, value } = event.target;
    SetForm({
      [name]: value,
    });
  };
  return (
    <form
      onSubmit={onSubmit}
   className="px-4 py-2 h-[150px] w-[450px] rounded bg-white border-teal-500 flex justify-center flex-col"
    >
      <div className="flex items-center  border-b-2 border-teal-500 py-2">
        <input
          type="text"
          name="name"
          placeholder="List Name..."
          value={form.name}
          onChange={handleChange}
          className=" appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none "
        />
      </div>
      <button className="bg-teal-500 text-white py-1 px-2 rounded mx-auto my-2 h-auto w-auto">{clicked ? <div className="animate-spin py-1 px-5">
        <ImSpinner2 />
      </div>
: "submit"}</button>
    </form>
  );
}

export default CreateList;
