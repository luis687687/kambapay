

export default function LimitedArea({
    children, className
} : {
    children: React.ReactNode, className?: string

}){


    return (
        <div className={`w-full max-w-[1000px] m-auto  h-[100px] ${className} ` }>
            {children}
        </div>
    )
}