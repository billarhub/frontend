
import React from 'react'
import BackgroundWrapper from '../../atoms/BackgroundWrapper'
import Card from '../../atoms/Card'
import RegisterForm from '../../molecules/Forms/RegisterForm/RegisterForm'

const RegisterView = () => {
  return (
    <BackgroundWrapper>
      <div className='c-register'>
        <div className='c-register__content'>
          <Card>
            <div>
            <RegisterForm />
            </div>
          </Card>
        </div>
      </div>
    </BackgroundWrapper>
  )
}

export default RegisterView;