'use client'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { DigitalPlayLogo } from '@/components/navigation/DIJogo'
import Scene from '@/components/canvas/Scene'

const Skull = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Skull), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),

})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <>
    <div>
    <DigitalPlayLogo>
      </DigitalPlayLogo>
    </div>
<canvas className=' bg-slate-500' />
    <h1 className='xyCenter'>
TEXT
</h1>
<View orbit className=' xyCenter relative h-full  sm:h-64 sm:w-64 bg-black '>
  <Suspense fallback={null}>
<Skull scale={1} position={[0, 0, 0]} rotation={[0.0, -0.3, 0]}/>
<Common color={'black'}/>
  </Suspense>
</View>

    </>
  )

}
