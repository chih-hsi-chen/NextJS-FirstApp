import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Router from 'next/router';

const LoginPage = dynamic( () => import('./login') );

const ProtectedPage = ({loggedIn, initialUser, ...props}) => {
    useEffect(() => {
        if(loggedIn) return;
        Router.replace('/protected', '/login', { shallow: true });

    }, [loggedIn]);

    if(!loggedIn) return <LoginPage />;

    return (
        <>
            <Head>
                <title>Protected Page</title>
            </Head>
            <h1>Protected</h1>
            <h2>{initialUser}</h2>
        </>
    );
};

export async function getServerSideProps(context) {
	const {user} = context.req;
	
    if(!user) return {
        props: {
            loggedIn: false,
            initialUser: null, 
        }
    };

    // Pass data to the page via props
    return {
        props: {
            loggedIn: true,
            initialUser: user.username, 
        }
    };
}

export default ProtectedPage;