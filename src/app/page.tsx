import Image from 'next/image'
import logo from '@/img/Logo.png'
import img from '@/img/img1.png'


export default function Home() {
  return (
     <main className="bg-pink-700 flex flex-col max-h-screen h-screen">
      <Image src={img} alt="cover" width={200}/>
        <div className="p-4 mt-16 flex-1 flex flex-col justify-between"> 
        <Image src={logo} width={180}/>
        <div className="flex flex-col gap-4">
      <h1 className="text-2xl text-white font-bold">
        Receba notícias<br/>
          atualizadas sobre o<br/> 
          MERCADO DE TECNOLOGIA
          </h1>
          <button className='bg-zinc-800 focus:bg-pink-800 text-white rounded-lg w-full p-4'>Inscreva-Se</button>
          </div>
      </div>
     </main>
  )
}
