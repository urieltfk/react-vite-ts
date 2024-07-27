import { useRouteError } from "react-router"

export default function ErrorPage() {
    const err = useRouteError();
    console.error(err);

    return (
        <div id="error-page">
            <p>The website has encountered an error.</p>
        </div>
    );
}