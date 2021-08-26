import React, { useEffect, useRef } from 'react'
import { useUserQuery } from '../generated/graphql'

interface indexProps {}

const index: React.FC<indexProps> = () => {
	useEffect(() => {}, [])
	const [{ fetching, data }] = useUserQuery()
	// const [] = usePostQuery()
	const phone = useRef(null)
	const password = useRef(null)
	// console.log({ phone: phone.current, password: password.current })
	const login = () => {
		console.log({ phone, password })
	}
	if (!data) return <p>waiting for me darling~......</p>
	return (
		<div>
			{data.getAlluser.map((user, index) => {
				return (
					<p key={index}>
						手机号：{user.phone}
						<ul>
							<li>nihao</li>
						</ul>
					</p>
				)
			})}
		</div>
	)
}

export default index
