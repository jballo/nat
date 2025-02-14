"use client";
import { Button } from '@/components/ui/button';
import { Dialog, DialogHeader, DialogTitle, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { Lobster } from 'next/font/google'
import Image from 'next/image';
 
// If loading a variable font, you don't need to specify the font weight
const inter = Lobster({ weight: '400',
  subsets: ['latin'], })

export default function Home() {

  return (
    <div className='flex flex-col w-full h-screen bg-red-900 p-2'>
      <div className="flex flex-col rounded-3xl justify-center items-center w-full h-screen bg-pink-300 border-red-900 border-large gap-12 p-4 sm:p-8">
        <div>
          <h1 className={`text-6xl text-center sm:text-8xl text-white flex gap-20 ${inter.className}`}>
            Message<br />
            for<br />
            Nat
          </h1>
        </div>
        <Dialog>
          <DialogTrigger asChild className=''>
            <Button className="bg-transparent p-2 sm:p-4 text-6xl sm:text-[64px] md:text-[124px] lg:text-[200px] hover:text-red-500"><p className='w-full'>💌</p></Button>
          </DialogTrigger>
          <DialogContent className='bg-pink-200 border-r-8 rounded-2xl max-w-md sm:max-w-lg w-10/12 h-auto'>
            <DialogHeader>
              <DialogTitle>
                <p className={`text-3xl sm:text-4xl ${inter.className}`}>Nat 😄</p>
              </DialogTitle>
            </DialogHeader>
            <p className={`text-base sm:text-xl ${inter.className}`}>Even though we’ve only just met, there’s something about you that feels special and familiar, like a song I’ve always enjoyed but only just heard. I’m glad our paths crossed, and I’d love to keep discovering the little things that make you, you. Happy Valentine’s Day filled with smiles, laughter, and maybe even a little bit of us.</p>
            <div className="relative w-full h-[60px] sm:h-1/2 border-white rounded-lg shadow-lg overflow-hidden mt-4">
              <Image src="/nat.jpg" alt="Nat" layout="fill" objectFit="cover" objectPosition="center 48%"/>
            </div>
          </DialogContent>
        </Dialog>
        <div>
          <h1 className={`text-3xl text-center sm:text-8xl text-white ${inter.className}`}>
            From:<br />
            Jonathan Ballona
          </h1>
        </div>
      </div>
    </div>

  );
}
