import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "rounded-[9px] border border-[#D8E0E8] bg-[#FBFDFE] px-[13px] py-[11px] font-['IBM_Plex_Sans_JP'] text-sm focus:border-transparent focus:outline focus:outline-2 focus:outline-app-secondary",
        className
      )}
      {...props}
    />
  )
}

export { Input }
