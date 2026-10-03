import { motion, useReducedMotion } from "framer-motion"
import type { HTMLMotionProps } from "framer-motion"
import type { ReactNode } from "react"

export function MotionReveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ hidden: {}, visible: { transition: { delayChildren: delay + 0.04, staggerChildren: reduce ? 0 : 0.06 } } }}
    >{children}</motion.div>
  )
}

export function MotionItem({ children, className = "", ...props }: HTMLMotionProps<"div">) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={reduce ? undefined : { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } }}
      {...props}
    >{children}</motion.div>
  )
}
