import { ComponentProps } from "react";
import NextLink from 'next/link'
import { cn } from '@/app/lib/utils'

type LinkProps = ComponentProps<typeof NextLink>;

export const Link = ({ className, children, ...props }: LinkProps) => {
    return (
        <NextLink className={cn(
            'flex items-center gap2 text-gray-300 text-sm hover:text-sky-500 transition-colors',
            className
        )} {...props}>
            {children}
        </NextLink>
    )
}