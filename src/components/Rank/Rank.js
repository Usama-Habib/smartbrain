import React from 'react';
const Rank = ({name,count}) => {

	return (
		<div>
			<div className='white f3'>
				{`Hi, ${name} your current rank is ...`}
			</div>
			<div className='white f2'>
				{count}
			</div>
		</div>
	);
}

export default Rank;