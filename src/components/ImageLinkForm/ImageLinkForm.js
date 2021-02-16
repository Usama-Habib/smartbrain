import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonPress}) => {
	return(
			<div>
				<p className='f4'>
					{'This magic brain will detect face. Lets give it a try.'}
				</p>
				<div className='center'>
					<div className='pa3 br3 shadow-4 center form'>
						<input onChange={onInputChange} className='pa2 f4 w-70 center' type='text' />
						<button onClick={onButtonPress} className='w-30 pa2 f4 grow link white bg-light-purple'>Detect</button>
					</div>
				</div>
			</div>
		);
}

export default ImageLinkForm;