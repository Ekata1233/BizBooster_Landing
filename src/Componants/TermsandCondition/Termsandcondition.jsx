import React from 'react'
import Hero from "../../assets/business-success-1.png";
import { Container } from 'react-bootstrap';
import { motion } from "framer-motion";
function Termsandcondition() {
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
    <div className="position-relative">
           <motion.img
             src={Hero}
             className="w-100"
             alt="Hero"
             style={{ height: "200px" }}
             initial="hidden"
             whileInView="visible"
             variants={scrollVariants}
             transition={{ duration: 1 }}
             viewport={{ once: false }}
           />
           <div className="position-absolute top-0 start-0 w-100 h-100 custom-shadow d-flex justify-content-center align-items-center">
           </div>
         </div>
         <Container>
         <motion.h1  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='blue fw-bold text-center py-5'>Terms & Comditions...</motion.h1>
           <div>
           <motion.div  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='mb-5'>
               <motion.p  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='fw-bold text'>Disclaimer:</motion.p>
               <motion.p  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='text text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint impedit aspernatur perferendis quia, rem omnis corrupti sed odit repellat dolore quasi nihil quam quo officiis aliquid, facilis amet aperiam voluptate quas, repudiandae voluptatum non mollitia beatae. Ut ipsam porro corrupti veniam maxime, tempore quis illo earum alias deserunt minus ad.</motion.p>
              
           </motion.div>
           <motion.div  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='mb-5'>
               <motion.p  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='fw-bold text'>Quality Policy:</motion.p>
               <motion.p  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='text text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint impedit aspernatur perferendis quia, rem omnis corrupti sed odit repellat dolore quasi nihil quam quo officiis aliquid, facilis amet aperiam voluptate quas, repudiandae voluptatum non mollitia beatae. Ut ipsam porro corrupti veniam maxime, tempore quis illo earum alias deserunt minus ad.</motion.p>
              
           </motion.div>
           <motion.div  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='mb-5'>
               <motion.p  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='fw-bold text'>Information Collection:</motion.p>
               <motion.p  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='text text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint impedit aspernatur perferendis quia, rem omnis corrupti sed odit repellat dolore quasi nihil quam quo officiis aliquid, facilis amet aperiam voluptate quas, repudiandae voluptatum non mollitia beatae. Ut ipsam porro corrupti veniam maxime, tempore quis illo earum alias deserunt minus ad.</motion.p>
               
           </motion.div>
           <motion.div  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='mb-5'>
               <motion.p  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='fw-bold text'>How Information is used:</motion.p>
               <motion.p  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='text text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint impedit aspernatur perferendis quia, rem omnis corrupti sed odit repellat dolore quasi nihil quam quo officiis aliquid, facilis amet aperiam voluptate quas, repudiandae voluptatum non mollitia beatae. Ut ipsam porro corrupti veniam maxime, tempore quis illo earum alias deserunt minus ad.</motion.p>
               
           </motion.div>
           <motion.div  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='mb-5'>
               <motion.p  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='fw-bold text'>Data Sharing:</motion.p>
               <motion.p  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint impedit aspernatur perferendis quia, rem omnis corrupti sed odit repellat dolore quasi nihil quam quo officiis aliquid, facilis amet aperiam voluptate quas, repudiandae voluptatum non mollitia beatae. Ut ipsam porro corrupti veniam maxime, tempore quis illo earum alias deserunt minus ad.</motion.p>
               
           </motion.div>
           <motion.div  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='mb-5'>
               <motion.p  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='fw-bold text'>Protecting Your Information:</motion.p>
               <motion.p  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='text text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint impedit aspernatur perferendis quia, rem omnis corrupti sed odit repellat dolore quasi nihil quam quo officiis aliquid, facilis amet aperiam voluptate quas, repudiandae voluptatum non mollitia beatae. Ut ipsam porro corrupti veniam maxime, tempore quis illo earum alias deserunt minus ad.</motion.p>
               
           </motion.div>
           <motion.div  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='mb-5'>
               <motion.p  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='fw-bold text'>Privacy in Personal Images and Financial Services:</motion.p>
               <motion.p  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='text text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint impedit aspernatur perferendis quia, rem omnis corrupti sed odit repellat dolore quasi nihil quam quo officiis aliquid, facilis amet aperiam voluptate quas, repudiandae voluptatum non mollitia beatae. Ut ipsam porro corrupti veniam maxime, tempore quis illo earum alias deserunt minus ad.</motion.p>
               
           </motion.div>
           <motion.div  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='mb-5'>
               <motion.p  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='fw-bold text'>Online Safety Tips:</motion.p>
               <motion.p  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='text text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint impedit aspernatur perferendis quia, rem omnis corrupti sed odit repellat dolore quasi nihil quam quo officiis aliquid, facilis amet aperiam voluptate quas, repudiandae voluptatum non mollitia beatae. Ut ipsam porro corrupti veniam maxime, tempore quis illo earum alias deserunt minus ad.</motion.p>
               
           </motion.div>
           <motion.div  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='mb-5'>
               <motion.p  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='fw-bold text'>Policy Review and Your Consent:</motion.p>
               <motion.p  initial="hidden"
            whileInView="visible"
            variants={scrollVariants}
            transition={{ duration: 1 }}
            viewport={{ once: false }} className='text text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint impedit aspernatur perferendis quia, rem omnis corrupti sed odit repellat dolore quasi nihil quam quo officiis aliquid, facilis amet aperiam voluptate quas, repudiandae voluptatum non mollitia beatae. Ut ipsam porro corrupti veniam maxime, tempore quis illo earum alias deserunt minus ad.</motion.p>
               
           </motion.div>
           </div>
         </Container>
</div>
  )
}

export default Termsandcondition