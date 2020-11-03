import React from 'react';
import {Text, TextPath, TSpan, Path, Svg} from 'react-native-svg';
import PropTypes from 'prop-types';

function CurvedText(props) {
  const {text, textColor} = props;
  return (
    <Svg height={'100%'} width={'100%'} viewBox={'0 0 200 200'}>
      <Path
        d="M27.5,87.917q61.667-21.667,126.667,0"
        id="circle"
        stroke={'#00000000'}
      />
      <Text
        fill={textColor}
        fontSize="12"
        width={200}
        textAnchor={'middle'}
        alignmentBaseline={'middle'}>
        <TextPath href="#circle" startOffset={'50%'}>
          <TSpan>{text}</TSpan>
        </TextPath>
      </Text>
    </Svg>
  );
}

CurvedText.defaultProps = {
  text: 'ADD TEXT',
  textColor: '#fff',
};

CurvedText.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default CurvedText;
