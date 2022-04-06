import React from 'react'
import { Result, Button } from 'antd';
import Router from 'next/router';

const PageNotFound = () => {
    return (
        <div
            style={{ marginTop: '3rem' }}
        >
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Button
                        type="primary"
                        onClick={() => Router.replace('/')}
                    >
                        Back Home
                    </Button>
                }
            />
        </div>
    )
}

export default PageNotFound