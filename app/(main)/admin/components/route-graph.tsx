import { IRouteStopWithNextPrice } from '@/common/interfaces/route-stops.interface'
import { formatMoney } from '@/lib/utils'

interface RouteGraphProps {
  stops: IRouteStopWithNextPrice[]
}

export default function RouteGraph({ stops }: RouteGraphProps) {
  const totalStops = stops.length
  const svgWidth = 840
  const svgHeight = 250
  const nodeRadius = 8
  const lineY = svgHeight / 2

  return (
    <svg width={svgWidth} height={svgHeight} className='mx-auto'>
      {stops.map((stop, index) => {
        const x = (index / (totalStops - 1)) * (svgWidth - 40) + 20
        return (
          <g key={index}>
            {index > 0 && (
              <>
                <line
                  x1={((index - 1) / (totalStops - 1)) * (svgWidth - 40) + 20}
                  y1={lineY}
                  x2={x}
                  y2={lineY}
                  stroke='#ccc'
                  strokeWidth='2'
                />
                {stops[index - 1].priceToNextStop && (
                  <text
                    x={(x + (((index - 1) / (totalStops - 1)) * (svgWidth - 40) + 20)) / 2}
                    y={lineY - 15}
                    textAnchor='middle'
                    fontSize='12'
                    fill='#888'
                  >
                    {formatMoney(stops[index - 1].priceToNextStop as number)}
                  </text>
                )}
              </>
            )}
            <circle cx={x} cy={lineY} r={nodeRadius} className='fill-primary' />
            <text x={x + 5} y={lineY - 30} fontSize='12' textAnchor='middle'>
              {stop.location}
            </text>
            <text x={x + 20} y={lineY + 25} textAnchor='middle' fontSize='10'>
              {new Date(stop.arrivalTime).toLocaleTimeString()}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
