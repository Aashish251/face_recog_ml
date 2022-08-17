import React from 'react';
import './ImageLinkForm.css';
import Tilt from 'react-tilt';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return(
        <div>
            <p className='f3 grow'>
                {"This magic brain will detect faces in your pictures. Give it a try."}
            </p>
            <div className='center formContainer'>
                <Tilt className="Tilt br2 shadow-2" options={{ max : 15 }} >
                    <div className='form center pa4 br3 shadow-5'>
                        <input type='text' 
                            className='f4 pa2 w-70 center' 
                            onChange={onInputChange}
                        />
                        <button 
                            className='f4 w-30 grow link ph3 pb2 dib white bg-light-purple' 
                            onClick={onButtonSubmit}
                        >Detect</button>
                    </div>
                </Tilt>
            </div>
        </div>
        
    );
}

export default ImageLinkForm; 