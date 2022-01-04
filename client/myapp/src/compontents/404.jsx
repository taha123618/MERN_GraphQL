import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <>
            <div className="center">
                <h2>404 Not Found</h2>
                <iframe src="https://giphy.com/embed/3h2AeAOj83j7slRkyW"
                    width="374"
                    height="480"
                    frameBorder="0"
                    class="giphy-embed"
                    allowFullScreen ></iframe>
                    <br />
                    <Link to='/'>
                    <button className="btn #673ab7 deep-purple"> Go Back</button>
                    </Link>

            </div>
        </>
    )
}

export default ErrorPage
