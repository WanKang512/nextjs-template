import { Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

interface indexoneProps {}

const indexone: React.FC<indexoneProps> = () => {
	const [num, setNum] = useState<number | null>(null)
	const [posts, setPosts] = useState([])

	useEffect(() => {
		const getData = async () => {
			const data = await (
				await fetch('https://jsonplaceholder.typicode.com/posts')
			).json()
			console.log(data)

			setPosts(data)
		}
		getData()
	}, [])

	const plusOne = () => {
		setNum(num + 1)
	}
	return (
		<div>
			<p>{num}</p>
			<Button onClick={plusOne} p={6}>
				click me
			</Button>
			{posts.map((post) => {
				return <p key={post.id}>{post.title}</p>
			})}
		</div>
	)
}

export default indexone
