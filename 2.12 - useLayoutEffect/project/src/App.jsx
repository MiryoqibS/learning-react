import React from 'react'
import { Button } from './components/UI/Button'

export const App = () => {
  return (
    <div className="flex flex-col items-start h-screen gap-4 container mx-auto">
      <h1 className="text-4xl text-gray-900">Заголовок</h1>
      <Button>Наведи на меня</Button>
    </div>
  )
}
