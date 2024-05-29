import React from 'react'
export default function SidebarBut() {
  
  return (
    <>
      <div className='w-screen flex h-14'>
          <div className='ml-9 absolute left-0 top-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
              <circle cx="19" cy="19" r="19"   fill="#F28A5D" fillOpacity="0.12">
              </circle>
              <path d="M27.3327 12.5L10.666 12.5L17.3327 20.3833L17.3327 25.8333L20.666 27.5L20.666 20.3833L27.3327 12.5Z" stroke="rgba(242, 138, 93, 1)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" >
              </path>
            </svg>
          </div>
      <div className='w-full flex justify-center items-center text-11.5'>Library</div>
      </div>
    </>
  )
}
