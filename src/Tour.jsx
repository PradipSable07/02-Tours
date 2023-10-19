import React, { useState } from "react";

const Tour = ({ id, image, name, info, price, removeTours }) => {
	const [readMore, setReadMore] = useState(false);
	// console.log(info.substring(0, 50));
	return (
		<article className=' bg-white rounded-lg shadow relative hover:shadow-xl transition-[3s]'>
			<img
				src={image}
				alt={name}
				className='h-[20rem] w-full object-cover rounded-t-lg   '
			/>
			<span className='tour-price absolute top-0 right-0 p-[0.5] text-white tracking-[2px]'>
				${price}
			</span>
			<div className='px-8 py-[1.5rem]'>
				<h5 className='text-xl mb-4 font-[500] leading-normal text-center '>
					{name}
				</h5>
				<p className='leading-normal text-gray-500 mb-5'>
					{readMore ? info : `${info.substring(0, 170)}...`}
					<button
						type='button'
						className='text-[#10b981] bg-transparent border-transparent cursor-pointer'
						onClick={() => setReadMore(!readMore)}>
						{readMore ? " Show Less" : " Read More"}
					</button>
				</p>
				<button
					onClick={() => removeTours(id)}
					className='px-4 py-2 w-full text-[#10b981] bg-transparent border-transparent cursor-pointer border-2 rounded-md border-solid  border-[#10b981] hover:bg-[#10b981] hover:text-white hover:border-500 transition-all'>
					Not Interested
				</button>
			</div>
		</article>
	);
};

export default Tour;
