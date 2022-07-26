import { useEffect } from 'react'
import axios from 'axios';

function usePost(url, data) {
    useEffect(()=>{
        axios.post(url, data, (err) => {
            if (err) console.log('Error writing file:', err);
        })
    },[url, data])
}

export default usePost