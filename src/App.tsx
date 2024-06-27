import React, {FC} from 'react';
import './App.css';
import {ICharacter} from "./models/ICharacter";
import {RickAndMorty} from "./data";
import Character from "./components/character/Character";


const App: FC = () => {

  return (
      <div>
        {
          RickAndMorty.map((character: ICharacter, index) =>
              <Character character={character} key={index}/>)
        }
      </div>
  );
}

export default App;