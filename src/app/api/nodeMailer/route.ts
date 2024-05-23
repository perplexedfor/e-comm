import type { NextApiRequest, NextApiResponse } from 'next'
import { createReview } from '@/app/lib/action'
export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await req.body
  await createReview(data)
  res.status(200).json({ message: 'Review Created' })
}