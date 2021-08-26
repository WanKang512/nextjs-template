import { Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

interface indexProps {}

const index: React.FC<indexProps> = () => {
	const [num, setNum] = useState<number | null>(null)
	const [posts, setPosts] = useState([])

	useEffect(() => {
		const getData = async () => {
			const data = await (
				await fetch('https://jsonplaceholder.typicode.com/posts')
			).json()
			setPosts(data)
		}
		getData()
	}, [])
	const plusOne = () => {
		setNum(num + 1)
	}
	return (
		<>
			<p>{num}</p>
			<Button onClick={plusOne} p={10}>
				123
			</Button>
			{posts.map((post) => {
				return <p key={post.id}>{post.title}</p>
			})}
		</>
	)
}

export default index
