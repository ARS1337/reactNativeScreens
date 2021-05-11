import React from 'react';
import {useState} from 'react';
// import {Switch} from 'react-native';
import {Switch} from 'react-native-switch';

function SwitchCustom(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <>
      <Switch
        onValueChange={toggleSwitch}
        value={isEnabled}
        circleSize={12}
        activeText={''}
        inActiveText={''}
        backgroundActive={'#004481'}
        backgroundInactive={'gray'}
        circleBorderWidth={1}
        innerCircleStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: 'grey',
          paddingLeft: 3,
        }}
        switchLeftPx={3}
        switchRightPx={3}
      />
    </>
  );
}

export default SwitchCustom;
