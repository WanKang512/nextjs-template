import React from 'react'
import { usePostsQuery } from '../generated/graphql'

interface indexProps {}

const index: React.FC<indexProps> = () => {
	const [{ fetching, data }] = usePostsQuery()
	console.log(data)
	if (fetching) return <p>waiting</p>
	return (
		<div>
			{data.posts.map((post) => {
				return <p key={post.id}>{post.title}</p>
			})}
		</div>
	)
}

export default index
