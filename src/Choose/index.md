## Choose

Examples:

```jsx
import React, { useState, useEffect } from 'react';

import { Choose, Select, TerritorySelect, useChoose } from 'wings';

export default () => {
  const initialConfig = {
    // "default-input": '',
    // "territory-select": 1,
    // "timeType-radio": 1,
  };
  const choose = useChoose(initialConfig);
  const [text,setText] = useState('')

  const data = [
    { id: 1, name: '时' },
    { id: 2, name: '日' },
    { id: 3, name: '月' },
  ];

  useEffect(() => {
    setText(`${JSON.stringify(choose.getAllConfig())}`)
  }, [choose.getAllConfig()]);

  return (
    <div>
      <Choose choose={choose} layout="horizontal">
        <Select name="default-select" initialValue={data[0].id} data={data} />
        <TerritorySelect name="territory-select" />
      </Choose>
      <div>{text}</div>
    </div>
  );
};
```
