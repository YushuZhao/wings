## TimeTypeRadio

```jsx
/**
 * title: 基本
 * desc: 基本使用。
 */
import React from 'react';

import { TimeTypeRadio } from 'wings';

export default () => {
  const data = [
    { id: 1, name: '时' },
    { id: 2, name: '日' },
    { id: 3, name: '周' },
  ];

  return (
    <TimeTypeRadio style={{ width: 140 }} name="timeType-radio" data={data} />
  );
};
```
