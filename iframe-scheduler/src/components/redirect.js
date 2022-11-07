import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Redirect() {

    const [searchParams] = useSearchParams();

    useEffect(() => {
        const data = Object.fromEntries([...searchParams])

        if(data){
            window.parent.postMessage(data, 'http://localhost:3000/meetingdetails');
        }
    }, [searchParams]);

    return <p>You made it to the redirect</p>;
}