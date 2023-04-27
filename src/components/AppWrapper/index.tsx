import React from "react"
import { PropsWithChildren } from "react"
import { ContextProvider } from "@context/index"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"
import { I18nextProvider } from "react-i18next"
import i18n from "@config/i18n"

export const queryClient = new QueryClient()

const AppWrapper = ({ children }: PropsWithChildren) => {
    return (
        <ContextProvider>
            <QueryClientProvider client={queryClient}>
                <I18nextProvider i18n={i18n}>
                    <React.StrictMode>
                        <BrowserRouter>
                            {children}
                        </BrowserRouter>
                    </React.StrictMode>
                </I18nextProvider>
            </QueryClientProvider>
        </ContextProvider>
    )
}

export default AppWrapper