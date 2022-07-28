import React from "react";

function Success() {

    async function timeout() {

        setTimeout(() => {
            window.location.assign('/');
        }, 3000)
    };

    timeout();

    return (
        <div>
                <h1>Success!</h1>
                <h2>
                    Thank you for your generous donation!
                </h2>
                <h2>
                    You will now be redirected to the homepage
                </h2>
        </div>
    )
};

export default Success;