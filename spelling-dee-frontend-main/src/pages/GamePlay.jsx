import React, { useEffect, useState } from 'react';
import Game from '../components/Game';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Reloading from '../components/Reloading';

function GamePlay() {
  const { wordCount } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  console.log(wordCount);
  const [wordList, setWordlist] = useState([]);
  console.log();
  useEffect(() => {
    axios
      .get(`https://api-spelling-dee.redaxn.com/words?words=${wordCount}`)
      .then((response) => {
        setWordlist(response.data);
        setIsLoading(false);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-main-bg bg-no-repeat bg-cover bg-center">
      {isLoading && <Reloading />}
      <Game wordList={wordList} />
    </div>
  );
}

export default GamePlay;
