'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { useState } from 'react'
import { Role } from '@/common/enums/users.enum'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getAllUsersInfo, updateUserRole } from '@/apis/admin.api'
import { IProfileResponse, IUpdateRoleBody } from '@/common/interfaces/users.interface'
import { useToast } from '@/hooks/use-toast'
import { ErrorResponse } from '@/common/interfaces/response.interface'

export default function UserTabContent() {
  // Hooks
  const { data } = useQuery({
    queryKey: ['admin-users'],
    queryFn: getAllUsersInfo
  })

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
              <TableHead>Số điện thoại</TableHead>
              <TableHead>Vai Trò</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
                <TableCell className='flex space-x-1'>
                  <SelectRole user={user} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

function SelectRole({ user }: { user: IProfileResponse }) {
  // States
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<Role>(user.role)
  const [tempValue, setTempValue] = useState<Role | null>(null)

  // Hooks
  const { toast } = useToast()
  const updateRoleMutation = useMutation({
    mutationFn: ({ id, body }: { id: string; body: IUpdateRoleBody }) => updateUserRole({ id, body }),
    onSuccess: (data) => {
      setValue(tempValue as Role)
    },
    onError: (error: ErrorResponse) => {
      toast({
        title: (error.response?.data?.message as string) || error.message,
        variant: 'destructive'
      })
    }
  })

  // Handlers
  const handleConfirmRole = () => {
    setOpen(false)
    // Handle update role
    updateRoleMutation.mutate({ id: user.id, body: { role: tempValue as Role } })
  }

  const handleCancelRole = () => {
    setOpen(false)
    setTempValue(null)
  }

  const handleSelectRole = (value: string) => {
    setOpen(true)
    setTempValue(Number(value) as Role)
  }

  return (
    <Select value={`${value}`} onValueChange={(value) => handleSelectRole(value)}>
      <SelectTrigger className='w-32'>
        <SelectValue placeholder='Vai trò' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={`${Role.Admin}`}>Quản trị viên</SelectItem>
        <SelectItem value={`${Role.Passenger}`}>Hành khách</SelectItem>
        <SelectItem value={`${Role.Driver}`}>Lái xe</SelectItem>
        <AlertDialog open={open}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Bạn chắc chắn muốn thay đổi?</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription>Hãy chắc chắn vai trò bạn muốn thay đổi phù hợp</AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={handleCancelRole}>Hủy</AlertDialogCancel>
              <AlertDialogAction onClick={handleConfirmRole}>Đồng ý</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SelectContent>
    </Select>
  )
}
