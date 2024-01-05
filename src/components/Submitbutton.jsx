import React from 'react';
import { useNavigation } from 'react-router-dom';

const Submitbutton = ({label}) => {
    const navigation = useNavigation();
    const isSubmitting  = navigation.state ==="submitting";
  return (
    <div>
        <button type='submit' className='btn btn-primary btn-block my-2' disabled={isSubmitting} >
            {isSubmitting?React(
                <>
                    <span className='loading loading-spinner'>Sending</span>
                </>
            ):(
                label || "submit"
            )}
        </button>
    </div>
  )
}

export default Submitbutton;