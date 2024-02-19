import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate = useNavigate()
  function toLearn() {
    navigate('/learn')
  }
  return (
    <div>
      <Button variant='contained' onClick={toLearn}>
        开始学习
      </Button>
    </div>
  )
}
