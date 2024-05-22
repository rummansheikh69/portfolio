import React, { useState } from 'react'
import { Items } from './Items'
import {AnimatePresence, motion} from 'framer-motion'


function Reviews() {
    const [selectedId, setSelectedId] = useState(null)
  return (
    <div className=' w-full h-screen bg-red-300'>
        {Items.map(item => (
            <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
                <motion.h5>{item.subtitle}</motion.h5>
                <motion.h2>{item.title}</motion.h2>
            </motion.div>
        ))}

        <AnimatePresence>
        {selectedId && (
            <motion.div layoutId={selectedId}>
            <motion.h5>{Items.subtitle}</motion.h5>
            <motion.h2>{Items.title}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)} />
            </motion.div>
        )}
        </AnimatePresence>
    </div>
  )
}

export default Reviews