import {React,useRef} from 'react';
import Card from './Card';

const Foreground = () => {
  const ref=useRef(null);
  const data=[
    {
      desc:"This is the file Name",
      size:"0.4",
      close:true,
      tag : {isOpen:true, tagtitle:"Download", color:"bg-green-400"}
    },
    {
      desc:"This is the file Name",
      size:"0.4",
      close:false,
      tag : {isOpen:true, tagtitle:"Download", color:"bg-green-400"}
    },
    {
      desc:"This is the file Name",
      size:"0.4",
      close:false,
      tag : {isOpen:false, tagtitle:"Download", color:"bg-blue-500"}
    }
  ]

  
  return (
    <div className="fixed top-0 left-0 z-[3] w-full h-full bg-zinc-900/85 p-4 flex flex-wrap gap-8" ref={ref}>
        <Card data={data} refer={ref}/>
          
    </div>
  );
};

export default Foreground;
