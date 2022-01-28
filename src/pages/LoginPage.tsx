import React from 'react';

export const LoginPage = () => {
    let from = "/";

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let username = formData.get("username") as string;
        console.log(username);
    }

    return (
        <div>
            <p>You must log in to view the page at {from}</p>

            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input name="username" type="text"/>
                </label>{" "}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
