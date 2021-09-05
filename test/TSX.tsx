import React from 'react'

const template = `${JSON.stringify({ something: 'else' })}`
const original = JSON.stringify({ something: 'else' })

const Component = () => (
  <>
    <div>Something 1</div>
    <div>Something 2</div>
  </>
)

export const Main = () => (
  <div>
    <Component />
    {template}
    <Component />
  </div>
)

const f = true

const s = ['s', 's']
