## Choose

```jsx
/**
 * title: 基本使用
 * desc: 组件展示及查询。
 */
import React, { useState, useEffect } from 'react';

import { Choose, Button, Select, TerritorySelect, useChoose } from 'wings';

export default () => {
  const initialConfig = {
    // "default-input": '',
    // "territory-select": 1,
    // "timeType-radio": 1,
  };
  const choose = useChoose(initialConfig);
  const [text, setText] = useState('');

  const data = [
    { id: 1, name: '时' },
    { id: 2, name: '日' },
    { id: 3, name: '月' },
  ];

  useEffect(() => {
    setText(`${JSON.stringify(choose.getAllConfig())}`);
  }, [choose.getAllConfig()]);

  return (
    <div>
      <Choose choose={choose} layout="horizontal">
        <TerritorySelect
          name="territory-select"
          label="属地"
          style={{ width: 140 }}
        />
        <Button name="search-button" text="查询" htmlType="submit" />
      </Choose>
      <div>{text}</div>
    </div>
  );
};
```

```jsx
/**
 * title: 重置
 * desc: 可重置子组件,使其恢复默认值
 */
import React, { useState, useEffect } from 'react';

import { Choose, Button, Select, TerritorySelect, useChoose } from 'wings';

export default () => {
  const choose = useChoose({});
  const [text, setText] = useState('');

  const data = [
    { id: 1, name: '时' },
    { id: 2, name: '日' },
    { id: 3, name: '月' },
  ];

  useEffect(() => {
    setText(`${JSON.stringify(choose.getAllConfig())}`);
  }, [choose.getAllConfig()]);

  return (
    <div>
      <Choose choose={choose} layout="horizontal">
        <TerritorySelect
          name="territory-select"
          label="属地"
          style={{ width: 140 }}
        />

        <Button name="search-button" text="查询" htmlType="submit" />
        <Button name="reset-button" text="重置" htmlType="reset" />
      </Choose>
      <div>{text}</div>
    </div>
  );
};
```
