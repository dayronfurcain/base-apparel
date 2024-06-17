import heroDesktop from './assets/hero-desktop.jpg'
import heroMobile from './assets/hero-mobile.jpg'
import logo from './assets/logo.svg'
import iconArrow from './assets/icon-arrow.svg'

import { useRef, useState } from 'react'

// font-size: 40px;
//     font-weight: 300;
//     letter-spacing: 11px;

function App() {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const value = inputRef.current?.value ?? ''
    const regExp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

    if (regExp.test(value)) {
      setError(false)
      setEmail('')
    } else {
      setError(true)
    }
  }

  return (
    <main className='flex justify-center min-h-screen bg-[hsl(6,100%,98.04%)] desktop:bg-[url("./assets/bg-pattern-desktop.svg")]'>
      <section className='w-[375px] desktop:w-[1440px] desktop:h-[800px] desktop:relative'>
        <img
          src={logo}
          alt='logo'
          className='w-[100px] mt-[31px] ml-8 desktop:w-auto desktop:mt-16 desktop:ml-[165px]'
        />
        <picture>
          <source media='(min-width: 1440px)' srcSet={heroDesktop} />
          <img
            src={heroMobile}
            alt='hero-image'
            className='mt-8 desktop:m-0 desktop:absolute desktop:right-0 desktop:top-0 desktop:z-10'
          />
        </picture>
        <h1 className='mt-16 font-josefin-sans text-center uppercase text-[40px] tracking-[11px] leading-[42px] desktop:w-[370px] desktop:text-left desktop:text-[60px] desktop:ml-[165px] desktop:mt-[145px]'>
          <span className='block font-light text-[hsl(0,_36%,_70%)] desktop:tracking-[20.2px] desktop:mb-[14px] desktop:mt-[28px]'>
            We're
          </span>
          <span className='font-semibold desktop:text-[64px] desktop:leading-[70px] desktop:tracking-[16.8px]'>
            coming soon
          </span>
        </h1>
        <p className='mx-[38px] mt-[14px] tracking-[.4px] leading-[22px] text-center text-[13px] font-semibold text-[hsl(0,_36%,_70%)] desktop:w-[444px] desktop:text-left desktop:ml-[165px] desktop:text-[15px] desktop:mt-[19px] desktop:leading-[28px] '>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <form
          onSubmit={handleSubmit}
          className='relative mx-auto w-[310px] mt-[34px] desktop:w-[444px] desktop:ml-[165px]
          desktop:mt-10 '
        >
          <input
            type='email'
            placeholder='Email Address'
            ref={inputRef}
            value={email}
            onChange={handleChange}
            className={`form__input w-full h-12 outline-none border-[1px] border-[hsl(0,_36%,_70%)] text-[13px] font-josefin-sans tracking-[.5px] rounded-3xl pl-6  pr-28 desktop:h-[54px] desktop:text-[15px] desktop:pl-8 desktop:rounded-[28px] desktop:pr-[158px] ${
              error
                ? `bg-no-repeat bg-[200px_50%] bg-[url('./assets/icon-error.svg')] border-[2px] border-[hsl(0,_93%,_68%)] desktop:bg-[300px_50%]`
                : ''
            }`}
          />
          <button
            type='submit'
            className='form__button w-16 h-12 absolute right-0 cursor-pointer rounded-3xl desktop:h-[54px] desktop:w-[100px] desktop:rounded-[28px]'
          >
            <img src={iconArrow} alt='icon-arrow' className='mx-auto' />
          </button>
          {error && (
            <p className='ml-6 mt-2 text-[hsl(0,_93%,_68%)] font-josefin-sans text-[13px] desktop:text-[15px] desktop:ml-[30px]'>
              Please provide a valid email
            </p>
          )}
        </form>
      </section>
    </main>
  )
}

export default App
