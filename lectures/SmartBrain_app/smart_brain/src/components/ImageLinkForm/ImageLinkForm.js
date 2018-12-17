import React from 'react'

const ImageLinkForm = ({onInputChange, onPictureSubmit}) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className='center'>
                <div className='center pa4 br3 shadow-5'>
                    {/* onChange mimics in React what input do HTML */ }
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button className='w-30 grow f4 link ph3 pv2 dib'
                    onClick={onPictureSubmit}>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm