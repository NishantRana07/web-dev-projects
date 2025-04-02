import { FaFileCode, FaDownload} from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { motion } from "motion/react"; 

const Card = ({data,refer}) => {
  return (
    <>
    {data.map((item,index)=>(
    <motion.div drag dragConstraints={refer} className="relative h-48 w-40 bg-zinc-900 rounded-[20px] text-white flex flex-col justify-between gap-y-4 p-4 felx-wrap">
      <FaFileCode className="text-lg" />
      <p className="text-left mb-18 text-sm leading-tight">{item.desc}</p>
      <div className="absolute bottom-0 left-0 w-full flex justify-between items-center p-2 px-4 mb-11">
        <p className="text-[15px]">{item.size + "mb"}</p>
        <span className='rounded-xl bg-zinc-500 overflow-hidden p-[3px]'>{item.close ? <FaDownload className="text-[13px]"/> : <FiX className="text-[13px]"/>}</span>
      </div> 
      {item.tag.isOpen && <div className={`absolute bottom-0 left-0 w-full flex justify-between p-2 ${item.tag.color} text-lg rounded-b-[20px]`}>
        <p align="center" className='text-center w-full'>{item.tag.tagtitle}</p>
      </div> }
    </motion.div>
  ))}
  </>
  );
};

export default Card;
