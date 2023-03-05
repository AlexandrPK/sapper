import React from 'react';
import { useDispatch } from 'react-redux';
import { onMouseEnter } from './state/actions';
import DificultySelector from './components/DificultySelector';
import Game from './components/Game';

const App = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="APP z100"
      onMouseOver={(e) => dispatch(onMouseEnter({ target: 'APP' }))}
    >
      <Game />
    </div>
  );
}
export default App;
