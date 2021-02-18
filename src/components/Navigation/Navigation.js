import React from 'react';


const Navigation = ({onRouteChange, isSignedIn}) => {
			if (isSignedIn) {
				return (
					<nav style={{display:'flex', justifyContent: 'flex-end'}}>
						<p onClick={() => onRouteChange('signout')} className=' white f3 pa3 pointer underline link hover-red dim'>Sign Out</p>
					</nav>
				);
			}else{
				return (
					<nav style={{display:'flex', justifyContent: 'flex-end'}}>
						<p onClick={() => onRouteChange('signin')} className=' white f3 pa3 pointer underline link hover-red dim'>Sign In</p>
						<p onClick={() => onRouteChange('signout')} className=' white f3 pa3 pointer underline link hover-red dim'>Sign Out</p>
					</nav>
				);	
			}
}

export default Navigation;