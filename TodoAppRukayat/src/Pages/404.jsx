import "../Styles/404.css";

const FourOhFour = () => {
	return (
		<div className='mainbox'>
			<div className='err'>4</div>
			<div className='far'>0</div>
			<div className='err2'>4</div>
			<div className='msg'>
				Maybe this page moved? Got deleted? Is hiding out in quarantine?
				Never existed in the first place?
				<p>
					Let's go <a href='/home'>home</a> and try from there.
				</p>
			</div>
		</div>
	);
};


export default FourOhFour;