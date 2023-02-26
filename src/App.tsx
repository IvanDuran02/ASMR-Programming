import React from "react";

// Remember to subscribe!!

const Button = ({ title, color }: { title: string; color: string }) => {
  return (
    <div
      className={`w-20 h-10 hover:cursor-pointer active:translate-y-1 text-white bg-[${color}] rounded-lg shadow-md flex justify-center items-center`}
    >
      <h2>{title}</h2>
    </div>
  );
};

const LoginComponent = () => {
  return (
    <div className="w-64 h-72 flex-col bg-slate-200 rounded-lg text-black flex justify-around items-center">
      <h1 className="font-bold">Enjoy the ASMR.</h1>

      <div className="flex flex-col gap-y-2 justify-center items-center">
        <div className="flex flex-col">
          <span className="italic text-xs p-1">Username</span>
          <input
            className="rounded-md shadow-md outline-none pl-1"
            type="text"
          />
        </div>

        <div className="flex flex-col">
          <span className="italic text-xs p-1">Password</span>
          <input
            className="rounded-md shadow-md outline-none pl-1"
            type="password"
          />
        </div>
      </div>

      <div className="flex gap-x-2">
        <Button title="Login" color="#8edce4" />
        <Button title="Sign Up" color="#8ce59e" />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#212121] text-white">
      <LoginComponent />
    </div>
  );
};

export default App;
