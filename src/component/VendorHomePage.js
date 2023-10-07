import React from 'react'
import VendorAuthentication from './VendorAuthentication'

function VendorHomePage() {
  return (
    <div>
      <div className='Container2'>
        <div className='leftDiv centerized'>
          <h4 >Why Vendors Love E-Waste Central </h4>
          <h6>All the benefits that come by buying E-scrap from our website are designed to help you grow more, and make it easier to grow your business</h6>
        </div>
        <div className='rightDiv centerized'> <VendorAuthentication /></div>

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
              <p>All you need is government authorized vendors license to get started</p>

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
              <h5>Respond to Users</h5>
              <p>Respond to requests from users who provide e-waste details </p>

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
              <h5>Get E-waste</h5>
              <p>Pickup the e-waste material from users designated location  </p>
            </div>

          </div>
          <div className='Process-steps'>
            <div className='topDiv'>
              <div className='number centerized'>4</div>

            </div>
            <div className='bottomDiv centerized'>
              <h5>Service Agreement</h5>
              <p>Website charges vendor a percentage of extracted metal value </p>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default VendorHomePage