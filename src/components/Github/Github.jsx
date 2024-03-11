import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([]) // passing empty obj to avoid crash in case data is not found

    // useEffect(() => {
    //     fetch('https://api.github.com/users/KStar-coder')
    //         .then(response => response.json()) // converting the response to JSON
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Followers : {data.followers}

            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/KStar-coder')
    return response.json()
}