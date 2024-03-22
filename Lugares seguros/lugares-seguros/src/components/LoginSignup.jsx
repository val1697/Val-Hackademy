import { Input } from "@material-tailwind/react";
import React from 'react';
import { useEffect } from 'react';
import { Button } from "@material-tailwind/react";
//import axios from 'axios';

const LoginSignUp = () => {
  
  //const [action,setAction] = React.useState("Sign Up");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  //const [error, setError] = React.useState("");
  //const [success, setSuccess] = React.useState("");
  //const [loading, setLoading] = React.useState(false);
  //const [user, setUser] = React.useState(null);
  //const [userCreated, setUserCreated] = React.useState(false);
  //const [login, setLogin] = React.useState(false);

  useEffect(() => {

  })
  
  return (
  <div className='w-full h-screen flex py-5 justify-center items-center bg-dark-gradient'>

   <div className="flex-col bg-white px-6 pb-8 box-shadow rounded-xl">
        <div className="flex-col items-center gap-2.5 size-full mt-2">
            <div className="h2">Iniciar Sesión</div>
            <div className="w-10 h-1 bg-black rounded-sm"></div>
        </div>
      <form className="flex flex-col gap-2 mt-13 p-5">
       <div>
            <Input 
            color="green"
            variant="outlined"
            label="Nombre"
            type="text" 
            id="nombre"
            name="nombre"
            placeholder="Nombre"
            onChange={(e) => {setName(e.target.value)}}
            value={name}
             />
       </div>
       <div>
          <Input color="green"
          variant="outlined"
          type="email" 
          id="email"
          name="email"
          label="Email" 
          placeholder="Email"
          onChange={(e) => {setEmail(e.target.value)}}
          value={email}
          />
       </div>
       <div>
          <Input color="green"
          variant="outlined"
          type="password" 
          id="password"
          name="password"
          label="Contraseña" 
          placeholder="Contraseña"
          autoComplete="current-password"
          onChange={(e) => {setPassword(e.target.value)}}
          value={password}
          />
       </div>
      <div className="forgot-password">¿Perdiste tu contraseña?</div>
      <div className="submit-container">
        <div className="submit">Iniciar Sesión</div>
      </div>
      </form>
  </div>

  <Button>
    <h4>Registrarse</h4>

  </Button>

</div>
  );
};

export default LoginSignUp;

export function InputValidations() {
  return (
    <div className="flex w-72 flex-col items-end gap-6">
      <Input label="Input Error" error />
      <Input label="Input Success" success />
    </div>
  );
}