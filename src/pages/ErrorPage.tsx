import { useRouteError } from "react-router"

const ErrorPage = () => {
    const err = useRouteError();
    console.error(err);

    return (
        <div id="error-page">
            <p>The website has encountered an error.</p>
        </div>
    );
}

export {ErrorPage};