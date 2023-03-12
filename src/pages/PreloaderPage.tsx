import React, {useEffect} from 'react'
import ClockLoader from 'react-spinners/ClockLoader'
import { useAppDispatch, useAppSelector } from '../store'
import { fetchDataFromDummy } from '../store/dataSlice'
import { useNavigate } from "react-router-dom";


const PreloaderPage = () => {
    const navigate = useNavigate();
    const dispatch  = useAppDispatch()
    const loading = useAppSelector(state => state.data.loadingStatus)
    useEffect(() => {
        let fetchStatus = true;
        if (fetchStatus) {
            dispatch(fetchDataFromDummy())
        }
        return (() => {
            fetchStatus = false;
        })
    }, [])

    useEffect(() => {
        if (loading === 'success') {
            navigate("/home")
        }
    },[loading])
    
  return (
    <div className='w-full h-screen flex justify-center items-center my-auto'>
        <ClockLoader
            color={'#ff5035'}
            loading={true}
            // cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
        /> 
           
    </div>
  )
}

export default PreloaderPage