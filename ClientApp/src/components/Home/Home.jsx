import React, { Component } from 'react'
import video from '../../img/video.mp4'
import '../Home/HomeStyle.scss'
import devImage from '../../img/develop.svg'
import supportImage from '../../img/support.svg'
import recruitImage from '../../img/reqruit.svg'
import consaltImage from '../../img/consalt.svg'
import solutionImage from '../../img/solutions.svg'
import educationImage from '../../img/education.svg'
import prepareImage from '../../img/prepare.svg'
import researchImage from '../../img/research.svg'
import planImage from '../../img/plan.svg'
import implementImage from '../../img/inject.svg'
import supporthowImage from '../../img/support_howdo.svg'
import stagesImage from '../../img/stages.svg'
import Carousel from '../Home/Carousel.js'

export class Home extends Component {
	static displayName = Home.name
	render() {
		return (
			<div className='homestyle'>
				<div className='videoContainer'>
					<video className='video' autoPlay muted loop>
						<source src={video} type='video/mp4' />
					</video>
					<div className='bannertext'>
						<div className='container'>
							<h1>
								Разработка программного обеспечения и информационных систем
							</h1>
							<div className='description'>
								Комплексный сервис для корпоративных клиентов
							</div>
							<a href='#' className='btnOrder'>
								Заказать проект
							</a>
						</div>
					</div>
				</div>
				<div className='container'>
					<h1>Что мы делаем</h1>
					<div className='infBlock'>
						<div className='serv'>
							<img src={devImage} alt='' className='serv_img' />
							<h2>Разработка ПО</h2>
							<div className='descr'>Разработка программного обеспечения</div>
						</div>
						<div className='serv'>
							<img src={supportImage} alt='' className='serv_img' />
							<h2>ИТ поддержка</h2>
							<div className='descr'>
								Техническая поддержка существующих решений
							</div>
						</div>
						<div className='serv'>
							<img src={recruitImage} alt='' className='serv_img' />
							<h2>ИТ рекрутинг</h2>
							<div className='descr'>Подбор ИТ специалиста</div>
						</div>
						<div className='serv'>
							<img src={consaltImage} alt='' className='serv_img' />
							<h2>ИТ консалтинг</h2>
							<div className='descr'>
								Разработка ИТ-стратегии предприятия, внедрение ITSM и систем
								управления проектами
							</div>
						</div>
						<div className='serv'>
							<img src={solutionImage} alt='' className='serv_img' />
							<h2>Решения</h2>
							<div className='descr'>Готовые продукты для бизнеса</div>
						</div>
						<div className='serv'>
							<img src={educationImage} alt='' className='serv_img' />
							<h2>Обучение</h2>
							<div className='descr'>Курсы по программированию</div>
						</div>
					</div>
				</div>
				<div className='worker'>
					<div className='container'>
						<h1>Как мы работаем</h1>
						<div className='feature_step'>
							<img height='1500px' className='stImage' src={stagesImage} />

							<div>
								<div>
									<h2>ПОДГОТОВКА</h2>
									<div>Встречаемся. Обсуждаем цели и задачи проекта.</div>
								</div>
							</div>
							<div>
								<div>
									<img src={prepareImage} alt='Подготовка' />
								</div>
							</div>
						</div>
						<div className='feature_step'>
							<div>
								<div>
									<img src={researchImage} alt='Исследования' />
								</div>
							</div>
							<div>
								<div>
									<h2>ИССЛЕДОВАНИЯ</h2>
									<div>Анализируем. Готовим прототипы.</div>
								</div>
							</div>
						</div>
						<div className='feature_step'>
							<div>
								<div>
									<h2>ПЛАНИРОВАНИЕ И РАЗРАБОТКА</h2>
									<div>Реализация проекта по календарному плану проекта.</div>
								</div>
							</div>
							<div>
								<div>
									<img src={planImage} alt='Планирование и разработка' />
								</div>
							</div>
						</div>
						<div className='feature_step'>
							<div>
								<div>
									<img src={implementImage} alt='Внедрение' />
								</div>
							</div>
							<div>
								<div>
									<h2>ВНЕДРЕНИЕ</h2>
									<div className='desc'>Запуск проекта в эксплуатацию.</div>
								</div>
							</div>
						</div>
						<div className='feature_step'>
							<div>
								<div>
									<h2>ПОДДЕРЖКА И РАЗВИТИЕ</h2>
									<div>Организуем техническую и информационную поддержку.</div>
								</div>
							</div>
							<div>
								<div>
									<img src={supporthowImage} alt='Поддержка и развитие' />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='container'>
					<h1>Нам доверяют</h1>
					<br />
					<br />
					<Carousel />
					<br />
					<br />
				</div>

				<div className='worker'>
					<div className='container'>
						<h1>Контакты</h1>
						<div>
							<h2>Где мы находимся</h2>
							<div>г.Киров ул.Урицкого 24</div>
							<h2>Как с нами связаться:</h2>
							<div>
								+7(8332)21-72-78
								<br />
								<a href='mailto:office@itwebnet.ru'>office@itwebnet.ru</a>
							</div>
						</div>
						<div></div>
					</div>
				</div>
			</div>
		)
	}
}
