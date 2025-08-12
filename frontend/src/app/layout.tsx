import type {ReactNode} from 'react'
import "./global.css"
import { InputContextProvider } from '@/Context/inputContext'
export default function RootLayout({children} :{children : ReactNode}){
  return(
    <html lang='en'>
      <title>Adharsh Portfolio</title>
      <link
        rel="icon"
        href="https://media.licdn.com/dms/image/v2/D5603AQF4hoEqvOVjwQ/profile-displayphoto-shrink_400_400/B56ZN2fHQbG4Ag-/0/1732859689722?e=1758153600&v=beta&t=vmChkRwti9LP3gEvBJylXVUP2fULBKyy82ozvK7FVkI"
      />
      <body className='background text-terminal text-[14px] leading-[1.4] overflow-x-hidden'>
        <InputContextProvider>
        {children}
        </InputContextProvider>
      </body>
    </html>
  )
}
