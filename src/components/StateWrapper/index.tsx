import { PropsWithChildren } from 'react'
import { IBasicQueryItem } from "../../hooks/useJoinQueriesResult"
import { Alert, Layout, Spin } from 'antd'

const StateWrapper = ({
    isLoading,
    isError,
    isSuccess,
    isIdle,
    children
}: PropsWithChildren<IBasicQueryItem<any>>) => {
    return (
        <>
            {isError &&
                <Layout>
                    <Alert
                        message="Error"
                        description="This was an error while fetching data."
                        type="error"
                        showIcon
                    />
                </Layout>

            }
            {isLoading &&
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Spin size='large' tip={'Cargando...'} />
                </div>}
            {isSuccess && children}
        </>
    )
}

export default StateWrapper