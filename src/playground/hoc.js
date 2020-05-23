import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <h2>The info is: {props.Info}</h2>
    </div>
);

const withAuthMessage = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAUthentication ? (<WrappedComponent {...props}></WrappedComponent>) : 
            (<p>Please Login..</p>)}
        </div>
    );
};

const AuthInfo = withAuthMessage(Info);

ReactDom.render(<AuthInfo Info="Info from Props" isAUthentication={false} />, document.getElementById('container'));