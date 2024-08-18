import { Footer as AntdFooter } from 'antd/es/layout/layout'

export default function Footer() {
  return (
    <AntdFooter
      style={{
        textAlign: 'center'
      }}
    >
      Nothing friendly ©{new Date().getFullYear()} Created by Thai meo
    </AntdFooter>
  )
}
