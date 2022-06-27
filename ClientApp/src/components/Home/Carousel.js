import React, { useState } from 'react'
import imgTalmer from '../../img/talmer.png'
import imgIntegr from '../../img/integr.png'
import imgBsl from '../../img/bsl.png'
import imgIml from '../../img/iml.png'
import imgLanit from '../../img/lanit.png'
import imgNewlabs from '../../img/newlabs.png'
import imgRenaissance from '../../img/renaissance.png'
import imgZelsoft from '../../img/zelsoft.png'
import imgVoicelink from '../../img/voicelink.png'
import imgRusgidro from '../../img/rusgidro.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import imgNext from '../../img/next.png'
import imgPrev from '../../img/prev.png'

import Slider from 'react-slick'

function Carousel() {
	const customeSlider = React.createRef()

	const [sliderSettings, setSliderSettings] = useState({
		dots: false,
		infinite: true,
		speed: 2000,
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplay: true,
		cssEase: 'linear',
		arrows: false,
	})

	const gotoNext = () => {
		customeSlider.current.slickNext()
	}

	const gotoPrev = () => {
		customeSlider.current.slickPrev()
	}

	return (
		<div className='wrapper-carousel'>
			<button className='btnPrev' onClick={() => gotoPrev()}>
				Previous
			</button>
			<Slider {...sliderSettings} ref={customeSlider}>
				<div>
					<img src={imgBsl} alt='' />
				</div>
				<div>
					<img src={imgIml} alt='' />
				</div>
				<div>
					<img src={imgIntegr} alt='' />
				</div>
				<div>
					<img src={imgLanit} alt='' />
				</div>
				<div>
					<img src={imgNewlabs} alt='' />
				</div>
				<div>
					<img src={imgRenaissance} alt='' />
				</div>
				<div>
					<img src={imgRusgidro} alt='' />
				</div>
				<div>
					<img src={imgTalmer} alt='' />
				</div>
				<div>
					<img src={imgVoicelink} alt='' />
				</div>
				<div>
					<img src={imgZelsoft} alt='' />
				</div>
			</Slider>
			<a>
				<img src={imgNext} className='btnNext' onClick={() => gotoNext()} />
			</a>
		</div>
	)
}

export default Carousel
