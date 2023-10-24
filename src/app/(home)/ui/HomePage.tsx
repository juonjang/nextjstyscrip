"use client"

import React from 'react'
import { Button,Title } from '@mantine/core'
import { HeroImageBackground } from './HeroImageBackground'
import { AppFeatures } from './AppFeature'
import { FooterSocial } from './FooterSocial'

export default function HomeContent() {
  return (
    <div>
        <HeroImageBackground/>
        <AppFeatures  />
        <FooterSocial/>
    </div>
  )
}
