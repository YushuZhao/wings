## Select

Examples:

```jsx
/**
 * title: 基本使用
 * desc: 基本使用。
 */
import React from 'react';

import { Select } from 'wings';

export default () => {
  return (
    <Select
      name="default-select"
      data={[
        { id: 1, name: '海淀区' },
        { id: 2, name: '丰台区' },
        { id: 3, name: '朝阳区' },
      ]}
      defaultValue={1}
    />
  );
};
```
