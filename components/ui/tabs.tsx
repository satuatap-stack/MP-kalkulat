"use client"
import * as React from 'react'
import clsx from 'clsx'
const Ctx=React.createContext<any>(null)
export function Tabs({defaultValue,children,className}:any){const [value,setValue]=React.useState(defaultValue);return <Ctx.Provider value={{value,setValue}}><div className={className}>{children}</div></Ctx.Provider>}
export function TabsList({children,className}:any){return <div className={className}>{children}</div>}
export function TabsTrigger({value,className,children}:any){const ctx=React.useContext(Ctx);const active=ctx.value===value;return <button onClick={()=>ctx.setValue(value)} className={clsx(className,active&&'font-semibold')}>{children}</button>}
export function TabsContent({value,children,className}:any){const ctx=React.useContext(Ctx);return ctx.value===value?<div className={className}>{children}</div>:null}
