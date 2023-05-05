import { useState, useEffect } from 'react'
import axios from 'axios'
import LightChart from './Chart/LightChart'
// 조도 센서
export default function LightComponent(props) {
	const [currentLight, setCurrentLight] = useState(null)
	const [yesterdayLight, setYesterdayLight] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data: dashboardData } = await axios.get(
					`${process.env.NEXT_PUBLIC_DEV_API_ROOT}/dashboard`
				)

				// 1. 최신순 정렬
				const sortedDashboardData = dashboardData.sort((a, b) => {
					return a.created_at < b.created_at ? 1 : -1
				})

				// 2. 최신순 정렬했을 때 가장 최근 light 정보 가져오기
				setCurrentLight(sortedDashboardData[0].light)
				setYesterdayLight(sortedDashboardData[1].light)
			} catch (err) {
				console.log('🚨조도센서에러발생')
			}
		}

		// const intervalId = setInterval(() => {
		//   fetchData();
		// }, 1000 * 60 * 5); // 5분마다 데이터 fetch
		// return () => clearInterval(intervalId);

		fetchData()
	}, [])

	return (
		<div>
			{currentLight === null || yesterdayLight === null ? (
				<div>Loading...</div>
			) : (
				<>
					<LightChart
						yesterdayLight={yesterdayLight}
						currentLight={currentLight}
					/>
					<p>{currentLight}</p>
				</>
			)}
			<h3>조도</h3>
		</div>
	)
}
