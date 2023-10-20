"use client"

import React from 'react'
import { Button,Title } from '@mantine/core'

export default function HomeContent() {
  return (
    <div>
        <Title order={2} >HomePage</Title>
        <p> <Button variant="filled" color="rgba(235, 171, 171, 1)">Click Me!</Button></p>
    </div>
  )
}
