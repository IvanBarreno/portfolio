import { useEffect, useRef, useState } from 'react'

const FRAME_COUNT = 4      // frames in the sprite strip
const FRAME_W = 32     // px width of each frame
const FRAME_H = 32     // px height of each frame
const SPEED = 1.5    // px per tick (60fps)
const FPS = 8      // sprite animation speed

export default function CatPet() {
  const [pos, setPos] = useState(80)
  const [frame, setFrame] = useState(0)
  const [dir, setDir] = useState<1 | -1>(1) // 1 = right, -1 = left

  const posRef = useRef(pos)
  const dirRef = useRef(dir)

  useEffect(() => { posRef.current = pos }, [pos])
  useEffect(() => { dirRef.current = dir }, [dir])

  useEffect(() => {
    const move = setInterval(() => {
      const maxX = window.innerWidth - FRAME_W
      const next = posRef.current + SPEED * dirRef.current

      if (next >= maxX) {
        dirRef.current = -1
        setDir(-1)
      } else if (next <= 0) {
        dirRef.current = 1
        setDir(1)
      }

      posRef.current = next
      setPos(next)
    }, 1000 / 60)

    const animate = setInterval(() => {
      setFrame(f => (f + 1) % FRAME_COUNT)
    }, 1000 / FPS)

    return () => {
      clearInterval(move)
      clearInterval(animate)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed bottom-0 z-40"
      style={{
        left: pos,
        width: FRAME_W,
        height: FRAME_H,
        backgroundImage: 'url(/cat-sprite.jpg)',
        backgroundPosition: `-${frame * FRAME_W}px 0px`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${FRAME_COUNT * FRAME_W}px ${FRAME_H}px`,
        imageRendering: 'pixelated',
        transform: dir === -1 ? 'scaleX(-1)' : undefined,
      }}
    />
  )
}
