import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        console.log(token);
        const email = user?.user?.email;
        const currentUser = {email: email};
        if(email){
            fetch(`http://localhost:5000/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            } )
            .then(res => res.json())
            .then(data => {
                // setToken(token);
                console.log(data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }

    },[user]);
    return [token];
}
export default useToken;