import React, { useEffect, useRef, useState } from 'react';
import { range } from 'lodash/lodash';
import { useDispatch, useSelector } from 'react-redux';
import { getGameConfig, getMinutesCounter, getTimeCounter, isClockRunning } from '../state/selectors';
import ThreeDigitCounter from './ThreeDigitCounter';
import SmileyButton from './SmileyButton';
import { clockTick } from '../state/actions';

const Header = () => {

  const [minutesCounter, setMinutesCounter] = useState(40)

  const dispatch = useDispatch();
  const config = useSelector(getGameConfig);
  const timeCounter = useSelector(getTimeCounter);
  const clockRunning = useSelector(isClockRunning);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  

  useEffect(() => {

    

    if (clockRunning) {
      const intervalId = setInterval(() => {
        setMinutesCounter((minutesCounter) => minutesCounter - 1);
      }, 60000);

      intervalRef.current = setInterval(() => { dispatch(clockTick()); }, 1000);
    } else  if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }


  }, [clockRunning, dispatch])
  const line = range(config.width).map(key => <div key={key} className="bordertb" />);
  return (
    <div className="msw-header">
      <div className="bordertl" />{line}<div className="bordertr" />
      <div className="borderlrlong"/>
      <ThreeDigitCounter value={minutesCounter} id="mines" />
      <SmileyButton />
      <ThreeDigitCounter value={timeCounter} id="seconds"/>
      <div className="borderlrlong"/>
      <div className="borderjointl" />{line}<div className="borderjointr" />
    </div>
  );
}
export default Header;
