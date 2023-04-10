import { PropsWithChildren } from 'react'
import { IBasicQueryItem } from "@hooks/useJoinQueriesResult"
import { Alert, Layout, Spin } from 'antd'

const StateWrapper = ({
    isLoading,
    isError,
    isSuccess,
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
                <div className='spin'>
                    <Spin size='large' tip={'Cargando...'} />
                </div>}
            {isSuccess && children}
        </>
    )
}

export default StateWrapper