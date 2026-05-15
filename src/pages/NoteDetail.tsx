import { useParams } from 'react-router-dom'

export default function NoteDetail() {
  const { slug } = useParams()
  return <main className="p-8 text-heading">Note: {slug}</main>
}
