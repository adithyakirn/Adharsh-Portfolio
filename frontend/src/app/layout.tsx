import type {ReactNode} from 'react'
import "./global.css"
import { InputContextProvider } from '@/Context/inputContext'
export default function RootLayout({children} :{children : ReactNode}){
  return(
    <html lang='en'>
      <body className='background text-terminal text-[14px] leading-[1.4] overflow-x-hidden'>
        <InputContextProvider>
        {children}
        </InputContextProvider>
      </body>
    </html>
  )
}
