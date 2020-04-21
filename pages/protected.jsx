import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Router from 'next/router';

const ProtectedPage = ({...props}) => {
    return (
        <>
            <Head>
                <title>Protected Page</title>
            </Head>
            <h1>Protected</h1>
        </>
    );
};

export default ProtectedPage;