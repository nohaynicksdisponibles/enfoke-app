import React from "react"
import { PropsWithChildren } from "react"
import { ContextProvider } from "@context/index"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"

export const queryClient = new QueryClient()

const AppWrapper = ({ children }: PropsWithChildren) => {
    return (
        <ContextProvider>
            <QueryClientProvider client={queryClient}>
                <React.StrictMode>
                    <BrowserRouter>
                        {children}
                    </BrowserRouter>
                </React.StrictMode>
            </QueryClientProvider>
        </ContextProvider>
    )
}

export default AppWrapper