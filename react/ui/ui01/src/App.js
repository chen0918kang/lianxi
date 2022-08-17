import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Button,Tooltip } from 'antd'
import { SearchOutlined } from '@ant-design/icons';

import { DatePicker} from 'antd';
const { RangePicker } = DatePicker;
export default class App extends Component {
  render() {
    return (
      <div>
        App
        <button>使用 antd UI库</button>
        <Button type="primary">Primary Button</Button>
        <Tooltip title="search">
           <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>


        <RangePicker />
      </div>
    )
  }
}
