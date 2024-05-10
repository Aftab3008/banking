"use client"
import CountUp from "react-countup"
import { formatAmount } from "@/lib/utils"

const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <div className="w-full">
      <CountUp 
      end={amount}
      decimal="."
      prefix="$"
      decimals={2}
      />
    </div>
  )
}

export default AnimatedCounter
// {formatAmount(totalCurrentBalance)}