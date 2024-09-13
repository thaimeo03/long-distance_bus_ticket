'use client'
import { getBookingHistory } from '@/apis/bookings.api'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { formatDate, formatMoney } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'

export default function TabHistory() {
  const { data } = useQuery({
    queryKey: ['bookings-history'],
    queryFn: () => getBookingHistory()
  })

  const tickets = data?.data || []

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lịch sử mua vé</CardTitle>
        <CardDescription>Thông tin mua vé trước đây.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        <div className='container mx-auto'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='font-semibold'>Mã vé xe</TableHead>
                <TableHead>Số lượng</TableHead>
                <TableHead>Số ghế</TableHead>
                <TableHead>Tên xe</TableHead>
                <TableHead>Điểm đón</TableHead>
                <TableHead>Điểm trả</TableHead>
                <TableHead>Thời gian khởi hành</TableHead>
                <TableHead>Ngày đặt</TableHead>
                <TableHead>Thành tiền</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets.map((ticket) => (
                <TableRow key={ticket.code}>
                  <TableCell className='font-semibold'>{ticket.code}</TableCell>
                  <TableCell>{ticket.quantity}</TableCell>
                  <TableCell>{ticket.seats.join(', ')}</TableCell>
                  <TableCell>{ticket.busName}</TableCell>
                  <TableCell>{ticket.pickupLocation}</TableCell>
                  <TableCell>{ticket.dropOffLocation}</TableCell>
                  <TableCell>{formatDate(ticket.departureTime)}</TableCell>
                  <TableCell>{formatDate(ticket.bookingDate)}</TableCell>
                  <TableCell className='text-red-600'>{formatMoney(Number(ticket.amount) * ticket.quantity)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
