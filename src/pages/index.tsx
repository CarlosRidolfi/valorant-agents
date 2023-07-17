'use client'

import Head from 'next/head'
import '../app/globals.css'
import React from "react"
import Agent from '@/app/components/agent'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Valorant Test</title>
      </Head>
      <Agent />
    </main>
  )
}
