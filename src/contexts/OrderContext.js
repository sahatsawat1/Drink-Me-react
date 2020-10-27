import React, { createContext, useState} from 'react'

export const UsableOrderContext = createContext({})

function OrderContext ({ children }) {
  const [state, setState] = useState({ 
    box1: 'ว่าง',
    box2: 'ว่าง',
    box3: 'ว่าง',
    box4: 'ว่าง',
    box5: 'ว่าง',
    box6: 'ว่าง',
    box7: 'ว่าง',
    box8: 'ว่าง',
    box9: 'ว่าง',
  })

  return <UsableOrderContext.Provider value={{ state, setState}}>{children}</UsableOrderContext.Provider>
}

export default OrderContext;