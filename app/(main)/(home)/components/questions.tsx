import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

export default function Questions() {
  return (
    <div className='mt-20'>
      <h2 className='text-4xl font-light tracking-wider'>Câu hỏi thường gặp:</h2>

      <Accordion type='single' collapsible className='w-full mt-8'>
        <AccordionItem value='item-1' className='border-b-gray-400 text-lg'>
          <AccordionTrigger>Làm thế nào để đặt vé xe trực tuyến tại Việt Nam?</AccordionTrigger>
          <AccordionContent>
            Đặt vé xe trực tuy ến tại Việt Nam thật tiện lợi với redBus. Chỉ cần làm theo các bước sau: đăng nhập vào
            trang web, chọn ngày đi, chọn nhà điều hành và tuyến đường bạn muốn, rồi tiến hành thanh toán.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2' className='border-b-gray-400 text-lg'>
          <AccordionTrigger>Các tuyến xe phổ biến ở Việt Nam là gì?</AccordionTrigger>
          <AccordionContent>
            Việt Nam tự hào có nhiều tuyến xe phổ biến, bao gồm Hà Nội đến Huế, Hà Nội đến Đà Nẵng, Đà Nẵng đến Thành
            phố Hồ Chí Minh, Thành phố Hồ Chí Minh đến Mũi Né, Huế đến Hội An, Thành phố Hồ Chí Minh đến Phan Thiết, Đà
            Nẵng đến Nha Trang, Hà Nội đến Sapa và Hà Nội đến Ninh Bình.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3' className='border-b-gray-400 text-lg'>
          <AccordionTrigger>Bạn nên ghé thăm những địa điểm du lịch nào ở Việt Nam?</AccordionTrigger>
          <AccordionContent>
            Việt Nam có nhiều địa điểm không thể bỏ qua như Vịnh Hạ Long, Ninh Bình, Đà Nẵng, Hạ Long, Huế, Hội An, Nha
            Trang, Thành phố Hồ Chí Minh và Sapa.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4' className='border-b-gray-400 text-lg'>
          <AccordionTrigger>Giá vé xe khách thông thường ở Việt Nam là bao nhiêu?</AccordionTrigger>
          <AccordionContent>
            Xe khách là phương tiện đi lại giá cả phải chăng ở Việt Nam. Chi phí vé xe khách trực tuyến của bạn ở Việt
            Nam có thể khác nhau tùy thuộc vào đại lý du lịch bạn chọn, nhà cung cấp dịch vụ xe khách đường dài, tuyến
            đường cụ thể và bất kỳ tiện nghi trên xe nào do công ty xe khách cung cấp
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
