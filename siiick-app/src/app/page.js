import Image from "next/image";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



export default function Home() {
  return (
  <Container>
    <Box component="section" className="flex flex-col w-full py-16 min-h-96 place-items-center bg-hero-image bg-cover bg-bottom">
      <div className="backdrop-contrast-50 bg-white/40 backdrop-brightness-125 size-auto backdrop-blur-sm w-full p-16 text-center">
        <h1 className="font-black text-8xl drop-shadow-md">
          Skater Lyfe
        </h1>
        <p className="text-black font-semibold p-4 drop-shadow-md">Live that skater lyfe. Or die trying. New styles keeping you livin.</p>
        <button className="text-lg text-center rounded-full w-32 text-neutral-50 font-semi-bold bg-zinc-950 p-4 mt-4 hover:bg-zinc-700">Shop</button>
      </div>
    </Box>
  </Container>
  );
}
