import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import RouteDetails from './route-details'
import { IRouteDetails } from '@/common/interfaces/routes.interface'

interface RouteTableProps {
  routes: IRouteDetails[]
}

export default function RouteTable({ routes }: RouteTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Start Location</TableHead>
          <TableHead>End Location</TableHead>
          <TableHead>Distance (km)</TableHead>
          <TableHead>Duration (hours)</TableHead>
          <TableHead>View Route</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {routes.map((route) => (
          <TableRow key={route.id}>
            <TableCell>{route.startLocation}</TableCell>
            <TableCell>{route.endLocation}</TableCell>
            <TableCell>{route.distanceKm}</TableCell>
            <TableCell>{route.durationHours}</TableCell>
            <TableCell>
              <RouteDetails stops={route.routeStops} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
