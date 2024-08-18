import { Button } from '@/components/ui/button'
import BusSearch from '../components/bus-search'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='container'>
      <div className='relative h-[520px]'>
        <h1 className='text-4xl text-secondary font-bold text-white absolute top-1/4 left-1/2 translate-x-[-50%] -translate-y-full'>
          Mua vé xe khách trực tuyến
        </h1>
        <BusSearch />

        <div className='w-full absolute bottom-0 translate-y-[50%] rounded-2xl bg-primary-foreground p-8 shadow-lg'>
          <div className='flex justify-between'>
            <h2 className='text-2xl uppercase font-semibold'>Ưu đãi đang hot</h2>
            <Button
              variant='outline'
              className='text-lg rounded-full px-6 py-3 text-primary border-primary hover:text-primary-foreground hover:bg-red-500'
            >
              Xem tất cả
            </Button>
          </div>

          <div className='mt-7 flex gap-6'>
            <Link href='' className='h-[168px] w-[20.3rem] rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600'>
              <div className='p-4 flex h-full w-full space-x-4'>
                <img
                  src='https://st.redbus.in/Images/Offer180x80.png'
                  alt=''
                  className='w-[4.5rem] h-[4.5rem] self-center'
                />
                <div className='flex flex-col gap-2'>
                  <span className='max-w-fit text-xs text-primary-foreground px-2 py-1 rounded-full bg-black bg-opacity-20'>
                    Vé xe
                  </span>

                  <h3 className='text-lg text-white font-semibold'>Tiết kiệm lên đến 25% cho đặt phòng</h3>

                  <span className='text-xs text-white'>Hiệu lực đến 30 Th9</span>
                </div>
              </div>
            </Link>
            <Link href='' className='h-[168px] w-[20.3rem] rounded-xl bg-gradient-to-r from-blue-800 to-emerald-500'>
              <div className='p-4 flex h-full w-full space-x-4'>
                <img
                  src='https://st.redbus.in/Images/GIAMGIAofferimage.png'
                  alt=''
                  className='w-[4.5rem] h-[4.5rem] self-center'
                />
                <div className='flex flex-col gap-2'>
                  <span className='max-w-fit text-xs text-primary-foreground px-2 py-1 rounded-full bg-black bg-opacity-20'>
                    Vé xe
                  </span>

                  <h3 className='text-lg text-white font-semibold'>Tiết kiệm lên đến 15%</h3>

                  <span className='text-xs text-white'>Hiệu lực đến 30 Th9</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='mt-60'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, unde provident molestiae quam quibusdam,
        perferendis ab asperiores magni deleniti voluptates reiciendis in dolor quod dolore labore officiis soluta,
        pariatur aspernatur? Quas animi perspiciatis impedit recusandae quo temporibus porro quasi praesentium,
        accusamus tenetur, in accusantium assumenda nisi vel ducimus deserunt enim inventore provident ut cupiditate
        obcaecati! Quod perspiciatis beatae at saepe. Nam aliquid saepe sunt voluptatibus, fugiat dolores repellat
        iusto. Veniam dolorem tempore assumenda, vel vero sequi sed debitis ratione repellat sint veritatis voluptate
        voluptates deleniti quos earum omnis fugit velit? Nisi enim at cum repudiandae dolore iste nostrum architecto
        maxime deleniti corporis quidem reprehenderit accusamus velit aspernatur, ad ullam? Pariatur atque maiores rerum
        natus modi neque minus iure dolores blanditiis. Libero voluptas incidunt maiores laboriosam error, rem placeat
        quidem molestias veritatis vel doloribus nostrum non est unde quisquam ratione vitae veniam minus! Sunt quos
        delectus culpa iste, enim nam neque. Quas, placeat illo perspiciatis maiores impedit praesentium vero eos
        dignissimos perferendis autem! Similique tenetur provident adipisci ipsum temporibus laudantium consequatur, in
        iste eveniet eum nihil, magni quam quis, architecto quasi? Temporibus amet dolore architecto laboriosam eos
        eligendi, labore ea fugiat vel numquam aliquam alias quasi dicta a quisquam accusamus ad incidunt repellat.
        Aliquid libero quae accusamus labore dicta voluptas maxime. Voluptatem incidunt ipsum veniam quod accusantium
        dolorem illum, similique quasi fugit voluptatum alias harum impedit sapiente quam, in laboriosam facere omnis
        eos commodi ab molestias sunt non. Inventore, sit maxime? Accusamus ad magni fugit architecto, repudiandae ullam
        aperiam libero dicta voluptates nostrum atque corrupti eos reiciendis odit excepturi sint consequuntur voluptas
        ipsum enim temporibus eligendi laborum. Voluptates maiores reprehenderit quo! Iste fugiat tempore, nesciunt
        commodi animi quisquam a deserunt, veniam sit maiores tenetur ab obcaecati dolores, libero ipsam saepe officia?
        Porro dicta omnis rerum doloribus ipsa blanditiis illo nesciunt eligendi! Reprehenderit iusto atque esse libero
        distinctio quisquam similique exercitationem deserunt excepturi sapiente suscipit veniam tenetur hic, minima
        voluptatibus repellendus praesentium, facere dolor itaque saepe! Eligendi ab deleniti voluptatibus quae autem.
        Maxime adipisci nulla odio deserunt aut, numquam aperiam. Aut aliquid hic sequi beatae earum velit maiores error
        quisquam, dolor laudantium sunt, exercitationem sit repudiandae consequatur magni! Molestias quia neque
        suscipit. Maxime delectus odio fuga reiciendis, ratione eum? Beatae quibusdam, facere cum totam excepturi
        repellendus tenetur cupiditate ad hic aspernatur eius dolores accusantium architecto, magni quidem nobis. Facere
        itaque doloribus mollitia! Obcaecati repellat quasi asperiores, vel facilis dolorem commodi nam expedita
        dignissimos? Iusto, nisi doloribus magnam esse doloremque fugit impedit similique fugiat, ratione, praesentium
        odit! Sint sit sequi obcaecati totam veritatis. Consequuntur debitis repudiandae id sunt a recusandae placeat
        totam natus alias unde ratione in, eligendi nulla at numquam repellat. Omnis accusantium ducimus nemo, quaerat
        quibusdam reiciendis iste! Eos, inventore id? Nesciunt iure deserunt neque quia ullam architecto unde laborum
        officiis adipisci, beatae impedit illum autem. Dolorem cum sunt nostrum tenetur possimus autem consectetur
        illum, necessitatibus itaque consequuntur doloribus omnis atque. Mollitia soluta atque inventore provident
        rerum, qui eveniet nobis sunt consequatur sequi fugiat, repudiandae, nulla excepturi exercitationem autem rem
        nisi ipsam perspiciatis delectus optio? Rem nihil sapiente eius modi atque? Eveniet provident magni explicabo
        dignissimos vel necessitatibus autem laborum, tempora odit laudantium natus aperiam ut. Accusamus inventore, ut
        nulla architecto culpa ratione molestias error nesciunt delectus, adipisci ipsam, debitis natus? In voluptatem,
        blanditiis accusamus molestias provident adipisci atque hic voluptas nobis a nulla reprehenderit vitae aliquid
        magni alias neque. Amet tempore modi alias, deleniti tenetur aspernatur. Voluptate eveniet magni earum! Debitis
        labore laudantium ipsam sapiente dolorum optio dolore, aliquam atque neque expedita, deserunt libero? Eum
        tempore nemo dolor similique itaque vero aperiam fuga iure, dignissimos sint sunt, modi adipisci dolorem?
      </div>
    </main>
  )
}
