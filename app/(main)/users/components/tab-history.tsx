import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function TabHistory() {
  const tickets = [
    {
      code: 'VE001',
      quantity: 2,
      seats: 'A1, A2',
      pickupLocation: 'Bến xe Miền Đông',
      dropOffLocation: 'Bến xe Đà Lạt',
      departureTime: '2023-07-15 08:00',
      name: 'Xe Phương Trang'
    },
    {
      code: 'VE002',
      quantity: 1,
      seats: 'B3',
      pickupLocation: 'Bến xe Miền Tây',
      dropOffLocation: 'Bến xe Cần Thơ',
      departureTime: '2023-07-16 09:30',
      name: 'Xe Thành Bưởi'
    },
    {
      code: 'VE003',
      quantity: 3,
      seats: 'C1, C2, C3',
      pickupLocation: 'Bến xe Gia Lâm',
      dropOffLocation: 'Bến xe Sapa',
      departureTime: '2023-07-17 22:00',
      name: 'Xe Hoàng Long'
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lịch sử mua vé</CardTitle>
        <CardDescription>Thông tin mua vé trước đây.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-2'>
        <div className='container mx-auto py-10'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mã vé xe</TableHead>
                <TableHead>Số lượng</TableHead>
                <TableHead>Số ghế</TableHead>
                <TableHead>Điểm đón</TableHead>
                <TableHead>Điểm trả</TableHead>
                <TableHead>Thời gian khởi hành</TableHead>
                <TableHead>Tên xe</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets.map((ticket) => (
                <TableRow key={ticket.code}>
                  <TableCell>{ticket.code}</TableCell>
                  <TableCell>{ticket.quantity}</TableCell>
                  <TableCell>{ticket.seats}</TableCell>
                  <TableCell>{ticket.pickupLocation}</TableCell>
                  <TableCell>{ticket.dropOffLocation}</TableCell>
                  <TableCell>{ticket.departureTime}</TableCell>
                  <TableCell>{ticket.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
