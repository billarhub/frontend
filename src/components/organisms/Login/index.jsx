import BackgroundWrapper from '../../atoms/BackgroundWrapper'
import Card from '../../atoms/Card'
import LoginForm from '../../molecules/Forms/LoginForm/LoginForm'

const LoginView = () => {
  return (
    <BackgroundWrapper>
      <div className='c-login'>
        <div className='c-login__content'>
          <Card>
            <div>
            <LoginForm />
            </div>
          </Card>
        </div>
      </div>
    </BackgroundWrapper>
  )
}

export default LoginView