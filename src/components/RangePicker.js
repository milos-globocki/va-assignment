import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

export default function RangePicker() {
  const [value, onChange] = useState([new Date(), new Date()]);

  const styles = {
   tort: {
      marginLeft: '1'
    }
  };

  return (
    <div style={styles.tort}>
      <DateRangePicker onChange={onChange} value={value} />
    </div>
  );
}