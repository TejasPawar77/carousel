import { motion, useMotionValue } from "framer-motion"
import { data } from "./data"
import { useEffect, useRef, useState } from "react"

const Carousel = () => {
  const containerRef = useRef(null);
  const[currentIdx, setCurrentIdx] = useState(0);
  const[maxIndex, setMaxIndex] = useState(0);

  const cardWidth = 300;
  const gap = 16;
  const step = cardWidth + gap;

  useEffect(() => {
    const calculateMaxIndex = () => {
      if (containerRef.current) {
        
      }
    }
  })

  return (
    <motion.div>
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        My Carousel 
      </h2>

      <div className="overflow-hidden pb-4">
        <motion.div 
          className="flex gap-4 cursor-grab active:cursor-grabbing"
        >
          {data.map((data) => (
            <div
              key={data.id}
              className="w-75 shrink-0 bg-white border border-slate-100 rounded-2xl pp-4 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 select-none"
            >
              <div className="w-full h-40 rounded-xl overflow-hidden mb-4 bg-slate-100 relative pointer-events-none">
                <img src={data.image} alt={data.name} className="w-full h-full object-cover"/>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Carousel