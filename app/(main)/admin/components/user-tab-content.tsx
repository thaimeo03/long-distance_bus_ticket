'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'

export default function UserTabContent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quản Lý Người Dùng</CardTitle>
        <CardDescription>Quản lý người dùng hệ thống và quyền hạn của họ</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tên</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Vai Trò</TableHead>
              <TableHead>Hành Động</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Nguyễn Văn A</TableCell>
              <TableCell>nguyenvana@example.com</TableCell>
              <TableCell>Quản trị viên</TableCell>
              <TableCell>
                <Button variant='outline' size='sm'>
                  Sửa
                </Button>
                <Button variant='outline' size='sm' className='ml-2'>
                  Xóa
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Nguyễn Văn A</TableCell>
              <TableCell>nguyenvana@example.com</TableCell>
              <TableCell>Quản trị viên</TableCell>
              <TableCell>
                <Button variant='outline' size='sm'>
                  Sửa
                </Button>
                <Button variant='outline' size='sm' className='ml-2'>
                  Xóa
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
