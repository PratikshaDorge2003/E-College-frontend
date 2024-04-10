import React from 'react'
import ProfAuthentication from './ProfAuthentication'


const ProfessorHomePage=React.memo(()=>{

  return (
    <div>
      <div className='Container2'>
        <div className='leftDiv centerized'>
          <h4 >Who Should Register? </h4>
          <h6>Only professor with valid professor IDs issued by GECCS(Chhatrapati Sambhajinagar Government College of Engineering) are permitted to register. Please ensure your credentials are accurate and up-to-date before proceeding with registration</h6>
        </div>
        <div className='rightDiv centerized'> <ProfAuthentication  /></div>

      </div>
      <div className='VendorPage centerized'>
        <h3  >How it works</h3>
        <div className='ProcessDetails'>
          <div className='Process-steps'>
            <div className='topDiv'>
              <div className='number centerized'>1</div>
              <div className='line centerized'>
                <div></div>
              </div>
            </div>
            <div className='bottomDiv centerized'>
              <h5>Create an Account</h5>
              <p> Fill out the required fields accurately to create your admin account</p>

            </div>

          </div>
          <div className='Process-steps'>
            <div className='topDiv'>
              <div className='number centerized'>2</div>
              <div className='line centerized'>
                <div></div>
              </div>

            </div>
            <div className='bottomDiv centerized'>
              <h5>Verify ID</h5>
              <p>You will be prompted to verify your professor ID issued by GECCS </p>

            </div>

          </div>
          <div className='Process-steps'>
            <div className='topDiv'>
              <div className='number centerized'>3</div>
              <div className='line centerized'>
                <div></div>
              </div>

            </div>
            <div className='bottomDiv centerized'>
              <h5>Account Verification</h5>
              <p>Admin will verify the authenticity of your credentials</p>
            </div>

          </div>
          <div className='Process-steps'>
            <div className='topDiv'>
              <div className='number centerized'>4</div>

            </div>
            <div className='bottomDiv centerized'>
              <h5>Confirmation and Access</h5>
              <p> You will receive a confirmation message and admin can now access features </p>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
});

export default ProfessorHomePage