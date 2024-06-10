// Write your code here
import {useState} from 'react'
import {Container, ButtonStyle, Heading} from './styledComponents'

const Unlock = () => {
  const [isLock, setLock] = useState(true)
  const onClickSetLock = () => {
    console.log('Cl')
    setLock(prev => !prev)
  }
  console.log(isLock)
  return (
    <Container>
      {isLock ? (
        <img
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      )}
      <Heading>Your Device is {isLock ? 'Locked' : 'Unlocked'}</Heading>
      <ButtonStyle onClick={onClickSetLock}>
        {isLock ? 'Unlock' : 'Lock'}
      </ButtonStyle>
    </Container>
  )
}

export default Unlock
