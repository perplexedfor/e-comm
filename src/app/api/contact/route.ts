import type { NextApiRequest, NextApiResponse } from 'next'
import { createReview } from '@/app/lib/action'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body
  await createReview(data)
  res.status(200).json({ message: 'Review Created' })
}