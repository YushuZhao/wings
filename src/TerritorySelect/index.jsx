import React, { useState, useEffect, memo } from 'react';
import { Select } from 'wings';

const TerritorySelect = memo(
  ({ onChange, label = '', style, name, choose, isSearch }) => {
    const [value, setValue] = useState(undefined);
    const [data, setData] = useState([]);

    // 异步请求接口,获取属地数据,渲染下拉列表
    useEffect(() => {
      setTimeout(() => {
        const list = [
          { id: 1, name: '海淀区' },
          { id: 2, name: '丰台区' },
          { id: 3, name: '朝阳区' },
        ];
        setData(list);
        // 回调choose方法,初始化config
        choose && isSearch && choose.setConfig(name, list[0].id);
      }, 100);
    }, []);

    // 约定event,之后由Choose容器统一管理
    useEffect(() => {
      onChange && onChange(value);
    }, [value]);

    return (
      <div style={style}>
        <div style={{ display: 'inline-block' }}>
          {label && <span>{`${label}: `}</span>}
        </div>
        <div style={{ display: 'inline-block', minWidth: 85 }}>
          {data.length ? (
            <Select initialValue={data[0].id} data={data} onChange={setValue} />
          ) : (
            []
          )}
        </div>
      </div>
    );
  },
);

TerritorySelect.defaultProps = {
  prefix: 'select',
  key: 'territory',
};

TerritorySelect.displayName = 'SelectComponent';

export default TerritorySelect;
