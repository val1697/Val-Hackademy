import {MagnifyingGlassIcon} from '@heroicons/react/24/solid';
import { Input, Button } from "@material-tailwind/react";
import { useState} from 'react';
import axios from 'axios';
// eslint-disable-next-line react/prop-types

function Buscar () {

  const [search, setSearch] = useState([]);
  const [setErrormessage] = useState("");

  const handleSubmit = async (e) => {
        e.preventDefault();
        const value = e.target.value;
        setSearch(value);
      
    try {
      const response = await axios.get("https://sfwit-c3-t3-back.onrender.com",
      JSON.stringify(response?.data),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
      );
    } catch (error) {
      // Handle the error here
      if (!error.response) {
        setErrormessage("Error: Network Error");
      } else if (error.response?.status === 400) {
        setErrormessage("No encontrado");
    } else if (error.response?.status === 404) {
        setErrormessage("No encontrado");
    }
  }
}

  return (
    <div className="w-full bg-gray-100 h-screen flex p-5 justify-center items-start">

      <Input 
        color="green"
        className='static top-1 right-1 bg-white'
        type="text"
        placeholder="Escribe el nombre del lugar"
        label="Buscar"
        name='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        
          />
      <Button
        size="sm"
        color= {search ? "green" : "green"}
        type="submit"
        className="absolute right-5 rounded"
        onSubmit={(e) => (handleSubmit(e))}>

       <MagnifyingGlassIcon className="h-6 w-6" />
        </Button>

        <div className= "places">

        </div>

    </div>
  );
}

export default Buscar;