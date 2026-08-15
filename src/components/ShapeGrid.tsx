import { useEffect, useRef } from 'react'
import './ShapeGrid.css'

type Direction = 'diagonal' | 'up' | 'right' | 'down' | 'left'
type Shape = 'square' | 'hexagon' | 'circle' | 'triangle'

interface Cell {
  x: number
  y: number
}

interface ShapeGridProps {
  direction?: Direction
  speed?: number
  borderColor?: string
  squareSize?: number
  hoverFillColor?: string
  shape?: Shape
  hoverTrailAmount?: number
  className?: string
}

export default function ShapeGrid({
  direction = 'right',
  speed = 1,
  borderColor = '#999',
  squareSize = 40,
  hoverFillColor = '#222',
  shape = 'square',
  hoverTrailAmount = 0,
  className = '',
}: ShapeGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const requestRef = useRef<number | null>(null)
  const gridOffset = useRef({ x: 0, y: 0 })
  const hoveredCell = useRef<Cell | null>(null)
  const trailCells = useRef<Cell[]>([])
  const cellOpacities = useRef(new Map<string, number>())

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return
    const opacities = cellOpacities.current

    const isHexagon = shape === 'hexagon'
    const isTriangle = shape === 'triangle'
    const hexHorizontal = squareSize * 1.5
    const hexVertical = squareSize * Math.sqrt(3)
    const size = { width: 0, height: 0 }

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      size.width = rect.width
      size.height = rect.height
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const drawHexagon = (centerX: number, centerY: number, radius: number) => {
      context.beginPath()
      for (let index = 0; index < 6; index++) {
        const angle = (Math.PI / 3) * index
        const x = centerX + radius * Math.cos(angle)
        const y = centerY + radius * Math.sin(angle)
        if (index === 0) context.moveTo(x, y)
        else context.lineTo(x, y)
      }
      context.closePath()
    }

    const drawCircle = (centerX: number, centerY: number, diameter: number) => {
      context.beginPath()
      context.arc(centerX, centerY, diameter / 2, 0, Math.PI * 2)
      context.closePath()
    }

    const drawTriangle = (centerX: number, centerY: number, side: number, flipped: boolean) => {
      context.beginPath()
      if (flipped) {
        context.moveTo(centerX, centerY + side / 2)
        context.lineTo(centerX + side / 2, centerY - side / 2)
        context.lineTo(centerX - side / 2, centerY - side / 2)
      } else {
        context.moveTo(centerX, centerY - side / 2)
        context.lineTo(centerX + side / 2, centerY + side / 2)
        context.lineTo(centerX - side / 2, centerY + side / 2)
      }
      context.closePath()
    }

    const fillActiveCell = (cellKey: string, drawShape: () => void) => {
      const opacity = cellOpacities.current.get(cellKey)
      if (!opacity) return
      context.globalAlpha = opacity
      drawShape()
      context.fillStyle = hoverFillColor
      context.fill()
      context.globalAlpha = 1
    }

    const drawGrid = () => {
      const { width, height } = size
      context.clearRect(0, 0, width, height)
      context.strokeStyle = borderColor
      context.lineWidth = 1

      if (isHexagon) {
        const columnShift = Math.floor(gridOffset.current.x / hexHorizontal)
        const offsetX = ((gridOffset.current.x % hexHorizontal) + hexHorizontal) % hexHorizontal
        const offsetY = ((gridOffset.current.y % hexVertical) + hexVertical) % hexVertical
        const columns = Math.ceil(width / hexHorizontal) + 3
        const rows = Math.ceil(height / hexVertical) + 3

        for (let column = -2; column < columns; column++) {
          for (let row = -2; row < rows; row++) {
            const centerX = column * hexHorizontal + offsetX
            const centerY = row * hexVertical + ((column + columnShift) % 2 !== 0 ? hexVertical / 2 : 0) + offsetY
            const draw = () => drawHexagon(centerX, centerY, squareSize)
            fillActiveCell(`${column},${row}`, draw)
            draw()
            context.stroke()
          }
        }
        return
      }

      if (isTriangle) {
        const halfWidth = squareSize / 2
        const columnShift = Math.floor(gridOffset.current.x / halfWidth)
        const rowShift = Math.floor(gridOffset.current.y / squareSize)
        const offsetX = ((gridOffset.current.x % halfWidth) + halfWidth) % halfWidth
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize
        const columns = Math.ceil(width / halfWidth) + 4
        const rows = Math.ceil(height / squareSize) + 4

        for (let column = -2; column < columns; column++) {
          for (let row = -2; row < rows; row++) {
            const centerX = column * halfWidth + offsetX
            const centerY = row * squareSize + squareSize / 2 + offsetY
            const flipped = ((column + columnShift + row + rowShift) % 2 + 2) % 2 !== 0
            const draw = () => drawTriangle(centerX, centerY, squareSize, flipped)
            fillActiveCell(`${column},${row}`, draw)
            draw()
            context.stroke()
          }
        }
        return
      }

      const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize
      const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize
      const columns = Math.ceil(width / squareSize) + 3
      const rows = Math.ceil(height / squareSize) + 3

      for (let column = -2; column < columns; column++) {
        for (let row = -2; row < rows; row++) {
          const cellKey = `${column},${row}`

          if (shape === 'circle') {
            const centerX = column * squareSize + squareSize / 2 + offsetX
            const centerY = row * squareSize + squareSize / 2 + offsetY
            const draw = () => drawCircle(centerX, centerY, squareSize)
            fillActiveCell(cellKey, draw)
            draw()
            context.stroke()
          } else {
            const x = column * squareSize + offsetX
            const y = row * squareSize + offsetY
            const opacity = cellOpacities.current.get(cellKey)
            if (opacity) {
              context.globalAlpha = opacity
              context.fillStyle = hoverFillColor
              context.fillRect(x, y, squareSize, squareSize)
              context.globalAlpha = 1
            }
            context.strokeRect(x, y, squareSize, squareSize)
          }
        }
      }
    }

    const updateCellOpacities = () => {
      const targets = new Map<string, number>()
      const hovered = hoveredCell.current
      if (hovered) targets.set(`${hovered.x},${hovered.y}`, 1)

      if (hoverTrailAmount > 0) {
        for (let index = 0; index < trailCells.current.length; index++) {
          const cell = trailCells.current[index]
          const key = `${cell.x},${cell.y}`
          if (!targets.has(key)) {
            targets.set(key, (trailCells.current.length - index) / (trailCells.current.length + 1))
          }
        }
      }

      for (const key of targets.keys()) {
        if (!cellOpacities.current.has(key)) cellOpacities.current.set(key, 0)
      }

      for (const [key, opacity] of cellOpacities.current) {
        const target = targets.get(key) || 0
        const next = opacity + (target - opacity) * 0.15
        if (next < 0.005) cellOpacities.current.delete(key)
        else cellOpacities.current.set(key, next)
      }
    }

    const updateAnimation = () => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const effectiveSpeed = reducedMotion ? 0 : Math.max(speed, 0.1)
      const wrapX = isHexagon ? hexHorizontal * 2 : squareSize
      const wrapY = isHexagon ? hexVertical : isTriangle ? squareSize * 2 : squareSize

      if (direction === 'right') gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + wrapX) % wrapX
      if (direction === 'left') gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + wrapX) % wrapX
      if (direction === 'up') gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + wrapY) % wrapY
      if (direction === 'down') gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + wrapY) % wrapY
      if (direction === 'diagonal') {
        gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + wrapX) % wrapX
        gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + wrapY) % wrapY
      }

      updateCellOpacities()
      drawGrid()
      requestRef.current = requestAnimationFrame(updateAnimation)
    }

    const rememberHoveredCell = (cell: Cell) => {
      const current = hoveredCell.current
      if (current?.x === cell.x && current.y === cell.y) return
      if (current && hoverTrailAmount > 0) {
        trailCells.current.unshift({ ...current })
        if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount
      }
      hoveredCell.current = cell
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top

      if (isHexagon) {
        const columnShift = Math.floor(gridOffset.current.x / hexHorizontal)
        const offsetX = ((gridOffset.current.x % hexHorizontal) + hexHorizontal) % hexHorizontal
        const offsetY = ((gridOffset.current.y % hexVertical) + hexVertical) % hexVertical
        const column = Math.round((mouseX - offsetX) / hexHorizontal)
        const rowOffset = (column + columnShift) % 2 !== 0 ? hexVertical / 2 : 0
        const row = Math.round((mouseY - offsetY - rowOffset) / hexVertical)
        rememberHoveredCell({ x: column, y: row })
        return
      }

      if (isTriangle) {
        const halfWidth = squareSize / 2
        const offsetX = ((gridOffset.current.x % halfWidth) + halfWidth) % halfWidth
        const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize
        rememberHoveredCell({
          x: Math.round((mouseX - offsetX) / halfWidth),
          y: Math.floor((mouseY - offsetY) / squareSize),
        })
        return
      }

      const offsetX = ((gridOffset.current.x % squareSize) + squareSize) % squareSize
      const offsetY = ((gridOffset.current.y % squareSize) + squareSize) % squareSize
      const adjustedX = mouseX - offsetX
      const adjustedY = mouseY - offsetY
      rememberHoveredCell({
        x: shape === 'circle' ? Math.round(adjustedX / squareSize) : Math.floor(adjustedX / squareSize),
        y: shape === 'circle' ? Math.round(adjustedY / squareSize) : Math.floor(adjustedY / squareSize),
      })
    }

    const handleMouseLeave = () => {
      const current = hoveredCell.current
      if (current && hoverTrailAmount > 0) {
        trailCells.current.unshift({ ...current })
        if (trailCells.current.length > hoverTrailAmount) trailCells.current.length = hoverTrailAmount
      }
      hoveredCell.current = null
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    let isVisible = false
    let isPageVisible = !document.hidden

    const tryStart = () => {
      if (isVisible && isPageVisible && requestRef.current === null) {
        requestRef.current = requestAnimationFrame(updateAnimation)
      }
    }
    const tryStop = () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current)
        requestRef.current = null
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
      if (isVisible) tryStart()
      else tryStop()
    })
    observer.observe(canvas)

    const onVisibilityChange = () => {
      isPageVisible = !document.hidden
      if (isPageVisible) tryStart()
      else tryStop()
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      tryStop()
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisibilityChange)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      hoveredCell.current = null
      trailCells.current = []
      opacities.clear()
    }
  }, [direction, speed, borderColor, hoverFillColor, squareSize, shape, hoverTrailAmount])

  return <canvas ref={canvasRef} className={`shapegrid-canvas ${className}`.trim()} aria-hidden />
}
