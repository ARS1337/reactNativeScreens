import React from 'react';
import {useState} from 'react';
import {Switch} from 'react-native';

function SwitchCustom(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <>
      <Switch
        onValueChange={toggleSwitch}
        value={isEnabled}
        thumbColor={'white'}
        trackColor={{false: 'grey', true: 'grey'}}
        style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
      />
    </>
  );
}

export default SwitchCustom;
