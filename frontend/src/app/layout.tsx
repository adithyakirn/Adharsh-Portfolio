import type {ReactNode} from 'react'
import "./global.css"
export default function RootLayout({children} :{children : ReactNode}){
  return(
    <html lang='en'>
      <body className='background text-terminal text-[14px] leading-[1.4] overflow-x-hidden'>
        {children}
      </body>
    </html>
  )
}
