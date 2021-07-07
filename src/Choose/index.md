## Choose

```jsx
/**
 * title: 基本使用
 * desc: 组件展示及查询。
 */

import React, { useState, useEffect } from 'react';

import { useChoose, Choose, Button, Select, TerritorySelect } from 'wings';

export default () => {
  const choose = useChoose({});
  const [text, setText] = useState('');

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
 * title: 基本使用之竖向展示
 * desc: 侧边栏模式竖向展示。
 */

import React, { useState, useEffect } from 'react';

import { useChoose, Choose, Button, Select, TerritorySelect } from 'wings';

export default () => {
  const choose = useChoose({});
  const [text, setText] = useState('');

  useEffect(() => {
    setText(`${JSON.stringify(choose.getAllConfig())}`);
  }, [choose.getAllConfig()]);

  return (
    <div>
      <Choose choose={choose} layout="vertical">
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

import { useChoose, Choose, Button, Select, TerritorySelect } from 'wings';

export default () => {
  const choose = useChoose({});
  const [text, setText] = useState('');

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

```jsx
/**
 * title: 多条件选择
 * desc: 展示多个子组件
 */
import React, { useState, useEffect } from 'react';

import {
  useChoose,
  Choose,
  Button,
  Select,
  TerritorySelect,
  TimeTypeRadio,
} from 'wings';

export default () => {
  const choose = useChoose({});
  const [text, setText] = useState('');

  const data = [
    { id: 1, name: '时' },
    { id: 2, name: '日' },
    { id: 3, name: '周' },
  ];

  useEffect(() => {
    setText(`${JSON.stringify(choose.getAllConfig())}`);
  }, [choose.getAllConfig()]);

  return (
    <div>
      <Choose choose={choose} layout="horizontal">
        <TimeTypeRadio
          data={data}
          name="timeType-radio"
          style={{ width: 140 }}
        />
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
